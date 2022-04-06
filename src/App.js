import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import Login from './pages/login/Login';
import MasterList from './pages/master/MasterList';
import ThemaCategoryList from './pages/category/ThemaCategoryList';
import MasterSignUp from './pages/master-signup/MasterSignUp';
import MasterSignUpNext from './pages/master-signup/MasterSignUpNext';

import './styles/reset.scss';
import './styles/common.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/:lesson_name" element={<ThemaCategoryList />} /> */}
        <Route path="/master/list" element={<MasterList />} />
        <Route path="/pro" element={<MasterSignUp />} />
        <Route path="/pro/:id" element={<MasterSignUpNext />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
