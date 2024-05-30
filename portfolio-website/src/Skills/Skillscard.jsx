export default function Skillscard({name, images}) {
    return(
        <div className="bg-[#64748b] space-x-2 m-10 items-center border-dashed border-2 ">
            <div className="max-w-sm overflow-hidden shadow-lg size-64">
                <div class="px-6 py-10 ">
                    <p className="text-white-700 text-base border-b-2 ">
                        {name}
                    </p>
                </div>
                <div class="px-6 ">
                    {images.map((url, index) => (
                        <img key={index} src={url} />
                    ))}
                </div>
            </div>
        </div>

    )

}