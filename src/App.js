import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import Login from './pages/login/Login';
import MasterList from './pages/master/MasterList';
import ThemaCategoryList from './pages/category/ThemaCategoryList';
// import UserSignUp from './pages/user-signup/UserSignup';
import MasterSignUp from './pages/master-signup/MasterSignUp';
import MasterDetail from './pages/master-detail/MasterDetail';
import MasterSignUpNext from './pages/master-signup/MasterSignUpNext';

import './styles/reset.scss';
import './styles/common.scss';
import MasterRequestForm from './components/master-detail/MasterRequestForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:lesson_name" element={<ThemaCategoryList />} />
        <Route path="/master/list" element={<MasterList />} />
        {/* <Route path="/sign-up" element={<UserSignUp />} /> */}
        <Route path="/profile/users/:id" element={<MasterDetail />} />
        <Route path="/pro" element={<MasterSignUp />} />
        <Route path="/pro/:id" element={<MasterSignUpNext />} />
        <Route path="/formtest" element={<MasterRequestForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
