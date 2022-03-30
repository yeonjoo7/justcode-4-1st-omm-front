import React from 'react';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  const navigate = useNavigate;
  const gotomain = () => {
    navigate('./main');
  };
  let [id, setId] = useState('');
  let [pw, setPw] = useState('');

  return (
    <div>
      <div className="text">로그인</div>
      <section className="section">
        <div>
          <div className="email">이메일</div>
          <input
            value={id}
            className="id1"
            type="email"
            placeholder="example@soongo.com"
          />
          <div className="password">비밀번호</div>
          <input
            value={pw}
            className="pw1"
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />
          <Link to="./findpw" className="findpw">
            비밀번호찾기
          </Link>
          <button className="loginbtn" onClick={gotomain}>
            이메일 로그인
          </button>
          <button className="Kakaobtn">Kakao로 시작하기</button>
          <button className="facebookbtn">Facebook으로 시작하기</button>
          <Link to="./signup" className="gotosignup">
            계정이 없으신가요?
          </Link>
        </div>
      </section>
    </div>
  );
}
export default Login;
