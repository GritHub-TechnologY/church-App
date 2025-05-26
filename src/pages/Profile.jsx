import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user, loading, logout } = useAuth();
  const nav = useNavigate();

  useEffect(() => {
    if (!loading && !user) nav("/signin");
  }, [loading, user, nav]);

  if (loading) return <p className="text-center mt-10">Loading…</p>;
  if (!user) return null;

  // Extract a display-friendly name from primaryRole
  const primaryRoleName =
    typeof user.primaryRole === "object"
      ? user.primaryRole.name
      : user.primaryRole;

  // (Optional) If you want to list all roles by name
  const allRoleNames = Array.isArray(user.roles)
    ? user.roles.map((r) => r.name).join(", ")
    : "";

  return (
    <div className="max-w-md mx-auto mt-16 p-8 bg-white rounded-lg shadow-lg space-y-6">
      <h1 className="text-2xl font-semibold text-indigo-600">Profile</h1>
      <p>
        <strong>Name:</strong> {user.fullName}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Primary Role:</strong> {primaryRoleName}
      </p>
      {allRoleNames && (
        <p>
          <strong>All Roles:</strong> {allRoleNames}
        </p>
      )}
      <div className="flex gap-4">
        <button
          onClick={() => nav("/change-password")}
          className="flex-1 bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg focus:ring-teal-300"
        >
          Change Password
        </button>
        <button
          onClick={() => {
            logout();
            nav("/signin");
          }}
          className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg focus:ring-red-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
