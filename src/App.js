import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import Login from './pages/login/Login';
import MasterList from './pages/master/MasterList';
import ThemaCategoryList from './pages/category/ThemaCategoryList';
import MainCategoryReport from './pages/main_category_report/MainCategoryReport';
import MainCategoryReportComplete from './pages/main_category_report/MainCategoryReportComplete';
import UserSignUp from './pages/user-signup/UserSignup';
import ReceivedReport from './pages/received_report/ReceivedReport';
// import MasterSignup from './pages/master-signup/MasterSignup';

import './styles/reset.scss';
import './styles/common.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:lesson_category" element={<ThemaCategoryList />} />
        <Route path="/master/list" element={<MasterList />} />
        <Route
          path="/:lesson_category/:lesson_name"
          element={<MainCategoryReport />}
        />
        <Route path="/complete" element={<MainCategoryReportComplete />} />
        <Route path="/sign-up" element={<UserSignUp />} />
        <Route path="/received_report" element={<ReceivedReport />} />
        {/* <Route path="/pro/welcome" element={<MasterSignup />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
