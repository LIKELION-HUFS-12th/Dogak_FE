import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
// 주석처리 이유 후술. sample_book jsx는 삭제하지 않았음. 후에 api연결 후 이용
//import SampleBook from './sample_book';

const UpperContainer = styled.div`
  background-color: #a7907c;
  border-radius: 10px;
  height: 252px; 
  width: 533px;
  padding: 10px;
`;

const Recent = styled.h1`
  font-size: 20px;
  margin: 15px 0 20px 30px;
  color: #432d2d;
`;

const BookContainer = styled.div`
  display: flex; /* Flexbox를 사용하여 수평 배치 */
  align-items: center; /* 수직 중앙 정렬 */
`;

const BookInfo = styled.div`
  margin-left: 50px; /* 이미지와 제목/내용 사이의 간격 */
  display: block;
  align-items: center; /* 수직 중앙 정렬. 얘지우면 제목옆에 작가명 옴 */
  text-align: center; /* 글자 가운데 정렬. 얘지우면 윤동주가 이미지 옆으로 감*/

`;

//추후 이미지 받아올 시 api 연결 필요. 현재 png마진 처리에 오류있어서 jsx연결 안해둠
const SampleBook = styled.div`
  margin-left: 30px;
  width: 150px; 
  height: auto;
  background-color: White;
  display: block; /* 블록 요소로 설정 */
  text-align: center;
`;

// 제목, 작가명 텍스트 설정
const Booktext = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin:5px;
`

const WriteButton = styled.button`
  width: 165px;
  height: 70px;
  margin: 20px;
  border-radius: 10px;
  background-color: #5b4540;
  border: none;

  font-family: 'GowunDodum-Regular';
  font-weight: bold;
  font-size: 15px;
  color: white;

  transition: all 0.2
  s;

  &:hover{
  background-color:#6a473f;
  }
`

export default function UpperSide() {
  // 임시로 버튼 우르면 mylist로 옮겨가게 세팅해둠
  const navigate = useNavigate();
  const handleMyList = () => {
      navigate("/mylist")
}
  return (
    <UpperContainer>
      <Recent>이 책은 어떠세요?</Recent>
      <BookContainer>
        <SampleBook><br/><br/><br/>책예시<br/><br/><br/><br/></SampleBook>

        <BookInfo>
          <Booktext> &lt; 하늘과 바람과 별과 시 &gt;</Booktext>
          <Booktext>윤동주</Booktext>
          <WriteButton onClick={handleMyList}> 지금<br/>기록하러가기</WriteButton>
        </BookInfo>
      </BookContainer>
    </UpperContainer>
  );
}