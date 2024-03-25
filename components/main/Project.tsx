"use client"
import React from 'react';
import ProjectCard from '../sub/ProjectCard';
import Link from 'next/link';


const Project = () => {
  // Function to handle clicking on the "See all projects" button
  const handleSeeAllProjects = () => {
    console.log('Button clicked!');
    window.open('https://github.com/erncak?tab=repositories', '_blank');
    
  };

  return (
    <div className='flex flex-col items-center justify-center py-20'>
    <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
      My Projects
    </h1>

    <div className='flex flex-wrap justify-center gap-10 px-10'>
      <ProjectCard
        src="/Flight.jpg"
        title="Flight Search Api"
        description="Flight Search Api with role based authentication"
        githubLink="https://github.com/erncak/FlightSearchApi"
      />
      <ProjectCard
        src="/Senior.jpeg"
        title="Smart Agriculture"
        description="Smart Agriculture app that monitor,reads and operate robots for users"
        githubLink="https://github.com/uemrecelik/term-project-server"
      />
      <ProjectCard
        src="/SpaceWebsite.png"
        title="Space Themed Website"
        description="Space themed website created with Next.js"
        githubLink="https://github.com/erncak/Portfolio"
      />
    </div>
  </div>
  );
}

export default Project;
