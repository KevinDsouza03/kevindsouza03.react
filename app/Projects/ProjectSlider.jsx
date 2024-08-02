import { useState} from "react"
import { ArrowBigLeft, ArrowBigRight } from "lucide-react"
import ProjectsCard from './ProjectsCard'
export default function ProjectSlider({projectList}) {
    const [projectIndex, setProjectIndex] = useState(0) // 0-4 

    function showNextProject() {
        setProjectIndex(index=> {
            if (index === projectList.length - 1 ) return 0
            return index + 1
        })
        
    }

    function showPrevProject() {
        setProjectIndex(index=> {
            if (index === 0) return projectList.length - 1
            return index-1
        })

    }
    return (
        <div className="w-full h-full relative overflow-hidden ">
            <div className="w-full h-full flex overflow-hidden"
                    style={{ 
                        transform: `translateX(-${projectIndex * 100}%)`
                    }}>
                {projectList.map(key =>
                    projectList[key]
                )}
            </div>
            {/* {projectList[projectIndex]}  */}
            <button 
            onClick={showPrevProject}
            className="absolute top-0 bot-0 p-1 cursor-pointer left-0 rounded hover:bg-slate-400 transition duration-400 data-[hover]:transit">
                <ArrowBigLeft />
                </button>
            <button 
            onClick={showNextProject}
            className="absolute top-0 bot-0 p-1 cursor-pointer right-0 rounded hover:bg-slate-400 transition duration-400 data-[hover]:transit">
                <ArrowBigRight/>
                </button>
        </div>

    )

}