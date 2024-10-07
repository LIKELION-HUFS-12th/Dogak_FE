import styled from "styled-components";

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 30px;

    img {
        object-fit: cover;
        width: ${({ size }) => size || '250px'}; /* size prop에 따라 너비 설정 */
    }
`

export default function Logo({size}){
    return(
        <LogoContainer size = {size}>
            <img className = "LogoImg" alt= "MainLogo" src = "../../public/Logo_Dogak.svg"></img>
        </LogoContainer>
    );
}