function ProfileItem({ label, value, onChange }) {
  return (
    <div className="profile-item mb-2">
      <label className="font-medium">{label}:</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.name, e.target.value)}
        className="border border-gray-300 px-4 py-1 rounded focus:outline-none focus:ring focus:ring-blue-400 w-full"
      />
    </div>
  );
}

export { ProfileItem };
