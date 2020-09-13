function Talks_List() {
  return (
    <div>
      <div className="speaking-list">
        {" "}
        <h1>Talks List</h1>
        <h2>Previous List</h2>
        <p>
          <strong>Key:</strong> ⚡️ = Lightning Talk | 🎤 Conference Talk | 👯‍♀️
          Panel Talk | 🛠 Workshop
        </p>
        {[
          {
            talk_name: "Sheffield Ruby User Group - Building Communities",
            link: "https://pawlean.com/2017/10/13/public-speaking-1/",
            emoji: "⚡️",
            date: "August 2017",
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
            talk_name:
              "Code First: Girls Conf 2018 - Personal Development Panel",
            link: "ttps://pawlean.com/2018/03/05/cfgnconf18/",
            emoji: "👯‍♀️",
            date: "March 2018",
          },
          {
            talk_name: "InspireWIT - Nevertheless I/she/you persisted",
            link: "ttps://pawlean.com/2018/04/08/inspirewit/",
            emoji: "🎤",
            date: "April 2018",
          },
          {
            talk_name:
              "The University of Sheffield - Diversity and Inclusion event",
            link: "https://twitter.com/paulienuh/status/1056974647483342848",
            emoji: "🛠",
            date: "October 2018",
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
            link: "https://pawlean.com/2018/11/25/building-an-online-presence/",
            emoji: "🎤",
            date: "November 2018",
          },
          {
            talk_name: "Grow from your STEM GovEvent - Expert Panel",
            link: "https://pawlean.com/2018/12/03/grow-from-your-stem/",
            emoji: "🎤",
            date: "December 2018",
          },
          {
            talk_name:
              " WiTNotts (Virtual) - Thoughts to Pixels: The Impact of Blogging",
            link:
              "https://pawlean.com/2020/04/10/thoughts-to-pixels-the-impact-of-blogging/",
            emoji: "🎤",
            date: "April 2020",
          },
          {
            talk_name: "Ladies of Code Leeds - My Breaking Point",
            link:
              "https://www.meetup.com/Ladies-of-Code-Leeds/events/257127632",
            emoji: "🎤",
            date: "November 2018",
          },
          {
            talk_name: "Ladies of Code Leeds - My Breaking Point",
            link:
              "https://www.meetup.com/Ladies-of-Code-Leeds/events/257127632",
            emoji: "🎤",
            date: "November 2018",
          },
          {
            talk_name: "BCS - Diversity in IT",
            link:
              "https://twitter.com/BCS_South_Yorks/status/1098654735463260160",
            emoji: "🎤",
            date: "February 2019",
          },
          {
            talk_name: "Leeds DevOps - 10 Years of DevOps",
            link: "https://twitter.com/paulienuh/status/1197276796338819079",
            emoji: "🎤",
            date: "November 2019",
          },
          {
            talk_name: "Sheffield DevOps - Diversifying Tech",
            link: "https://twitter.com/AffectoUK/status/1106267452848160769",
            emoji: "🎤",
            date: "March 2019",
          },
          {
            talk_name:
              "YouGotThis From Home (Remote) - The Breaking Point: Recovering from Burnout",
            link:
              "https://yougotthis.io/talks/breaking-point-recovering-from-burnout/",
            emoji: "🎤",
            date: "June 2020",
          },
          {
            talk_name:
              "Code First: Girls #CF2020 Future Stars - Switching to Tech",
            link: "https://twitter.com/thekimmykola/status/1301237078215274497",
            emoji: "👯‍♀️",
            date: "September 2020",
          },
          {
            talk_name: "Code First: Girls #CF2020 Tech Decoded - Community",
            link: "https://twitter.com/MrDarrenV/status/1300799856013979649",
            emoji: "👯‍♀️",
            date: "September 2020",
          },
          {
            talk_name: "Code First: Girls #CF2020 - BT",
            link: "",
            emoji: "👯‍♀️",
            date: "September 2020",
          },
          {
            talk_name: "Bright Network: BT",
            link: "",
            emoji: "👯‍♀️",
            date: "September 2020",
          },
        ].map((one_talk) => (
          <div>
            <h3>{one_talk.date}</h3>
            <a
              href={one_talk.link}
              target="_blank"
              aria-describedby="new-window-1"
              rel="noopener"
              key={one_talk.link}
            >
              <p>
                {one_talk.emoji} {one_talk.talk_name}
              </p>
            </a>
          </div>
        ))}
      </div>

      <style jsx>{`
        .speaking-list {
          text-align: center;
          background: red;
        }
      `}</style>
    </div>
  );
}

export default Talks_List;
