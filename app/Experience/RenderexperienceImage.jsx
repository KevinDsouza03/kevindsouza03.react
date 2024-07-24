export default function RenderexperienceImage({ image }) {
  return (
    <div className="w-full">
      <img className="w-auto max-w-full self-center mx-auto  object-cover" src={image}></img>
    </div>
  );
}
