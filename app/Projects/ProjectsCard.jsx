import RenderprojectImage from "./RenderprojectImage.jsx";
import RenderprojectDesc from "./RenderprojectDesc.jsx";
export default function Projectscard({ image, name, desc, thumbnail, link }) {
  //Image is the path to my image, name is str, desc is
  return (
    <div className="flex m-10 items-center gap-40 border-solid border-b-2 p-5">
      <RenderprojectImage image={image} name={name} />
      <RenderprojectDesc
        name={name}
        desc={desc}
        thumbnail={thumbnail}
        link={link}
      />
    </div>
  );
}
