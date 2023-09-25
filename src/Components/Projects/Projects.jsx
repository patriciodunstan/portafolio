'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const accessToken = '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';
    const getRepos = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/users/patriciodunstan/repos',
          {
            headers: {
              Authorization: `token ${accessToken}`
            }
          }
        );
        setProjects(response.data);
      } catch (error) {
        console.error('Error al obtener respositorios:', error);
      }
    };
    getRepos();
  }, []);

  return (
    <div id="Projects">
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-black">Proyectos</h2>
          <ul className="grid grid-cols-3 auto-cols-fr gap-4">
            {projects.map((projects) => (
              <li
                key={projects.id}
                className="flex flex-col gap-4 p-4 w-full md:w-1/3p-4 bg-black text-white rounded"
              >
                <Link href={projects.html_url}>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{projects.name}</h3>
                    <p className="text-base text-opacity-90">
                      {projects.description}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Projects;
