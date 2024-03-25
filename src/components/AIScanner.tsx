import { useEffect, useState } from "react";
import axiosChat from "../api/axiosChat";
import React from "react";
interface ScannerProps {
  jobDescription: string;
}

const AIScanner: React.FC<ScannerProps> = ({ jobDescription }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [keywords, setKeywords] = useState<string[]>([]);
  const sendMessage = (message: string) => {
    const URL = "/completions";

    const tools = [
      {
        type: "function",
        function: {
          name: "get_job_keywords",
          description: "Get the keywords in the job description",
          parameters: {
            type: "object",
            properties: {
              keywords: {
                type: "array",
                description: "Job Description Keyword",
                items: { type: "string" },
              },
            },
          },
        },
      },
    ];

    const data = {
      model: "gpt-3.5-turbo-0613",
      messages: [
        {
          role: "system",
          content:
            "I want to get job keywords from the following job description",
        },
        { role: "user", content: message },
      ],
      tools: tools,
      tool_choice: "auto",
    };

    setIsLoading(true);

    axiosChat({ method: "POST", url: URL, data: data })
      .then((response) => {
        console.log(response);
        const generatedText =
          response.choices[0].message?.tool_calls[0]?.function.arguments;
        const parsedData = JSON.parse(generatedText);
        console.log(parsedData);
        if (parsedData.keywords) {
          setKeywords(parsedData.keywords);
          localStorage.setItem("keywords", JSON.stringify(parsedData.keywords));
        }

        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    setKeywords([]);
    sendMessage(
      "I want to get job keywords and the number of times it appears from the following job description: " +
        jobDescription
    );
  }, [jobDescription]);
  return (
    <>
      {" "}
      {/* <button
        onClick={() =>
          sendMessage(
            "I want to get job keywords and the number of times it appears from the following job description: " +
              jobDescription
          )
        }
        className="justify-center items-center px-16 py-3 mt-4 w-full text-sm font-semibold leading-6 text-white text-center whitespace-nowrap rounded-md bg-slate-900"
      >
        Get Keywords
      </button> */}
      <div className="mt-4">Keywords</div>
      <div className="mt-2 text-xs">
        {isLoading && (
          <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
            <div className="flex justify-center">
              <div
                className="animate-spin inline-block size-16 border-[5px] border-current border-t-transparent text-lime-500 rounded-full dark:text-lime-500"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-wrap gap-2 justify-between mt-4 tracking-normal whitespace-nowrap">
          {keywords.map((text, index) => (
            <div
              key={index}
              className="inline-flex flex-nowrap items-center px-2.5 py-2.5 gap-x-2 rounded-md bg-lime-300 bg-opacity-50"
            >
              {text}
              {/* <span className="inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium bg-red-500 text-white">
                5
              </span> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AIScanner;
