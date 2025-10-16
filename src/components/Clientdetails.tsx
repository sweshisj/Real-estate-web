import Navbar from "./Navbar";
import Data, { Client, ClientStatus } from "../data/Data";
import { useParams } from "react-router-dom";
import {
EnvelopeIcon,
PhoneIcon,
MapPinIcon,
UserIcon,
CheckCircleIcon,
ExclamationCircleIcon,
XCircleIcon,
} from "@heroicons/react/24/outline";

type RouteParams = {
name?: string;
};

function getRing(status: ClientStatus) {
if (status === "Red") return "ring-red-400";
if (status === "Amber") return "ring-amber-400";
if (status === "Green") return "ring-green-400";
return "";
}

function Clientdetails() {
const { name } = useParams<RouteParams>();
const decoded = name ? decodeURIComponent(name) : "";
const client: Client | undefined = Data.find((c) => c.name === decoded);

if (!client) {
return (
<>
<Navbar />
<div className="mt-32 px-4">
<h1 className="text-2xl font-bold text-red-600">Client not found</h1>
</div>
</>
);
}

const photoRingClass = getRing(client.status);

return (
<>
<Navbar />
<div className="mt-30 flex flex-col lg:flex-row lg:items-baseline lg:ml-2 px-4">
<h1 className="text-2xl lg:text-3xl font-bold pr-3 text-green-700">{client.name}</h1>
<h1 className="text-lg text-neutral-500 font-bold">Profession: {client.profession}</h1>
</div>

  <div className="flex flex-col lg:flex-row lg:gap-5 px-4">
    {/* Left Column */}
    <div className="flex flex-col items-center lg:items-start">
      {/* Overview Card */}
      <div className="mt-5 bg-white w-full max-w-[500px] shadow-md rounded-lg">
        <h1 className="text-xl font-bold text-neutral-700 border-b border-neutral-300 px-6 py-4">
          Overview
        </h1>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-14 px-6 py-6">
          <img
            className={`rounded-full w-28 h-28 sm:w-32 sm:h-32 object-cover ring-4 ${photoRingClass}`}
            src={client.photo}
            alt={client.name}
          />
          <div className="text-center sm:text-left">
            <p className="text-lg font-bold text-neutral-500 mb-2">{client.name}</p>
            <p className="text-lg font-bold text-neutral-500">Need: {client.need}</p>
          </div>
        </div>
      </div>

      {/* Personal Info Card */}
      <div className="mt-5 bg-white w-full max-w-[500px] shadow-lg rounded-lg group">
        <h1 className="text-xl font-bold text-neutral-700 border-b border-neutral-300 px-6 py-4">
          Personal Info
        </h1>
        <div className="px-6 py-4 space-y-4">
          {[
            { icon: UserIcon, label: "Name", value: client.name },
            { icon: EnvelopeIcon, label: "Email", value: client.email },
            { icon: PhoneIcon, label: "Phone", value: client.number },
            { icon: MapPinIcon, label: "Location", value: client.location },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon className="w-5 h-5 text-green-500" />
              <p className="text-lg text-neutral-500 font-bold">
                {label}: {value}
              </p>
            </div>
          ))}

          {/* Status */}
          <div className="flex items-center gap-2 transform transition-transform duration-300 group-hover:scale-105">
            {client.status === "Green" && (
              <>
                <CheckCircleIcon className="w-5 h-5 text-green-500" />
                <p className="text-lg text-green-600 font-bold">Status: {client.status}</p>
              </>
            )}
            {client.status === "Amber" && (
              <>
                <ExclamationCircleIcon className="w-5 h-5 text-amber-400" />
                <p className="text-lg text-amber-400 font-bold">Status: {client.status}</p>
              </>
            )}
            {client.status === "Red" && (
              <>
                <XCircleIcon className="w-5 h-5 text-red-500" />
                <p className="text-lg text-red-500 font-bold">Status: {client.status}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>

    {/* Right Column */}
    <div className="mt-6 lg:mt-0 flex-1">
      <h1 className="text-2xl lg:text-4xl font-bold text-black">Expected Property: {client.need}</h1>
      <h1 className="text-lg lg:text-xl font-bold mt-2 text-blue-500">Budget: {client.budget}</h1>
      <div className="w-full mt-4 relative group transition-all">
        <img
          className="w-full max-w-full h-64 sm:h-[480px] object-cover shadow-md"
          src={client.propertyImage}
          alt={`${client.need} example`}
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300">
          <p className="absolute left-4 bottom-12 text-base  mb-2 sm:text-xl font-bold text-neutral-200">
            Location: {client.location}
          </p>
          <p className="absolute left-4 bottom-4 text-[10px] sm:text-md font-bold text-neutral-200 pr-4">
            {client.expectation}
          </p>
        </div>
      </div>
    </div>
  </div>
</>
);
}
export default Clientdetails;