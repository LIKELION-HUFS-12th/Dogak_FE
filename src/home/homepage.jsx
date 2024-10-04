import styled from "styled-components";
import Logo from "../common/logo";
import MainRecord from "./record_book";
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
            <button onClick={handleMyList}>MyList보러가기</button>
            <MainRecord/>
            
        </div>
        
        </>
    );
}

const LogoContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    `