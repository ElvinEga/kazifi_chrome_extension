import { useNavigate } from "react-router-dom";
import Footer from "../components/sections/Footer";
import Navbar from "../components/sections/navbar";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";

export interface LinkedinJob {
  companyName: string;
  title: string;
  url: string;
  location: string;
  datePosted: string;
  jobDescriptionText: string;
  skills: string;
  jobDetails: string;
}

function HomePage() {
  const [jobDescription, setJobDescription] = useState("");
  const [jobName, setJobName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobUrl, setJobUrl] = useState("");
  const navigate = useNavigate();
  const [jobDetails, setJobDetails] = useState<LinkedinJob | null>(null);

  const handleScan = () => {
    const inputData = {
      jobDescription: jobDescription,
      jobName: jobName,
      companyName: companyName,
      jobUrl: jobUrl,
    };
    navigate("/scan", { state: inputData });
  };

  const handleEditoChange = (html: string) => {
    setJobDescription(html);
  };

  // useEffect(() => {
  //   const handleMessage = (message: any) => {
  //     setJobDetails(message.message);
  //     console.log(message.message);
  //   };

  //   chrome.runtime.onMessage.addListener(handleMessage);

  //   return () => {
  //     chrome.runtime.onMessage.removeListener(handleMessage);
  //   };
  // }, []);
  return (
    <>
      <div className="flex flex-col items-center bg-white rounded-2xl border border-solid shadow-sm border-stone-20 w-[393px]">
        <Navbar />
        <div className=" flex flex-col items-center w-full p-4 ">
          <div className="text-2xl font-semibold text-center whitespace-nowrap text-slate-950">
            Scan Linkedin Job
          </div>
          <div className="mt-3 text-sm leading-4 text-center text-slate-600">
            Open the Linkedin tab of the job post you want to scan
          </div>
          {/* <img
            loading="lazy"
            src="/assets/img/icons/illust_home.svg"
            className="mt-7 w-full aspect-[1.49]"
          /> */}
          <div className="mt-7">
            <div className="flex  flex-col w-full">
              <div className="w-full">
                <label htmlFor="input-job-label" className="sr-only">
                  Job Title
                </label>
                <input
                  type="text"
                  id="input-job-label"
                  defaultValue={jobDetails?.title}
                  onChange={(e) => setJobName(e.target.value)}
                  className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Job Title"
                />
              </div>
              <div className="w-full mt-3">
                <label htmlFor="input-job-label" className="sr-only">
                  Company
                </label>
                <input
                  type="text"
                  id="input-company-label"
                  defaultValue={jobDetails?.companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Company"
                />
              </div>
              <div className="w-full mt-3">
                <label htmlFor="input-url" className="sr-only">
                  Job Url
                </label>
                <input
                  type="text"
                  id="input-url"
                  defaultValue={jobDetails?.url}
                  onChange={(e) => setJobUrl(e.target.value)}
                  className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Job Url"
                />
              </div>
            </div>
            <div className="mt-5 w-full border border-gray-200 rounded-lg overflow-hidden dark:border-gray-700">
              <ReactQuill
                theme="snow"
                style={{ height: "300px" }}
                defaultValue={jobDetails?.jobDescriptionText}
                onChange={handleEditoChange}
                placeholder="Job Description..."
              />
            </div>
          </div>

          <button
            onClick={handleScan}
            className=" px-16 py-4 w-full bg-teal-500 inline-flex justify-center items-center gap-5 mt-8 text-base font-semibold text-center text-gray-900 shadow-sm is-caribbean-green rounded-full"
          >
            Scan Job
            <i className="fa-solid fa-magnifying-glass text-lg"></i>
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
