import { NavBar } from "../components/ComponentIndex";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  <div>
    <NavBar />
    <Component {...pageProps} />;
  </div>;
}

export default MyApp;
