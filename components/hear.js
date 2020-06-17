import styles from "./layout.module.scss";
import Button from "./button";

import { TwitterTweetEmbed } from "../node_modules/react-twitter-embed";

function Hear() {
  return (
    <div className={styles.greycontainer}>
      <h1>💬 Hear it from others</h1>
      <section className="twitterContainer">
        <div className="twitter-embed">
          <TwitterTweetEmbed tweetId="870915182364684288" />
        </div>
        <div className="twitter-embed">
          <TwitterTweetEmbed tweetId="983255007796645889" />
        </div>

        <div className="twitter-embed">
          <TwitterTweetEmbed tweetId="895929869451874304" />
        </div>
        <div className="twitter-embed">
          <TwitterTweetEmbed tweetId="917498515466735617" />
        </div>
        <div className="twitter-embed">
          <TwitterTweetEmbed tweetId="884494617588248576" />
        </div>
        <div className="twitter-embed">
          <TwitterTweetEmbed tweetId="889410104789016576" />
        </div>
      </section>
      <Button buttonLink="https://twitter.com/i/events/904779739071750146"></Button>

      <style jsx>{`
        .twitterContainer {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          margin: 0 auto;
          width: 70%;
        }
        .twitter-embed {
          margin: 0 auto;
        }
        @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
          .twitterContainer {
          display: inline;
          width: 100%;
        }
        .twitter-embed {
          max-width: 100%;
        }
      `}</style>
    </div>
  );
}

export default Hear;
