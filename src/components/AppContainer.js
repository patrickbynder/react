import { useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Content from "./Content";
import img from "../img/bg.jpg";
import styled from "styled-components";
import { ThemeContext } from "../context/theme";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Website() {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  console.log(theme, theme);

  return (
    <BrowserRouter>
      <AppContainer
        style={{ color: theme.color, background: theme.backgroundColor }}
      >
        <Header />

        <div className="text">Its a {isDark ? "Dark" : "Light"} theme</div>
        <button onClick={toggleTheme}>Toggle Theme</button>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Content" element={<Content />} />
        </Routes>

        <Footer />
      </AppContainer>
    </BrowserRouter>
  );
}

const AppContainer = styled.div`
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.backgroundColor};
  height: 100vh;
`;
