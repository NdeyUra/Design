const ProfileSection = () => {
  return (
    <div className="flex flex-col sm:flex-row bg-white items-center space-y-3 sm:space-y-0 sm:space-x-3 rounded-lg p-3">
      {/* Profile Image */}
      <img
        src="https://via.placeholder.com/40" // Replace with actual profile image URL
        alt="User profile"
        className="w-10 h-10 rounded-full object-cover"
      />

      {/* User Information */}
      <div className="text-center sm:text-left">
        <h3 className="text-sm font-semibold">Reuben Hale</h3>
        <p className="text-xs text-gray-500">Sub Admin</p>
      </div>
    </div>
  );
};

export default ProfileSection;
