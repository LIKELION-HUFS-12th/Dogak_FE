import styled from "styled-components";
import Logo from "../common/logo";
import { useNavigate } from "react-router-dom";
import MainHeader from "../common/header";

export default function MainHome(){
    const navigate = useNavigate();
    const handleMyList = () => {
        navigate("/mylist")
    }
    return(
        <>
        <MainHeader/>
        <div>
            <Logo/>
            <h1>Test Test</h1>
            <h2>노트북연결완료</h2>
            <button onClick={handleMyList}>MyList보러가기</button>
        </div>
        
        </>
    );
}

const LogoContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    `