import RenderexperienceDesc from "./RenderexperienceDesc.jsx";
import RenderexperienceImage from "./RenderexperienceImage.jsx";

export default function Experiencecard({ image, name, desc }) {
  return (
    <div className="border-solid border-b-2 p-5 flex flex-col w-full h-full shadow-md rounded-lg bg-slate-50 bg-opacity-5 hover:bg-opacity-10 transition-all">
      <RenderexperienceImage image={image} />
      <RenderexperienceDesc name={name} desc={desc} />
    </div>
  );
}