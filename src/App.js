import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
<<<<<<< HEAD
import MasterList from './pages/master/MasterList';
=======
import ThemaCategoryList from './pages/category/ThemaCategoryList';
// import MasterList from './pages/master/MasterList';
>>>>>>> 92d55bbb1b9e494040ce3b98543975f3f087e0f7
import './styles/reset.scss';
import './styles/common.scss';
import 'antd/dist/antd.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
<<<<<<< HEAD
        <Route path="/master/list" element={<MasterList />} />
=======
        <Route path="/lesson" element={<ThemaCategoryList />} />
        <Route path="/home" element={<ThemaCategoryList />} />
        <Route path="/event" element={<ThemaCategoryList />} />
        <Route path="/business" element={<ThemaCategoryList />} />
        <Route path="/design_develop" element={<ThemaCategoryList />} />
        <Route path="/health" element={<ThemaCategoryList />} />
        <Route path="/part_time" element={<ThemaCategoryList />} />
        <Route path="/etc" element={<ThemaCategoryList />} />
        {/* <Route path="/master/list" element={<MasterList />} /> */}
>>>>>>> 92d55bbb1b9e494040ce3b98543975f3f087e0f7
      </Routes>
    </BrowserRouter>
  );
}

export default App;
