import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function ChangePassword() {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const { updatePassword } = useAuth();

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const onSubmit = async (e) => {
    e.preventDefault();
    if (form.newPassword !== form.confirmPassword) {
      setError("New passwords don't match");
      return;
    }
    try {
      await updatePassword(form.currentPassword, form.newPassword);
      setMsg("Password changed successfully");
      setError("");
      setForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
    } catch (err) {
      setError(err.message || "Failed to change password");
      setMsg("");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-6 text-center text-indigo-600">
        Change Password
      </h1>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      {msg && <p className="text-green-600 mb-4">{msg}</p>}
      <form onSubmit={onSubmit} className="space-y-5">
        <input
          name="currentPassword"
          type="password"
          placeholder="Current Password"
          value={form.currentPassword}
          onChange={onChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-200 focus:border-indigo-500"
        />
        <input
          name="newPassword"
          type="password"
          placeholder="New Password"
          value={form.newPassword}
          onChange={onChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-200 focus:border-indigo-500"
        />
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm New Password"
          value={form.confirmPassword}
          onChange={onChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-200 focus:border-indigo-500"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg focus:ring-indigo-500"
        >
          Update Password
        </button>
      </form>
    </div>
  );
}
