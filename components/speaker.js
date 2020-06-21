import styles from "./layout.module.scss";
import Talks from "./talks";

function Speaker() {
  return (
    <div className={styles.greycontainer}>
      <h1>🎤 Speaker</h1>
      <p>
        I began speaking at events in 2017, my goal was to inspire others to
        reach for the stars in their career and beyond. 🚀
      </p>
      <div className={styles.videoWrapper}>
        <iframe
          title="Pauline's Speaking Gigs"
          width="100%"
          height="450"
          srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/videoseries?list=PLkR4A7sk9JzbANRRuAwlTODpAlyDJkpqG><img src=images/main/Burnout.png alt='Pauline's Speaking Gigs around the world'><span>▶</span></a>"
          src="https://www.youtube.com/embed/videoseries?list=PLkR4A7sk9JzbANRRuAwlTODpAlyDJkpqG"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
      <Talks />
    </div>
  );
}

export default Speaker;
