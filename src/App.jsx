import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import MainHome from './pages/home/homepage';
import MyListPage from './pages/mypage/myListPage';
import Login from './common/login';

const App = ()=> {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainHome/>} />
        <Route path='/mylist' element={<MyListPage/>} />
        <Route path='/login' element={<Login/>}/>
        {/*
        참고사항
        <Route/> 이렇게 태그 하나 안에 한줄로 기본적으로 넣어주고
        <Route></Route> 이렇게 태그 두개로 해주면 안에 깊게 루트 추가 계속 가능
        예시)
        <Route path='/list' element={}> 현재경로 '/list'
          <Route path='detail' element={}/> 현재경로 '/list/detail'
          -> 상대 루트 추가되는거라 /detail로 시작하면 현재경로 '/detail'되니 유의!
          -> 하다가 궁금한거 생기면 검색 전에 일단 물어봐주시면 바로 알려드리겠습니다(아는 한..)
          예전 파일 보면서 나 개념 정리할 겸 여기 주석 달아두어요~
        </Route>
        */}
      </Routes>
    </Router>
  )
}

export default App;