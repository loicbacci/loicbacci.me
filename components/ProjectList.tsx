import Link from 'next/link';
import React from 'react';

interface ProjectListProps {
  projectsMeta: ProjectMeta[]
}

const ProjectList = ({ projectsMeta }: ProjectListProps) => (
  <div className="grid gap-2 lg:gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
    {projectsMeta.map(({ slug, title, description }) => {
      const href = `/projects/${slug}`;

      return (
        <Link key={slug} href={href} passHref>
          <div className="flex flex-col card cursor-pointer">
            <p className="primary-text">{title}</p>
            <p className="description">{description}</p>
          </div>

        </Link>
      );
    })}
  </div>
);

export default ProjectList;
