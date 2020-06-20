import styles from "./layout.module.scss";
import Button from "./button";

function Dev() {
  return (
    <div className={styles.greycontainer}>
      <h1>💻 Enthuastic Techie</h1>
      <p>
        I began learning to code for fun when I was 8 years old.{" "}
        <a
          href="https://www.yorkshirepost.co.uk/news/people/from-high-school-musical-fansites-to-ee-developer-how-pauline-overcame-school-bullies-to-inspire-women-in-technology-1-9960344"
          target="_blank"
          aria-describedby="new-window-1"
        >
          I formed a hobby of building websites
          <img
            src="/images/main/external.svg"
            alt="opens in new window"
            className="external"
          />{" "}
        </a>{" "}
        which carries on to this day - continuing to bring my ideas to life by
        playing around with pixels on the internet. Taking my love for
        technology and learning further, I took to the Clouds and became an{" "}
        <a
          href="https://aws.amazon.com/certification/certified-cloud-practitioner/"
          target="_blank"
          aria-describedby="new-window-1"
        >
          AWS Certified Cloud Practitioner
          <img
            src="/images/main/external.svg"
            alt="opens in new window"
            className="external"
          />
        </a>{" "}
        in November 2019. I am familiar with:
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
      </p>

      <h2>Recent projects</h2>
      <div className={styles.previouswork}>
        {[
          {
            title: "Ryan Kitto PT",
            image: "images/projects/RYANPT.jpg",
            link: "https://ryankitto.com/",
            description: "PT site for clients during COVID19",
          },
          {
            title: "Pawlean.com",
            image: "images/projects/pawlean.png",
            link: "https://pawlean.com/",
            description: "My personal blog built on NextJS, Headless CMS",
          },
          {
            title: "Inspiring Figures",
            image: "images/projects/InspiringFigures.png",
            link: "https://inspiringfigures.co/",
            description: "The people that you should know about",
          },
          {
            title: "Food List",
            image: "images/projects/foodlist.png",
            link: "https://devpost.com/software/food-list",
            description: "#HackMed19 Project",
          },
        ].map((project) => (
          <a
            href={project.link}
            target="_blank"
            aria-describedby="new-window-1"
          >
            <div className={styles.project}>
              <h3>{project.title}</h3>

              <img src={project.image} alt={project.title} />

              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
      <Button buttonLink="https://github.com/pawlean"></Button>
    </div>
  );
}

export default Dev;
