import "../styles/globals.css";
import Nav from "../layout/Nav";
import Footer from "../layout/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
