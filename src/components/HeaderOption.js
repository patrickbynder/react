import React from 'react'
import styled from 'styled-components';

function HeaderOption({ Icon }) {
    return (
        <HeaderOptionContainer>
            {Icon && <Icon fontSize="medium" style={{ padding: 10 }} />}
        </HeaderOptionContainer>
    )
}

export default HeaderOption;

const HeaderOptionContainer = styled.div`
    cursor: pointer;
    
    :hover {
        color: #54b982;
    }
`
