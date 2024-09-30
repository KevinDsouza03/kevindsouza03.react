"use client"
import Projectscard from "./ProjectsCard.jsx";
import ProjectSlider from "./ProjectSlider.jsx"
export default function Projects() {
  const PROJECTS = [
    <Projectscard key={0}
    image="placeholder.png"
    name="TimeLens"
    desc="
    TimeLens is a productivity and habit tracker for Windows PCs. My inspiration for TimeLens is to track my own computer habits, both inside and outside of work sessions.
    In the recent years, short-form content has become the popular medium, and with that a lot more distracted people. TimeLens aims to help people who're interested in optimizing
    their computer habits, with ease of use in mind.
    Currently, I'm using the WindowsAPI for obtaining program data, Python with Pandas for data processing, and am working on using React with ReCharts to create a dashboard,
    and use Go as a backend for my SQL database. (Heres a placeholder photo of my dog)
    "
    thumbnail="/github.png"
    link="https://github.com/Rate-My-School/RateMySchool"
  />,
    <Projectscard key={1}
    image="RateMySchool.gif"
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
  />,
  <Projectscard key={2}
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
  />,
  
  <Projectscard key={3}
  image="RuffianSupplies.gif"
  name="Ruffian Supplies"
  desc="My final project for the Intro to Web Development course turned out to be more enjoyable than I expected.

  I had very little frontend experience before taking this course, but I learned a great deal while working on this project and my website.

  This site, created with vanilla HTML, CSS, and JavaScript, is my attempt at a Pet Store and features my own pet."
  thumbnail="/github.png"
  link="www.google.com"
/>
];
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 sm:mb-12">Some of my recent work</h1>
      <ProjectSlider projectList={PROJECTS} />
    </div>
  );
}
