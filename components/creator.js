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
        to my global auidence. For example, I built{" "}
        <a href="https://inspiringfigures.co" target="_blank">
          Inspiring Figures
        </a>{" "}
        to share inspirational figures' stories from around the world.
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
          ].map((skill) => (
            <li>{skill}</li>
          ))}
        </ul>
      </p>
      <h2>Projects</h2>
      <div className={styles.features}>
        {[
          {
            title: "International Women's Day 2018",
            image: "images/projects/IWD2018.png",
            link: "https://youtu.be/8wo5Y4l3Vpc",
          },
          {
            title: "MLH Hackathons",
            image: "images/projects/HS.jpg",
            link: "https://www.youtube.com/watch?v=bMb1y3QWjvk",
          },
          {
            title: "Students Union Tour",
            image: "images/projects/SU.png",
            link: "https://www.youtube.com/watch?v=qm9RgxCa6QE",
          },
          {
            title: "BMS Placement Year",
            image: "images/projects/Placements.png",
            link:
              "https://www.youtube.com/watch?v=kf5lpwBZqvs&list=PLkR4A7sk9JzZ1_pcvjD0ViCFZ0X_tZ5NB&index=1",
          },
          {
            title: "Why be a TUoS vlogger?",
            image: "images/projects/Vlogging.png",
            link: "https://twitter.com/sheffielduni/status/1045704692179693568",
          },
        ].map((feature) => (
          <a href={feature.link} target="_blank">
            <div className={styles.feature}>
              <img src={feature.image} />
              <p>{feature.title}</p>
            </div>
          </a>
        ))}
      </div>
      <div className={styles.key}>
        <h3>Key Achievements</h3>
        <ul>
          <li>Improved engagement from building a strong online presence</li>
          <li>
            Being a positive brand ambassador for sponsored content with
            successful referrals{" "}
          </li>
          <li>
            Advocating the power of blogging and social media on the radio,
            conferences and events, inspiring others to create
          </li>
          <li>
            Overwhelming support on social media - as shown on{" "}
            <a href="https://www.buymeacoffee.com/pawlean" target="_blank">
              BuyMeACoffee
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Creator;
