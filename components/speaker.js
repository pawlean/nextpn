import styles from "./layout.module.scss";
import Talks from "./talks";

function Speaker() {
  return (
    <div className={styles.greycontainer}>
      <h1>🎤 International Speaker</h1>
      <p>
        I started public speaking at events in 2017, my goal with every talk
        that I do is to inspire and educate.
      </p>
      <div className="videoWrapper">
        <iframe
          title="Pauline's Speaking Gigs"
          width="100%"
          height="450"
          srcDoc="<style>
          * {
            padding:0;
            margin:0;
            overflow:hidden;
          }
          body {
            background-color: black
          }
          img,span {
            position:absolute;
            width:100%;
            top:0;
            bottom:0;
            margin:auto
          }
          span {
            height:1.5em;
            text-align:center;
            font:48px/1.5 sans-serif;
            color: white;
            text-shadow:0 0 0.5em black
          }
          </style>
          <a href=https://www.youtube.com/embed/videoseries?list=PLkR4A7sk9JzbANRRuAwlTODpAlyDJkpqG>
          <img src=images/main/Burnout.png alt='Pauline's Speaking Gigs around the world'>
          <span>▶</span>
          </a>"
          src="https://www.youtube.com/embed/videoseries?list=PLkR4A7sk9JzbANRRuAwlTODpAlyDJkpqG"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
      <Talks />
      <style jsx>
        {`
          .videoWrapper {
            max-width: 560px;
            margin: 0 auto;
          }
        `}
      </style>
    </div>
  );
}

export default Speaker;
