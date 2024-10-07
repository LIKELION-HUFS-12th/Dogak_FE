import styled from "styled-components";
import Logo from "../common/logo";
import MainRecord from "./record_book";
import { useNavigate } from "react-router-dom";
import MainHeader from "../common/header";

import Introduction from "./intro";



const HomeContainer = styled.div`
    display: flex;
`
const RecordContainer = styled.div`
    margin-left: 100px;

`
const TextContainer = styled.div`
    margin-top: 30px;
    margin-left :200px;

`

export default function MainHome(){
    const navigate = useNavigate();
    const handleMyList = () => {
        navigate("/mylist")
    }
    return(
        <>
        <MainHeader/>
        <Logo/>
        {/* 현재 지금보러가기 버튼 통해서도 같은 기능 이동 가능*/}
        <button onClick={handleMyList}>MyList보러가기</button>

        <HomeContainer>
            <RecordContainer>
                <MainRecord/>
            </RecordContainer>
            <TextContainer>
                <Introduction/>
            </TextContainer>
            
        </HomeContainer>
        
        </>
    );
}

const LogoContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    `