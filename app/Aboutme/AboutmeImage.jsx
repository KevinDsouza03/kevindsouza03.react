import { Button } from "@headlessui/react"

export default function AboutmeImage() {
    return(
        <div className="w-auto max-w-md">
            <img src="linkedin-pfp.png" alt="Picture of Me"/>
            <div className="">
                <Button className="rounded p-2 text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700 mx-2 mt-2">
                    <a href="https://www.linkedin.com/in/kevindsouza03/">
                            <img className="size-10" src="linkedin.png"/>
                        </a>
                </Button>
                <Button className="rounded p-2 text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700 mx-2 mt-2 ">
                    <a href="https://github.com/KevinDsouza03">
                            <img className="size-10" src="github.png"/>
                        </a>
                </Button>
            </div>
        </div>
    )
    
}