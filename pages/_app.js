import "bootstrap/dist/css/bootstrap.css";
require("antd/dist/antd.less"); // or 'antd/dist/antd.less'
require("../styles/globals.less");

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
