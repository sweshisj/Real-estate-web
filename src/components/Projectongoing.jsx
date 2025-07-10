function Projectongoing({name,type,desc,location,img}){
    return(
        <>
        <div className="w-[400px] h-[420px] ml-15 mt-8 bg-white shadow-xl">
            <div className="p-4">
                <div className="relative">
                    <img className="w-[370px] h-[275px] object-cover" src={img} alt="" />
                    <p className="absolute top-2 left-0 bg-neutral-800 text-white text-sm font-medium rounded-tr-lg rounded-br-lg px-2 py-1.5">{location}</p>
                </div>
                <div className="flex items-end justify-between">
                    <p className="text-xl font-bold mt-2 w-full">Project : {name}</p>
                    <p className="text-sm px-3 py-1 rounded font-medium mb bg-green-700 text-white">{type}</p>
                </div>
                    <p className="text-[10px] text-neutral-600 font-medium mt-6">{desc}</p>
            </div>
        </div>
        </>
    )
}
export default Projectongoing

