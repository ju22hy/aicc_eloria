import React, { useState } from "react";
import "./joininfo.css";

function JoinInfo() {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contact, setContact] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!nickname) {
      newErrors.nickname = "닉네임을 입력해주세요.";
    }

    if (!email) {
      newErrors.email = "이메일을 입력해주세요.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "유효한 이메일 주소를 입력해주세요.";
    }

    if (!password) {
      newErrors.password = "비밀번호를 입력해주세요.";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";
    }

    if (!contact) {
      newErrors.contact = "연락처를 입력해주세요.";
    } else if (!/^\d{10,11}$/.test(contact)) {
      newErrors.contact =
        "유효한 연락처를 입력해주세요. (10자리 또는 11자리 숫자로만 입력)";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      fetch("http://localhost:8080/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nickname,
          email,
          password,
          phone_number: contact, // 여기서 contact을 phone_number로 전달
        }),
      })
        .then((response) => response.json())
        .catch((error) => {
          console.error("회원가입 에러:", error);
        });
      // 유효성 검사 통과 시 처리 로직
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="join-wrapper">
      <h2 className="join-title">JOIN</h2>
      <div className="join-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="join-group">
            <label>닉네임</label>
            <input
              type="text"
              value={nickname}
              placeholder="닉네임을 입력해주세요."
              onChange={(e) => setNickname(e.target.value)}
            />
            {errors.nickname && <p className="error">{errors.nickname}</p>}
          </div>

          <div className="join-group">
            <label>이메일</label>
            <input
              type="email"
              value={email}
              placeholder="로그인 시 사용할 이메일을 입력해주세요."
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="join-group">
            <label>비밀번호</label>
            <input
              type="password"
              value={password}
              placeholder="비밀번호를 입력해주세요."
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <div className="join-group">
            <label>비밀번호 확인</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )}
          </div>

          <div className="join-group">
            <label>연락처</label>
            <input
              type="text"
              value={contact}
              placeholder="'-' 없이 숫자만 입력해주세요."
              onChange={(e) => setContact(e.target.value)}
            />
            {errors.contact && <p className="error">{errors.contact}</p>}
          </div>

          <button type="submit">회원가입</button>
        </form>
      </div>
    </div>
  );
}

export default JoinInfo;
