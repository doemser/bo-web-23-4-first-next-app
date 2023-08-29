function Layout({ children }) {
  return (
    <>
      <header>Ich bin ein Header</header>
      <hr />
      {children}
      <hr />
      <footer>Ich bin ein Footer</footer>
    </>
  );
}

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
