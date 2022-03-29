import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import userSignUp from './pages/userSignUp/userSignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/signup" element={<userSignUp />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
