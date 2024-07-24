import Projectscard from "./ProjectsCard.jsx";

export default function Projects() {
  return (
    <section className="    ">
      <Projectscard
        image="AWS.jpg"
        name="Anderson's APIs"
        desc="
        Over the course of two months during the summer, I developed, alongside other 2 other students, an API for the College of Staten Island's
        Computer Science department. This API is used by students daily to teach them how APIs function, alongside AWS. Specifically, we used
        AWS Lambda for function handling, API Gateway for routing, and S3 for persistent storage. We also incorported user authentication to ensure malicious activity would be
        halted. All of this was my first time delving into
        making my own API, even though I had used them in the past.
        "
        thumbnail="/github.png"
        link="https://github.com/prince-ao/anderson-s-api"
      />
      <Projectscard
        image="RatemySchool.gif"
        name="RateMySchool"
        desc="
        For my Software Engineering class, in a team of three we made a full-stack website for rating your university. The website was made using MongoDB for 
        routes, Bootstrap for styling, and the Google Search API and a dataset for the universities on the website.
        This was my first time trying to build a full-stack application, and it was a major learning experience on how backend works with both a routing,
        database, and obtaining data perspective. My most familiar of which was how to sort and interact with data, but unsure of how to actually implement it into an app.
        Overall, this was a big learning experience, and it encouraged me to make this current website, for full-stack on my own.
        "
        thumbnail="/github.png"
        link="https://github.com/Rate-My-School/RateMySchool"
      />
      <Projectscard
        image="ForcaSteam-PFP.gif"
        name="GameInsightify"
        desc="
        I'm a casual video game player, and felt that there were no real chatbots with good recommendations for games to play.

        My group during the first half of CUNY Tech Prep, we felt the same way; So we decided to embark on a journey to create a chatbot that would recommend games to play based on the user's input.
        We successfully created this utilizing Langchain, Streamlit, OpenAI's API, and datasets from the platform Steam.
        We also added a section for visualizing your favorite games stats, including like peak concurrent players and 2 week playtime, both showing how big the game was, and how big it is now.
        "
        thumbnail="/github.png"
        link="https://github.com/CTP-AKP/AKP_Data_Science"
      />

      <Projectscard
        image="RuffianSupplies.gif"
        name="Ruffian Supplies"
        desc="A final project for my Intro to Web Development Course, that proved to be much more fun than anticipated

        I had very minimal experience with frontend before this course, but I actually learned a lot by simply working on both my website here, and this project
        
        The site is written with vanilla HTML, CSS, and Javascript and shows my attempt at a Pet Store, featuring my own pet."
        thumbnail="/github.png"
        link="www.google.com"
      />
    </section>
  );
}
