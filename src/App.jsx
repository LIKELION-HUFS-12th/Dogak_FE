import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import MainHome from './home/homepage';
import MyListPage from './mypage/myListPage';

const App = ()=> {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainHome/>} />
        <Route path='/mylist' element={<MyListPage/>} />
      </Routes>
    </Router>
  )
}

export default App;