import styled from "styled-components";
import Logo from "../common/logo";

export default function MainHome(){
    return(
        <>
        <LogoContainer>
        <Logo/>
        </LogoContainer>
        <h1>연결 Check~!</h1>
        </>
    );
}

const LogoContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    `