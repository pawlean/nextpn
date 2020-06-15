import styles from "./layout.module.scss";

function Community() {
  return (
    <div className={styles.greycontainer}>
      <h1>🛠 Community Builder & Diversity Advocate</h1>
      <p>
        Passionate about creating a better environment for future engineers, I
        actively work with communities to help bridge the inequalities in the
        tech industry, focusing speficially on females and people of colour
        representation. For over 3 years, I've proudly worked with Code First:
        Girls to deliver coding community courses for young women.{" "}
      </p>
      <p>
        With diversity and inclusion at the core of my community work, I
        pioneered the first Women in Tech student community in Sheffield. Also,
        as part of the MedTech Sheffield committee, I led in bringing students
        from different backgrounds together to events, workshops and hackathons.
      </p>
      <p>
        In addition, in my role at BT, I am a part of the Gender Equality
        Network (GEN) where I regularly push initiatives at our Leeds base. I
        have also been involved in the furtHER program as a mentor to upskill
        young women into joining the industry.
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
        ].map((feature) => (
          <a href={feature.link} target="_blank">
            <div className={styles.feature}>
              <img src={feature.image} />
              <p>{feature.title}</p>
            </div>
          </a>
        ))}
      </div>
      <h2>Key Contributions</h2>
      <ul>
        <li>
          March 2016: Introducing CFG students to the hackathon scene and the
          wider Women in Tech community.
        </li>
        <li>
          Feb 2017: Collaboration with HackSheffield to take over 20 CFG
          students to the InspireWIT conference.
        </li>
        <li>
          April 2018: Efforts in organising #HackMed18 saw an increase in
          attendance of women (47%) and students from different backgrounds
          including Humanities, Finance and Arts.
        </li>
        <li>
          March 2019: For International Women's Day, I organised an event at the
          BT office in Leeds with local Yorkshire speakers in the tech community
          which was shared and highlighted by BT Consumer's CEO, Marc Allera.
        </li>
      </ul>
    </div>
  );
}

export default Community;
