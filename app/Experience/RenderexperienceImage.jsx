export default function RenderexperienceImage({ image }) {
  return (
    <div className="w-full">
      <img className="h-[250px] w-[500px] max-w-full self-center mx-auto md:max-w-s object-cover" src={image}></img>
    </div>
  );
}
