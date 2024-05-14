
import RenderprojectImage from './RenderprojectImage.jsx'
import RenderprojectDesc from './RenderprojectDesc.jsx'

export default function ProjectsCard({image, name, desc}) { //Image is the path to my image, name is str, desc is
    return (
        <div className="flex m-10 grid-cols-2 items-center">
            <RenderprojectImage 
                image = {image}
                name = {name}
            />
            <RenderprojectDesc 
                name = {name}
                desc = {desc}
            />
        </div>

    )




}