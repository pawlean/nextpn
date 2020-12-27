import styles from "./layout.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Community() {
  return (
    <div className={styles.greycontainer}>
      <h1>🛠 Community Builder & Diversity in Tech Advocate</h1>
      <p>
        Passionate about creating a better environment for future engineers, I
        actively work with communities to help bridge the inequalities in the
        tech industry, focusing speficially on females and people of colour
        representation. For over 4 years, I've proudly worked with{" "}
        <a
          href="http://twitter.com/codefirstgirls"
          target="_blank"
          aria-describedby="new-window-1"
          rel="noopener"
        >
          Code First: Girls{" "}
          <img
            src="/images/main/external.svg"
            alt="opens in new window"
            className="external"
          />{" "}
        </a>
        to deliver coding community courses for young women.{" "}
      </p>
      <p>
        With diversity and inclusion at the core of my community work, I
        pioneered the{" "}
        <a
          href="https://www.facebook.com/groups/1438086499595347/about/"
          target="_blank"
          aria-describedby="new-window-1"
          rel="noopener"
        >
          first Women in Tech student community{" "}
          <img
            src="/images/main/external.svg"
            alt="opens in new window"
            className="external"
          />
        </a>{" "}
        in Sheffield. Also, as part of the{" "}
        <a
          href="http://facebook.com/medtechsheffield"
          target="_blank"
          aria-describedby="new-window-1"
          rel="noopener"
        >
          MedTech Sheffield{" "}
          <img
            src="/images/main/external.svg"
            alt="opens in new window"
            className="external"
          />
        </a>{" "}
        committee, I led in bringing students from different backgrounds
        together to events, workshops and hackathons.
      </p>
      <p>
        In addition, I am a part of the Gender Equality Network (GEN) at BT
        where I regularly push initiatives at our Leeds base. I have also been
        involved in the{" "}
        <a
          href="https://www.codefirstgirls.org.uk/bt--cfg-digital-intensive.html"
          target="_blank"
          aria-describedby="new-window-1"
          rel="noopener"
        >
          furtHER program{" "}
          <img
            src="/images/main/external.svg"
            alt="opens in new window"
            className="external"
          />
        </a>{" "}
        and{" "}
        <a
          href="https://www.codefirstgirls.org.uk/"
          target="_blank"
          aria-describedby="new-window-1"
          rel="noopener"
        >
          Code First: Girls Fellowship program{" "}
          <img
            src="/images/main/external.svg"
            alt="opens in new window"
            className="external"
          />
        </a>{" "}
        as a mentor to upskill young women into joining the industry.
      </p>

      <h2>Projects</h2>
      <div className={styles.features}>
        {[
          {
            title: "Computer Weekly",
            image: "images/projects/Pay-It-Forward.png",
            link:
              "https://www.computerweekly.com/video/Amali-de-Alwis-most-influential-woman-in-UK-IT-2018-winners-speech",
          },
          {
            title: "Online Community Engagement",
            image: "images/projects/CFG1.png",
            link:
              "https://twitter.com/search?f=tweets&vertical=default&q=shefcodefirst&src=typd",
          },
          {
            title: "Be Bold For Change x #shefcodefirst",
            image: "images/projects/IWD2017.png",
            link: "https://twitter.com/paulienuh/status/839355960615399426",
          },
          {
            title: "Tech community blog posts",
            image: "images/projects/CFG.png",
            link: "https://pawlean.com/category/stem/tech-community/",
          },
          {
            title: "#HackMed18 social media",
            image: "images/projects/HackMed.png",
            link: "https://twitter.com/hackmeduk/status/970601982770733056",
          },
        ].map((feature) => (
          <a
            href={feature.link}
            target="_blank"
            aria-describedby="new-window-1"
            rel="noopener"
            key={feature.link}
          >
            <div className={styles.feature}>
              <LazyLoadImage src={feature.image} alt={feature.title} />
              <p>{feature.title}</p>
            </div>
          </a>
        ))}
      </div>
      <div className={styles.key}>
        <h3>Key Contributions</h3>

        <ul>
          <li>
            <strong>March 2016:</strong> Introducing CFG students to the{" "}
            <a
              href="https://twitter.com/paulienuh/status/858677843362009088"
              target="_blank"
              aria-describedby="new-window-1"
              rel="noopener"
            >
              hackathon{" "}
              <img
                src="/images/main/external.svg"
                alt="opens in new window"
                className="external"
              />
            </a>{" "}
            scene and the wider Women in Tech community.
          </li>
          <li>
            <strong>Feb 2017:</strong> Collaboration with{" "}
            <a
              href="https://www.hacksheffield.co/"
              target="_blank"
              aria-describedby="new-window-1"
              rel="noopener"
            >
              HackSheffield{" "}
              <img
                src="/images/main/external.svg"
                alt="opens in new window"
                className="external"
              />
            </a>{" "}
            to take over{" "}
            <a
              href="https://twitter.com/paulienuh/status/833093729858834432"
              target="_blank"
              aria-describedby="new-window-1"
              rel="noopener"
            >
              20 CFG students{" "}
              <img
                src="/images/main/external.svg"
                alt="opens in new window"
                className="external"
              />
            </a>{" "}
            to the InspireWIT conference.
          </li>
          <li>
            <strong>April 2018:</strong> Efforts in organising #HackMed18 saw an
            increase in attendance of women (47%) and students from different
            backgrounds including Humanities, Finance and Arts.
          </li>
          <li>
            <strong>March 2019:</strong> For International Women's Day, I
            organised an event at the BT office in Leeds with local Yorkshire
            speakers in the tech community which was{" "}
            <a
              href="https://twitter.com/MarcAllera/status/1103945546568556544?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1103945546568556544&ref_url=file%3A%2F%2F%2FUsers%2Fpnarvas%2Fpaulinenarvas%2Findex.html"
              target="_blank"
              aria-describedby="new-window-1"
              rel="noopener"
            >
              shared and highlighted by BT Consumer's CEO, Marc Allera.{" "}
              <img
                src="/images/main/external.svg"
                alt="opens in new window"
                className="external"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Community;
