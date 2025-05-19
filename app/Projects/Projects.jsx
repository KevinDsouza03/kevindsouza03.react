"use client"
import Projectscard from "./ProjectsCard.jsx";
import ProjectSlider from "./ProjectSlider.jsx"

export default function Projects() {
  const PROJECTS = [
    <Projectscard 
      key={0}
      image="MTASpeedDashboard.png"
      name="MTA Speed Dashboard"
      desc={[
        "Created for the NYC MTA Open Data Competition",
        "Visualizes bus speed data between different route stops",
        "Provides frequency analysis of speed variations throughout the day",
        "Deployed on Streamlit Community Cloud for public access"
      ]}
      technologies={["Python", "Pandas", "Streamlit", "Plotly", "Data Analysis"]}
      thumbnail="/github.png"
      link="https://mta-speed-dashboard.streamlit.app/"
    />,
    <Projectscard 
      key={2}
      image="RateMySchool.gif"
      name="RateMySchool"
      desc={[
        "Full-stack university rating website built with a team of three",
        "Utilized MongoDB for backend routes and data storage",
        "Implemented Bootstrap for responsive frontend styling",
        "Integrated Google Search API and university datasets"
      ]}
      technologies={["MongoDB", "Express", "Node.js", "Bootstrap", "Google API"]}
      thumbnail="/github.png"
      link="https://github.com/Rate-My-School/RateMySchool"
    />,
    <Projectscard 
      key={3}
      image="ForcaSteam-PFP.gif"
      name="GameInsightify"
      desc={[
        "Intelligent chatbot for personalized video game recommendations",
        "Built during CUNY Tech Prep using Langchain and OpenAI's API",
        "Integrated Steam datasets for accurate game suggestions",
        "Features visualization tools for game player statistics"
      ]}
      technologies={["Python", "Langchain", "OpenAI API", "Streamlit", "Steam API"]}
      thumbnail="/github.png"
      link="https://github.com/CTP-AKP/AKP_Data_Science"
    />,
    <Projectscard 
      key={4}
      image="RuffianSupplies.gif"
      name="Ruffian Supplies"
      desc={[
        "Pet store website featuring my own pet",
        "Built with vanilla HTML, CSS, and JavaScript",
        "Complete product listings and information pages",
        "Final project for Intro to Web Development course"
      ]}
      technologies={["HTML", "CSS", "JavaScript", "Responsive Design"]}
      thumbnail="/github.png"
      link="www.google.com" 
    />
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-light-mint">
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-12 font-bold text-creme">
        Some of my recent work
      </h1>
      <ProjectSlider projectList={PROJECTS} />
    </div>
  );
}