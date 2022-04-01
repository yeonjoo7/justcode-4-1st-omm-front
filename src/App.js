import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import Login from './pages/login/Login';
import './styles/reset.scss';
import './styles/common.scss';
import MasterList from './pages/master/MasterList';
import ThemaCategoryList from './pages/category/ThemaCategoryList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:lesson_name" element={<ThemaCategoryList />} />
        <Route path="/master/list" element={<MasterList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
