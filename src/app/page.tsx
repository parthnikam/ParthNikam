export default function About() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col md:flex-row items-start gap-8 max-w-5xl w-full">
        <div className="flex-1 space-y-4">
            <h1 className="text-xl font-bold text-foreground mb-4">Hi, I'm Parth Nikam</h1>
            <p className="leading-relaxed text-foreground">
              19 y/o living in bangalore, exploring llms and agentic ai. 
            <br/>
              Besides learning how to use these tools, I've gone the extra mile to learn how they work down to the matrix multiplication level. 
            </p>
            <p className="leading-relaxed text-foreground">
              Currently trying to learn how to use GPUs efficiently for running LLMS, understanding their bottlenecks while training and write cuda kernels to optimize things. 
            </p>
            <p className="leading-relaxed text-foreground">
              I do a bit of ML, a bit of web dev, a bit of competitive programming and a bit of meditation. 
            </p>
            <p className="leading-relaxed text-foreground">
              In my free time, I run a lot(sprinting), read novels and obsess about founders and companies. Everything I do stems from an intrinsic curiosity to understand how things work and how they can provide value to people.
            </p>
        </div>
        <div className="flex-shrink-0 w-full max-w-[400px]">
          <img
            className="block w-full rounded-xl object-cover"
            src="/logo.jpg"
            width={400}
            height={400}
            alt="Parth image"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
}
