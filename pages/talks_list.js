function Talks_List() {
  return (
    <div>
      <div className="container">
        <div className="speaking-list">
          <h1>Full List of Previous Talks</h1>
          <div className="img">
            <img src="/images/Speaking.png" />
          </div>
          <p className="key">
            <strong>Key:</strong> ⚡️ = Lightning Talk | 🎤 Conference Talk | 👯‍♀️
            Panel Talk | 🛠 Workshop | 🌍 Remote
          </p>
          {[
            {
              talk_name: "Code First: Girls #CF2020 Careers Nav - BT",
              link:
                "https://www.linkedin.com/posts/pnarvas_cf2020-careers-womenintech-activity-6711577456282759168-556f",
              emoji: "👯‍♀️",
              date: "September 2020",
              location: "🌍",
            },
            {
              talk_name: "Bright Network - BT",
              link:
                "https://www.linkedin.com/posts/pnarvas_bepartofprogress-consumergrads-bt-activity-6711304729323962368-QLV_",
              emoji: "🛠",
              date: "September 2020",
              location: "🌍",
            },
            {
              talk_name:
                "Code First: Girls #CF2020 Future Stars - Switching to Tech",
              link:
                "https://twitter.com/thekimmykola/status/1301237078215274497",
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
              link:
                "https://www.linkedin.com/posts/pnarvas_leeds-bypawlean-pawlean-activity-6672142065624719360-8Y8J",
              emoji: "🎤",
              date: "July 2020",
              location: "🌍",
            },
            {
              talk_name:
                "YouGotThis From Home - The Breaking Point: Recovering from Burnout",
              link:
                "https://yougotthis.io/talks/breaking-point-recovering-from-burnout/",
              emoji: "🎤",
              date: "June 2020",
              location: "🌍",
            },
            {
              talk_name:
                "ELEVATE programme, supported by BT - My journey into technology",
              link:
                "https://www.linkedin.com/posts/pnarvas_bt-elevate-programme-careers-talk-by-pauline-activity-6664079383294279681-it47",
              emoji: "🎤",
              date: "June 2020",
              location: "🌍",
            },
            {
              talk_name:
                "BCS South Yorkshire Branch - Mental Health Awareness Webinar",
              link:
                "https://www.linkedin.com/posts/pnarvas_bepartofprogress-consumergrads-bt-activity-6711304729323962368-QLV_",
              emoji: "🎤",
              date: "May 2020",
              location: "🌍",
            },
            {
              talk_name:
                "WiTNotts - Thoughts to Pixels: The Impact of Blogging",
              link:
                "https://pawlean.com/2020/04/10/thoughts-to-pixels-the-impact-of-blogging/",
              emoji: "🎤",
              date: "April 2020",
              location: "🌍",
            },
            {
              talk_name:
                "BT International Women's Day - Why do we still need an International Women's Day in 2020?",
              link:
                "https://www.linkedin.com/posts/pnarvas_internationalwomenday2020-iwd2020-womenintech-activity-6643091239837274112-01UB",
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
              link:
                "https://www.youtube.com/watch?v=5xhKTzmJtAs&list=PLkR4A7sk9JzbANRRuAwlTODpAlyDJkpqG&index=7&t=0s",
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
              link:
                "https://twitter.com/BCS_South_Yorks/status/1098654735463260160",
              emoji: "🎤",
              date: "February 2019",
            },
            {
              talk_name: "Ladies of Code Leeds - My Breaking Point",
              link:
                "https://www.meetup.com/Ladies-of-Code-Leeds/events/257127632",
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
              link:
                "https://www.wherewomenwork.com/Career/1657/University-of-Sheffield-Women-in-Computer-Science",
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
              link:
                "https://pawlean.com/2018/11/25/building-an-online-presence/",
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
              link:
                "https://pawlean.com/2017/12/04/public-speaking-%f0%9f%93%9d-2/",
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
              link:
                "https://www.youtube.com/watch?v=ykWMcAygpSw&list=PLkR4A7sk9JzbANRRuAwlTODpAlyDJkpqG&index=9&t=0s",
              emoji: "🛠",
              date: "December 2017",
            },
            {
              talk_name: "GitHub Field Day - The importance of self-care",
              link:
                "https://www.youtube.com/watch?v=oTzvijjOA3U&list=PLkR4A7sk9JzbANRRuAwlTODpAlyDJkpqG&index=10&t=0s",
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
            <div>
              <a
                href={one_talk.link}
                target="_blank"
                aria-describedby="new-window-1"
                rel="noopener"
                key={one_talk.link}
              >
                <p>
                  {one_talk.emoji} <span className="date">{one_talk.date}</span>{" "}
                  - <strong>{one_talk.talk_name}</strong> {one_talk.location}
                </p>
              </a>
            </div>
          ))}
          <p className="goback">
            <a href="/">← Return to main page</a>
          </p>
        </div>
      </div>

      <style jsx>{`
        .container {
          margin: 0 auto;
          display: flex;
          align-items: center;
          padding-top: 90px;
          width: 100%;
        }
        .speaking-list {
          max-width: 900px;
          margin: 0 auto;
          text-align: justify;
          line-height: 1.5rem;
        }
        .key {
          border: 2px solid #a47da4;
          border-radius: 5px;
          padding: 10px;
          text-align: center;
          margin-bottom: 50px;
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
          margin: 15px;
        }
        h1 {
          text-align: center;
        }
        a {
          color: black;
          text-decoration: none;
        }
        a:hover {
          color: #a47da4;
          text-decoration: underline;
        }
        .img {
          height: auto;
        }
        img {
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
      `}</style>
    </div>
  );
}

export default Talks_List;
