import React from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import HeaderOption from './HeaderOption';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import styledComponents from 'styled-components';


function Header() {
    return (
        <HeaderContainer>
            {/*Header Left*/}
            <HeaderLeft>
                <Router>
                    <Link to="/Home"><HeaderOption Icon={PersonOutlineIcon} /></Link>
                    <Link to="/Content"><HeaderOption Icon={WorkOutlineIcon} /></Link>
                    <HeaderOption Icon={ChatBubbleOutlineIcon} />
                </Router>
            </HeaderLeft>
            {/*Header Right*/}

        </HeaderContainer>
    );
}

export default Header;

const HeaderContainer = styled.div`
     background: #1a1b1c;
     color: #686869;

`

const HeaderLeft = styled.div`
`