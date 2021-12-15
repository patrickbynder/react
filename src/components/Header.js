import React from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import HeaderOption from "./HeaderOption";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import styledComponents from "styled-components";

export default function Header() {
  return (
    <HeaderContainer>
      {/*Header Left*/}
      <HeaderLeft>
        <Link to="/">
          <HeaderOption Icon={PersonOutlineIcon} />
        </Link>
        <Link to="/Content">
          <HeaderOption Icon={WorkOutlineIcon} />
        </Link>
        <HeaderOption Icon={ChatBubbleOutlineIcon} />
      </HeaderLeft>
      {/*Header Right*/}
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  background: #1a1b1c;
  color: #686869;
`;

const HeaderLeft = styled.div``;
