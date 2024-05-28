export default function Skillscard({name, images}) {
    return(
        <div className="bg-[#64748b] space-x-2 m-10 items-center">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div class="px-6 py-4">
                    <p className="text-white-700 text-base">
                        {name}
                    </p>
                </div>
                <div class="px-6">
                    <img src={images[0]}></img>
                </div>
            </div>
        </div>

    )

}