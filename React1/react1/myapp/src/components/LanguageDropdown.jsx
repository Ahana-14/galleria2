function LanguageDropdown({ value, onChange }) {
  const languages = [
    { code: "en", label: "English" },
    { code: "hi", label: "Hindi" },
    { code: "bn", label: "Bengali" },
  ];

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-600">Language</span>
      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="border rounded-lg px-3 py-2"
      >
        {languages.map((l) => (
          <option key={l.code} value={l.code}>{l.label}</option>
        ))}
      </select>
    </div>
  );
}

export default LanguageDropdown;




















