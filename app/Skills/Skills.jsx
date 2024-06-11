
import SkillsCard from './Skillscard.jsx'

const languages = [
    "https://img.shields.io/badge/C%2B%2B-gray?style=for-the-badge&logo=C%2B%2B",
    "https://img.shields.io/badge/Python-blue?style=for-the-badge&logo=python&labelColor=gray&color=blue",  
    "https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge&logo=javascript&labelColor=black",
    "https://img.shields.io/badge/HTML5-white?style=for-the-badge&logo=html5",
    "https://img.shields.io/badge/SQL-%23ffd7b5?style=for-the-badge&logo=mysql"
]

const frameworks = [
    "https://img.shields.io/badge/react-blue?style=for-the-badge&logo=react",
    "https://img.shields.io/badge/scikit-learn-orange?style=for-the-badge&labelColor=blue"
]   

const devTools = [
    "https://img.shields.io/badge/git-gray?style=for-the-badge&logo=git",
    "https://img.shields.io/badge/VSCode-%23007ACC?style=for-the-badge&logo=visualstudio"
]

const libraries = [
    "https://img.shields.io/badge/pandas-%2300008B?style=for-the-badge",
    "https://img.shields.io/badge/plotly-%23efefef?style=for-the-badge&logo=plotly&labelColor=gray",
    "https://img.shields.io/badge/beautifulSoup4-%23a1caf1?style=for-the-badge&logo=pypi",
    "https://img.shields.io/badge/Selenium-white?style=for-the-badge&logo=selenium&logoColor=white&labelColor=green"
]

export default function Skills() {
    return(
        <div className="flex my-8 items-stretch ">
            <SkillsCard name="Languages" images={languages}/> 
            <SkillsCard name="Frameworks" images={frameworks}/>
            <SkillsCard name="Dev Tools" images={devTools}/> 
            <SkillsCard name="Libraries" images={libraries}/> 
            
        </div>


    )

}