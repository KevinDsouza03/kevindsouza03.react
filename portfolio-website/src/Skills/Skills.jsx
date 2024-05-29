
import SkillsCard from './Skillscard.jsx'

const languages = [
    "https://img.shields.io/badge/with%20a%20logo-grey?style=for-the-badge&logo=javascript"
]

const frameworks = [

]

const devTools = [

]

const libraries = [

]

export default function Skills() {
    return(
        <div className="flex my-8 items-stretch">
            <SkillsCard name="Languages" images={languages}/> 
            <SkillsCard name="Frameworks" images={frameworks}/>
            <SkillsCard name="Dev Tools" images={devTools}/> 
            <SkillsCard name="Libraries" images={libraries}/> 
            
        </div>


    )

}