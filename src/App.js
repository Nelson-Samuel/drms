
import { Route, Routes } from 'react-router-dom';
import './App.css';

import LoginPage from './pages/LoginPage.js';
import SignCit from './pages/SignUp/SignCit.js';
import SignRes from './pages/SignUp/SignRes/SignRes.js'
import SelectPosition from './pages/SelectPosition.js';
import RescuePage from './pages/Rescue Page/RescuePage.js';
import CitizenPage from './pages/Citizen Page/CitizenPage.js'
import HomePage from './Componnents/HomePage.js';
import AboutUs from './pages/AboutUs.js';
import ListCit from './pages/ListTable/ListCitizen/ListCit.js'
import ListRes from './pages/ListTable/ListRescue/ListRes.js'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/Home' element={<HomePage/>}></Route>
        <Route path='/Login' element={<LoginPage/>} ></Route>
        <Route path='/SignRes' element={<SignRes/>} ></Route>
        <Route path='/SignCit' element={<SignCit/>} ></Route>
        <Route path='/ResPage' element={<RescuePage/>} ></Route>
        <Route path='/CitPage' element={<CitizenPage/>} ></Route>
        <Route path='/Choose' element={<SelectPosition/>} ></Route>
        <Route path='/About' element={<AboutUs/>} ></Route>
        <Route path='/ListCit' element={<ListCit/>} ></Route>
        <Route path='/ListRes' element={<ListRes/>} ></Route>
      </Routes>
 </div>
  );
}

export default App;
