import React, { useState } from "react";
import styles from "./layout.module.scss";

function Features() {
  const [show, setShow] = useState(false);
  const [show_podcast, setShow_pod] = useState(false);
  const [show_other, setShow_other] = useState(false);
  return (
    <div className={styles.whitecontainer}>
      <h1>👋🏼 Features</h1>
      <div className="Interviews">
        <div>
          <span onClick={() => setShow(!show)}>
            <img src="images/Interviews.png" alt="Interviews" />
          </span>
          {show && (
            <div className="InterviewBlock">
              {[
                {
                  title: "The Sun Employment",
                  link:
                    "https://www.thesun.co.uk/money/11574163/university-students-leaving-job-crisis-coronavirus/",
                },
                {
                  title: "The Times: A day in the life of a programmer",
                  link:
                    "https://www.raconteur.net/technology/day-life-programmers",
                },
                {
                  title:
                    "The Daily Mirror: Land your dream career like Pauline",
                  link: "Images/Awards/TheDailyMirror.jpg",
                },
                {
                  title:
                    "The Sheffield Star: Meet the Sheffield girl that is among a small group of women leading the way in Tech",
                  link:
                    "https://www.thestar.co.uk/education/meet-sheffield-girl-among-small-group-women-leading-way-tech-550581",
                },
                {
                  title:
                    "The Yorkshire Post: How Pauline overcame school bullies to inspire women in technology",
                  link:
                    "https://www.yorkshirepost.co.uk/news/people/from-high-school-musical-fansites-to-ee-developer-how-pauline-overcame-school-bullies-to-inspire-women-in-technology-1-9960344",
                },
                {
                  title: "New Narrative: Take Note",
                  link:
                    "https://www.nocsdegree.com/pauline-narvas-talks-learning-to-code-with-no-cs-degree/",
                },
                {
                  title: "BBC Bitesize: How I got through a hard time at uni",
                  link:
                    "https://www.bbc.com/bitesize/articles/zv4ywty?fbclid=IwAR21tzaKRps6AMtmtvjs_pZFv6R6rUjeFvmwElShcXxQiiIxbSfl0RX02hw",
                },
                {
                  title: "Byte of Tech",
                  link:
                    "https://www.hollerings.com/byte-of-tech-pauline-narvas/?preview_nonce=8862fb1c5d&preview=true",
                },
                {
                  title: "Coding for Digital",
                  link:
                    "https://codinginthewild.com/coding-for-digital-676ca22763f7",
                },
                {
                  title: "Hey Girlfriend!",
                  link: "https://hey.georgie.nu/hg-where-now/",
                },
                {
                  title: "CyberWomen",
                  link:
                    "https://www.cyberwomen.co.uk/blog-1/2017/07/24/interview-series-pauline-narvas",
                },
                {
                  title: "Prep The Project",
                  link:
                    "https://www.projectprep.com/blog/2017/5/31/womein-in-tech-pauline-narvas?utm_content=bufferae00c&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer",
                },
              ].map((feature) => (
                <ul className={styles.interviewlist}>
                  <li>
                    <a
                      href={feature.link}
                      target="_blank"
                      aria-describedby="new-window-1"
                      rel="noopener"
                    >
                      {feature.title}{" "}
                      <img
                        src="/images/main/external-purp.svg"
                        alt="opens in new window"
                        className="external"
                      />
                    </a>
                  </li>
                </ul>
              ))}
            </div>
          )}
        </div>
        <div>
          <span onClick={() => setShow_pod(!show_podcast)}>
            <img src="images/podcast.png" alt="Podcasts" />
          </span>
          {show_podcast && (
            <div className="InterviewBlock">
              {[
                {
                  title: "The Baby Developer Show",
                  link: "https://www.twitch.tv/videos/618752399",
                },
                {
                  title: "Game Quitters Gaming the System Podcast",
                  link:
                    "https://anchor.fm/gaming-the-system/episodes/027---How-Pauline-Narvas-Overcame-Gaming-Addiction-to-Become-a-Full-Time-Programmer--Speaker--and-Inspirational-Figure-ea8a32",
                },
                {
                  title: "BBC Radio Sheffield - Breakfast Show",
                  link: "https://www.youtube.com/watch?v=OcJtNEYVbAY",
                },
                {
                  title: "BBC Radio Sheffield with Rony Robinson",
                  link: "https://www.youtube.com/watch?v=W7-iWVpf1wQ",
                },
                {
                  title:
                    "BBC Radio The West and East Midlands - Late Night with Graham",
                  link: "https://www.youtube.com/watch?v=0BWUckhDX-g",
                },
                {
                  title: "BBC Radio Sheffield with Paulette Edwards",
                  link: "https://www.youtube.com/watch?v=8U4uSBdLzDQ",
                },
                {
                  title: "BBC Radio Leeds - Richard Stead Breakfast show",
                  link:
                    "https://www.youtube.com/watch?v=PH0GJLUSQMc&feature=youtu.be",
                },
                {
                  title: "Learn To Code With Me Podcast",
                  link:
                    "https://learntocodewith.me/podcast/time-management-strategies/",
                },
                {
                  title: "Unravelling Technology Podcast",
                  link:
                    "https://www.birchenallhowden.co.uk/podcasts/unravelling-technology-ep-078-women-in-stem",
                },
              ].map((feature) => (
                <ul className={styles.interviewlist}>
                  <li>
                    <a
                      href={feature.link}
                      target="_blank"
                      aria-describedby="new-window-1"
                      rel="noopener"
                    >
                      {feature.title}{" "}
                      <img
                        src="/images/main/external-purp.svg"
                        alt="opens in new window"
                        className="external"
                      />
                    </a>
                  </li>
                </ul>
              ))}
            </div>
          )}
        </div>
        <div>
          <span onClick={() => setShow_other(!show_other)}>
            <img src="images/other.png" alt="Other" />
          </span>
          {show_other && (
            <div className="InterviewBlock">
              {[
                {
                  title: "#Diversity30",
                  link: "https://diversity30.org/",
                },
                {
                  title: "Women in Tech Snapchat Takeover",
                  link:
                    "https://www.youtube.com/watch?v=J6ix_AcYdEs&index=8&list=PLkR4A7sk9JzaqNcxxMHZWr1P5XH7TPuBs",
                },
                {
                  title: "Code With Confidence Feature",
                  link:
                    "https://www.facebook.com/girlscancodetoo/videos/778785738979078/",
                },
                {
                  title: "Women Who Keynote",
                  link: "https://womenwhokeynote.com/speaker/zgYvHcGyCi6YtGP4o",
                },
                {
                  title: "GitHub Education: Student of the Week",
                  link:
                    "https://twitter.com/paulienuh/status/856953783234023424",
                },
              ].map((feature) => (
                <ul className={styles.interviewlist}>
                  <li>
                    <a
                      href={feature.link}
                      target="_blank"
                      aria-describedby="new-window-1"
                      rel="noopener"
                    >
                      {feature.title}{" "}
                      <img
                        src="/images/main/external-purp.svg"
                        alt="opens in new window"
                        className="external"
                      />
                    </a>
                  </li>
                </ul>
              ))}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        img {
          -webkit-filter: grayscale(100%);
          width: 300px;
        }
        img:hover {
          -webkit-filter: grayscale(0%);
        }
        .Interviews {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          grid-gap: 10px;
        }
        .InterviewBlock {
          background: #a47da4;
          color: white;
          padding: 10px;
          border: 1px dotted #836883;
        }
        a {
          color: white;
          border-bottom: 1px dotted white;
        }
        a:hover {
          color: #f2d9f3;
          border-bottom: 1px solid #f2d9f3;
        }
        .external {
          width: 10px;
        }
      `}</style>
    </div>
  );
}

export default Features;
