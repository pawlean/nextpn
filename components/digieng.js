import styles from "./layout.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

function DigiEng() {
  return (
    <div className={styles.whitecontainer}>
      <h1>🍭 Senior Community Engineer </h1>
      <p>
        I’m part of the Developer & Community Success team over at Gitpod,
        currently leading community engagement and development. Read more about{" "}
        <a
          href="https://pawlean.com/2021/07/02/as-of-today-im-building-communities-full-time"
          target="_blank"
          aria-describedby="new-window-1"
          rel="noopener"
        >
          my journey joining Gitpod here.{" "}
          <img
            src="/images/main/external.svg"
            alt="opens in new window"
            className="external"
          />
        </a>{" "}
      </p>
      <p>
        <img src="images/Frame_14.svg" />
      </p>
      <p>
        <a
          href="https://gitpod.io"
          target="_blank"
          aria-describedby="new-window-1"
          rel="noopener"
        >
          Gitpod{" "}
          <img
            src="/images/main/external.svg"
            alt="opens in new window"
            className="external"
          />
        </a>{" "}
        is an open source platform for automated and ready-to-code development
        environments, enabling developers to describe their dev environment as
        code and start instant and fresh development environments for each new
        task directly from a browser.
      </p>

      <style jsx>
        {`
          .external {
            width: 10px;
          }
          .sbg {
            border-radius: 2%;
          }
        `}
      </style>
    </div>
  );
}

export default DigiEng;
