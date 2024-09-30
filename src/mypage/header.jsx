import styled from "styled-components"

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  border-bottom: solid;
  border-color: #432d2d88;
`

const HeaderMenu = styled.nav`
  ul {
    display: flex;
    list-style: none;
  }

  li {
    padding: 5px;
  }
`

function MainHeader() {
  return(
    <>
      <Header>
        <h2>
          <a>도각도각</a>
        </h2>
        <HeaderMenu>
          <ul>
            <li>
              도각모집
            </li>
            <li>
              마이페이지
            </li>
            <li>
              로그아웃
            </li>
          </ul>
        </HeaderMenu>
      </Header>
    </>
  )
}

export default MainHeader;