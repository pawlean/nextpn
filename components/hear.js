import styles from "./layout.module.scss";
import Button from "./button";

import { TwitterTweetEmbed } from "../node_modules/react-twitter-embed";
import { LazyLoadComponent } from "react-lazy-load-image-component";
function Hear() {
  return (
    <div className={styles.greycontainer}>
      <h1>💬 Hear it from others</h1>
      <LazyLoadComponent>
        <section className="twitterContainer">
          <div className="twitter-embed">
            <a href="https://twitter.com/CharlotteBRF/status/870915182364684288?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E870915182364684288%7Ctwgr%5E%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fpaulinenarvas.com%2F">
              <img src="/images/Twitter/Twitter1.png" />
            </a>
          </div>
          <div className="twitter-embed">
            <a href="https://twitter.com/bryonyolney/status/983255007796645889?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E983255007796645889%7Ctwgr%5E%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fpaulinenarvas.com%2F">
              <img src="/images/Twitter/Twitter2.png" />
            </a>
          </div>
          <div className="twitter-embed">
            <a href="https://twitter.com/UoSPlacements/status/895929869451874304?s=20">
              <img src="/images/Twitter/Twitter4.png" />
            </a>
          </div>
          <div className="twitter-embed">
            <a href="https://twitter.com/camerondare/status/917498515466735617?s=20">
              <img src="/images/Twitter/Twitter3.png" />
            </a>
          </div>
          <div className="twitter-embed">
            <a href="https://twitter.com/grappleshark/status/884494617588248576?s=20">
              <img src="/images/Twitter/Twitter5.png" />
            </a>
          </div>
          <div className="twitter-embed">
            <a href="https://twitter.com/_mattburman/status/889410104789016576?s=20">
              <img src="/images/Twitter/Twitter6.png" />
            </a>
          </div>
        </section>
      </LazyLoadComponent>
      <Button buttonLink="https://twitter.com/i/events/904779739071750146"></Button>

      <style jsx>{`
        .twitterContainer {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin: 0 auto;
          width: 100%;
        }
        .twitter-embed {
          margin: 0 auto;
          max-width: 500px;
          padding-bottom: 20px;
        }
        .twitter-embed img {
          width: 90%;
          border-radius: 2%;
        }
        .twitter-embed a {
          border: none;
        }
      `}</style>
    </div>
  );
}

export default Hear;
