import styled from "styled-components";

const NumberText = styled.span`
    color: #A9612B;
    font-size: 100px;
`

const TitleText = styled.p`
    font-size: 50px;
    margin-bottom: 5px;
`
const InfoText = styled.span`
    font-size: 50px;
    margin-left: 20px;
`
export default function Introduction(){

    return(
        <>
        <TitleText> 도각도각은</TitleText>
        {/*추후 서버응답으로 바꾸기*/}
        <NumberText>311</NumberText>
        <InfoText>명의 유저들과</InfoText>
        <br/>
        {/*추후 서버응답으로 바꾸기*/}
        <NumberText>241312</NumberText>
        <InfoText>권의책을</InfoText>
        <br/>
        <InfoText>함께 읽고있습니다.</InfoText>

        </>
    )
}