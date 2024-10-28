import styled from "styled-components"
import UpperSide from "./upper"
import LowerSide from "./lower"

const RecordContiner = styled.div`
    margin-left: 60px;
    margin-top: 50px;

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