import Container from "../components/Core/Container/Container";
import "../styles/globals.css";
import 'antd/dist/antd.css'; 
// import 'antd/dist/antd.less'; 

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
