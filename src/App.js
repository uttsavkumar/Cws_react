import './App.css';
import Navbar from './AdminSide/Navbar'
import { Routes,Route } from 'react-router-dom';
import UserInfo from './AdminSide/UserInfo';
import HomePage from './AdminSide/HomePage';
import UserPage from './AdminSide/UserPage';
import Login from './AdminSide/Login';
import CoursesInfo from './AdminSide/CoursesInfo';
import Signup from './AdminSide/Signup';
import Header from './ClientSide/Header';
import Content from './ClientSide/Content';
import CoursePage from './ClientSide/CoursePage';
import Payment from './ClientSide/Payment';
import AppplyForAdmission from './ClientSide/ApplyForAdmission';
import CoursesPage from './AdminSide/CoursesPage';
import AdminPayment from './AdminSide/AdminPayment';
import AdminAchievment from './AdminSide/AdminAchievment';
import AchievmentInsert from './AdminSide/AchievmentInsert';
function App() {
  return (
  <>
  {/* AdminSide */}
  <Routes>
    <Route path="/courseInfo" element={<CoursesInfo/>}></Route>
    <Route path="/admin/coursePage" element={<CoursesPage/>}></Route>
  </Routes>
  <Routes>
    <Route path="/admin" element={<HomePage/>}></Route>
  </Routes>
  <Routes>
    <Route path="/login" element={<Login/>}></Route>
  </Routes>  
  <Routes>
    <Route path="/admin/payment" element={<AdminPayment/>}></Route>
    <Route path="/admin/achievment" element={<AdminAchievment/>}></Route>
    <Route path="/admin/achievmentInsert" element={<AchievmentInsert/>}></Route>
  </Routes>  
    
  <Routes>
    <Route path="/user" element={<UserPage/>}></Route>
    <Route path="/user/userInfo" element={<UserInfo/>}></Route>
  </Routes>
{/*     
    Frontend */}

    <Routes>
      <Route path="/" element={<Content/>}></Route>
      <Route path='/coursePage' element={<CoursePage/>}></Route>
      <Route path='/paymentPage' element={<Payment/>}></Route>
      <Route path='/apply' element={<AppplyForAdmission/>}></Route>
    </Routes>
  


  </>
  );
}

export default App;
