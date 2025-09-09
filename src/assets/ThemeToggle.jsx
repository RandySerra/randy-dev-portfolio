import { useState, useEffect } from "react";

import { PiSunFill, PiMoonFill } from "react-icons/pi";
function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? <PiSunFill/> : <PiMoonFill/>}
    </button>
  );
}

export default ThemeToggle;
