import IconCloud from "./ui/icon-cloud";
import Skill from "./Skill";

export default function LandingPage() {

    const slugs = [
        "typescript",
        "javascript",
        "react",
        "npm",
        "java",
        "react",
        "android",
        "html5",
        "css3",
        "nodedotjs",
        "express",
        "amazonaws",
        "postgresql",
        "firebase",
        "netlify",
        "tailwindcss",
        "testinglibrary",
        "docker",
        "git",
        "github",
        "visualstudiocode",
        "figma",
        "python",
        "c",
        "apple",
        "spring",
        "springboot",
        "pandas",
        "scikit-learn",
        "numpy",
      ];

    return (
      <>
        <div className="flex flex-row items-center justify-center mt-[2%] ">
          <div className="">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-20">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <img
                  src="/public/yuvam.jpg"
                  alt="Profile Photo"
                  className="rounded-lg w-64 h-64 object-cover md:w-80 md:h-80"
                />
              </div>
  
              {/* Text Content */}
              <div className="flex flex-col text-center md:text-left mt-[5%] ">
                {/* Name and Title */}
                <div>
                  <h1 className="text-5xl font-extrabold md:text-6xl">Yuvam Kumar</h1>
                  <p className="text-2xl font-semibold text-gray-700 mt-4 md:mt-6">
                    Full-stack developer and 3rd-year computer science student
                  </p>
                </div>
  
                {/* Location */}
                <div className="flex items-center justify-center md:justify-start mt-6 space-x-3 text-gray-600">
                  
                  <p className="text-xl">Vancouver, BC, Canada</p>
                </div>
  
                {/* Social Links */}
                <div className="flex justify-center md:justify-start space-x-6 mt-6">
                  <a href="https://github.com" className="text-gray-500 hover:text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.477 2 2 6.486 2 12c0 4.418 2.865 8.167 6.839 9.489.5.093.683-.217.683-.482v-1.695c-2.781.603-3.369-1.343-3.369-1.343-.454-1.15-1.11-1.457-1.11-1.457-.908-.621.069-.609.069-.609 1.003.07 1.532 1.03 1.532 1.03.892 1.528 2.341 1.087 2.91.831.09-.647.35-1.088.636-1.338-2.22-.254-4.555-1.114-4.555-4.97 0-1.097.39-1.994 1.03-2.696-.103-.253-.447-1.271.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.854.004 1.713.116 2.516.342 1.907-1.296 2.746-1.025 2.746-1.025.547 1.379.203 2.397.1 2.65.64.702 1.027 1.599 1.027 2.696 0 3.867-2.34 4.712-4.57 4.961.36.31.682.92.682 1.855v2.753c0 .268.18.579.689.481C19.135 20.167 22 16.418 22 12c0-5.514-4.486-10-10-10z" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/yuvamkumar/" className="text-gray-500 hover:text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5zM8 19H5V8h3v11zm-1.5-12.271c-.966 0-1.5-.723-1.5-1.5S5.534 4.73 6.5 4.73s1.5.723 1.5 1.5S7.466 6.729 6.5 6.729zM19 19h-3v-5.5c0-1.018-.896-1.5-1.5-1.5s-1.5.482-1.5 1.5V19h-3V8h3v1.357C14.337 8.042 15.135 7.5 16.5 7.5c2.083 0 3.5 1.416 3.5 3.5V19z" />
                    </svg>
                  </a>
                  <a href="mailto:yuvamk.swe@gmail.com" className="text-gray-500 hover:text-gray-900">
                      Mail
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        

        <div className="flex flex-col items-center justify-center md:flex-row"> 

            <div>
                <h2 className="block text-2xl ml-4 font-semibold" > Skills </h2>
                <div className="flex flex-wrap gap-4 mt-4 p-4 max-w-[750px] justify-start">


                <Skill skill="MacOS" logo="/logos/apple.svg" />
                <Skill skill="AI" logo="/logos/copilot.svg" />
                <Skill skill="CSS" logo="/logos/css.svg" />
                <Skill skill="Git" logo="/logos/git.svg" />
                <Skill skill="HTML" logo="/logos/html.svg" />
                <Skill skill="Github" logo="/logos/github.svg" />
                <Skill skill="intelliJ" logo="/logos/intellij.svg" />
                <Skill skill="netlify" logo="/logos/netlify.svg" />
                <Skill skill="NPM" logo="/logos/npm.svg" />
                <Skill skill="TailwindCSS" logo="/logos/tailwind.svg" />
                <Skill skill="React" logo="/logos/react.svg" />
                <Skill skill="JavaScript" logo="/logos/javascript.svg" />
                <Skill skill="Node.js" logo="/logos/nodejs.svg" />
                <Skill skill="Python" logo="/logos/python.svg" />
                <Skill skill="Java" logo="/logos/java.svg" />
                <Skill skill="SpringBoot" logo="/logos/springboot.svg" /> 
                <Skill skill="vscode" logo="/logos/vscode.svg" />
                <Skill skill="Windows" logo="/logos/windows.svg" />


            </div>

            </div>

            

            <div className="relative flex size-full max-w-[350px] items-center justify-center overflow-hidden">
                <IconCloud iconSlugs={slugs} />
            </div> 
        </div>


        

      </>
    );
  }