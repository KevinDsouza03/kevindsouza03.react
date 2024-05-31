
import RenderprojectImage from './RenderprojectImage.jsx'
import RenderprojectDesc from './RenderprojectDesc.jsx'

export default function ProjectsCard({image, name, desc}) { //Image is the path to my image, name is str, desc is
    return (
        <div className="flex m-10 items-center gap-40  border-b-2 p-10">
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