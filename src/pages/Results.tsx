import Footer from "../components/sections/Footer";
import Navbar from "../components/sections/navbar";

function ResultsPage() {
  return (
    <div className="flex flex-col bg-white rounded-2xl border border-solid shadow-sm border-stone-200 w-[393px]">
      <Navbar />
      <div className=" flex flex-col items-center w-full p-3">
        <div className="text-2xl font-semibold text-center text-slate-950">
          <div className="text-2xl font-semibold text-center whitespace-nowrap text-slate-950">
            Senior Front-End Developer
          </div>
          <div className="mt-3 text-sm leading-4 text-center text-slate-600">
            Cross Border Talents - Lisbon, Portugal
          </div>
        </div>
        <div className="mt-5 w-full text-sm font-semibold text-center text-slate-950">
          Match Rate
        </div>
        {/* Circular Progress */}
        <div className="relative size-48 mt-3">
          <svg
            className="size-full"
            width={36}
            height={36}
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background Circle */}
            <circle
              cx={18}
              cy={18}
              r={16}
              fill="none"
              className="stroke-current text-gray-200 dark:text-gray-700"
              strokeWidth={3}
            />
            {/* Progress Circle inside a group with rotation */}
            <g className="origin-center -rotate-90 transform">
              <circle
                cx={18}
                cy={18}
                r={16}
                fill="none"
                className="stroke-current text-lime-500 dark:text-lime-500"
                strokeWidth={3}
                strokeDasharray={100}
                strokeDashoffset={100 - 72}
              />
            </g>
          </svg>
          {/* Percentage Text */}
          <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <span className="text-center text-2xl font-bold text-gray-800 dark:text-white">
              72%
            </span>
          </div>
        </div>
        {/* End Circular Progress */}
        <div className="flex flex-col self-stretch px-2.5 py-px mt-2 w-full">
          <div className="text-sm font-semibold text-slate-950">Keywords</div>
          <div className="flex gap-5 justify-between px-px mt-2 w-full">
            <div className="flex gap-2 justify-between">
              <div className="flex justify-center items-center px-1.5 bg-lime-300 aspect-square h-[26px] rounded-[999px] w-[26px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c09587b1893e916ddfcc6391ffe2198bd98f8d5ce2373290545b84dd085433ae?"
                  className="w-full aspect-square"
                />
              </div>
              <div className="text-xs font-semibold tracking-normal leading-6 text-slate-950">
                Testing
              </div>
            </div>
            <div className="flex gap-2 justify-between text-xs font-medium tracking-normal leading-4 text-white whitespace-nowrap">
              <div className="justify-center px-1.5 py-px my-auto bg-green-600 aspect-[1.56] rounded-[999px]">
                2/2
              </div>
              <div className="w-px bg-gray-200 h-[26px]" />
            </div>
          </div>
          <div className="flex gap-5 justify-between px-px mt-2 w-full">
            <div className="flex gap-2 justify-between">
              <div className="flex justify-center items-center px-1.5 aspect-square bg-red-500 bg-opacity-50 h-[26px] rounded-[999px] w-[26px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1aa54f413321f8310adb94d82ad45d0cdf77028966c11eb46ad592cc45720af?"
                  className="w-full aspect-square"
                />
              </div>
              <div className="text-xs font-semibold tracking-normal leading-6 text-slate-950">
                CI/CD
              </div>
            </div>
            <div className="flex gap-2 justify-between text-xs font-medium tracking-normal leading-4 text-white whitespace-nowrap">
              <div className="justify-center px-1.5 py-px my-auto bg-red-500 aspect-[1.44] rounded-[999px]">
                0/1
              </div>
              <div className="w-px bg-gray-200 h-[26px]" />
            </div>
          </div>
          <div className="flex gap-5 justify-between px-px mt-2 w-full">
            <div className="flex gap-2 justify-between">
              <div className="flex justify-center items-center px-1.5 aspect-square bg-red-500 bg-opacity-50 h-[26px] rounded-[999px] w-[26px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1aa54f413321f8310adb94d82ad45d0cdf77028966c11eb46ad592cc45720af?"
                  className="w-full aspect-square"
                />
              </div>
              <div className="grow text-xs font-semibold tracking-normal leading-6 text-slate-950">
                Architecture
              </div>
            </div>
            <div className="flex gap-2 justify-between text-xs font-medium tracking-normal leading-4 text-white whitespace-nowrap">
              <div className="justify-center px-1.5 py-px my-auto bg-red-500 aspect-[1.56] rounded-[999px]">
                0/2
              </div>
              <div className="w-px bg-gray-200 h-[26px]" />
            </div>
          </div>
          <div className="flex gap-5 justify-between px-px mt-2 w-full">
            <div className="flex gap-2 justify-between">
              <div className="flex justify-center items-center px-1.5 bg-lime-300 aspect-square h-[26px] rounded-[999px] w-[26px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c09587b1893e916ddfcc6391ffe2198bd98f8d5ce2373290545b84dd085433ae?"
                  className="w-full aspect-square"
                />
              </div>
              <div className="text-xs font-semibold tracking-normal leading-6 text-slate-950">
                Python
              </div>
            </div>
            <div className="flex gap-2 justify-between text-xs font-medium tracking-normal leading-4 text-white whitespace-nowrap">
              <div className="justify-center px-1.5 py-px my-auto bg-green-600 aspect-[1.39] rounded-[999px]">
                1/1
              </div>
              <div className="w-px bg-gray-200 h-[26px]" />
            </div>
          </div>
          <div className="mt-4 text-sm font-semibold text-slate-950">
            Searchability
          </div>
          <div className="flex gap-5 justify-between px-px mt-2 w-full">
            <div className="flex gap-2 justify-between">
              <div className="flex justify-center items-center px-1.5 bg-lime-300 aspect-square h-[26px] rounded-[999px] w-[26px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c09587b1893e916ddfcc6391ffe2198bd98f8d5ce2373290545b84dd085433ae?"
                  className="w-full aspect-square"
                />
              </div>
              <div className="grow text-xs font-semibold tracking-normal leading-6 whitespace-nowrap text-slate-950">
                Job Title Match
              </div>
            </div>
            <div className="w-px bg-gray-200 h-[26px]" />
          </div>
          <div className="flex gap-5 justify-between px-px mt-2 w-full">
            <div className="flex gap-2 justify-between">
              <div className="flex justify-center items-center px-1.5 aspect-square bg-red-500 bg-opacity-50 h-[26px] rounded-[999px] w-[26px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1aa54f413321f8310adb94d82ad45d0cdf77028966c11eb46ad592cc45720af?"
                  className="w-full aspect-square"
                />
              </div>
              <div className="grow text-xs font-semibold tracking-normal leading-6 whitespace-nowrap text-slate-950">
                Contact Info
              </div>
            </div>
            <div className="w-px bg-gray-200 h-[26px]" />
          </div>
          <div className="flex gap-5 justify-between px-px mt-2 w-full">
            <div className="flex gap-2 justify-between">
              <div className="flex justify-center items-center px-1.5 aspect-square bg-red-500 bg-opacity-50 h-[26px] rounded-[999px] w-[26px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1aa54f413321f8310adb94d82ad45d0cdf77028966c11eb46ad592cc45720af?"
                  className="w-full aspect-square"
                />
              </div>
              <div className="grow text-xs font-semibold tracking-normal leading-6 whitespace-nowrap text-slate-950">
                Education Macth
              </div>
            </div>
            <div className="w-px bg-gray-200 h-[26px]" />
          </div>
        </div>
        <div className="self-center mt-12 text-xs leading-4 text-center text-slate-600">
          You want to make changes?
        </div>
        <button className="justify-center items-center px-16 py-4 w-full mt-4 text-sm font-semibold text-center bg-white border border-indigo-200 border-solid rounded-full text-slate-950">
          Sign in
        </button>
        <div className="hidden flex-col justify-center px-1.5 mt-8 w-full text-sm font-semibold text-slate-950">
          <div className="flex z-10 flex-col">
            <div className="whitespace-nowrap">About The Job</div>
            <div className="mt-2 text-xs">
              We’re seeking a Full Stack Engineer to join our 5-member
              engineering team. You’ll play a pivotal part in developing the
              next-generation human data collection infrastructure for AI/ML
              development, driving product strategy, and directly impacting our
              startup trajectory.
            </div>
            <div className="mt-4">Responsibilities</div>
            <div className="mt-2 text-xs">
              Full-stack development from architecture and specifications to
              live deployments.
              <br />
              Ability to understand, translate, break down, and estimate the
              product roadmap into features.
              <br />
              Lead user testing sessions with stakeholders on some of the
              features you implement.
              <br />
              An understanding of optimization, security, and an eye for code
              cleanliness.
              <br />
              Contribute to maintaining a best-in-class quality pipeline,
              encompassing Linting, CI/CD, and usability tests.
            </div>
            <div className="mt-4">Responsibilities</div>
            <div className="mt-2 text-xs">
              Full-stack development from architecture and specifications to
              live deployments.
              <br />
              Ability to understand, translate, break down, and estimate the
              product roadmap into features.
              <br />
              Lead user testing sessions with stakeholders on some of the
              features you implement.
              <br />
              An understanding of optimization, security, and an eye for code
              cleanliness.
              <br />
              Contribute to maintaining a best-in-class quality pipeline,
              encompassing Linting, CI/CD, and usability tests.
            </div>
            <div className="mt-4">Skill & Expertise</div>
            <div className="mt-2 text-xs">
              <div className="flex gap-2.5 justify-between pr-16 mt-4 tracking-normal whitespace-nowrap">
                <div className="justify-center px-2.5 py-1.5 rounded-md aspect-[2.18] bg-lime-300 bg-opacity-50">
                  Django
                </div>
                <div className="grow justify-center px-2.5 py-1.5 rounded-md bg-lime-300 bg-opacity-50">
                  Javascript
                </div>
                <div className="justify-center px-2.5 py-1.5 rounded-md aspect-[2.18] bg-lime-300 bg-opacity-50">
                  Python
                </div>
                <div className="justify-center px-2.5 py-1.5 rounded-md aspect-[2.39] bg-lime-300 bg-opacity-50">
                  React.js
                </div>
              </div>
              <div className="flex gap-2.5 justify-between mt-4 tracking-normal whitespace-nowrap">
                <div className="grow justify-center px-2.5 py-1.5 rounded-md bg-lime-300 bg-opacity-50">
                  Amazon Web Services (AWS)
                </div>
                <div className="grow justify-center px-2.5 py-1.5 rounded-md bg-lime-300 bg-opacity-50">
                  Product Development
                </div>
              </div>
              <div className="justify-center self-start px-2.5 py-1.5 mt-4 tracking-normal whitespace-nowrap rounded-md bg-lime-300 bg-opacity-50">
                Project Management
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ResultsPage;
