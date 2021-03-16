import styles from "./layout.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

function DigiEng() {
  return (
    <div className={styles.whitecontainer}>
      <h1>🧩 DevOps Engineer</h1>
      <p>
        <strong>Getting into Tech</strong>
        <br />
        In September 2018, I joined BT's exciting 2 year Digital Engineering
        graduate scheme. Throughout the 2 years, I had the opportunity to do
        four 6 month rotations across the different delivery teams within BT
        Consumer Digital Engineering. Read about the start of
        <a
          href="https://www.linkedin.com/pulse/week-1-start-my-digital-development-operations-pauline-p-narvas/"
          target="_blank"
          aria-describedby="new-window-1"
          rel="noopener"
        >
          {" "}
          my Graduate Development{" "}
          <img
            src="/images/main/external.svg"
            alt="opens in new window"
            className="external"
          />
        </a>
        . You can also find detailed reflections of my time on the BT scheme{" "}
        <a
          href="https://pawlean.com/category/self-development/bt-graduate-scheme/"
          target="_blank"
          aria-describedby="new-window-1"
          rel="noopener"
        >
          on my blog{" "}
          <img
            src="/images/main/external.svg"
            alt="opens in new window"
            className="external"
          />
        </a>
        .
      </p>
      <h2>Projects</h2>
      <div className={styles.features}>
        {[
          {
            title: "Beyond Limits Campaign",
            image: "images/projects/BeyondLimits.png",
            link: "https://www.youtube.com/watch?v=opxR4XRMDEw",
          },
          {
            title: "BT Hack Day",
            image: "images/projects/BTHACKDAY.png",
            link: "https://www.youtube.com/watch?v=HE23blo7udA&t=11s",
          },
          {
            title: "Campus Champions",
            image: "images/projects/CampusChampions.png",
            link: "https://www.youtube.com/watch?v=WrdQGjIAEHM",
          },
          {
            title: "Graduate Scheme LinkedIn Video",
            image: "images/projects/GradSchemeFeature.png",
            link:
              "https://www.linkedin.com/posts/bt_technology-activity-6610814119073329153-xoBM",
          },
          {
            title: "International Women's Day 2020",
            image: "images/projects/BTIWD.png",
            link:
              "https://www.linkedin.com/posts/pnarvas_internationalwomenday2020-iwd2020-womenintech-activity-6643091239837274112-01UB",
          },
          {
            title: "HackSheffield 4.0 (Sponsored by BT)",
            image: "images/projects/HS4.jpg",
            link: "https://youtu.be/0lEVMB8YCyk",
          },
          {
            title: "BT Early Careers: 12 Grads of Christmas",
            image: "images/projects/Xmas.png",
            link:
              "https://www.facebook.com/BTEarlyCareers/videos/2199772790278680/",
          },
          {
            title: "BT Early Careers: Volunteering Week",
            image: "images/projects/Volunteering.png",
            link:
              "https://en-gb.facebook.com/BTEarlyCareers/photos/pb.97945334270.-2207520000../10158356243734271/?type=3&theater",
          },
          {
            title: "BT Early Careers: Working From Home",
            image: "images/projects/WFH.png",
            link:
              "https://en-gb.facebook.com/BTEarlyCareers/videos/vb.97945334270/1112813405755270/?type=2&theater",
          },
          {
            title: "ELEVATE Programme Careers Talk",
            image: "images/projects/ELEVATE.png",
            link: "https://www.youtube.com/watch?v=eA2HdTKD764",
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
      <p>
        <strong>Post-graduate scheme</strong>
        <br />I rolled off the scheme as a Site Reliability Engineer where I
        contributed to building Digital Engineering's platform of the future as
        well as{" "}
        <a
          href="https://www.youtube.com/watch?v=r3b3Z4ieNrc"
          target="_blank"
          aria-describedby="new-window-1"
          rel="noopener"
        >
          helped drive the newly formed SRE Team.{" "}
          <img
            src="/images/main/external.svg"
            alt="opens in new window"
            className="external"
          />
        </a>{" "}
      </p>
      <p>
        In January 2021,{" "}
        <a
          href="https://pawlean.com/2020/12/17/leaving-my-first-tech-job"
          target="_blank"
          aria-describedby="new-window-1"
          rel="noopener"
        >
          I was ready for my next challenge!{" "}
          <img
            src="/images/main/external.svg"
            alt="opens in new window"
            className="external"
          />
        </a>{" "}
        I joined Sky Betting & Gaming as a DevOps Engineer.
      </p>

      <style jsx>
        {`
          .external {
            width: 10px;
          }
          .sbg {
            border-radius: 2%;
          }
        `}
      </style>
    </div>
  );
}

export default DigiEng;
