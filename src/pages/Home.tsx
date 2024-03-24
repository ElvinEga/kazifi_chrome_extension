import { useNavigate } from "react-router-dom";
import Footer from "../components/sections/Footer";
import Navbar from "../components/sections/navbar";
import { useEffect, useState } from "react";

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
  const navigate = useNavigate();
  const [jobDetails, setJobDetails] = useState<LinkedinJob | null>(null);

  const handleScan = () => {
    const inputData = {
      jobDescription: jobDescription,
      jobName: jobName,
      companyName: companyName,
    };
    navigate("/extension/scan", { state: inputData });
  };
  const changeColorOnClick = async () => {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    chrome.scripting.executeScript({
      target: { tabId: tab.id! },
      func: () => {
        document.body.style.backgroundColor = "green";
      },
    });
  };
  useEffect(() => {
    const handleMessage = (message: any) => {
      setJobDetails(message.message);
      console.log(message.message);
    };

    chrome.runtime.onMessage.addListener(handleMessage);

    // Cleanup listener on component unmount
    return () => {
      chrome.runtime.onMessage.removeListener(handleMessage);
    };
  }, []);
  return (
    <>
      <div className="flex flex-col items-center bg-white rounded-2xl border border-solid shadow-sm border-stone-20 w-[393px]">
        <Navbar />
        <div className=" flex flex-col items-center w-full p-8 ">
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
                  className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
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
                  className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Company"
                />
              </div>
            </div>
            <div className="mt-3 w-full border border-gray-200 rounded-lg overflow-hidden dark:border-gray-700">
              <div className="flex align-middle gap-x-0.5 border-b border-gray-200 p-2 dark:border-gray-700">
                <button
                  className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  type="button"
                  data-hs-editor-bold=""
                >
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 12a4 4 0 0 0 0-8H6v8" />
                    <path d="M15 20a4 4 0 0 0 0-8H6v8Z" />
                  </svg>
                </button>
                <button
                  className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  type="button"
                  data-hs-editor-italic=""
                >
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1={19} x2={10} y1={4} y2={4} />
                    <line x1={14} x2={5} y1={20} y2={20} />
                    <line x1={15} x2={9} y1={4} y2={20} />
                  </svg>
                </button>
                <button
                  className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  type="button"
                  data-hs-editor-underline=""
                >
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 4v6a6 6 0 0 0 12 0V4" />
                    <line x1={4} x2={20} y1={20} y2={20} />
                  </svg>
                </button>
                <button
                  className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  type="button"
                  data-hs-editor-strike=""
                >
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 4H9a3 3 0 0 0-2.83 4" />
                    <path d="M14 12a4 4 0 0 1 0 8H6" />
                    <line x1={4} x2={20} y1={12} y2={12} />
                  </svg>
                </button>
                <button
                  className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  type="button"
                  data-hs-editor-link=""
                >
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                </button>
                <button
                  className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  type="button"
                  data-hs-editor-ol=""
                >
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1={10} x2={21} y1={6} y2={6} />
                    <line x1={10} x2={21} y1={12} y2={12} />
                    <line x1={10} x2={21} y1={18} y2={18} />
                    <path d="M4 6h1v4" />
                    <path d="M4 10h2" />
                    <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
                  </svg>
                </button>
                <button
                  className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  type="button"
                  data-hs-editor-ul=""
                >
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1={8} x2={21} y1={6} y2={6} />
                    <line x1={8} x2={21} y1={12} y2={12} />
                    <line x1={8} x2={21} y1={18} y2={18} />
                    <line x1={3} x2="3.01" y1={6} y2={6} />
                    <line x1={3} x2="3.01" y1={12} y2={12} />
                    <line x1={3} x2="3.01" y1={18} y2={18} />
                  </svg>
                </button>
                <button
                  className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  type="button"
                  data-hs-editor-blockquote=""
                >
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 6H3" />
                    <path d="M21 12H8" />
                    <path d="M21 18H8" />
                    <path d="M3 12v6" />
                  </svg>
                </button>
                <button
                  className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  type="button"
                  data-hs-editor-code=""
                >
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 16 4-4-4-4" />
                    <path d="m6 8-4 4 4 4" />
                    <path d="m14.5 4-5 16" />
                  </svg>
                </button>
              </div>

              <textarea
                className="sm:p-5 py-3 px-4 block w-full border-gray-200  border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                rows={10}
                defaultValue={jobDetails?.jobDescriptionText}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Job Description..."
              />
            </div>
          </div>

          <button
            onClick={changeColorOnClick}
            className=" px-16 py-4 w-full inline-flex justify-center items-center gap-5 mt-12 text-base font-semibold text-center text-gray-900 shadow-sm is-caribbean-green rounded-full"
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
