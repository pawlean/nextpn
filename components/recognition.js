import styles from "./layout.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Recognition() {
  return (
    <div className={styles.whitecontainer}>
      <h1>🏆 Recognition</h1>
      <LazyLoadImage
        src={require("../public/images/awards/Awards.png?webp")}
        alt="Recognition"
      />
    </div>
  );
}

export default Recognition;
