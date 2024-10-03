import styled from "styled-components"

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
export default function MainRecord(){

    return(
        <div>
            <RecordContiner>
                <Upper>
                    <h1> UP</h1>
                </Upper>
                <Lower>
                    <h1>Down</h1>
                </Lower>
            </RecordContiner>
        </div>
    )
}