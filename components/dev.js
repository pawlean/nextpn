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
                        "Python",
                        "git",
                        "Wordpress",
                        "AWS",
                        "Lambda",
                        "Terraform",
                        "Packer",
                        "VMWare",
                        "Kubernetes",
                        "Akamai (CDN)",
                        "Chef",
                        "Docker",
                    ].map((skill) => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
            </p>
            <p>The "career path" that I'm working towards in the future is to work in the DevRel space or similar.<a
                href="https://twitter.com/paulienuh/status/1378062094914965507"
                target="_blank"
                aria-describedby="new-window-1"
                rel="noopener"
            > I'm manifesting it for the future ✨</a> If you have any opportunities, get in touch!</p>
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
                            >Component-ing my Next.js project using gitpod
                                {" "}
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
                                href="https://pawlean.com/2021/05/14/building-my-website-as-a-service-waas-project/(opens in a new tab)"
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
