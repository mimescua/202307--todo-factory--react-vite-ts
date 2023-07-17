import "./Checkbox.css";

function Checkbox({ label, value, onChange, color }) {
  return (
    <label>
      <input
        type="checkbox"
        checked={value}
        onChange={onChange}
        style={{ borderColor: color, background: `${value ? color : "none"}` }}
      />
      {label}
    </label>
  );
}

export { Checkbox };
