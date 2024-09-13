export default function Skillscard({ name, images }) {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
      <div className="px-6 py-4 bg-gray-200">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{name}</h3>
      </div>
      <div className="p-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
        {images.map((url, index) => (
          <img key={index} src={url} alt={`Skill ${index + 1}`} className="w-full h-auto" />
        ))}
      </div>
    </div>
  );
}