import Head from "next/head";
import Dev from "../components/dev";
import DigiEng from "../components/digieng";
import Community from "../components/community";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Pauline P. Narvas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src="/images/PaulineNarvas.jpg" className="profile" />
        <h1 className="title">Hi, I'm Pauline.</h1>

        <p className="description">
          People also call me Powerhouse.
          <br></br>To summarise, I am a...
        </p>
      </main>

      <Dev />
      <DigiEng />
      <Community />

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
          width: 300px;
          height: 100%;
          margin-bottom: 1rem;
          border: 10px solid #a47da4;
        }

        .logo {
          height: 1em;
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
