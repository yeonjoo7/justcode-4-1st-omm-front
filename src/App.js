import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import Login from './pages/login/Login';
import MasterList from './pages/master/MasterList';
import ThemaCategoryList from './pages/category/ThemaCategoryList';
import MainCategoryReport from './pages/main_category_report/MainCategoryReport';
import MainCategoryReportComplete from './pages/main_category_report/MainCategoryReportComplete';
import UserSignUp from './pages/user-signup/UserSignup';
import MasterSignUp from './pages/master-signup/MasterSignUp';
import MasterDetail from './pages/master-detail/MasterDetail';

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
        <Route
          path="/:lesson_category/:lesson_name/complete"
          element={<MainCategoryReportComplete />}
        />
        <Route path="/sign-up" element={<UserSignUp />} />
        <Route path="/profile/users/:id" element={<MasterDetail />} />
        <Route path="/" element={<UserSignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
