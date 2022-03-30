import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
// import MasterList from './pages/master/MasterList';
import './styles/reset.scss';
import './styles/common.scss';
// import 'antd/dist/antd.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/master/list" element={<MasterList />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
