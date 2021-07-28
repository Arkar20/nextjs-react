import '../styles/globals.css'
import "nprogress/nprogress.css";

import Layout from '../components/layout'
import NProgress from 'nprogress';
import React from 'react';
import Router from 'next/router';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("findished");
      setLoading(false);
    };
  Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <Layout>
      {
        loading ? <p>loading...</p>
          :      <Component  { ...pageProps}/>

      }
    </Layout>
  )
}

export default MyApp
