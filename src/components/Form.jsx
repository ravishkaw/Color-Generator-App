import { useState } from "react";

const Form = ({ addColor }) => {
  const [color, setColor] = useState("#3434ff");

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };

  return (
    <section>
      <h1 className="title">Color Generator</h1>
      <div className="underline" style={{ borderBottomColor: color }}></div>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          className="color-picker"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          className="color-input"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#AABBCC"
        />
        <button
          type="submit"
          className="btn"
          style={{ backgroundColor: color }}
        >
          Generate
        </button>
      </form>
    </section>
  );
};
export default Form;
