"use client"
import Projectscard from "./ProjectsCard.jsx";
import ProjectSlider from "./ProjectSlider.jsx"
export default function Projects() {
  const PROJECTS = [
    <Projectscard key={0}
    image="MTASpeedDashboard.png"
    name="MTA Speed Dashboard"
    desc="
    MTA Speed Dashboard was a project I made for the NYC MTA Open Data Competition. It uses the MTA Speed dataset, which is
    a new set that shows the speed between points for every bus. For example, how long does the SIM33C take to go from its first
    stop in Manhattan to the last stop? This dataset answers that and the dashboard serves as an interface for the data.
    Some of the insights provided are a frequency analysis, of how the speed of a bus varies across the day.
    Alongside this, a frequency analysis of how often a bus runs relative to the time of day. All of these can be compared with other
    buses as well. Finally, its deployed onto the Streamlit Community Cloud so you can check it out by clicking the button below.
     This was a fun way to get more experience with data science and had some applicability to my life.
    "
    thumbnail="/github.png"
    link="https://mta-speed-dashboard.streamlit.app/"
  />,
    <Projectscard key={2}
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
  <Projectscard key={3}
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
  
  <Projectscard key={4}
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
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-light-mint">
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-12 font-bold text-creme">Some of my recent work</h1>
      <ProjectSlider projectList={PROJECTS} />
    </div>
  );
}
