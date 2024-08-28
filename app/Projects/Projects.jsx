"use client"
import Projectscard from "./ProjectsCard.jsx";
import ProjectSlider from "./ProjectSlider.jsx"
export default function Projects() {
  const PROJECTS = [
    <Projectscard key={0}
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
  />,
  <Projectscard key={1}
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
  
  <Projectscard key={2}
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
    <div className="w-full h-full md:w-10/12 ">
      <h1 className="text-center text-4xl font-semibold pb-10">Some of my recent work</h1>
      {/* In my projects section here, I want to have a "ProjectSlider" that holds all my "ProjectsCard" to iterate through */}
      <ProjectSlider projectList={PROJECTS} />
    </div>
  );
}
