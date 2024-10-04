import styled from "styled-components"
import SampleBook from "./sample_book"

const RecordContiner = styled.div`
    margin-left: 60px;
    margin-top: 50px;

`
const Upper = styled.div`
    background-color : #a7907c;
    border-radius : 10px;
    height: 252px;
    width: 533px;
    padding: 10px;
`

const Lower = styled.div`
    background-color : #766055;
    border-radius : 10px;
    height: 252px;
    width: 533px;
    padding : 10px;
`

const Recent = styled.h1`
    font-size: 20px;
    margin-left : 20px;
    color: #432D2D;

`

export default function MainRecord(){

    return(
        <div>
            <RecordContiner>
                <Upper>
                    <Recent>통장 최근기록</Recent>
                    <SampleBook/>
                </Upper>
                <Lower>
                    <h1>Down</h1>
                </Lower>
            </RecordContiner>
        </div>
    )
}