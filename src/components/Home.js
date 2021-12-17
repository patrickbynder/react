import react from "react";
import styled from "styled-components";

function Home() {
  return (
    <HomeContainer>
      <h1>this is the homepage</h1>
    </HomeContainer>
  );
}

const HomeContainer = styled.div `
    justify-content: start;
    display: flex;
    height: 100%;
`

export default Home;