import { useState } from "react";

function PasswordChange({ onSubmit }) {
  const [form, setForm] = useState({ oldPassword: "", newPassword: "" });
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.oldPassword || !form.newPassword) {
      setError("Please fill both fields");
      return;
    }
    if (form.newPassword.length < 6) {
      setError("New password must be at least 6 characters");
      return;
    }
    onSubmit?.(form);
    setForm({ oldPassword: "", newPassword: "" });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label className="block text-sm text-gray-700 mb-1">Old Password</label>
        <input name="oldPassword" type="password" value={form.oldPassword} onChange={handleChange} className="w-full border rounded-lg px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm text-gray-700 mb-1">New Password</label>
        <input name="newPassword" type="password" value={form.newPassword} onChange={handleChange} className="w-full border rounded-lg px-3 py-2" />
      </div>
      {error && <div className="text-sm text-red-600">{error}</div>}
      <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-lg">Update Password</button>
    </form>
  );
}

export default PasswordChange;




















