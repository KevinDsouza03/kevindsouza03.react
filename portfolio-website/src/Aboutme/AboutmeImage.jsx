import { Button } from "@headlessui/react"
export default function AboutmeImage() {
    return(
        <div className="w-auto max-w-md">
            <img src="../assets/linkedin-pfp.png" alt="Picture of Me"/>
            <div className="inline-block justify-center">
                <Button className="rounded text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700 ">
                    <a href="https://www.linkedin.com/in/kevindsouza03/">
                            <img className="size-7" src="../../assets/linkedin.png"/>
                        </a>
                </Button>
                <Button className="rounded  text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
                    <a href="https://github.com/KevinDsouza03">
                            <img className="size-7" src="../../assets/github.png"/>
                        </a>
                </Button>
            </div>
        </div>
    )
    
}