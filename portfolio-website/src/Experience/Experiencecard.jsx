
import RenderexperienceDesc from "./RenderexperienceDesc.jsx"
import RenderexperienceImage from "./RenderexperienceImage.jsx"

export default function Experiencecard({image, name, desc}) {
    return(
        <div className="">
            <RenderexperienceImage image={image}/>
            <RenderexperienceDesc name={name} desc={desc} />
        </div>

    )

}