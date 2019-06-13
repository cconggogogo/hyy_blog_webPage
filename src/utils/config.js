
// 请把生产环境的 redirect_url，client_id 和 client_secret 中的 "****", 换成自己创建的 OAuth App 的具体参数即可。
const config = {
  'oauth_uri': 'https://github.com/login/oauth/authorize',
  'redirect_uri': 'http://www.huyangyang.cn:80/login',
  'client_id': 'e28cdff4af8aae4b5750',
  'client_secret': 'ec98cf755627fdc59755abc1802865234a471709',
};

// 本地开发环境下 （参数可以直接用）
if (process.env.NODE_ENV === 'development') {
  config.redirect_uri = "http://localhost:3001/login"
  config.client_id = "502176cec65773057a9e"
  config.client_secret = "65d444de381a026301a2c7cffb6952b9a86ac235"
}
export default config;
