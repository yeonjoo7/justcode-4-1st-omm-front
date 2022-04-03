import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
<<<<<<< HEAD
import UserSignUp from './pages/UserSignUp/UserSignUp';
import MasterSignUp from './pages/MasterSignUp/MasterSignUp';
import MasterSignUpNext from './pages/MasterSignUp/MasterSignUpNext';
=======
import Login from './pages/login/Login';
import MasterList from './pages/master/MasterList';
import ThemaCategoryList from './pages/category/ThemaCategoryList';

>>>>>>> 997a8797edad19b3e347c187f792bfe9d5580538
import './styles/reset.scss';
import './styles/common.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
<<<<<<< HEAD
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/pro" element={<MasterSignUp />} />
        <Route path="/pro/1" element={<MasterSignUpNext />} />
=======
        <Route path="/login" element={<Login />} />
        <Route path="/:lesson_name" element={<ThemaCategoryList />} />
        <Route path="/master/list" element={<MasterList />} />
>>>>>>> 997a8797edad19b3e347c187f792bfe9d5580538
      </Routes>
    </BrowserRouter>
  );
}

export default App;
