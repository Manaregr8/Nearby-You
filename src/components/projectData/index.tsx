"use client"; // Only for Next.js App Router
import { useEffect, useState } from "react";
import "@/components/projectData/projects.css";
// Define the repository data structure
interface Repo {
  id: number;
  html_url: string;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;  // Add forks_count
}

const RepoList = () => {
  const [repos, setRepos] = useState<Repo[]>([]); // Specify Repo type for the array
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("/api/github"); // Ensure endpoint is correct
        if (!response.ok) throw new Error("Network response was not ok");
        const data: Repo[] = await response.json(); // Cast the response data to Repo[]
        setRepos(data);
      } catch (err) {
        if (err instanceof Error) {  // Narrow down the error type
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    };

    fetchRepos();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!repos.length) return <div>Loading repositories...</div>;

  return (
    <div className="projectsCard grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {repos.map((repo) => (
       <div
       key={repo.id}
       className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700"
     >
       <h2 className="text-xl font-bold mb-2 dark:text-gray-400 text-gray-900">
         <a
           href={repo.html_url}
           target="_blank"
           rel="noopener noreferrer"
           className="text-blue-600 dark:text-blue-400 hover:underline"
         >
           {repo.name}
         </a>
       </h2>
       <p className="text-gray-700 dark:text-[rgb(136,143,155)]">
         {repo.description || "No description available."}
       </p>
       <div className="flex justify-between items-center mt-4">
         <span className="text-sm text-gray-600 dark:text-[rgb(136,143,155)]">
           Language: {repo.language || "N/A"}
         </span>
         <span className="text-sm text-gray-600 dark:text-[rgb(136,143,155)]">
           ⭐ {repo.stargazers_count}
         </span>
       </div>
     </div>
     
      ))}
    </div>
  );
};

export default RepoList;
