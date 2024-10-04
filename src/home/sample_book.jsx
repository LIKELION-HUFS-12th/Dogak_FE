import styled from "styled-components";

const ImgSize = styled.img`
    width : 300px;
    height: 200px;

`
export default function SampleBook(){
    return(
        <ImgSize className = "SampleImg" alt = "SampleBook" src = "../../public/sample_book.png"></ImgSize>
    );
}