export default function RenderexperienceDesc({ name, desc,}) {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-semibold text-olive-light">{name}</h1>
      <p className="text-xl md:text-1xl text-light-mint font-libre">{desc}</p>
    </div>
  );
}
