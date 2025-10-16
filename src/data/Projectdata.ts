export type ProjectStatus = "Ongoing" | "Completed" | "Upcoming";
export type ProjectType = "Apartment" | "Villa" | "Plot";

export interface Project {
name: string;
type: ProjectType;
location: string;
status: ProjectStatus;
image: string;
description: string;
}

const Projectdata: Project[] = [
{
name: "Greenwood",
type: "Apartment",
location: "Bangalore",
status: "Completed",
image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
description:
"Modern apartments offering spacious balconies with beautiful city views. Designed to provide a vibrant community atmosphere. Equipped with state-of-the-art amenities. Ideal for families seeking comfort and convenience.",
},
{
name: "Sunrise Villas",
type: "Villa",
location: "Chennai",
status: "Ongoing",
image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
description:
"Luxury villas designed for elegant and comfortable family living. Each villa features private gardens and ample natural light. Contemporary architecture blends seamlessly with lush surroundings. A perfect retreat that feels like home.",
},
{
name: "Elite Plots",
type: "Plot",
location: "Hyderabad",
status: "Upcoming",
image:
"https://images.unsplash.com/photo-1562346789-93ebb0db9673?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHBsb3RzfGVufDB8fDB8fHww",
description:
"Premium plots located in a secure, gated community with excellent connectivity. Thoughtfully planned layout with wide roads and utility access. Ideal for building your dream home in a tranquil environment.",
},
{
name: "Silver Heights",
type: "Apartment",
location: "Pune",
status: "Completed",
image:
"https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
description:
"A contemporary apartment complex with spacious units and rooftop amenities. Beautifully landscaped common areas and secure parking. Designed for modern urban living in a prime location. Fully sold out and ready for possession.",
},
{
name: "Palm Grove Villas",
type: "Villa",
location: "Goa",
status: "Completed",
image:
"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
description:
"Premium villas nestled amid lush greenery and serene surroundings. Each villa features private pools and modern architecture. Ideal for luxurious weekend getaways or full-time living. Completed on schedule and handed over to buyers.",
},
{
name: "Heritage Plots",
type: "Plot",
location: "Jaipur",
status: "Completed",
image:
"https://images.unsplash.com/photo-1623298317883-6b70254edf31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHZpbGxhfGVufDB8fDB8fHww",
description:
"Fully developed plots with clear titles in a gated community. Complete infrastructure with roads, water, and electricity connections. Perfect for building custom homes in a peaceful neighborhood. All plots sold and ready for construction.",
},
{
name: "Lakeview Heights",
type: "Apartment",
location: "Pune",
status: "Ongoing",
image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
description:
"Elegant high-rise apartments overlooking the serene lake. Designed with modern interiors and smart home features. Amenities include a clubhouse, swimming pool, and fitness center. A perfect blend of luxury and nature.",
},
{
name: "Palm Grove Villas",
type: "Villa",
location: "Goa",
status: "Ongoing",
image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7",
description:
"Exclusive villas nestled among lush palm trees, offering privacy and luxury. Spacious layouts with large terraces and private pools. Contemporary design with premium finishes throughout. Ideal for a resort-style living experience.",
},
{
name: "Urban Enclave",
type: "Apartment",
location: "Mumbai",
status: "Ongoing",
image:
"https://plus.unsplash.com/premium_photo-1663948061993-aae860bf5685?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBsb3RzfGVufDB8fDB8fHww",
description:
"Stylish apartments located in the heart of the city. Features modern amenities and beautifully landscaped gardens. Designed for urban professionals and growing families. A vibrant community with everything within reach.",
},
{
name: "Emerald Residency",
type: "Apartment",
location: "Bangalore",
status: "Upcoming",
image:
"https://plus.unsplash.com/premium_photo-1676321046262-4978a752fb15?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcm1lbnR8ZW58MHx8MHx8fDA%3D",
description:
"Upcoming premium apartments offering modern architecture and smart home features. Located in a vibrant neighborhood with excellent connectivity. Designed for families and professionals seeking convenience. Launching soon with early bird offers.",
},
{
name: "Horizon Villas",
type: "Villa",
location: "Hyderabad",
status: "Upcoming",
image:
"https://images.unsplash.com/photo-1626249893783-cc4a9f66880a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHZpbGxhfGVufDB8fDB8fHww",
description:
"Exclusive villa project nestled amidst serene surroundings. Spacious floor plans with private gardens and terraces. Contemporary design with luxury finishes throughout. Pre-bookings open for discerning buyers.",
},
{
name: "Sunset Meadows",
type: "Plot",
location: "Chennai",
status: "Upcoming",
image:
"https://images.unsplash.com/photo-1686358244616-aed9e9a1d827?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHBsb3R8ZW58MHx8MHx8fDA%3D",
description:
"Premium plots in a secure gated community with wide roads and landscaped parks. Ideal for building your dream home in a peaceful setting. Excellent investment potential with planned infrastructure development. Reservations starting soon.",
},
];

export default Projectdata;

