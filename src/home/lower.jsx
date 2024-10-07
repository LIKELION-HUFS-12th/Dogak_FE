import styled from "styled-components";
import RecordTable from "./record_table";

const LowerContainer = styled.div`
  background-color: #766055;
  border-radius: 10px;
  height: 252px; 
  width: 533px;
  padding: 10px;
`;

// 제목, 작가명 텍스트 설정
const Text = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin:5px;
  color: white;
`
export default function LowerSide(){
    
    return(
        <LowerContainer>
            <Text>독서기록 테이블 예정</Text>
            {/*<RecordTable/>*/}
        </LowerContainer>
    )
}