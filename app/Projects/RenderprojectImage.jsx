export default function RenderprojectImage({ name, image }) {
  return (
    <div className="w-full ">
      <p className="font-bold text-4xl m-5 text-center">{name}</p>
      <img className=" self-center mx-auto  object-contain h-[500px] w-full" src={image} />
    </div>
  );
}
