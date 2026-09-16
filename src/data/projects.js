import coffee from "../assets/projects/coffee.jpeg";
import auto from "../assets/projects/auto.jpeg";
import furniteur from "../assets/projects/furniteur.jpeg";
import kashare from "../assets/projects/kashare.jpeg";
import travil from "../assets/projects/travil.jpeg";
import portfolio from "../assets/projects/portfolio.jpeg";

export const projects = [
  {
    id: 1,
    title: "Coffee Store – Coffee App",
    description:
      "A modern coffee store website with a clean and attractive design, featuring coffee products, smooth navigation, and a user-friendly interface.",
    tags: ["HTML", "CSS", "UX Design"],
    category: "web",
    img: coffee,
  },
  {
    id: 2,
    title: "Furnituer Store – Furniture App",
    description:
      "A modern furniture store website with a clean and attractive design, featuring furniture products, smooth navigation, and a user-friendly interface.",
    tags: ["HTML5", "CSS3"],
    category: "web",
    img: furniteur,
  },
  {
    id: 3,
    title: "Travelgo – Travel Booking",
    description:
    "A modern and responsive travel website with an attractive design, featuring popular destinations, travel services, and a user-friendly interface.",
    tags: ["HTML", "CSS", "TailwindCSS"],
    category: "web",
    img: travil,
  },
  {
    id: 4,
    title: "Auto Car Store – Car App",
    description:
      "A modern and responsive car website featuring different car models, detailed information, and a clean, user-friendly interface.",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "web",
    img: auto,
  },
  {
    id: 5,
    title: "Cashier – Management System",
    description:
      "A modern cashier management system designed to manage products, sales, and transactions with a simple and user-friendly interface.",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "web",
    img: kashare,
  },
  {
    id: 6,
    title: "My Portfolio – Personal Site",
    description:
      "A fully responsive personal portfolio site built with React and Tailwind CSS, featuring animated sections, a project showcase, skills proficiency rings, and a contact form.",
    tags: ["React", "Tailwind", "CSS", "Vite"],
    category: "portfolio",
    img: portfolio,
  },
];
