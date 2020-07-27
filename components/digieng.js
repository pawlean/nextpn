import styles from "./layout.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

function DigiEng() {
  return (
    <div className={styles.whitecontainer}>
      <h1>📱 Site Reliability Engineer</h1>
      <p>
        In September 2018, I joined BT's exciting Graduate Scheme working in the
        Digital Engineering team. Lasting 2 years, this development programme
        allows four 6 month long rotations across the different delivery teams
        within BT Consumer Digital. Read about the start of
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
        . You can also follow along my journey at BT{" "}
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

      <picture>
        <source
          srcSet={require("../public/images/main/grad_scheme.png?webp")}
          type="image/webp"
        />
        <source
          srcSet={require("../public/images/main/grad_scheme.png")}
          type="image/jpeg"
        />

        <LazyLoadImage
          src={require("../public/images/main/grad_scheme.png?webp")}
          alt="BT Graduate Scheme"
        />
      </picture>
      <p>
        After the graduate scheme, I decided that as my first permanent role,
        I'd follow on the DevOps/Cloud path. In July 2020, I rolled off the
        scheme to become a Site Reliability Engineer within BT Consumer Digital
        to contribute to building the platform of the future that is secure,
        cost-efficient, reliable and performant! 🚀
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
      <style jsx>
        {`
          .external {
            width: 10px;
          }
        `}
      </style>
    </div>
  );
}

export default DigiEng;
