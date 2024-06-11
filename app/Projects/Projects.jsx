
import ProjectsCard from './ProjectsCard.jsx'

export default function Projects() {
    return(
        <div className="    ">
        <ProjectsCard image="../public/ForcaSteam-PFP.gif" name="GameInsightify" desc="
        I'm a casual video game player, and felt that there were no real chatbots with good recommendations for games to play.

        My group during the first half of CUNY Tech Prep, we felt the same way; So we decided to embark on a journey to create a chatbot that would recommend games to play based on the user's input.
    '
        We successfully created this utilizing Langchain, Streamlit, OpenAI's API, and datasets from the platform Steam.
        We also added a section for visualizing your favorite games stats, including like peak concurrent players and 2 week playtime, both showing how big the game was, and how big it is now.
        "
        thumbnail=".../public/github.png"
        link="https://github.com/CTP-AKP/AKP_Data_Science"
        /> 
        
                
        <ProjectsCard image=".../public/RuffianSupplies.gif" name="Ruffian Supplies" 
        desc="A final project for my Intro to Web Development Course, that proved to be much more fun than anticipated

        I had very minimal experience with frontend before this course, but I actually learned a lot by simply working on both my website here, and this project
        
        The site is written with vanilla HTML, CSS, and Javascript and shows my attempt at a Pet Store, featuring my own pet."
        thumbnail=".../public/github.png"
        link="www.google.com"
        />
        </div>
    )


}