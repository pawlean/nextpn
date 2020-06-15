import styles from "./layout.module.scss";

function Creator() {
  return (
    <div className={styles.whitecontainer}>
      <h1>📝 Creator</h1>
      <p>
        13 years ago,{" "}
        <a href="http://pawlean.com/online">I started writing on the web</a>.
      </p>
      <p>
        <a href="http://pawlean.com/">My blog</a> has evolved over time, I now
        write about reflections of my experiences for both my self development
        journey as well as daily adventures in life.{" "}
      </p>
      <p>
        Examples of the topics I cover include{" "}
        <a href="http://pawlean.com/category/monthly-for-me/" target="_blank">
          monthly reflections
        </a>
        ,{" "}
        <a href="http://pawlean.com/category/tech/" target="_blank">
          equality in STEM
        </a>
        ,{" "}
        <a
          href="http://pawlean.com/category/health-well-being/"
          target="_blank"
        >
          well-being
        </a>
        , and{" "}
        <a
          href="https://pawlean.com/2018/11/25/building-an-online-presence/"
          target="_blank"
        >
          building your online presence.
        </a>
        I regularly{" "}
        <a
          href="https://pawlean.com/category/online/collaborations/"
          target="_blank"
        >
          collaborate with different brands, people and companies.
        </a>{" "}
        A full list of topics can be found{" "}
        <a href="https://pawlean.com/archives" target="_blank">
          here.
        </a>
      </p>

      <p>
        I've also branched out onto{" "}
        <a href="https://YouTube.com/PaulineNarvas/" target="_blank">
          YouTube
        </a>{" "}
        and have worked with different people on communicating messages across
        to my global auidence.
      </p>
      <p>
        Creating content has developed my skills and knowledge in:
        <ul className={styles.skills}>
          {[
            "Communication",
            "Production",
            "Influencing",
            "Google Analytics",
            "Adobe Creative Cloud",
            "Video Editing",
            "Social media",
            "SEO",
            "Creating podcasts",
            "Blogging",
            "Content creation",
          ].map((skill) => (
            <li>{skill}</li>
          ))}
        </ul>
      </p>
    </div>
  );
}

export default Creator;
