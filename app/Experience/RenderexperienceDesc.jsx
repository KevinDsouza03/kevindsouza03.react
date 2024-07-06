export default function RenderexperienceDesc({ name, desc }) {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-semibold">{name}</h1>
      <p className="text-2xl">{desc}</p>
    </div>
  );
}
