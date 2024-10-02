import styled from "styled-components";

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 30px;

    img {
        object-fit: cover;
        width: 250px;
    }
`

export default function Logo(){
    return(
        <LogoContainer>
            <img className = "LogoImg" alt= "MainLogo" src = "../../public/Logo_Dogak.svg"></img>
        </LogoContainer>
    );
}