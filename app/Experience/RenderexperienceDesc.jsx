export default function RenderexperienceDesc({ name, desc,}) {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-semibold text-olive-light">{name}</h1>
        <ul className="list-disc pl-5 space-y-2">
          {desc.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
    </div>
  );
}
