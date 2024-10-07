import styled from "styled-components"
import UpperSide from "./upper"
import LowerSide from "./lower"

const RecordContiner = styled.div`
    margin-left: 60px;
    margin-top: 50px;

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
                <UpperSide/>
                <LowerSide/>
            </RecordContiner>
        </div>
    )
}