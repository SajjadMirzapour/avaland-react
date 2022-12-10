import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";

export default function Input({
  register,
  name,
  errors,
  label,
  type = "text",
  withEye = false,
  ...rest
}) {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
    setModifiedType((prev) => (prev === "password" ? "text" : "password"));
  };

  const [modifiedType, setModifiedType] = useState(type);

  return (
    <div style={{ marginBottom: "4px", minHeight: "103px" }}>
      <label htmlFor={`input-${name}`}>{label}</label>
      <input
        style={{ marginTop: "8px" }}
        id={`input-${name}`}
        type={modifiedType}
        {...register(name)}
        {...rest}
      />
      {withEye ? (
        <button
          style={{
            position: "absolute",
            width: "20px",
            bottom: "33px",
            left: "10px",
          }}
          onClick={togglePassword}
        >
          {showPassword ? (
            <img src="images/eye-slash-solid.svg" alt="#" />
          ) : (
            <img src="images/eye-solid.svg" alt="#" />
          )}
        </button>
      ) : (
        ""
      )}

      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <p style={{ fontSize: "12px", color: "red" }}>{message}</p>
        )}
      />
    </div>
  );
}
