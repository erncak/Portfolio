import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  githubLink: string;
}

const ProjectCard = ({ src, title, description, githubLink }: Props) => {
  const handleCardClick = () => {
    window.open(githubLink, "_blank");
  };

  return (
    <div className="overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer w-full md:w-80">
      <div onClick={handleCardClick}>
        <img
          src={src}
          alt={title}
          className="w-full h-48 object-contain"
          // Set a fixed height for the image (adjust h-48 to the desired height)
        />
      </div>

      <div className="p-4">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-semibold text-red-500 block hover:underline"
        >
          {title}
        </a>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
