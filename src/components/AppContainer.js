import { useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Content from "./Content";
import img from "../img/bg.jpg";
import styled from "styled-components";
import { ThemeContext } from "../context/theme";
import ProfilePicture from"./Profile";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Website() {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  console.log(theme, theme);

  return (

    <BrowserRouter>
    
    <test>
        <div className="text">Its a {isDark ? "Dark" : "Light"} theme</div>
        <button onClick={toggleTheme}>Toggle Theme</button>
    </test>

      <AppContainer
        style={{ color: theme.color, background: theme.backgroundColor }}
      >
        <Header />

        <ProfilePicture />

        <ContentContainer>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Content" element={<Content />} />
            </Routes>
        </ContentContainer>

      </AppContainer>
    </BrowserRouter>
  );
}

const AppContainer = styled.div`
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.backgroundColor};
  height: 95vh;
  margin-top: 2.5vh;
  margin-bottom: 2.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
    width: 600px;
    height: 100%;
    padding: 25px;
`