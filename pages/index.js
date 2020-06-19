import Head from "next/head";
import Dev from "../components/dev";
import DigiEng from "../components/digieng";
import Community from "../components/community";
import Creator from "../components/creator";
import Speaker from "../components/speaker";
import Recognition from "../components/recognition";
import Hear from "../components/hear";
import Features from "../components/features";
import Collab from "../components/collab";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-105893238-1"
        />
        <script>
          {`window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'UA-105893238-1');`}
        </script>

        <meta
          property="og:title"
          content="Pauline P. Narvas | People also search for: Powerhouse"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://paulinenarvas.com" />
        <meta
          property="og:image"
          content="https://pawlean.s3.eu-west-2.amazonaws.com/twi.png"
        />
        <meta property="og:image:width" content="677" />
        <meta property="og:image:height" content="353" />
        <meta
          property="og:description"
          content="I'm a enthusiastic techie, Digital Engineering Graduate, Community Builder, Speaker and Creator."
        />

        <meta name="viewport" content="width=device-width" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@paulienuh" />
        <meta name="twitter:creator" content="@paulienuh" />
        <meta
          name="twitter:title"
          content="Pauline P. Narvas | People also search for: Powerhouse"
        />
        <meta
          name="twitter:description"
          content="I'm a enthusiastic techie, Digital Engineering Graduate, Community Builder, Speaker and Creator."
        />
        <meta
          name="twitter:image"
          content="https://pawlean.s3.eu-west-2.amazonaws.com/twi.png"
        />
        <meta name="twitter:image:alt" content="Pauline P. Narvas" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <title>
          Pauline P. Narvas | Techie, Creator, Community Builder, Advocate
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src="/images/PaulineNarvas.jpg" className="profile" />
        <h1 className="title">Hi, I'm Pauline.</h1>
        <p className="description">
          People also call me{" "}
          <a href="/PaulineNarvasInsights.pdf" target="_blank">
            Powerhouse
          </a>
          .<br></br>To summarise, I am a...
        </p>
      </main>

      <Dev />
      <DigiEng />
      <Community />
      <Creator />
      <Speaker />
      <Recognition />
      <Hear />
      <Features />
      <Collab />

      <style jsx>{`
        .container {
          min-height: 100vh;
          color: #5b5b5b;
          width: 100%;
        }
        main {
          padding: 6rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .title {
          margin: 0;
          padding-top: 10px;
          line-height: 1.15;
          font-size: 3rem;
          color: #000;
        }
        .title,
        .description {
          text-align: center;
        }
        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }
        .profile {
          border-radius: 50%;
          max-width: 300px;
          width: 100%;
          object-fit: cover;
          height: auto;
          margin-bottom: 1rem;
          border: 10px solid #a47da4;
        }
        .logo {
          height: 1em;
        }
        a {
          color: #a47da4;
          border-bottom: 1px dotted #a47da4;
          text-decoration: none;
        }
        a:hover {
          border-bottom: 1px solid #a47da4;
        }
        @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
          .profile {
            max-width: auto;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
