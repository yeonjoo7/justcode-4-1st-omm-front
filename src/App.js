import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import UserSignUp from './pages/UserSignUp/UserSignUp';
import MasterSignUp from './pages/MasterSignUp/MasterSignUp';
import MasterSignUpNext from './pages/MasterSignUp/MasterSignUpNext';
import './styles/reset.scss';
import './styles/common.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/pro" element={<MasterSignUp />} />
        <Route path="/pro/1" element={<MasterSignUpNext />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
