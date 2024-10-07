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
            {/* 현재 지금보러가기 버튼 통해서도 같은 기능 이동 가능*/}
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