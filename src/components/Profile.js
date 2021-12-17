import React from 'react'
import styled from 'styled-components'
import ProfilePhoto from '../img/bg.jpg';


function Profile() {
    return (
        <ProfileContainer>
        </ProfileContainer>
    )
}

export default Profile

const ProfileContainer = styled.div`
    width: 470px;
    height: 100%;
    background-image: url(${ProfilePhoto});
    background-size: fit;
`