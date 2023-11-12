import Head from "next/head";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/style.css";
import "../styles/scss/custom.css";
import "animate.css";
import "tailwindcss/tailwind.css";
import "react-toastify/dist/ReactToastify.css";
import { NavbarComponent } from "../components/Navbar";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { SSRProvider } from "react-bootstrap";
import { FooterComponent } from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  });
  return (
    <SSRProvider>
      <Head>
        
        <title>Kornpitack | Esports</title>
        <link rel="icon" href="https://www.kornpitack.ac.th/img/logo.png" />
        <meta charset="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <meta httpEquiv="Content-Security-Policy" content=""></meta>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@mdi/font@6.9.96/css/materialdesignicons.min.css"
        />
      </Head>
      <NavbarComponent />
      <Component {...pageProps} />
      <ToastContainer />
      <FooterComponent />
    </SSRProvider>
  );
}
