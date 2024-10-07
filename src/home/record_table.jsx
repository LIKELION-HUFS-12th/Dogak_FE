import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  max-height: 400px; 
  overflow-y: auto; /* 세로 스크롤 가능 */
  border: none; /* 테두리 */
  border-radius: 10px; /* 모서리 둥글게 */
`;

const Table = styled.table`
  width: 510px;
  border-collapse: collapse; /* 테두리 겹침 방지 */
  background-color: #5b4540; /* 배경색 */
  color: white; /* 텍스트 색상 */
`;

const Th = styled.th`
  padding: 15px;
  text-align: left;
  background-color: #432d2d; /* 헤더 배경색 */
`;

const Td = styled.td`
  padding: 15px;
  background-color: #a7907c; /* 데이터 셀 배경색 */
`;

const TableHeader = () => (
  <tr>
    <Th>날짜</Th>
    <Th>책제목</Th>
    <Th>저자</Th>
    <Th>분야</Th>
    <Th>녹적</Th>
  </tr>
);

const TableBody = ({ data }) => (
  <>
    {data.map((item, index) => (
      <tr key={index}>
        <Td>{item.date}</Td>
        <Td>{item.title}</Td>
        <Td>{item.author}</Td>
        <Td>{item.category}</Td>
        <Td>{item.note}</Td>
      </tr>
    ))}
  </>
);

const sampleData = [     { date: '2023-01-01', title: '책 제목 1', author: '저자 1', category: '분야 1', note: '노트 1' },    { date: '2023-01-02', title: '책 제목 2', author: '저자 2', category: '분야 2', note: '노트 2' }];

function BookList({ data }) {
  return (
    <TableContainer>
      <Table>
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          <TableBody data={data} />
        </tbody>
      </Table>
    </TableContainer>
  );
}

function RecordTable() {
  return (
    <div>
      <h1>책 목록</h1>
      <BookList data={sampleData} />
    </div>
  );
}

export default RecordTable;
