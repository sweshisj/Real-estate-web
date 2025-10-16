import Navbar from "../components/Navbar";
import Clientcard from "../components/Clientcard";
import Data from "../data/Data";

function Client() {
return (
<>
<Navbar />
<div className="scale">
<h1 className="text-center text-green-700 font-bold text-3xl mt-44 mb-5">Client Details</h1>
<p className="text-center text-neutral-700 mt-2 max-w-2xl mx-auto font-medium mb-20">
At Green Carpet, we are proud to work with a diverse range of clients who trust us to bring their real estate dreams to life.
Whether building a luxury villa or finding the perfect apartment, each story is unique—and we’re honored to be part of it.
</p>
</div>
<div className="flex flex-wrap justify-center gap-16">
{Data.map((client) => (
<Clientcard key={client.email} img={client.photo} name={client.name} email={client.email} />
))}
</div>
</>
);
}
export default Client;