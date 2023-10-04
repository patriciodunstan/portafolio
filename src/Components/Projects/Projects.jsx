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
      <h2 className="flex justify-content items-center text-5xl text-center mb-4">
        Proyectos
      </h2>
      <div className="flex flex-row justify-center top-0 my-4">
        <div className="text-center">
          <ul className="grid grid-cols-3 auto-cols-fr gap-1">
            {projects.map((projects) => (
              <li
                key={projects.id}
                className="flex flex-col gap-4 p-1 w-full md:w-1/3p-4 bg-black text-white border rounded border-gray-500"
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
