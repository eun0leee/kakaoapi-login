import { REST_API_KEY, REDIRECT_URI } from './auth';

/////////////////// 기존 회원 로그인 ///////////////////
const HEAEDERS = {
  'content-type': 'application/json',
  apikey: 'FcKdtJs202209',
  username: 'KDT3_teamOT',
};

//로그인
export const signIn = async (email, password) => {
  try {
    const data = await fetch(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/login`, {
      method: 'POST',
      headers: HEAEDERS,
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const json = await data.json();
    console.log(json);
    return json;
  } catch (err) {
    console.log(err);
  }
};

/////////////////// 카카오 로그인 ///////////////////
const URL = 'https://kauth.kakao.com/';
// 인가 코드 받기
export const KAKAO_AUTH_URL = `${URL}/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

//토큰 받기
// export const kakaoToken = async () => {
//   try {
//     const data = await fetch(`${URL}/oauth/token`, {
//       method: 'POST',
//       Host: 'kauth.kakao.com',
//       'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
//       body: JSON.stringify({
//         email: email,
//         password: password,
//       }),
//     });
//     const json = await data.json();
//     console.log(json);
//     return json;
//   } catch (err) {
//     console.log(err);
//   }
// };
