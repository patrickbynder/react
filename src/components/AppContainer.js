import { useContext } from 'react'
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Content from './Content';
import img from '../img/bg.jpg';
import styled from 'styled-components';
import { ThemeContext } from '../context/theme';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";



const Website = () => {
    const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
    console.log(theme, theme)
    return (
        <AppContainer style={{ color: theme.color, background: theme.backgroundColor }}>
            <Header />

            <div className='text'
            >Its a {isDark ? 'Dark' : 'Light'} theme</div>
            <button onClick={toggleTheme}>Toggle Theme</button>

            <Router>
                <>
                    <Routes>
                        <Route path="./Home" element={<Home />}></Route>
                        <Route path="./Content" element={<Content />}></Route>
                    </Routes>
                </>
            </Router >



            <Footer />
        </ AppContainer>
    )
}

const AppContainer = styled.div`
    color: ${props => props.theme.color};
    background: ${props => props.theme.backgroundColor};
    height: 100vh;
`
export default Website;