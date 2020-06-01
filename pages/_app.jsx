function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <footer>footer stuff - social media</footer>

      <style jsx>
        {`
          footer {
            width: 100%;
            height: 100px;
            background-color: #a47da4;
            color: #ffffff;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
}

export default MyApp;
