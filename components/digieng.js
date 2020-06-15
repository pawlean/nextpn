import styles from "./layout.module.scss";

function DigiEng() {
  return (
    <div className={styles.whitecontainer}>
      <h1>📱 Digital Engineering Graduate</h1>
      <p>
        In September 2018, I joined BT's exciting Graduate Scheme working in the
        Digital Engineering team. Lasting 2 years, this development programme
        allows four 6 month long rotations across the different delivery teams
        within BT Consumer Digital.
      </p>
      <img src="https://paulinenarvas.com/Images/Main/grad_scheme.png" />
      <p>
        Read about the start of my Graduate Development{" "}
        <a
          href="https://www.linkedin.com/pulse/week-1-start-my-digital-development-operations-pauline-p-narvas/"
          target="_blank"
        >
          here
        </a>
        . You can also follow along my journey at BT{" "}
        <a
          href="https://pawlean.com/category/self-development/bt-graduate-scheme/"
          target="_blank"
        >
          here
        </a>
        .
      </p>

      <h2>Projects</h2>
      <div className={styles.features}>
        {[
          {
            title: "Beyond Limits Campaign",
            image: "https://paulinenarvas.com/Images/Projects/BeyondLimits.png",
            link: "https://www.youtube.com/watch?v=opxR4XRMDEw",
          },
          {
            title: "BT Hack Day",
            image: "https://paulinenarvas.com/Images/Projects/BTHACKDAY.png",
            link: "https://www.youtube.com/watch?v=HE23blo7udA&t=11s",
          },
          {
            title: "Campus Champions",
            image:
              "https://paulinenarvas.com/Images/Projects/CampusChampions.png",
            link: "https://www.youtube.com/watch?v=WrdQGjIAEHM",
          },
          {
            title: "Graduate Scheme Social Media",
            image:
              "https://paulinenarvas.com/Images/Projects/GradSchemeFeature.png",
            link:
              "https://www.linkedin.com/posts/bt_technology-activity-6610814119073329153-xoBM",
          },
          {
            title: "International Women's Day 2020",
            image: "https://paulinenarvas.com/Images/Projects/BTIWD.png",
            link:
              "https://www.linkedin.com/posts/pnarvas_internationalwomenday2020-iwd2020-womenintech-activity-6643091239837274112-01UB",
          },
          {
            title: "HackSheffield 4.0 (Sponsored by BT)",
            image: "https://paulinenarvas.com/Images/Projects/BeyondLimits.png",
            link: "https://www.youtube.com/watch?v=opxR4XRMDEw",
          },
          {
            title: "BT Early Careers: 12 Grads of Christmas",
            image: "https://paulinenarvas.com/Images/Projects/BTHACKDAY.png",
            link: "https://www.youtube.com/watch?v=HE23blo7udA&t=11s",
          },
          {
            title: "BT Early Careers: Volunteering Week",
            image:
              "https://paulinenarvas.com/Images/Projects/CampusChampions.png",
            link: "https://www.youtube.com/watch?v=WrdQGjIAEHM",
          },
          {
            title: "BT Early Careers: Working From Home",
            image:
              "https://paulinenarvas.com/Images/Projects/GradSchemeFeature.png",
            link:
              "https://www.linkedin.com/posts/bt_technology-activity-6610814119073329153-xoBM",
          },
          {
            title: "ELEVATE Programme Careers Talk",
            image: "https://paulinenarvas.com/Images/Projects/BTIWD.png",
            link:
              "https://www.linkedin.com/posts/pnarvas_internationalwomenday2020-iwd2020-womenintech-activity-6643091239837274112-01UB",
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
    </div>
  );
}

export default DigiEng;
