import { Link } from "react-router-dom"
function Clientcard({img,name,email}){
    return(
        <>
        <Link to={`/${name}`}>
        <div className="group transition-all">
            <div className="w-[330px] flex items-center gap-4 mx-auto bg-white p-3 shadow-md ml-1 mr-2 group-hover:bg-green-50 group-hover:p-3 group-hover:rounded-2xl transition-all duration-300">
                <img className="w-20 h-20 object-cover rounded-full flex-shrink-0" src={img} alt="" />
                <div className="flex flex-col justify-center">
                    <p className="font-medium group-hover:text-[20px] group-hover:text-green-700 group-hover:font-bold ease-in-out transition-all duration-300">{name}</p>
                    <p className="font-medium group-hover:text-[15px] group-hover:text-neutral-500 group-hover:font-bold ease-in-out transition-all duration-300">{email}</p>
                </div>
            </div>
        </div>
        </Link>
        </>
    )
}
export default Clientcard