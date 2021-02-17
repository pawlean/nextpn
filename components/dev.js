import styles from "./layout.module.scss";
import Button from "./button";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Dev() {
  return (
    <div className={styles.greycontainer}>
      <h1>💻 Enthusiastic Techie</h1>
      <p>
        I began learning to code for fun when I was 8 years old.{" "}
        <a
          href="https://www.yorkshirepost.co.uk/news/people/from-high-school-musical-fansites-to-ee-developer-how-pauline-overcame-school-bullies-to-inspire-women-in-technology-1-9960344"
          target="_blank"
          aria-describedby="new-window-1"
          rel="noopener"
        >
          I formed a hobby of building websites{" "}
          <img
            src="/images/main/external.svg"
            alt="opens in new window"
            className="external"
          />
        </a>{" "}
        which carries on to this day - continuing to bring my ideas to life by
        playing around with pixels on the internet. Taking my love for
        technology and learning further, I took to the Clouds and became AWS
        Certified as a{" "}
        <a
          href="https://www.youracclaim.com/badges/d0028cfc-94d0-4eea-a0d8-ae3b4c74d122?source=linked_in_profile"
          target="_blank"
          aria-describedby="new-window-1"
          rel="noopener"
        >
          Cloud Practitioner{" "}
          <img
            src="/images/main/external.svg"
            alt="opens in new window"
            className="external"
          />
        </a>{" "}
        (November 2019) and{" "}
        <a
          href="https://www.youracclaim.com/badges/59c79515-c960-4c1b-8602-37534db3f89e/public_url"
          target="_blank"
          aria-describedby="new-window-1"
          rel="noopener"
        >
          Solutions Architect Associate{" "}
          <img
            src="/images/main/external.svg"
            alt="opens in new window"
            className="external"
          />
        </a>{" "}
        (December 2020) I am familiar with:
        <ul className={styles.skills}>
          {[
            "HTML",
            "CSS/SCSS",
            "Javascript",
            "jQuery",
            "React",
            "Tailwind",
            "Nextjs",
            "PHP",
            "Python",
            "git",
            "Wordpress",
            "AWS",
            "Lambda",
            "Terraform",
            "Packer",
            "VMWare",
            "VMWare CloudHealth",
            "Kubernetes",
            "Akamai (CDN)",
            "Chef",
            "Docker",
          ].map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </p>
      <p>
        Currently, I'm learning Kubernetes, Docker, improving my knowledge on
        Linux and striving to become a better Engineer!
      </p>
      <h2>Recent projects</h2>
      <div className="previouswork">
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
            description: "My personal blog built on Nextjs, Headless CMS",
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
            rel="noopener"
            key={project.link}
          >
            <div className={styles.project}>
              <h3>{project.title}</h3>
              <LazyLoadImage src={project.image} alt={project.title} />
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
      <Button buttonLink="https://github.com/pawlean"></Button>
      <style jsx>
        {`
          .previouswork {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            text-align: center;
          }
          h3 {
            color: white;
          }
          .previouswork p {
            color: white;
            padding-top: 10px;
            padding-bottom: 10px;
            font-size: 1rem;
            text-align: center;
            width: 100%;
          }
          .previouswork a {
            text-decoration: none;
            border-bottom: 0px;
          }
          .previouswork a:hover {
            border-bottom: 0px;
          }
        `}
      </style>
    </div>
  );
}

export default Dev;
