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
        (December 2020)
      </p>

      <p>
        I've been working in tech for over 3 years with my first role was part
        of a graduate scheme. I had the opportunity to do four 6 month rotations
        across the different delivery teams within BT Consumer Digital
        Engineering. Read about the start of
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
        </a>{" "}
        You can also find detailed reflections of my time on the BT scheme{" "}
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
        .{" "}
      </p>
      <h2>BT projects & features</h2>
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
            link: "https://www.linkedin.com/posts/bt_technology-activity-6610814119073329153-xoBM",
          },
          {
            title: "International Women's Day 2020",
            image: "images/projects/BTIWD.png",
            link: "https://www.linkedin.com/posts/pnarvas_internationalwomenday2020-iwd2020-womenintech-activity-6643091239837274112-01UB",
          },
          {
            title: "HackSheffield 4.0 (Sponsored by BT)",
            image: "images/projects/HS4.jpg",
            link: "https://youtu.be/0lEVMB8YCyk",
          },
          {
            title: "BT Early Careers: 12 Grads of Christmas",
            image: "images/projects/Xmas.png",
            link: "https://www.facebook.com/BTEarlyCareers/videos/2199772790278680/",
          },
          {
            title: "BT Early Careers: Volunteering Week",
            image: "images/projects/Volunteering.png",
            link: "https://en-gb.facebook.com/BTEarlyCareers/photos/pb.97945334270.-2207520000../10158356243734271/?type=3&theater",
          },
          {
            title: "BT Early Careers: Working From Home",
            image: "images/projects/WFH.png",
            link: "https://en-gb.facebook.com/BTEarlyCareers/videos/vb.97945334270/1112813405755270/?type=2&theater",
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
        After the scheme, I became a Site Reliability Engineer where I
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
        </a>
      </p>
      <p>
        <a
          href="https://pawlean.com/2020/12/17/leaving-my-first-tech-job"
          target="_blank"
          aria-describedby="new-window-1"
          rel="noopener"
        >
          I was ready for my next challenge{" "}
          <img
            src="/images/main/external.svg"
            alt="opens in new window"
            className="external"
          />
        </a>{" "}
        and joined Sky Betting & Gaming as a DevOps Engineer.
      </p>
      <h2>Technologies that I'm familiar with</h2>
      <p>
        <ul className={styles.skills}>
          {[
            "HTML",
            "CSS/SCSS",
            "Javascript",
            "jQuery",
            "React",
            "Tailwind",
            "Nextjs",
            "Python",
            "git",
            "Wordpress",
            "AWS",
            "Lambda",
            "Terraform",
            "Packer",
            "Linux",
            "Kubernetes",
            "Chef",
            "Docker",
          ].map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
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

      <h2>Technical Content ✐</h2>

      <div className={styles.technical_writings}>
        <table>
          <tr>
            <th>Cloud Computing</th>
            <th>Software Engineering</th>
          </tr>
          <tr>
            <td>
              ‣{" "}
              <a
                href="https://pawlean.com/2019/12/07/how-i-passed-my-aws-ccp-exam"
                target="_blank"
                aria-describedby="new-window-1"
                rel="noopener"
              >
                How I passed my AWS CCP Exam{" "}
                <img
                  src="/images/main/external.svg"
                  alt="opens in new window"
                  className="external"
                />
              </a>{" "}
            </td>
            <td>
              ‣{" "}
              <a
                href="https://pawlean.com/2020/08/10/my-favourite-tech-tools"
                target="_blank"
                aria-describedby="new-window-1"
                rel="noopener"
              >
                My favourite tech tools{" "}
                <img
                  src="/images/main/external.svg"
                  alt="opens in new window"
                  className="external"
                />
              </a>
            </td>
          </tr>
          <tr>
            <td>
              ‣{" "}
              <a
                href="https://pawlean.com/2020/12/09/how-i-passed-my-aws-saa-exam"
                target="_blank"
                aria-describedby="new-window-1"
                rel="noopener"
              >
                How I passed my AWS SAA Exam{" "}
                <img
                  src="/images/main/external.svg"
                  alt="opens in new window"
                  className="external"
                />
              </a>{" "}
            </td>
            <td>
              ‣{" "}
              <a
                href="https://pawlean.com/2020/06/25/rebuilding-with-next-js-vercel"
                target="_blank"
                aria-describedby="new-window-1"
                rel="noopener"
              >
                Rebuilding my portfolio on Next.js / Vercel{" "}
                <img
                  src="/images/main/external.svg"
                  alt="opens in new window"
                  className="external"
                />
              </a>
            </td>
          </tr>
          <tr>
            <td>
              ‣{" "}
              <a
                href="https://pawlean.com/2021/04/09/im-officially-an-aws-community-builder"
                target="_blank"
                aria-describedby="new-window-1"
                rel="noopener"
              >
                Becoming an AWS Community Builder{" "}
                <img
                  src="/images/main/external.svg"
                  alt="opens in new window"
                  className="external"
                />
              </a>{" "}
            </td>
            <td>
              ‣{" "}
              <a
                href="https://pawlean.com/2019/08/06/building-pawlean-2-0"
                target="_blank"
                aria-describedby="new-window-1"
                rel="noopener"
              >
                Building 'Pawlean 2.0' using Next.js{" "}
                <img
                  src="/images/main/external.svg"
                  alt="opens in new window"
                  className="external"
                />
              </a>
            </td>
          </tr>
          <tr>
            <td>
              ‣{" "}
              <a
                href="https://pawlean.com/2020/11/11/studying-for-60daysofcloud-compute"
                target="_blank"
                aria-describedby="new-window-1"
                rel="noopener"
              >
                AWS Compute Concepts{" "}
                <img
                  src="/images/main/external.svg"
                  alt="opens in new window"
                  className="external"
                />
              </a>{" "}
            </td>
            <td>
              ‣{" "}
              <a
                href="https://pawlean.com/2019/01/14/learning-to-code"
                target="_blank"
                aria-describedby="new-window-1"
                rel="noopener"
              >
                Learning to Code resources{" "}
                <img
                  src="/images/main/external.svg"
                  alt="opens in new window"
                  className="external"
                />
              </a>
            </td>
          </tr>
          <tr>
            <td>
              ‣{" "}
              <a
                href="https://pawlean.com/2020/10/12/four-simple-ways-to-deploy-your-small-website"
                target="_blank"
                aria-describedby="new-window-1"
                rel="noopener"
              >
                4 simple ways to deploy your small website{" "}
                <img
                  src="/images/main/external.svg"
                  alt="opens in new window"
                  className="external"
                />
              </a>{" "}
            </td>
            <td>
              ‣{" "}
              <a
                href="https://www.youtube.com/watch?v=NWroDhQtoOQ"
                target="_blank"
                aria-describedby="new-window-1"
                rel="noopener"
              >
                Updating LadiesinDevOps project using gitpod{" "}
                <img
                  src="/images/main/external.svg"
                  alt="opens in new window"
                  className="external"
                />
              </a>
            </td>
          </tr>
          <tr>
            <td>
              ‣{" "}
              <a
                href="https://pawlean.com/2020/07/15/how-i-use-aws-s3-to-host-images-on-my-blog"
                target="_blank"
                aria-describedby="new-window-1"
                rel="noopener"
              >
                How I use AWS S3 to host images on my blog{" "}
                <img
                  src="/images/main/external.svg"
                  alt="opens in new window"
                  className="external"
                />
              </a>{" "}
            </td>
            <td>
              ‣{" "}
              <a
                href="https://youtu.be/MmF70ZNj8hM"
                target="_blank"
                aria-describedby="new-window-1"
                rel="noopener"
              >
                Component-ing my Next.js project using gitpod{" "}
                <img
                  src="/images/main/external.svg"
                  alt="opens in new window"
                  className="external"
                />
              </a>{" "}
            </td>
          </tr>
          <tr>
            <td>
              ‣{" "}
              <a
                href="https://www.youtube.com/watch?v=r3b3Z4ieNrc"
                target="_blank"
                aria-describedby="new-window-1"
                rel="noopener"
              >
                SRECON20 - Getting started with SRE{" "}
                <img
                  src="/images/main/external.svg"
                  alt="opens in new window"
                  className="external"
                />
              </a>{" "}
            </td>
          </tr>
          <tr>
            <td>
              ‣{" "}
              <a
                href="https://pawlean.com/2021/05/13/building-my-website-as-a-service-waas-project"
                target="_blank"
                aria-describedby="new-window-1"
                rel="noopener"
              >
                Building my Website-as-a-Service (WaaS) project{" "}
                <img
                  src="/images/main/external.svg"
                  alt="opens in new window"
                  className="external"
                />
              </a>{" "}
            </td>
          </tr>
        </table>
      </div>

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
