import { useSelector } from "react-redux";
import { applyTheme } from '../src/components/theme/theme.js';
import "./App.css";

import { useEffect } from "react";

function App() {
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <>
    </>
  );
}

export default App;
