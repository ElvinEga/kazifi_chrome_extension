import { Link } from "react-router-dom";
import Footer from "../components/sections/Footer";
import Navbar from "../components/sections/navbar";
import FileImporter from "../components/FileImporter";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function ScanJobPage() {
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const location = useLocation();
  const inputData = location.state as {
    jobDescription: string;
    jobName: string;
    companyName: string;
    jobUrl: string;
  };
  return (
    <div className="flex flex-col bg-white rounded-2xl border border-solid shadow-sm border-stone-200 w-[393px]">
      <Navbar />
      <div className=" flex flex-col w-full p-3">
        <div className="text-2xl font-semibold text-center text-slate-950">
          <div className="text-2xl font-semibold text-center  text-slate-950">
            {inputData.jobName}
          </div>
          <div className="mt-3 text-sm leading-4 text-center text-slate-600">
            {inputData.companyName}
          </div>
        </div>
        <div className="mt-5 w-full text-sm font-semibold text-center text-slate-950">
          Upload Resume
        </div>
        <FileImporter
          setHtmlContent={setHtmlContent}
          setSelectedFile={setSelectedFile}
          selectedFile={selectedFile}
        />
        {selectedFile && (
          <Link
            to="/extension/results"
            className="justify-center items-center px-16 py-3 mt-4 w-full text-sm font-semibold leading-6 text-white text-center whitespace-nowrap rounded-md bg-slate-900"
          >
            Analyze Resume
          </Link>
        )}
        <div className="flex flex-col justify-center px-1.5 mt-4 w-full text-sm font-semibold text-slate-950">
          <div className="flex z-10 flex-col">
            {htmlContent && (
              <div>
                <h1 className="whitespace-nowrap text-lg text-teal-600">
                  Your Resume
                </h1>
                <div className="mt-2 text-xs">
                  <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                </div>
              </div>
            )}
            {inputData.jobDescription && (
              <div>
                <h1 className="whitespace-nowrap text-lg text-teal-600 mt-3">
                  About The Job
                </h1>

                <div
                  className="mt-2 text-xs prose"
                  dangerouslySetInnerHTML={{ __html: inputData.jobDescription }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ScanJobPage;
