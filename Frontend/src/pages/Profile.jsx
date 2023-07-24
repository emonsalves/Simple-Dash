import { useAuthContext } from "../context/AuthContext";
import useFormatDate from "../hooks/useFormatDate";

function Profile() {
  const { user } = useAuthContext();
  const formatDate = useFormatDate();
  const {
    name,
    last_name,
    // user_name,
    email,
    address,
    phone,
    created_at,
    updated_at,
  } = user;

  return (
    <div className="profile-container bg-opacity-20 backdrop-blur-lg p-8 rounded-lg md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto drop-shadow-2xl  text-black">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>

      {user ? (
        <>
          {/* <div className="profile-item mb-4">
            <label className="font-medium">User Name:</label>
            <input
              type="text"
              id="username"
              name="username"
              defaultValue={user_name}
              className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-400 w-full"
            />
          </div> */}
          <div className="profile-item mb-4">
            <label className="font-medium">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={name}
              className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-400 w-full"
            />
          </div>
          <div className="profile-item mb-4">
            <label className="font-medium">Last Name:</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              defaultValue={last_name}
              className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-400 w-full"
            />
          </div>
          <div className="profile-item mb-4">
            <label className="font-medium">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              defaultValue={email}
              className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-400 w-full"
            />
          </div>
          <div className="profile-item mb-4">
            <label className="font-medium">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              defaultValue={address}
              className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-400 w-full"
            />
          </div>
          <div className="profile-item mb-4">
            <label className="font-medium">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              defaultValue={phone}
              className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-400 w-full"
            />
          </div>
          <div className="profile-item mb-4">
            <label className="font-medium">Created At:</label>
            <input
              type="text"
              id="created_at"
              name="created_at"
              defaultValue={formatDate.YYYYMMDDHHMMSS(created_at)}
              className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-400 w-full inactive"
              readOnly
            />
          </div>
          <div className="profile-item mb-4">
            <label className="font-medium">Updated At:</label>
            <input
              type="text"
              id="updated_at"
              name="updated_at"
              defaultValue={formatDate.YYYYMMDDHHMMSS(updated_at)}
              className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-400 w-full"
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
              className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-400 w-full"
              readOnly
            />
          </div>
        </>
      ) : (
        <div className="profile-item mb-4">
          <label className="font-medium">No hay datos para mostrar</label>
        </div>
      )}
    </div>
  );
}

export { Profile };
