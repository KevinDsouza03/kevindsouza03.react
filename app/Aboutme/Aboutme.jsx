import AboutmeDesc from "./AboutmeDesc.jsx";
import AboutmeImage from "./AboutmeImage";

export default function Aboutme() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-16 md:gap-24 lg:gap-32 my-8 px-4 sm:px-8 md:px-16 lg:px-24">
      <AboutmeDesc />
      <AboutmeImage />
    </div>
  );
}