import "bootstrap/dist/css/bootstrap.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

require("../styles/globals.less");

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
