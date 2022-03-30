import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
// import UserSignUp from './pages/UserSignUp/UserSignUp';
import MasterSignUp from './pages/master-signup/MasterSignUp';
import MasterSignUpNext from './pages/master-signup/MasterSignUpNext';
// import MasterList from './pages/master/MasterList';
import './styles/reset.scss';
import './styles/common.scss';
// import 'antd/dist/antd.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/signup" element={<UserSignUp />} /> */}
        <Route path="/pro" element={<MasterSignUp />} />
        <Route path="/pro/:id" element={<MasterSignUpNext />} />
        {/* <Route path="/master/list" element={<MasterList />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
