import { Button } from "@headlessui/react";
import Link from "next/link";

export default function AboutmeImage() {
  return (
    <div className="w-auto max-w-md md:max-w-xs">
      <img src="linkedin-pfp.png" alt="Picture of Me" className="rounded animate-fadeIn max-w-full max-h-full"/>
      <div className="text-center flex justify-center">
        <Button className="rounded p-2 transition duration-400 hover:scale-110  text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700 mx-2 mt-2">
          <a href="https://www.linkedin.com/in/kevindsouza03/" target="_blank">
            <img className="w-6 h-6 sm:w-8 sm:h-8 object-contain" src="/linkedin.png" />
          </a>
        </Button>
        <Button className="rounded p-2 transition duration-400 hover:scale-110  text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700 mx-2 mt-2 ">
          <a href="https://github.com/KevinDsouza03" target="_blank">
            <img className="w-6 h-6 sm:w-8 sm:h-8 object-contain" src="/github.png" />
          </a>
        </Button>
        <Button className="rounded font-semibold transition duration-400 hover:scale-110  py-2 px-4 text-lg text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700 mx-2 mt-2 ">
          <Link href="/CV">
            <p>Resume</p>
          </Link>
        </Button>
      </div>
    </div>
  );
}
