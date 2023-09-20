import { ErrorMessage } from "@hookform/error-message";
import "./textArea.scoped.scss";

function TextArea({ register, name, errors, label, ...rest }) {
  return (
    <div className="form__song-lyrics">
      <label htmlFor="name">{label}</label>
      <textarea
        id="name"
        {...register(name)}
        {...rest}
        style={{ marginTop: "8px", resize: "none" }}
        cols="30"
        rows="10"
      />
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

export default TextArea;
