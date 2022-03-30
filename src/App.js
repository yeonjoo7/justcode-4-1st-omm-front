import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
// import UserSignUp from './pages/UserSignUp/UserSignUp';
import MasterSignUp from './pages/master-signup/MasterSignUp';
import MasterSignUpNext from './pages/master-signup/MasterSignUpNext';
import './styles/reset.scss';
import './styles/common.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/signup" element={<UserSignUp />} /> */}
        <Route path="/pro" element={<MasterSignUp />} />
        <Route path="/pro/:id" element={<MasterSignUpNext />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
