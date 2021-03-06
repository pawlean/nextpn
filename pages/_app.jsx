import {
  Twitter,
  LinkedIn,
  Instagram,
  Email,
  GitHub,
} from "../components/socialmedia";
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import "../components/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <ScrollUpButton />
      <header>
        <div className="social">
          <a
            href="http://twitter.com/paulienuh"
            target="_blank"
            aria-describedby="new-window-1"
            alt="Twitter"
            rel="noopener"
          >
            <Twitter />
          </a>

          <a
            href="http://linkedin.com/in/pnarvas"
            target="_blank"
            aria-describedby="new-window-1"
            alt="LinkedIn"
            rel="noopener"
          >
            <LinkedIn />
          </a>

          <a
            href="http://instagram.com/paw.lean"
            target="_blank"
            aria-describedby="new-window-1"
            alt="Instagram"
            rel="noopener"
          >
            <Instagram />
          </a>
          <a
            href="http://github.com/pawlean"
            target="_blank"
            aria-describedby="new-window-1"
            alt="GitHub"
            rel="noopener"
          >
            <GitHub />
          </a>
          <a
            href="mailto:pauline@paulinenarvas.com"
            target="_blank"
            aria-describedby="new-window-1"
            alt="Email"
            rel="noopener"
          >
            <Email />
          </a>
        </div>

        <div hidden>
          <span id="new-window-0">Opens in a new window</span>
          <span id="new-window-1">Opens an external site in a new window</span>
        </div>
      </header>

      <style jsx>
        {`
          body {
            margin: 0px;
          }
          .social {
            float: right;
            margin: 10px;
          }
          header {
            width: 100%;
            height: 50px;
            background-color: #a47da4;
            color: #ffffff;
            position: fixed;
            top: 0;
            width: 100%;
          }
          header a {
            color: white;
          }
        `}
      </style>
    </div>
  );
}

export default MyApp;
