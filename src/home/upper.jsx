import styled from 'styled-components';
import SampleBook from "./sample_book";

const UpperContainer = styled.div`
  background-color: #a7907c;
  border-radius: 10px;
  height: 250px;       /* Upper 영역의 높이 */
  width: 533px;
  padding: 20px;
  box-sizing: border-box;  /* 패딩 포함한 전체 크기 */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* 요소 간의 공간 분배 */
  overflow: hidden;  /* 범위 넘지 않도록 */
`;

const Recent = styled.h1`
  font-size: 20px;
  margin: 0;
  color: #432d2d;
`;

const BookContainer = styled.div`
  display: flex;
  align-items: center;
`;

const BookImage = styled.img`
  width: 100px;
  height: auto;
  margin-right: 20px;
`;

const BookDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function UpperSide() {
  return (
    <UpperContainer>
      <Recent>이 책은 어떠세요?</Recent>
      <BookContainer>
        <SampleBook/>
        <BookDescription>
          <h3>Book Title</h3>
          <p>Author Name</p>
        </BookDescription>
      </BookContainer>
    </UpperContainer>
  );
}
