import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
// import { useParams } from 'react-router-dom';

const Container = styled.div`
  border: solid;
  width: 40%;
  min-width: 500px;
  height: 70vh;
  margin: 20px 10px;
`

export default function BookReport() {
  // const {id} = useParams();
  const [ content, setContent ] = useState([]);

  const getContent = () =>  {
    axios.get('/src/data/data.json')
      .then((res) => {
        console.log('데이터 불러오기 완료');
        setContent(res.data);
      })
      .catch((err) => {
        console.error('에러: ', err);
      });
  };

  // useEffect(() => {
  //   getContent();
  // }, []);

  return (
    // <Container key={content.id}>
    //   <h3>{content.date}의 기록</h3>
    //   <image/>
    //   <div>
    //     <h2>{content.title}</h2>
    //     <div>
    //       {Array(content.rate).fill("★").join("")}
    //       {Array(5-content.rate).fill("☆").join("")}
    //     </div>
    //     <p>{content.author}</p>
    //     <p>출판사: {content.publisher}</p>
    //     <p>분야: {content.genre}</p>
    //   </div>
    // </Container>
    <Container>
    <h3>9/23의 기록</h3>
    <image/>
    <div>
      <h2>하늘과 바람과 별과 시</h2>
      <div>
        {Array(3).fill("★").join("")}
        {Array(5-3).fill("☆").join("")}
      </div>
      <p>윤동주</p>
      <p>출판사: 더스토리</p>
      <p>분야: 한국문학</p>
    </div>
  </Container>
  )
}
