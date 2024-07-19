import Renderbutton from "../components/Renderbutton.jsx";
export default function RenderprojectDesc({ desc, link, thumbnail }) {
  return (
    <div className="w-full">
      <p className=" text-base tracking-wide font-bold tip">{desc}</p>
      <Renderbutton link={link} image={thumbnail} />
    </div>
  );
}
