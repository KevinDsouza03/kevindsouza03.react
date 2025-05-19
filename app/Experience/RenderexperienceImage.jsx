export default function RenderexperienceImage({ image }) {
  return (
    <div className="w-full flex justify-center">
      <img className="h-60 w-auto object-contain" src={image} alt={image} />
    </div>
  );
}