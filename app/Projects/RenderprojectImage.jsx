export default function RenderprojectImage({ name, image }) {
  return (
    <div className="w-full">
      <p className="font-bold text-4xl m-5 text-center">{name}</p>
      <img className="w-auto max-w-lg self-center mx-auto  object-cover" src={image} />
    </div>
  );
}
