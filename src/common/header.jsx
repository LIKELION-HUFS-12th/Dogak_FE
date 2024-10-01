import { useState } from "react";
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  border-bottom: solid;
  border-color: #432d2d88;

  a {
    cursor: pointer;
  }
`

const HeaderMenu = styled.nav`
  ul {
    display: flex;
    list-style: none;
  }

  li {
    padding: 5px;
    cursor: pointer;
  }
`

function MainHeader() {
  const navigate = useNavigate();
  const [state, setState] = useState(true)

  const handleHome = () => {
    navigate('/')
  };

  const handleMyPage = () => {
    navigate('/mypage')
  }

  const handleLogout = () => {
    if (window.confirm('정말 로그아웃 하시겠습니까?')) {
      setState(false)
      navigate('/', {replace: true})
    }
  }

  const handleLogin = () => {
    setState(true)
  }

  const LoginAndOut = () => {
    return (state) ? <li onClick={handleLogout}>로그아웃</li> : <li onClick={handleLogin}>로그인</li>
  }

  return(
    <>
      <Header>
        <h2>
          <a onClick={handleHome}>도각도각</a>
        </h2>
        <HeaderMenu>
          <ul>
            <li>
              도각모집
            </li>
            <li onClick={handleMyPage}>
              마이페이지
            </li>
            <LoginAndOut/>
          </ul>
        </HeaderMenu>
      </Header>
    </>
  )
}

export default MainHeader;