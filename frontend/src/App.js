
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './component/NavBar';
import Addseles from './pages/Addseles';
import Top_5_seles from './pages/Top_5_seles';
import Total_revenue from './pages/Total_revenue';
import Login from './pages/Login';
import Registration_form from './pages/Registration_form';

function App() {
  return (
    <div className='app-bg'>
      <Router>
        <NavBar/>
        <Routes>
          {/* <Route exact path='/' element={<NavBar />}></Route> */}
          <Route exact path='/addseles' element={<Addseles />}></Route>
          <Route exact path='/top_5_sele' element={<Top_5_seles />}></Route>
          <Route exact path='/total_revenue' element={<Total_revenue />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/registration' element={<Registration_form />}></Route>





        </Routes>
      </Router>
    </div>

  );
}

export default App;
