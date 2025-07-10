import Navbar from "../components/Navbar"
import Projectongoing from "../components/Projectongoing"
import Projectdata from "../data/Projectdata"
import Projectcompleted from "../data/Projectcompleted"
import ProjectUpcoming from "../data/Projectupcoming"
function Project(){
    return(
        <>
        <Navbar />
        <h1 className="mt-25 font-bold text-green-700 text-3xl pl-15 pt-6">Ongoing Projects</h1>
        
        <div className="flex gap-9 flex-wrap">
            {
                Projectdata.map(project=><Projectongoing name={project.name} type={project.type} desc={project.description} img={project.image} location={project.location}/>)
            }
        </div>

        <h1 className="mt-6 font-bold text-green-700 text-3xl pl-15 pt-6">Completed Projects</h1>
        
                <div className="flex gap-9 flex-wrap">
            {
                Projectcompleted.map(project=><Projectongoing name={project.name} type={project.type} desc={project.description} img={project.image} location={project.location}/>)
            }
        </div>

                <h1 className="mt-6 font-bold text-green-700 text-3xl pl-15 pt-6">Upcoming Projects</h1>
        
                <div className="flex gap-9 flex-wrap">
            {
                ProjectUpcoming.map(project=><Projectongoing name={project.name} type={project.type} desc={project.description} img={project.image} location={project.location}/>)
            }
        </div>

        </>
    )
}
export default Project