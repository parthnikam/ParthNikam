'use client'

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

type Project = {
  id: string
  title: string
  description: string
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    id: "llm-stuff",
    title: "LLM stuff",
    description: "foundations of llms that I've been learning and building from scratch.",
    github: "https://github.com/parthnikam/language-models-stuff",
    demo: "https://github.com/parthnikam/language-models-stuff",
  },
  {
    id: "gpu-stuff",
    title: "GPU stuff",
    description: "basics of gpu stuff that I've been learning. ",
    github: "https://github.com/parthnikam/gpu-stuff",
    demo: "https://github.com/parthnikam/gpu-stuff",
  },
  {
    id: "wiki-you",
    title: "Wiki You",
    description: "a wikipedia for your .md files inspired by Karpathy's wiki gist.",
    github: "https://github.com/parthnikam/wiki_you",
    demo: "https://github.com/parthnikam/wiki_you",
  },
  {
    id: "tag-team",
    title: "Toastmasters TAG App",
    description: "A clean tool for recording speaker metrics for your TAG team in Toastmasters meetings. Create a meeting and join as your TAG role, evaluate the speakers and submit your report.",
    github: "https://github.com/parthnikam/tag-team",
    demo: "https://usetagteam.vercel.app",
  },
  {
    id: "ai-mock-interview",
    title: "AI Mock Interviewer",
    description: "Test your mock interview communication skills with AI-powered mock interview system. Built for a 6 hour buildathon for voice agents.",
    github: "https://github.com/ParthNikam/ai-mock-interviewer",
    demo: "https://ai-mock-interviewer-omega.vercel.app",
  },
  {
    id: "mhash2026",
    title: "Swarify M# Hackathon October 2025",
    description: "Bidirectional LSTM to classify Indian Karnatic music. shit (model) barely worked during our presentation, still we made it to 6th place out of 30 teams.",
    github: "https://github.com/parthnikam/Swarify-M-hackathon-2025",
    demo: "",
  },
  {
    id: "oakhackfest",
    title: "Oak Hack Fest 2024",
    description: "Came first at a high-school hackathon. Built an AI study planner and flash-cards generator. The fine tuned llm remembered your mistakes and build your profile based on those mistakes, but I guess we were a little ahead of the current (2026) memory and RAG train.",
    github: "https://github.com/ParthNikam/oakhackfest_2024",
    demo: "",
  },
  {
    id: "trym",
    title: "TRYM (aka. Track Your Marks)",
    description: "A web app I built for my high school friends for tracking their weekly test performance and predicting their future performance using KNN and Logistic Regression. Built with React.js and Firebase. It got around 2000+ users at it's peak, but had to shut it down eventually.",
    github: "https://github.com/ParthNikam/track-your-marks-V3",
  },
 
]

function ProjectCard({ project }: { project: Project }) {
  const demoUrl = project.demo?.trim()
  const projectUrl = demoUrl || project.github

  return (
    <div className="space-y-3">
      <style>{`
        @keyframes underlineAnimation {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        .project-link {
          position: relative;
          text-decoration: none;
        }
        .project-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: currentColor;
          transition: width 0.3s ease;
        }
        .project-link:hover::after {
          animation: underlineAnimation 0.3s ease forwards;
        }
      `}</style>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            {projectUrl ? (
              <h2>
                <a
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link text-lg font-semibold text-foreground inline-flex items-center gap-2"
                >
                  {project.title}
                </a>
              </h2>
            ) : (
              <h2 className="text-lg font-semibold text-foreground">{project.title}</h2>
            )}
          </div>
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-foreground hover:underline transition-all"
            >
              <GithubIcon className="size-4 shrink-0" />
              Code
            </a>
          ) : null}
        </div>
        <p className="text-base leading-relaxed text-muted-foreground">{project.description}</p>
      </div>
    </div>
  )
}

export default function Work() {
  return (
    <div className="flex flex-col h-full">
      <div className="max-w-2xl w-full">
        <div className="space-y-8">
          <div className="space-y-8 pb-10">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
