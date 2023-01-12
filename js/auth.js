const REST_API_KEY = '60a459cce23fe4fec09599b7ffaac2dc';
const REDIRECT_URI = 'http://localhost:1234';
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
