"use client";

const Extension = () => {
  return (
    <div className="w-full mx-auto  bg-zinc-900">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20 ">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-white max-md:max-w-full">
              <div className="text-6xl font-medium text-white leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
                Try{" "}
                <span className="text-lime-300">Kazifi Chrome Extension</span>{" "}
                today and experience the{" "}
                <span className="text-purple-200">benefits</span> for yourself.
              </div>
              <div className="mt-8 text-xl max-md:max-w-full">
                Our Ai tool helps you provide faster and more accurate support,
                leading to improved customer satisfaction and a more efficient
                support process.
              </div>
              <a
                href="#"
                className="flex gap-5 justify-between self-start px-10 py-7 mt-20 text-lg text-center bg-lime-200 border border-black border-solid rounded-[100px] text-neutral-900 max-md:px-5 max-md:mt-10"
              >
                <div className="flex-auto">Try Our Extension</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/195ea99e1f46a8555874819b6d2e4a3932b895353ffb5f92e63681711c9e23fb?"
                  className="self-start w-6 aspect-[1.72]"
                />
              </a>
              <div className="mt-60 text-base max-md:mt-10 max-md:max-w-full">
                Our Ai tool helps you provide faster and more accurate support,
                leading to improved customer satisfaction and a more efficient
                support process.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="/assets/img/sign-up.png"
              className="mt-24 w-full aspect-[0.55] max-md:mt-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extension;
