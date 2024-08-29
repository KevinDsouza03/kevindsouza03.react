import RenderexperienceDesc from "./RenderexperienceDesc.jsx";
import RenderexperienceImage from "./RenderexperienceImage.jsx";

export default function Experiencecard({ image, name, desc }) {
  return (
    <div className="border-solid border-b-2 p-5 grid ">
      <RenderexperienceImage image={image} />
      <RenderexperienceDesc name={name} desc={desc} />
    </div>
  );
}
