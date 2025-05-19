export default function Projectscard({ image, name, desc, thumbnail, link, technologies = [] }) {
  return (
    <div className="flex flex-col h-full p-4 border border-gray-700 rounded-lg bg-slate-800 bg-opacity-20 hover:bg-opacity-30 transition-all">
      <h2 className="font-bold text-xl md:text-2xl mb-4 text-center text-olive-light">{name}</h2>
      
      <div className="mb-4 flex-shrink-0">
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          <img 
            className="w-full h-64 md:h-72 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer" 
            src={image} 
            alt={name}
          />
        </a>
      </div>
      
      {/* Technology badges */}
      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-3 py-1 text-xs font-medium rounded-full bg-olive-light text-slate-900"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      
      <div className="flex-grow overflow-y-auto">
        <ul className="list-disc pl-5 text-sm md:text-base mb-4 text-light-mint font-libre space-y-2">
          {Array.isArray(desc) ? (
            desc.map((point, index) => (
              <li key={index}>{point}</li>
            ))
          ) : (
            <li>{desc}</li>
          )}
        </ul>
      </div>
      
      <div className="flex justify-center mt-auto pt-2">
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 px-4 py-2 bg-olive-light text-slate-900 rounded-md hover:bg-light-mint transition-colors"
        >
          <img className="w-5 h-5" src={thumbnail} alt="Project link" />
          <span>View Project</span>
        </a>
      </div>
    </div>
  );
}