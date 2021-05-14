import styles from "./layout.module.scss";

function Template() {
  return (
    <div className={styles.greycontainer}>
      <h1>Title</h1>
      <p>Lorem</p>

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
        ].map((feature) => (
          <a href={feature.link} target="_blank"
          aria-describedby="new-window-1"
          rel="noopener">
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

export default Template;
