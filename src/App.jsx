import { useState } from "react";
import Values from "values.js";

import ColorList from "./components/ColorList";
import Form from "./components/Form";

import { ToastContainer, toast } from "react-toastify";

import "./App.css";

const App = () => {
  const [colors, setColors] = useState(new Values("#3434ff").all(10));

  const addColor = (color) => {
    try {
      const newColor = new Values(color).all(10);
      setColors(newColor);
      toast.success("New color generated!");
    } catch (error) {
      toast.error("Error occured!");
      console.log(error);
    }
  };

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer
        position="top-right"
        autoClose={1500}
        pauseOnHover={false}
      />
    </main>
  );
};
export default App;
