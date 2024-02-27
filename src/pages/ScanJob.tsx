import { Link } from "react-router-dom";
import Footer from "../components/sections/Footer";
import Navbar from "../components/sections/navbar";

function ScanJobPage() {
  return (
    <div className="flex flex-col bg-white rounded-2xl border border-solid shadow-sm border-stone-200 w-[393px]">
      <Navbar />
      <div className=" flex flex-col w-full p-3">
        <div className="text-2xl font-semibold text-center text-slate-950">
          <div className="text-2xl font-semibold text-center whitespace-nowrap text-slate-950">
            Senior Front-End Developer
          </div>
          <div className="mt-3 text-sm leading-4 text-center text-slate-600">
            Cross Border Talents - Lisbon, Portugal
          </div>
        </div>
        <div className="mt-5 w-full text-sm font-semibold text-center text-slate-950">
          Upload Resume
        </div>
        <div className="flex justify-center items-center px-16 py-8 mt-4 text-center text-gray-500 bg-white rounded-lg border border-dashed border-slate-400 leading-[138%]">
          <div className="flex flex-col items-center max-w-full w-[177px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed4ab8f5b47b61ee8cd460473ff26b6b86d173a6bfae95d83447533e8c050e1d?"
              className="w-6 aspect-square"
            />
            <div className="self-stretch mt-3 text-xs">
              Drag & drop or click to choose file
            </div>
            <div className="mt-2 text-xs">Max file size: 10 MB</div>
          </div>
        </div>
        <Link
          to="/results"
          className="justify-center items-center px-16 py-3 mt-4 w-full text-xs leading-6 text-white text-center whitespace-nowrap rounded-md bg-slate-900"
        >
          Analyze Resume
        </Link>
        <div className="flex flex-col justify-center px-1.5 mt-8 w-full text-sm font-semibold text-slate-950">
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

export default ScanJobPage;
