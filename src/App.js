import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import Login from './pages/login/Login';
import './styles/reset.scss';
import './styles/common.scss';
import MasterList from './pages/master/MasterList';
import ThemaCategoryList from './pages/category/ThemaCategoryList';
import 'antd/dist/antd.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
