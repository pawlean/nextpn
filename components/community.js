import styles from "./layout.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Community() {
  return (
    <div className={styles.greycontainer}>
      <h1>🛠 Community Builder & Diversity Advocate</h1>
      <p>
        Community is <em>everything</em>. I've been involved in several
        different communities over the years with the goal of connecting with
        others and creating a better environment for engineers. With diversity
        and inclusion at the core of my community work, I have actively worked
        with groups to help bridge the inequalities in the tech industry,
        focusing speficially on females and people of colour representation.
      </p>
      <p>
        <strong>Women in Tech - Code First: Girls & Diversity work</strong>
        <br />
        For over 5 years, I've proudly worked with{" "}
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
        to deliver coding community courses for young women. I have also been
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
        as a mentor to upskill young women into joining the industry. Currently,
        I'm one of the CFG Brand Ambassadors.
      </p>
      <p>
        In addition, I was part of the Gender Equality Network (GEN) at BT where
        I regularly push initiatives at our Leeds base.
      </p>
      <p>
        <strong>Building communities - student groups</strong>
        <br />I pioneered the{" "}
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
        at the University of Sheffield. Also, as part of the{" "}
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
        <br />
        <br />
        <img src="/images/CommunityAWS.png" alt="AWS" width="100%" />
      </p>

      <p>
        <strong>Amazon Web Services (AWS) - Community Builders Program</strong>
        <br />I became a AWS Community Builder in 2021. As part of the
        programme, I'll be sharing my knowledge through content on my blog and
        YouTube Channel, helping others in their own journey getting into AWS.
      </p>

      <p>
        <strong>Ladies in DevOps</strong>
        <br />I founded the{" "}
        <a
          href="https://ladiesindevops.com/"
          target="_blank"
          aria-describedby="new-window-1"
          rel="noopener"
        >
          Ladies in DevOps{" "}
          <img
            src="/images/main/external.svg"
            alt="opens in new window"
            className="external"
          />
        </a>{" "}
        community in April 2021. It's a community geared for women in the
        DevOps/SRE/Cloud/Infra space. It’s a safe space for them to connect and
        network with others and bring about visibility of the exciting roles in
        the industry.
      </p>

      <h2>Projects</h2>
      <div className={styles.features}>
        {[
          {
            title: "Computer Weekly",
            image: "images/projects/Pay-It-Forward.png",
            link: "https://www.computerweekly.com/video/Amali-de-Alwis-most-influential-woman-in-UK-IT-2018-winners-speech",
          },
          {
            title: "Online Community Engagement",
            image: "images/projects/CFG1.png",
            link: "https://twitter.com/search?f=tweets&vertical=default&q=shefcodefirst&src=typd",
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
          <li>
            <strong>April 2021:</strong> On launch day of Ladies in DevOps, we
            had 150 community members join organically through social media
            platforms. We now have a growing community of over{" "}
            <strong>500+ members</strong> and some exciting partnerships and
            sponsorships to help women advance in their careers!
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Community;
