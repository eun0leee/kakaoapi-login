import { signIn } from './api';
import { KAKAO_AUTH_URL } from './auth';
/////////////////// 기존 회원 로그인 ///////////////////
const loginForm = document.querySelector('form');
const emailEl = document.querySelector('.inputbox input:first-child');
const passwordEl = document.querySelector('.inputbox input:last-child');

async function handleSumbitForm(e) {
  e.preventDefault();
  const emailValue = e.target[0].value;
  const passwordValue = e.target[1].value;
  const res = await signIn(emailValue, passwordValue);
  if (res.user) {
    alert(`안녕하세요. ${res.user.displayName}님`);
  } else {
    alert('아이디와 비밀번호가 정확하지 않습니다.');
    emailEl.value = '';
    passwordEl.Value = '';
  }
}

loginForm.addEventListener('submit', handleSumbitForm);

/////////////////// 카카오 로그인 ///////////////////
const kakaoLoginBtn = document.querySelector('.kakao-login-link');
kakaoLoginBtn.href = KAKAO_AUTH_URL;

// 인가 코드 받기
let code = new URL(window.location.href).searchParams.get('code');
code ? console.log(code) : '';
