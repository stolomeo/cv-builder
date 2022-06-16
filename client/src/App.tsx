import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import isDarkModeContext from "./context/isDarkModeContext";
import Create from "./pages/Create";
import DevTemplate from "./pages/DevTemplate";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { darkTheme, lightTheme } from "./theme/Theme";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <isDarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="devtemplate" element={<DevTemplate />} />
            <Route path="create" element={<Create />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </isDarkModeContext.Provider>
  );
}

export default App;
