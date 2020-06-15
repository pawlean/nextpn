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
          width="100%"
          height="615"
          src="https://www.youtube.com/embed/videoseries?list=PLkR4A7sk9JzbANRRuAwlTODpAlyDJkpqG"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </div>
      <Talks />
    </div>
  );
}

export default Speaker;
