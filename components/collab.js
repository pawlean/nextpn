import styles from "./layout.module.scss";

function Collab() {
  return (
    <div className={styles.greycontainer}>
      <h1>⚡️ Let's collaborate!</h1>
      <p className="collab">
        I'm always looking to expand my network and connect with like-minded
        people. Get in touch!{" "}
      </p>
      <p className="collab">
        Want to collaborate?{" "}
        <a
          href="https://by.pawlean.com/"
          target="_blank"
          aria-describedby="new-window-1"
          rel="noopener"
        >
          Let's connect!{" "}
          <img
            src="/images/main/external.svg"
            alt="opens in new window"
            className="external"
          />
        </a>{" "}
      </p>

      <style jsx>
        {`
          .collab {
            text-align: center;
          }
        `}
      </style>
    </div>
  );
}

export default Collab;
