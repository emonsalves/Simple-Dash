import { useState } from "react";
import { updateUserInfo } from "../api/user/update";
import { Button } from "../components/Button/ButtonMagic";
import { useAuthContext } from "../context/AuthContext";
import useFormatDate from "../hooks/useFormatDate";
import useSweetAlert from "../hooks/useSweetAlert";
import { refreshToken } from "../api/token/refreshToken";

function Profile() {
  const { user, Login } = useAuthContext();
  const sweetAlert = useSweetAlert();

  const formatDate = useFormatDate();
  const {
    userName,
    firstName,
    lastName,
    email,
    address,
    phone,
    createdAt,
    updatedAt,
  } = user;

  const [userUpdate, setUserUpdate] = useState({
    userName,
    firstName,
    lastName,
    email,
    address,
    phone,
  });

  const handleChange = (event) => {
    setUserUpdate({ ...userUpdate, [event.target.name]: event.target.value });
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    const { firstName, lastName, email, address, phone } = userUpdate;
    const { userName } = user;
    await updateUserInfo({
      userName,
      firstName,
      lastName,
      email,
      address,
      phone,
    });

    const newTokens = await refreshToken({ userName });

    const { body } = newTokens;
    Login({ body });
    sweetAlert.showAlert({
      title: "Update Profile Success",
      text: "Your profile has been updated successfully",
      icon: "success",
      timer: 2000,
    });
  };

  return (
    <div className="profile-container bg-opacity-20 backdrop-blur-lg p-4 rounded-lg md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto drop-shadow-2xl  text-black shadow-lg border">
      <h1 className="text-2xl font-bold mb-4 text-center">Profile Editor</h1>

      {user ? (
        <>
          <div className="profile-item mb-2">
            <label className="font-medium">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              onChange={handleChange}
              defaultValue={firstName}
              className="border border-gray-300 px-4 py-1 rounded focus:outline-none focus:ring focus:ring-blue-400 w-full"
            />
          </div>
          <div className="profile-item mb-2">
            <label className="font-medium">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              onChange={handleChange}
              defaultValue={lastName}
              className="border border-gray-300 px-4 py-1 rounded focus:outline-none focus:ring focus:ring-blue-400 w-full"
            />
          </div>
          <div className="profile-item mb-2">
            <label className="font-medium">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={handleChange}
              defaultValue={email}
              className="border border-gray-300 px-4 py-1 rounded focus:outline-none focus:ring focus:ring-blue-400 w-full"
            />
          </div>
          <div className="profile-item mb-2">
            <label className="font-medium">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              onChange={handleChange}
              defaultValue={address}
              className="border border-gray-300 px-4 py-1 rounded focus:outline-none focus:ring focus:ring-blue-400 w-full"
            />
          </div>
          <div className="profile-item mb-2">
            <label className="font-medium">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              onChange={handleChange}
              defaultValue={phone}
              className="border border-gray-300 px-4 py-1 rounded focus:outline-none focus:ring focus:ring-blue-400 w-full"
            />
          </div>
          <div className="profile-item mb-2">
            <label className="font-medium">Created At:</label>
            <input
              type="text"
              id="createdAt"
              name="createdAt"
              defaultValue={formatDate.YYYYMMDDHHMMSS(createdAt)}
              className="border border-gray-300 px-4 py-1 rounded focus:outline-none focus:ring focus:ring-blue-400 w-full inactive"
              readOnly
            />
          </div>
          <div className="profile-item mb-2">
            <label className="font-medium">Updated At:</label>
            <input
              type="text"
              id="updatedAt"
              name="createdAt"
              defaultValue={formatDate.YYYYMMDDHHMMSS(updatedAt)}
              className="border border-gray-300 px-4 py-1 rounded focus:outline-none focus:ring focus:ring-blue-400 w-full"
              readOnly
            />
          </div>
          <div className="profile-item mb-4">
            <label className="font-medium">Rol Asignado :</label>
            <input
              type="text"
              id="rol"
              name="rol"
              defaultValue={user.Role.name}
              className="border border-gray-300 px-4 py-1 rounded focus:outline-none focus:ring focus:ring-blue-400 w-full"
              readOnly
            />
          </div>
          <div className="profile-item flex justify-between gap-2">
            <Button
              text="Actualizar"
              action={handleUpdate}
              tailwind="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow-lg"
            />
            <Button
              text="Cambiar Contraseña"
              tailwind="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded shadow-lg"
            />
          </div>
        </>
      ) : (
        <div className="profile-item mb-2">
          <label className="font-medium">No hay datos para mostrar</label>
        </div>
      )}
    </div>
  );
}

export { Profile };
