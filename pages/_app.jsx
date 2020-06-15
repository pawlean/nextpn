function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <footer>
        <div className="social">
          <a href="http://twitter.com/paulienuh" target="_blank">
            @paulienuh
          </a>
          |
          <a href="http://linkedin.com/in/pnarvas" target="_blank">
            @pnarvas
          </a>
          |
          <a href="http://instagram.com/paw.lean" target="_blank">
            @pawlean
          </a>
        </div>
      </footer>

      <style jsx>
        {`
          .social {
            float: right;
            margin: 10px;
          }

          footer {
            width: 100%;
            height: 50px;
            background-color: #a47da4;
            color: #ffffff;
            position: fixed;
            top: 0;
            width: 100%;
          }
          footer a {
            color: white;
          }
        `}
      </style>
    </div>
  );
}

export default MyApp;