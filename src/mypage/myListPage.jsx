import React from 'react'
import MainHeader from './header'
import styled from 'styled-components'
import BookReport from './bookReport'

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`
const Logo = styled.p`
  width: 65px;
  height: 65px;
  background-color: ${({state}) => state ? '#432D2D': '#D9D9D9'} ;
  color: ${({state}) => state ? '#D9D9D9' : '#432D2D'} ;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  border-radius: 10px;
  margin: 3px;
`

export default function MyListPage() {
  return (
    <div>
      <MainHeader/>
      <LogoContainer>
        <Logo state = {true}>내</Logo>
        <Logo state = {false}></Logo>
        <Logo state = {true}>독</Logo>
        <Logo state = {false}>서</Logo>
        <Logo state = {true}>통</Logo>
        <Logo state = {false}>장</Logo>
      </LogoContainer>
      <BookReport/>
    </div>
  )
}





