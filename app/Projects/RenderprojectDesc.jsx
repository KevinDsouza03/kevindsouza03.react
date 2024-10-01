import Renderbutton from "../components/Renderbutton.jsx";
export default function RenderprojectDesc({ desc, link, thumbnail }) {
  return (
    <div className="w-full">
      <p className="text-lg tracking-widest text-center md:text-base text-light-mint">{desc}</p>
      <div className=" flex items-center justify-center">
      <Renderbutton  link={link} image={thumbnail} />
      </div>
    </div>
  );
}
