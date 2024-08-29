import AboutmeDesc from "./AboutmeDesc.jsx";
import AboutmeImage from "./AboutmeImage";
export default function Aboutme() {
  return (
    <div className="flex my-8 items-center gap-40 animate-fadeIn flex-col sm:flex-row w-full sm:w-1/2">
      <AboutmeDesc />
      <AboutmeImage />
    </div>
  );
}
