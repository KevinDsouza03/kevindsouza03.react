export default function Projectscard({ image, name, desc, thumbnail, link }) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12 md:gap-16 p-4 sm:p-6 md:p-8 border-b-2 border-gray-200">
      <div className="w-full sm:w-1/2">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-4 text-center sm:text-left">{name}</h2>
        <img className="w-full h-auto object-cover rounded-lg shadow-lg" src={image} alt={name} />
      </div>
      <div className="w-full sm:w-1/2">
        <p className="text-base sm:text-lg md:text-xl mb-4">{desc}</p>
        <div className="flex justify-center sm:justify-start">
          <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block">
            <img className="w-8 h-8 transition-transform duration-300 ease-in-out hover:scale-110" src={thumbnail} alt="Project link" />
          </a>
        </div>
      </div>
    </div>
  );
}