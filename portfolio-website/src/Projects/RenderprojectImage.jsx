
export default function RenderprojectImage({name,image}) {
    return(
        <div className="float-left w-auto max-w-lg h-96 m-10 transform: translate-x-5">
            <p className="font-bold text-4xl m-5">{name}</p>
            <img className="" src={image}/>
        </div>

    )
    
    



}