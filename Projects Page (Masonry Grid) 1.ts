// Filtering Logic
interface Project {
  id: number;
  title: string;
  category: "Web Design" | "Apps" | "UI/UX";
  description: string;
}

const projects: Project[] = [
  { id: 1, title: "E-Commerce Site", category: "Web Design", description: "..." }
];

function filterProjects(category: string) {
  const filtered = category === "All" 
    ? projects 
    : projects.filter(p => p.category === category);
  
  // Render filtered projects dynamically
}