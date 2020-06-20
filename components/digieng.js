import styles from "./layout.module.scss";

function DigiEng() {
  return (
    <div className={styles.whitecontainer}>
      <h1>📱 Digital Engineering Graduate</h1>
      <p>
        In September 2018, I joined BT's exciting Graduate Scheme working in the
        Digital Engineering team. Lasting 2 years, this development programme
        allows four 6 month long rotations across the different delivery teams
        within BT Consumer Digital. Read about the start of my Graduate
        Development
        <a
          href="https://www.linkedin.com/pulse/week-1-start-my-digital-development-operations-pauline-p-narvas/"
          target="_blank"
          aria-describedby="new-window-1"
        >
          {" "}
          here{" "}
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
        >
          here{" "}
          <img
            src="/images/main/external.svg"
            alt="opens in new window"
            className="external"
          />
        </a>
        .
      </p>
      <img src="images/main/grad_scheme.png" alt="BT Graduate Scheme" />

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
            link: "https://www.youtube.com/watch?v=HE23blo7udA&t=11s",
          },
          {
            title: "BT Early Careers: Volunteering Week",
            image: "images/projects/Volunteering.png",
            link:
              "https://www.facebook.com/BTEarlyCareers/videos/2199772790278680/",
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
            link:
              "https://www.linkedin.com/posts/pnarvas_internationalwomenday2020-iwd2020-womenintech-activity-6643091239837274112-01UB",
          },
        ].map((feature) => (
          <a href={feature.link} target="_blank">
            <div className={styles.feature}>
              <img src={feature.image} alt={feature.title} />
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
