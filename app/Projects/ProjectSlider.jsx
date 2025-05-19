import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

export default function ProjectSlider({ projectList }) {
  // Calculate how many items to show based on screen size
  const [currentPage, setCurrentPage] = useState(0);
  
  // Responsive items per page - just 1 on small screens, 2 on larger screens
  const getItemsPerPage = () => {
    // This is handled in the JSX with responsive classes, but we need it for calculations
    if (typeof window !== 'undefined') {
      return window.innerWidth < 1024 ? 1 : 2;
    }
    return 2; // Default for SSR
  };
  
  const itemsPerPage = getItemsPerPage();
  const totalPages = Math.ceil(projectList.length / itemsPerPage);
  
  function showNextPage() {
    setCurrentPage(page => (page + 1) % totalPages);
  }
  
  function showPrevPage() {
    setCurrentPage(page => (page === 0 ? totalPages - 1 : page - 1));
  }
  
  // Get current items to display
  const startIdx = currentPage * itemsPerPage;
  const visibleProjects = projectList.slice(startIdx, startIdx + itemsPerPage);
  
  return (
    <div className="w-full h-full relative z-10">
      <div className="flex flex-col lg:flex-row gap-8 animate-fadeIn">
        {visibleProjects.map((project, idx) => (
          <div key={`page-${currentPage}-item-${idx}`} className="w-full lg:w-1/2">
            {project}
          </div>
        ))}
      </div>
      
      {/* Only show navigation if there's more than one page */}
      {totalPages > 1 && (
        <>
          <button
            onClick={showPrevPage}
            className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-6 p-2 cursor-pointer rounded-full bg-slate-700 bg-opacity-70 hover:bg-slate-600 transition-all hover:scale-110">
            <ArrowBigLeft className="h-8 w-8 text-light-mint" />
          </button>
          <button
            onClick={showNextPage}
            className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-6 p-2 cursor-pointer rounded-full bg-slate-700 bg-opacity-70 hover:bg-slate-600 transition-all hover:scale-110">
            <ArrowBigRight className="h-8 w-8 text-light-mint" />
          </button>
          
          {/* Page indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={`page-indicator-${idx}`}
                onClick={() => setCurrentPage(idx)}
                className={`h-3 rounded-full transition-all ${
                  currentPage === idx 
                    ? "bg-olive-light w-8" 
                    : "bg-gray-400 w-3 hover:bg-gray-300"
                }`}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}