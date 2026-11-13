"use client";

import Image from "next/image";
import type { Project } from "@/lib/site";

function ProjectVisual({ project }: { project: Project }) {
  if (project.illustration === "identity") {
    return <div className="visual-brand" aria-hidden="true"><span>E</span><span>C</span><span>L</span><span>A</span></div>;
  }

  if (project.illustration === "print") {
    return <div className="visual-print" aria-hidden="true"><div className="paper paper-one">ON IMAGINE<br/><strong>DEMAIN.</strong></div><div className="paper paper-two"><span className="paper-mark">A</span> CRÉER<br/>AUTREMENT</div></div>;
  }

  return <div className="visual-editorial" aria-hidden="true"><span>FAIRE</span><span>GRANDIR</span><span>LES IDÉES.</span><b aria-hidden="true" /></div>;
}

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return <>
    <div className="project-grid" aria-live="polite">
      {projects.map((project, index) => <article className={`project-card project-${project.illustration} ${index === 0 ? "project-card-featured" : ""}`} key={project.id}>
        <div className="project-visual">{project.image ? <Image className="project-image" src={project.image} alt={`${project.title}, ${project.category}`} fill sizes="(max-width: 700px) 100vw, 34vw"/> : <ProjectVisual project={project}/>}</div>
        <div className="project-meta"><div><span>{project.category}</span><h3>{project.title}</h3><p>{project.description}</p></div></div>
      </article>)}
    </div>
  </>;
}
