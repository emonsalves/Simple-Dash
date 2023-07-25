import { useState } from "react";
import { updateUserInfo } from "../api/user/update";
import { Button } from "../components/Button/ButtonMagic";
import { useAuthContext } from "../context/AuthContext";
import useFormatDate from "../hooks/useFormatDate";
import useSweetAlert from "../hooks/useSweetAlert";
import { ProfileItem } from "../components/Input/Input";

function Profile() {
  const { user } = useAuthContext();
  const sweetAlert = useSweetAlert();
  const formatDate = useFormatDate();

  const [userUpdate, setUserUpdate] = useState({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    address: user.address,
    phone: user.phone,
  });

  const handleChange = (name, value) => {
    setUserUpdate((prevUserUpdate) => ({
      ...prevUserUpdate,
      [name]: value,
    }));
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    const { first_name, last_name, email, address, phone } = userUpdate;
    const { user_name } = user;

    await updateUserInfo({
      user_name,
      first_name,
      last_name,
      email,
      address,
      phone,
    });

    sweetAlert.showAlert({
      title: "Update Profile Success",
      text: "Your profile has been updated successfully",
      icon: "success",
      timer: 2000,
    });
  };

  return (
    <div className="profile-container bg-opacity-20 backdrop-blur-lg p-4 rounded-lg md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto drop-shadow-2xl text-black shadow-lg border">
      <h1 className="text-2xl font-bold mb-4 text-center">Profile Editor</h1>

      {user ? (
        <>
          <ProfileItem
            label="First Name"
            value={userUpdate.first_name}
            onChange={handleChange}
          />
          <ProfileItem
            label="Last Name"
            value={userUpdate.last_name}
            onChange={handleChange}
          />
          <ProfileItem
            label="Email"
            value={userUpdate.email}
            onChange={handleChange}
          />
          <ProfileItem
            label="Address"
            value={userUpdate.address}
            onChange={handleChange}
          />
          <ProfileItem
            label="Phone"
            value={userUpdate.phone}
            onChange={handleChange}
          />

          {/* Static fields */}
          <div className="profile-item mb-2">
            <label className="font-medium">Created At:</label>
            <input
              type="text"
              value={formatDate.YYYYMMDDHHMMSS(user.created_at)}
              className="border border-gray-300 px-4 py-1 rounded focus:outline-none focus:ring focus:ring-blue-400 w-full inactive"
              readOnly
            />
          </div>
          <div className="profile-item mb-4">
            <label className="font-medium">Updated At:</label>
            <input
              type="text"
              value={formatDate.YYYYMMDDHHMMSS(user.updated_at)}
              className="border border-gray-300 px-4 py-1 rounded focus:outline-none focus:ring focus:ring-blue-400 w-full inactive"
              readOnly
            />
          </div>
          <div className="profile-item mb-4">
            <label className="font-medium">Rol Asignado :</label>
            <input
              type="text"
              value={user.Role.name}
              className="border border-gray-300 px-4 py-1 rounded focus:outline-none focus:ring focus:ring-blue-400 w-full inactive"
              readOnly
            />
          </div>

          {/* Action buttons */}
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
