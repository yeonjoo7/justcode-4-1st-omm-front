import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import Login from './pages/login/Login';
import MasterList from './pages/master/MasterList';
import ThemaCategoryList from './pages/category/ThemaCategoryList';
<<<<<<< HEAD
import MasterDetail from './pages/master-detail/MasterDetail';
=======
import UserSignUp from './pages/user-signup/UserSignup';
// import MasterSignup from './pages/master-signup/MasterSignup';
>>>>>>> f2324b5a7036dcbca63e121e91457b2743a457fb

import './styles/reset.scss';
import './styles/common.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:lesson_name" element={<ThemaCategoryList />} />
        <Route path="/master/list" element={<MasterList />} />
<<<<<<< HEAD
        <Route path="/profile/users/:id" element={<MasterDetail />} />
=======
        <Route path="/sign-up" element={<UserSignUp />} />
        {/* <Route path="/pro/welcome" element={<MasterSignup />} /> */}
>>>>>>> f2324b5a7036dcbca63e121e91457b2743a457fb
      </Routes>
    </BrowserRouter>
  );
}

export default App;
