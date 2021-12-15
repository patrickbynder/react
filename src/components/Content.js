import React from 'react'
import styled from 'styled-components';

function Content() {
    return (
        <ConentContainer>
            <h1> This is the content</h1>
        </ConentContainer>
    )
}

export default Content;

const ConentContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
`
