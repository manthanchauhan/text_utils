import Navbar from "./components/Navbar";
import "./App.css";
import TextForm from "./components/TextForm";
import { useState } from "react";
import { modeLight, modeDark, colorDark, colorLight } from "./constants";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  if (mode === modeDark) {
    document.body.style.backgroundColor = colorDark;
  } else {
    document.body.style.backgroundColor = colorLight;
  }

  const toggleMode = (cls) => {
    removeBodyClasses();

    if (cls !== null){
      document.body.classList.add(`bg-${cls}`);
      return;
    }

    if (mode === modeLight) {
      setMode(modeDark);
      document.body.style.backgroundColor = colorDark;
    } else {
      setMode(modeLight);
      document.body.style.backgroundColor = colorLight;
    }
  };

  const removeBodyClasses = () =>{
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-warning");
  }

  return (
    <>
    <Router>
      <Navbar
        title="Text Utils"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>
          <Route exact path="/" element={<TextForm
              heading="Enter text to analyze"
              mode={mode}
              showAlert={showAlert}
            />}/>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
