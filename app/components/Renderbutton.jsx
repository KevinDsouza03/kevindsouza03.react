import { Button } from "@headlessui/react";
export default function Renderbutton({ link, image }) {
  return (
    <Button className="rounded  text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700 mx-2 mt-2 ">
      <a href={link} target="_blank">
        <img className="size-7" src={image} />
      </a>
    </Button>
  );
}
