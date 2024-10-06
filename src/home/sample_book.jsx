import styled from "styled-components";

const ImgSize = styled.img`
    width : 370px;
    height: 250px;  

`
export default function SampleBook(){
    return(
        <ImgSize className = "SampleImg" alt = "SampleBook" src = "../../public/sample_book.png"></ImgSize>
    );
}