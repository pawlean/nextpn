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
          "CSS",
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
          "Tailwind",
        ].map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dev;
