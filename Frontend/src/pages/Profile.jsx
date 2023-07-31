import { useState } from "react";
import { updateUserInfo } from "../api/user/update";
import { Button } from "../components/Button/ButtonMagic";
import { useAuthContext } from "../context/AuthContext";
import useFormatDate from "../hooks/useFormatDate";
import useSweetAlert from "../hooks/useSweetAlert";
import { refreshToken } from "../api/token/refreshToken";
import { updatePassword } from "../api/user/changePassword";

function Profile() {
  const { user, createToken } = useAuthContext();
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

  const handleChangeInput = (event) => {
    setUserUpdate({ ...userUpdate, [event.target.name]: event.target.value });
  };

  const handleUpdateProfile = async (event) => {
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
    createToken({ body });
    sweetAlert.showAlert({
      title: "Update Profile Success",
      text: "Your profile has been updated successfully",
      icon: "success",
      timer: 2000,
    });
  };

  const handleChangePassword = async () => {
    await sweetAlert.showConfirm({
      title: "Change your password",
      html: `
      <div class="flex flex-col gap-2">
      <label class="font-medium">Old Password:</label>
        <input type="text" id="resetCode" name="resetCode" class="border border-gray-300 px-4 py-1 m-1 rounded focus:outline-none focus:ring focus:ring-red-400" />
        <label class="font-medium">New Password:</label>
        <input type="password" id="newPassword" name="newPassword" class="border border-gray-300 px-4 py-1 m-1 rounded focus:outline-none focus:ring focus:ring-red-400" />
        <label class="font-medium">Confirm New Password:</label>
        <input type="password" id="confirmNewPassword" name="confirmNewPassword" class="border border-gray-300 px-4 py-1 m-1 rounded focus:outline-none focus:ring focus:ring-red-400" />
      </div>
      `,
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: "Change",
      cancelButtonText: "Cancel",
      showLoaderOnConfirm: true,

      preConfirm: async () => {
        const resetCode = document.getElementById("resetCode").value;
        const newPassword = document.getElementById("newPassword").value;
        const confirmNewPassword =
          document.getElementById("confirmNewPassword").value;

        if (newPassword !== confirmNewPassword) {
          return sweetAlert.showAlert({
            title: "Error",
            text: "New password and confirm new password must be the same",
            icon: "error",
            timer: 1750,
          });
        }

        const { userName } = user;
        const response = await updatePassword({
          userName,
          resetCode,
          newPassword,
          confirmNewPassword,
        });

        response.statusCode == 200
          ? sweetAlert.showAlert({
              title: "Success",
              text: response.body.message,
              icon: "success",
              timer: 1500,
            })
          : sweetAlert.showAlert({
              title: "Error",
              text: response.body.message,
              icon: "error",
              timer: 1500,
            });
      },
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
              onChange={handleChangeInput}
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
              onChange={handleChangeInput}
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
              onChange={handleChangeInput}
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
              onChange={handleChangeInput}
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
              onChange={handleChangeInput}
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
            <label className="font-medium">User Role :</label>
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
              text="Update Profile"
              action={handleUpdateProfile}
              tailwind="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow-lg"
            />
            <Button
              text="Change Password"
              action={handleChangePassword}
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
