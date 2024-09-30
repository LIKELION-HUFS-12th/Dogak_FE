import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
// import MainHome from './home/homepage';


// const router = createBrowserRouter([
//   {
//     path:"/",
//     //추후 App에 쿠키 연결 후 children으로 MainHome넣을 필요있음
//     element:<MainHome/>,
//     children: [
//       {
//         path: "",
//         element: 
//       }
//     ]
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
);