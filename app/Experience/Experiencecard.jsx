
import RenderexperienceDesc from "./RenderexperienceDesc.jsx"
import RenderexperienceImage from "./RenderexperienceImage.jsx"

export default function Experiencecard({image, name, desc}) {
    return(
        <div className="flex m-10 items-center gap-40 border-solid border-b-2 p-5">
            <RenderexperienceImage image={image}/>
            <RenderexperienceDesc name={name} desc={desc} />
        </div>

    )

}