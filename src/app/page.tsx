export default function About() {
  return (
    <div className="flex flex-col gap-8 max-w-5xl w-full">
      <div className="gap-8 md:items-start">
        <div className="space-y-4">
          <h1 className="text-xl font-bold text-foreground mb-4">Hi, I'm Parth Nikam</h1>
          <p className="leading-relaxed text-foreground">
            19 y/o living in bangalore, exploring llms and agentic ai.
            </p>
          <p className="leading-relaxed text-foreground">
            i know bit of math and ton of code. i built transformer from scratch. know how multiple transformer architectures work. 
          </p>

          <p className="leading-relaxed text-foreground">
            i forced myself to read 60 papers on llms in 48 hours and had my agent quiz me every couple of hours to test my undestanding. 
          </p>

          <p className="leading-relaxed text-foreground">
            currently building some agentic ai stuff. 
          </p>
          <p className="leading-relaxed text-foreground">
            i do a bit of ML, a bit of web dev, a bit of competitive programming and a bit of meditation.
          </p>
        </div>
         <div className="min-w-[200px] shrink-0">
          <img
            className="block object-cover"
            src={"https://raw.githubusercontent.com/parthnikam/ParthNikam/refs/heads/main/public/static/images/logo.jpg"}
            width={200}
            height={200}
            alt="Parth image"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
}
