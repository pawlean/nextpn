export default function Custom404() {
  return (
    <div>
      <h1>
        Test! Oops - my bad! 🤷🏻‍♀️ Return to{" "}
        <a href="https://PaulineNarvas.com">PaulineNarvas.com</a>
      </h1>
      <style jsx>
        {`
          div {
            padding-top: 6rem;
          }
          h1 {
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
            text-align: center;
          }
          a {
            color: #a47da4;
            border-bottom: 1px dotted #a47da4;
            text-decoration: none;
          }
          a:hover {
            border-bottom: 1px solid #a47da4;
          }
        `}
      </style>
    </div>
  );
}
