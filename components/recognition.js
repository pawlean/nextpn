import styles from "./layout.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Recognition() {
  return (
    <div className={styles.whitecontainer}>
      <h1>🏆 Recognition</h1>
      <picture>
        <source
          srcSet={require("../public/images/awards/Awards.png?webp")}
          type="image/webp"
        />
        <source
          srcSet={require("../public/images/awards/Awards.png")}
          type="image/jpeg"
        />
        <LazyLoadImage
          src={require("../public/images/awards/Awards.png?webp")}
          alt="Recognition"
        />
      </picture>
    </div>
  );
}

export default Recognition;
