import styles from "../components/layout.module.scss";
import Head from "next/head";

function Talks_List() {
  return (
    <div>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-105893238-1"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() { dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', 'UA-105893238-1');
          `,
          }}
        />
        <meta
          name="description"
          content="A full list of previous talks presented by Pauline Narvas."
        ></meta>
        <meta property="og:title" content="Talks by Pauline P. Narvas" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://paulinenarvas.com/speaking-list"
        />
        <meta
          property="og:image"
          content="https://pawlean.s3.eu-west-2.amazonaws.com/talks_by_pauline.png"
        />
        <meta property="og:image:width" content="677" />
        <meta property="og:image:height" content="353" />
        <meta
          property="og:description"
          content="A full list of previous talks presented by Pauline Narvas."
        />
        <meta name="viewport" content="width=device-width" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@paulienuh" />
        <meta name="twitter:creator" content="@paulienuh" />
        <meta name="twitter:title" content="Talks by Pauline P. Narvas" />
        <meta
          name="twitter:description"
          content="A full list of previous talks presented by Pauline Narvas."
        />
        <meta
          name="twitter:image"
          content="https://pawlean.s3.eu-west-2.amazonaws.com/talks_by_pauline.png"
        />
        <meta name="twitter:image:alt" content="Pauline P. Narvas" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#a47da4" />
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta name="theme-color" content="#ffffff" />

        <title>Talks by Pauline P. Narvas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.whitecontainer}>
        <div className="speaking-list">
          <h1>Full List of Previous Talks</h1>
          <div className="img">
            <img src="/images/Speaking.png" />
          </div>
          <p className={styles.key}>
            <strong>Key:</strong> 🐥 = <em>Twitter Spaces</em> | ⚡️ ={" "}
            <em>Lightning Talk</em> | 🎤 <em>Conference Talk</em> | 👯‍♀️
            <em>Panel Talk</em> | 🛠 <em>Workshop</em> | 💪🏼 <em>Host</em> | 🌍{" "}
            <em>Remote</em>
          </p>
          {[
            {
              talk_name:
                "Tech Table Twitter Spaces - Getting into DevRel with Eddie Jaoude",
              link: "https://anchor.fm/eddiejaoude/episodes/Getting-into-DevRel-e135jqj",
              emoji: "🐥",
              date: "June 2021",
              location: "🌍",
            },
            {
              talk_name: "Code First Girls Fellowship Career Tech Talk",
              link: "https://twitter.com/paulienuh/status/1401964331147960323?s=20",
              emoji: "⚡️",
              date: "June 2021",
              location: "🌍",
            },
            {
              talk_name:
                "Tech Table Twitter Spaces - Communication with Francesco Ciulla",
              link: "https://twitter.com/paulienuh/status/1389634777561669635",
              emoji: "🐥",
              date: "May 2021",
              location: "🌍",
            },
            {
              talk_name:
                "What I learnt from starting the 'Ladies in DevOps' community - Programmed in Pencil",
              link: "https://www.youtube.com/watch?v=b96Jp1dVuRk&ab_channel=RVUYouTube",
              emoji: "⚡️",
              date: "May 2021",
              location: "🌍",
            },
            {
              talk_name:
                "Tech Table Twitter Spaces - Head in the Clouds with Rebekah & Hosanna",
              link: "https://twitter.com/rkulidzan/status/1384955229024759813",
              emoji: "🐥",
              date: "May 2021",
              location: "🌍",
            },
            {
              talk_name: "SBG Tech Fest 2021 - hosted 'Connect With' stream",
              link: "https://www.linkedin.com/posts/pnarvas_sbglife-techconf-sbgtechfest-activity-6791042054337126400-roF0",
              emoji: "💪🏼",
              date: "April 2021",
              location: "🌍",
            },
            {
              talk_name:
                "Challenges of Starting an SRE Team from Scratch in an Enterprise - SRECON20 Americas",
              link: "https://www.youtube.com/watch?v=r3b3Z4ieNrc",
              emoji: "🎤",
              date: "December 2020",
              location: "🌍",
            },
            {
              talk_name: "Code First: Girls #CF2020 Careers Nav - BT",
              link: "https://www.linkedin.com/posts/pnarvas_cf2020-careers-womenintech-activity-6711577456282759168-556f",
              emoji: "👯‍♀️",
              date: "September 2020",
              location: "🌍",
            },
            {
              talk_name: "Bright Network - BT",
              link: "https://www.linkedin.com/posts/pnarvas_bepartofprogress-consumergrads-bt-activity-6711304729323962368-QLV_",
              emoji: "🛠",
              date: "September 2020",
              location: "🌍",
            },
            {
              talk_name:
                "Code First: Girls #CF2020 Future Stars - Switching to Tech",
              link: "https://twitter.com/thekimmykola/status/1301237078215274497",
              emoji: "👯‍♀️",
              date: "September 2020",
              location: "🌍",
            },
            {
              talk_name: "Code First: Girls #CF2020 Tech Decoded - Community",
              link: "https://twitter.com/MrDarrenV/status/1300799856013979649",
              emoji: "👯‍♀️",
              date: "September 2020",
              location: "🌍",
            },
            {
              talk_name: "Leeds Library Tech Talk - Thoughts to Pixels",
              link: "https://www.linkedin.com/posts/pnarvas_leeds-bypawlean-pawlean-activity-6672142065624719360-8Y8J",
              emoji: "🎤",
              date: "July 2020",
              location: "🌍",
            },
            {
              talk_name:
                "YouGotThis From Home - The Breaking Point: Recovering from Burnout",
              link: "https://yougotthis.io/talks/breaking-point-recovering-from-burnout/",
              emoji: "🎤",
              date: "June 2020",
              location: "🌍",
            },
            {
              talk_name:
                "ELEVATE programme, supported by BT - My journey into technology",
              link: "https://www.linkedin.com/posts/pnarvas_bt-elevate-programme-careers-talk-by-pauline-activity-6664079383294279681-it47",
              emoji: "🎤",
              date: "June 2020",
              location: "🌍",
            },
            {
              talk_name:
                "BCS South Yorkshire Branch - Mental Health Awareness Webinar",
              link: "https://www.linkedin.com/posts/pnarvas_bepartofprogress-consumergrads-bt-activity-6711304729323962368-QLV_",
              emoji: "🎤",
              date: "May 2020",
              location: "🌍",
            },
            {
              talk_name:
                "WiTNotts - Thoughts to Pixels: The Impact of Blogging",
              link: "https://pawlean.com/2020/04/10/thoughts-to-pixels-the-impact-of-blogging/",
              emoji: "🎤",
              date: "April 2020",
              location: "🌍",
            },
            {
              talk_name:
                "BT International Women's Day - Why do we still need an International Women's Day in 2020?",
              link: "https://www.linkedin.com/posts/pnarvas_internationalwomenday2020-iwd2020-womenintech-activity-6643091239837274112-01UB",
              emoji: "👯‍♀️",
              date: "March 2020",
            },
            {
              talk_name:
                "20 x 20 Women in Leeds Digital x Stickyeyes: The Power of Community",
              link: "https://youtu.be/IcaiwnXLz-o",
              emoji: "🎤",
              date: "January 2020",
            },
            {
              talk_name: "Leeds DevOps - 10 Years of DevOps",
              link: "https://twitter.com/paulienuh/status/1197276796338819079",
              emoji: "🎤",
              date: "November 2019",
            },
            {
              talk_name:
                "DWP Digital Voices - My non-linear journey to technology",
              link: "https://www.youtube.com/watch?v=5xhKTzmJtAs&list=PLkR4A7sk9JzbANRRuAwlTODpAlyDJkpqG&index=7&t=0s",
              emoji: "🎤",
              date: "June 2019",
              location: "🌍",
            },
            {
              talk_name: "Sheffield DevOps - Diversifying Tech",
              link: "https://twitter.com/AffectoUK/status/1106267452848160769",
              emoji: "🎤",
              date: "March 2019",
            },
            {
              talk_name: "BCS - Diversity in IT",
              link: "https://twitter.com/BCS_South_Yorks/status/1098654735463260160",
              emoji: "🎤",
              date: "February 2019",
            },
            {
              talk_name: "Ladies of Code Leeds - My Breaking Point",
              link: "https://www.meetup.com/Ladies-of-Code-Leeds/events/257127632",
              emoji: "🎤",
              date: "January 2019",
            },
            {
              talk_name: "Grow from your STEM GovEvent - Expert Panel",
              link: "https://pawlean.com/2018/12/03/grow-from-your-stem/",
              emoji: "🎤",
              date: "December 2018",
            },
            {
              talk_name:
                "Sheffield Women in Computer Science event - My journey into tech",
              link: "https://www.wherewomenwork.com/Career/1657/University-of-Sheffield-Women-in-Computer-Science",
              emoji: "🎤",
              date: "November 2018",
            },
            {
              talk_name:
                " Code First: Girls at The University of Sheffield - My journey into tech",
              link: "https://twitter.com/MrDarrenV/status/1059517113088516098",
              emoji: "🎤",
              date: "November 2018",
            },
            {
              talk_name: "Northern Power Futures - Building an Online Presence",
              link: "https://pawlean.com/2018/11/25/building-an-online-presence/",
              emoji: "🛠",
              date: "November 2018",
            },
            {
              talk_name:
                "The University of Sheffield - Diversity and Inclusion event",
              link: "https://twitter.com/paulienuh/status/1056974647483342848",
              emoji: "🛠",
              date: "October 2018",
            },
            {
              talk_name: "InspireWIT - Nevertheless I/she/you persisted",
              link: "ttps://pawlean.com/2018/04/08/inspirewit/",
              emoji: "🎤",
              date: "April 2018",
            },
            {
              talk_name:
                "Code First: Girls Conf 2018 - Personal Development Panel",
              link: "ttps://pawlean.com/2018/03/05/cfgnconf18/",
              emoji: "👯‍♀️",
              date: "March 2018",
            },
            {
              talk_name: "SchaRR - Above the noise: Building an online voice",
              link: "https://pawlean.com/2017/12/04/public-speaking-%f0%9f%93%9d-2/",
              emoji: "🎤",
              date: "December 2017",
            },
            {
              talk_name: "GitHub Field Day - Getting into the tech community",
              link: "https://pawlean.com/2017/12/14/github-field-day",
              emoji: "🎤",
              date: "December 2017",
            },
            {
              talk_name: "GitHub Field Day - Building up Hype on social media",
              link: "https://www.youtube.com/watch?v=ykWMcAygpSw&list=PLkR4A7sk9JzbANRRuAwlTODpAlyDJkpqG&index=9&t=0s",
              emoji: "🛠",
              date: "December 2017",
            },
            {
              talk_name: "GitHub Field Day - The importance of self-care",
              link: "https://www.youtube.com/watch?v=oTzvijjOA3U&list=PLkR4A7sk9JzbANRRuAwlTODpAlyDJkpqG&index=10&t=0s",
              emoji: "🛠",
              date: "December 2017",
            },
            {
              talk_name: "Sheffield Ruby User Group - Building Communities",
              link: "https://pawlean.com/2017/10/13/public-speaking-1/",
              emoji: "⚡️",
              date: "August 2017",
            },
          ].map((one_talk) => (
            <p>
              <a
                href={one_talk.link}
                target="_blank"
                aria-describedby="new-window-1"
                rel="noopener"
                key={one_talk.link}
              >
                {one_talk.emoji} <span className="date">{one_talk.date}</span> -{" "}
                {one_talk.talk_name} {one_talk.location}{" "}
                <img
                  src="/images/main/external.svg"
                  alt="opens in new window"
                  className="external"
                />{" "}
              </a>
            </p>
          ))}
          <p className="goback">
            <a href="/">← Return to main page</a>
          </p>
        </div>
      </div>

      <style jsx>{`
        .speaking-list {
          padding-top: 50px;
          margin: 0 auto;
          text-align: center;
          line-height: 1.5rem;
          overflow-x: auto;
        }
        .date {
          text-transform: uppercase;
          color: grey;
          font-size: 12px;
        }
        p {
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          max-width: 560px;
          margin: 0 auto;
          text-align: justify;
          line-height: 1.5rem;
          margin-bottom: 15px;
          margin-top: 20px;
        }
        a {
          color: black;
        }
        a:hover {
          color: #a47da4;
        }
        h1 {
          text-align: center;
        }
        .img {
          height: auto;
          margin-bottom: 20px;
        }
        .img img {
          max-width: 900px;
          border: 10px solid #a47da4;
        }
        .goback {
          margin: 0 auto;
          margin-top: 80px;
          margin-bottom: 80px;
          padding: 10px;
          background-color: #a47da4;
          width: 200px;
          text-align: center;
          border-radius: 10px;
        }
        .goback a {
          color: white;
        }
        .goback:hover {
          background-color: #836883;
          text-decoration: underline;
          border-bottom: 0px;
          color: #fff;
        }

        .external {
          width: 10px;
        }
      `}</style>
    </div>
  );
}

export default Talks_List;
