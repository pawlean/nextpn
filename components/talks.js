import React, { useState } from "react";
import Head from "next/head";

function Talks() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <span onClick={() => setShow(!show)}>
        <button>Previous talks &#10549;</button>
      </span>
      <span className="fulltalks">
        <a href="/speaking-list">
          <button>Full list →</button>
        </a>
      </span>
      {show && (
        <div className="talksgroup">
          {[
            {
              title: "Nevertheless, I persisted",
              ytlink: "https://youtu.be/MqLSYJfCSO0",
              description:
                "Sharing stories is powerful. This is my story of my non-linear path into technology that first came about from a hobby. I share my struggles at school, confusion at university, inspiring discoveries, blockers and how you can kick-start your career - no matter who you are.",
              slides: "https://paulinenarvas.com/talks/journey.pdf/",
            },
            {
              title: "Building an online presence",
              ytlink:
                "https://www.youtube.com/watch?v=cWogM_mBERw&list=PLkR4A7sk9JzbANRRuAwlTODpAlyDJkpqG&index=7",
              description:
                "Having a good personal brand, especially in our growing digital world is increasingly becoming very important. Inspired by my placement year in communications as well as my growing social media presence, I share my story, why it is important to be on social media, the ways that you can improve your digital presence and why you should remain authentic throughout this. ",
              slides:
                "https://pawlean.com/2018/11/25/building-an-online-presence/",
            },
            {
              title: "The Power of communities",
              ytlink: "https://youtu.be/Uwl1qg8D3zI",
              description:
                "I share the impact of communities and what we did with the local Sheffield student community to really make everyone thrive.",
              slides:
                "https://www.slideshare.net/PaulinePNarvas/building-communities-80620801/1",
            },
            {
              title: "The Breaking Point: Recovering from Burnout",
              ytlink: "https://www.youtube.com/watch?v=xVaffEIFasQ",
              description:
                "Being in an industry that technically doesn’t stop, we can all get caught up with chasing on what the next new shiny thing there is to learn or take part in. As someone who was keen and ambitious in “breaking through” the industry, I found myself thinly spread to a point that was unhealthy and potentially dangerous long-term. Burnout is real. In this talk, I’ll share experiences as well as tips on helping spot patterns that lead to burnout and how to deal with it before it gets out of hand. ",
              slides: "https://paulinenarvas.com/talks/YouGotThis2020.pdf",
            },
            {
              title: "Thoughts into pixels: the impact of blogging",
              ytlink: "https://youtu.be/fybQ2oId1I4",
              description:
                "Blogging has boomed in popularity over the past couple of years with thousands of different bloggers converting their thoughts into pixels. But why? In this talk, I’ll be sharing the origins of my blogging story, why you should start a blog and how you can get started.",
              slides: "https://slides.com/pawlean/deck/live",
            },
            {
              title: "Diversifying Tech",
              ytlink: "https://youtu.be/FDNVFBO7PfM",
              description:
                "I will be talking about the importance of diverse teams, using stories of how much of an impact this has had in my career so far and ways that we can together improve diversity and inclusion of the technical workforce. ",
              slides: "https://paulinenarvas.com/talks/diversity.pdf",
            },
          ].map((talks) => (
            <div className="talks">
              <h3>{talks.title}</h3>
              <p>{talks.description}</p>
              <p>
                🎬{" "}
                <a
                  href={talks.ytlink}
                  target="_blank"
                  aria-describedby="new-window-1"
                  rel="noopener"
                >
                  Watch{" "}
                  <img
                    src="/images/main/external.svg"
                    alt="opens in new window"
                    className="external"
                  />
                </a>{" "}
                | 🗒{" "}
                <a
                  href={talks.slides}
                  target="_blank"
                  rel="noopener"
                  aria-describedby="new-window-1"
                >
                  Slides{" "}
                  <img
                    src="/images/main/external.svg"
                    alt="opens in new window"
                    className="external"
                  />
                </a>
              </p>
            </div>
          ))}
        </div>
      )}

      <style jsx>
        {`
          .fulltalks {
            width: 200px;
            padding-left: 20px;
            margin: 0 auto;
          }
          button {
            background-color: #a47da4;
            padding: 20px;
            border: 0px;
            color: white;
            font-size: 12pt;
            border-radius: 5px;
            font-weight: normal;
            margin-top: 30px;
          }
          button:hover {
            background-color: #836883;
            cursor: pointer;
          }
          .talksgroup {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-column-gap: 10px;
            grid-row-gap: 10px;
            background-color: white;
            padding: 10px;
            margin-top: 10px;
          }
          .talks {
            border: 1px dotted #a47da4;
            border-radius: 5px;
            padding: 10px;
            width: 100%;
          }
          h3 {
            color: #a47da4;
            text-align: center;
          }
          p {
            width: 100%;
            text-align: center;
          }
          a {
            font-weight: bold;
            text-align: center;
          }
          a:hover {
            color: #836883;
          }
          @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
            .talksgroup {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Talks;
