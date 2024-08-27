import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

import { FcGoogle } from "react-icons/fc";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // 페이지 이동을 위해 useNavigate 사용

  const validate = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "이메일을 입력해주세요.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "유효한 이메일 주소를 입력해주세요.";
    }

    if (!password) {
      newErrors.password = "비밀번호를 입력해주세요.";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      // 여기에서 실제 로그인 로직을 처리합니다.
      // 예: 서버에 요청하여 아이디와 비밀번호를 확인합니다.

      // 로그인 실패 시 처리
      const userExists = false; // 실제 로직에서는 서버 응답에 따라 결정됩니다.

      if (!userExists) {
        alert("존재하지 않는 아이디입니다."); // 경고 메시지

        // 회원가입 여부 확인
        const signUp = window.confirm("회원가입을 하시겠습니까?");
        if (signUp) {
          navigate("/joininfo"); // '예' 버튼을 클릭하면 회원가입 페이지로 이동
        } else {
          navigate("/"); // '아니오' 버튼을 클릭하면 메인 홈으로 이동
        }
      } else {
        // 로그인 성공 시 처리
        console.log("로그인 성공:", { email, password });
        // 로그인 성공 후 페이지 이동 또는 다른 처리를 수행
      }
    } else {
      setErrors(newErrors);
    }
  };

  const handleSignUp = () => {
    navigate("/joininfo"); // 회원가입 페이지로 이동
  };

  const handleGoogleSignUp = () => {
    navigate("/googleinfo"); // 구글 연동 회원가입 페이지로 이동
  };

  return (
    <div className="login-wrapper">
      <h2 className="login-title">LOGIN</h2>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-group">
            <input
              type="email"
              value={email}
              placeholder="이메일"
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="login-group">
            <input
              type="password"
              value={password}
              placeholder="비밀번호"
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
        </form>

        <div className="find-group">
          <p className="find-id">아이디 찾기</p>
          <div className="divider1"></div>
          <p className="find-pw">비밀번호 찾기</p>
        </div>

        <div className="button-group">
          <div>
            <button onClick={handleSubmit} className="login-button">
              로그인
            </button>
            <button onClick={handleSignUp} className="signup-button">
              회원가입
            </button>
          </div>

          <div className="or">
            <div className="divider2"></div>
            <p>OR</p>
            <div className="divider2"></div>
          </div>

          <button onClick={handleGoogleSignUp} className="google-button">
            <FcGoogle className="google-icon" />
            <p className="google-p">구글로 시작하기</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
