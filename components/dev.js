import styles from "./layout.module.scss";

function Dev() {
  return (
    <div className={styles.greycontainer}>
      <h1>Enthuastic Techie</h1>
      <p>
        I began learning to code for fun when I was 8 years old. I formed a
        hobby of building websites which carries on to this day - continuing to
        bring my ideas to life by playing around with pixels on the internet.
        Taking my love for technology and learning further, I took to the Clouds
        and became an AWS Certified Cloud Practitioner in November 2019. I am
        familiar with:
      </p>
      <ul className={styles.skills}>
        {[
          "HTML",
          "CSS/SCSS",
          "Javascript",
          "jQuery",
          "React",
          "Next.js",
          "PHP",
          "Python",
          "git",
          "Wordpress",
          "AWS",
          "Terraform",
          "Packer",
          "Lambda",
          "Tailwind",
        ].map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>

      <h2>Recent projects</h2>
      <div className={styles.previouswork}>
        {[
          {
            title: "Ryan Kitto PT",
            image: "https://paulinenarvas.com/Images/Projects/RYANPT.jpg",
            link: "https://ryankitto.com/",
            description: "PT site for Ryan's clients during COVID19",
          },
          {
            title: "Pawlean.com",
            image: "https://paulinenarvas.com/Images/Projects/pawlean.png",
            link: "https://pawlean.com/",
            description: "My personal blog built in NextJS",
          },
          {
            title: "Inspiring Figures",
            image: "https://paulinenarvas.com/Images/Projects/if1.png",
            link: "https://ryankitto.com/",
            description: "The people that you should know about",
          },
          {
            title: "Food List",
            image: "https://paulinenarvas.com/Images/Projects/foodlist.png",
            link: "https://devpost.com/software/food-list",
            description: "#HackMed19 Project",
          },
        ].map((project) => (
          <a href={project.link} target="_blank">
            <div className={styles.project}>
              <h3>{project.title}</h3>

              <img src={project.image} />

              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Dev;
