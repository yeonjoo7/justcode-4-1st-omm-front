import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
<<<<<<< HEAD
// import UserSignUp from './pages/UserSignUp/UserSignUp';
import MasterSignUp from './pages/master-signup/MasterSignUp';
import MasterSignUpNext from './pages/master-signup/MasterSignUpNext';
// import MasterList from './pages/master/MasterList';
=======
import MasterList from './pages/master/MasterList';
import ThemaCategoryList from './pages/category/ThemaCategoryList';
>>>>>>> 43809c9d433117638dc5bd9a6514b90fe02c020c
import './styles/reset.scss';
import './styles/common.scss';
import 'antd/dist/antd.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
<<<<<<< HEAD
        {/* <Route path="/signup" element={<UserSignUp />} /> */}
        <Route path="/pro" element={<MasterSignUp />} />
        <Route path="/pro/:id" element={<MasterSignUpNext />} />
        {/* <Route path="/master/list" element={<MasterList />} /> */}
=======
        <Route path="/master/list" element={<MasterList />} />
        <Route path="/lesson" element={<ThemaCategoryList />} />
        <Route path="/home" element={<ThemaCategoryList />} />
        <Route path="/event" element={<ThemaCategoryList />} />
        <Route path="/business" element={<ThemaCategoryList />} />
        <Route path="/design_develop" element={<ThemaCategoryList />} />
        <Route path="/health" element={<ThemaCategoryList />} />
        <Route path="/part_time" element={<ThemaCategoryList />} />
        <Route path="/etc" element={<ThemaCategoryList />} />
        <Route path="/master/list" element={<MasterList />} />
>>>>>>> 43809c9d433117638dc5bd9a6514b90fe02c020c
      </Routes>
    </BrowserRouter>
  );
}

export default App;
