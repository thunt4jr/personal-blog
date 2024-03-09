import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  useEffect(() => {
    // Check if window is defined (so if in the browser or in node.js).
    const handleRouteChange = (url) => {
      window.gtag("config", "G-QGFRN1SJES", {
        page_path: url,
      });
    };

    //When the component mounts, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-QGFRN1SJES"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-QGFRN1SJES');
        `}
      </Script>
      <Navbar />
      <Component {...pageProps} />
      <Contact />
      <Footer />
    </>
  );
}

export default MyApp;
