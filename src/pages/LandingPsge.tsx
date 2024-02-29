import Hero from "../components/landing/hero";
import Navbar from "../components/landing/navbar";

function LandingPage() {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 dark:border-gray-700">
      <Navbar />
      <Hero />

      <div className="flex flex-col items-center px-16 pt-12 pb-7 w-full text-base text-lime-300 whitespace-nowrap bg-zinc-900 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-center mt-1 w-full max-w-[1166px] max-md:max-w-full">
          <div>Partners who work with us</div>
          <img
            loading="lazy"
            srcSet="..."
            className="mt-5 w-full aspect-[12.5] max-md:max-w-full"
          />
        </div>
      </div>
      <div className="flex flex-col px-20 py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="justify-center self-start px-8 py-6 mt-20 text-3xl text-black whitespace-nowrap border-2 border-solid border-zinc-900 rounded-[100px] max-md:px-5 max-md:mt-10 max-md:ml-2.5">
          How It works
        </div>
        <div className="mt-14 mr-2.5 text-6xl font-semibold leading-[72px] text-zinc-900 max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
          Revolutionize Your Customer Support with Kazif App: The Ultimate
          Solution for Fast and Efficient Support!
        </div>
        <div className="mt-16 mr-2.5 mb-20 max-md:my-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="grow px-16 py-12 w-full bg-zinc-900 rounded-[32px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                  <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-white max-md:mt-10">
                      <div className="text-4xl">Integrate</div>
                      <div className="mt-7 text-base">
                        Intergate all your knowledge sources, including support
                        tickets, documents, guides, aricles, community forums
                        and chats.
                      </div>
                      <div className="flex gap-5 justify-between pr-1.5 mt-16 text-xl font-semibold max-md:mt-10">
                        <div className="flex-auto my-auto">Get started</div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b944d30e137c76e8d226104e9a64eb48a8aa5d8b1e92356c6da5fc9b61a18352?"
                          className="aspect-square w-[72px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="grow mt-3.5 w-40 max-w-full aspect-[0.53] max-md:mt-10"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-12 py-12 w-full border-2 border-solid border-zinc-900 rounded-[32px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[68%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col text-zinc-900">
                        <div className="text-4xl">Recommendations</div>
                        <div className="mt-10 text-base">
                          Intergate all your knowledge sources, including
                          support tickets, documents, guides, aricles, community
                          forums and chats.
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/30ddf3017202d6d3a770ab390bdd0caf9287526f1e6ec8bf6f8cdb96b052a7ff?"
                        className="grow mt-14 w-40 max-w-full aspect-[1.03] max-md:mt-10"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 justify-between mt-7 text-xl font-semibold text-zinc-900 max-md:flex-wrap max-md:max-w-full">
                  <div className="flex-auto my-auto">Get started</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/436ece518980073d97d01f40d48763f07d9832e5a26ff4428e23e22b6592e078?"
                    className="aspect-square w-[72px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-center mt-32 w-full max-w-[1169px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-white max-md:max-w-full">
              <div className="text-6xl font-medium text-lime-300 leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
                Try{" "}
                <span className="text-lime-200">Kazifi Chrome Extension</span>{" "}
                today and experience the{" "}
                <span className="text-lime-300">benefits</span> for yourself.
              </div>
              <div className="mt-8 text-xl max-md:max-w-full">
                Our Ai tool helps you provide faster and more accurate support,
                leading to improved customer satisfaction and a more efficient
                support process.
              </div>
              <div className="flex gap-5 justify-between self-start px-10 py-7 mt-20 text-lg text-center bg-lime-200 border border-black border-solid rounded-[100px] text-neutral-900 max-md:px-5 max-md:mt-10">
                <div className="flex-auto">Try Our Extension</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/195ea99e1f46a8555874819b6d2e4a3932b895353ffb5f92e63681711c9e23fb?"
                  className="self-start w-6 aspect-[1.72]"
                />
              </div>
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
              srcSet="..."
              className="mt-36 w-full aspect-[0.55] max-md:mt-10"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col px-20 py-12 mt-24 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="justify-center self-start px-14 py-5 mt-20 text-3xl text-center text-black whitespace-nowrap border-2 border-solid border-zinc-900 rounded-[100px] max-md:px-5 max-md:mt-10 max-md:ml-2">
          Pricing
        </div>
        <div className="flex gap-5 justify-between px-px mt-11 w-full max-md:flex-wrap max-md:mt-10 max-md:mr-1 max-md:max-w-full">
          <div className="flex-auto text-6xl font-semibold leading-[72px] text-zinc-900 max-md:max-w-full max-md:text-4xl">
            What are our prices
          </div>
          <div className="flex gap-2.5 justify-between">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2001482662735f369ff5559b734d634b39a36985b1d4f5c874a15afa950949f3?"
              className="w-20 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa590586c9cfc0ca69d462276364c483f419c49981e3f3e4ad7e2bede4ae50f6?"
              className="w-20 aspect-square"
            />
          </div>
        </div>
        <div className="mt-14 max-md:mt-10 max-md:mr-1 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start px-3.5 pt-6 pb-3 mx-auto w-full border-2 border-solid border-zinc-900 rounded-[32px] text-zinc-900 max-md:mt-10">
                <div className="justify-center px-5 py-3.5 ml-5 text-base font-medium text-black whitespace-nowrap bg-amber-100 rounded-[32px] max-md:ml-2.5">
                  Free
                </div>
                <div className="mt-7 ml-6 text-2xl font-medium max-md:ml-2.5">
                  15% of Deal Closing Rate for a Payment Solution Provider
                </div>
                <div className="flex gap-5 justify-between items-start self-stretch py-7 pr-20 pl-6 mt-20 whitespace-nowrap bg-yellow-100 rounded-2xl max-md:px-5 max-md:mt-10">
                  <div className="flex flex-col flex-1">
                    <div className="text-5xl font-semibold max-md:text-4xl">
                      +70%
                    </div>
                    <div className="mt-6 text-base font-medium">
                      Appointments
                    </div>
                  </div>
                  <div className="flex flex-col flex-1">
                    <div className="text-5xl font-semibold max-md:text-4xl">
                      $250
                    </div>
                    <div className="mt-6 text-base font-medium">Revenue</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start px-3.5 pt-6 pb-3 mx-auto w-full border-2 border-solid border-zinc-900 rounded-[32px] text-zinc-900 max-md:mt-10">
                <div className="justify-center px-5 py-3.5 ml-5 text-base font-medium text-black whitespace-nowrap bg-sky-100 rounded-[32px] max-md:ml-2.5">
                  Free
                </div>
                <div className="mt-7 ml-6 text-2xl font-medium max-md:ml-2.5">
                  15% of Deal Closing Rate for a Payment Solution Provider
                </div>
                <div className="flex gap-5 justify-between items-start self-stretch py-7 pr-20 pl-6 mt-20 whitespace-nowrap bg-violet-100 rounded-2xl max-md:px-5 max-md:mt-10">
                  <div className="flex flex-col flex-1">
                    <div className="text-5xl font-semibold max-md:text-4xl">
                      +70%
                    </div>
                    <div className="mt-6 text-base font-medium">
                      Appointments
                    </div>
                  </div>
                  <div className="flex flex-col flex-1">
                    <div className="text-5xl font-semibold max-md:text-4xl">
                      $250
                    </div>
                    <div className="mt-6 text-base font-medium">Revenue</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start px-3.5 pt-6 pb-3 mx-auto w-full border-2 border-solid border-zinc-900 rounded-[32px] text-zinc-900 max-md:mt-10">
                <div className="justify-center px-5 py-3.5 ml-5 text-base font-medium text-black whitespace-nowrap bg-lime-100 rounded-[32px] max-md:ml-2.5">
                  Free
                </div>
                <div className="mt-7 ml-6 text-2xl font-medium max-md:ml-2.5">
                  15% of Deal Closing Rate for a Payment Solution Provider
                </div>
                <div className="flex gap-5 justify-between items-start self-stretch py-7 pr-20 pl-6 mt-20 whitespace-nowrap bg-lime-100 rounded-2xl max-md:px-5 max-md:mt-10">
                  <div className="flex flex-col flex-1">
                    <div className="text-5xl font-semibold max-md:text-4xl">
                      +70%
                    </div>
                    <div className="mt-6 text-base font-medium">
                      Appointments
                    </div>
                  </div>
                  <div className="flex flex-col flex-1">
                    <div className="text-5xl font-semibold max-md:text-4xl">
                      $250
                    </div>
                    <div className="mt-6 text-base font-medium">Revenue</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-between items-start pr-2 mt-3.5 mb-12 text-sm text-black max-md:flex-wrap max-md:mr-1 max-md:mb-10 max-md:max-w-full">
          <div className="flex flex-col flex-1 self-start">
            <div className="flex gap-2 justify-between items-start whitespace-nowrap">
              <div className="grow justify-center p-4 border-2 border-solid border-zinc-900 rounded-[100px]">
                linkedin marketing
              </div>
              <div className="grow justify-center p-4 border-2 border-solid border-zinc-900 rounded-[100px] max-md:pr-5">
                adverising
              </div>
            </div>
            <div className="justify-center p-4 border-2 border-solid border-zinc-900 rounded-[100px]">
              appointment setting
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c675e89f877a999908ab0c656883ba5a00679eb9ad2ce482cb36790ad86750e?"
            className="self-end mt-6 aspect-square w-[72px]"
          />
          <div className="flex flex-col flex-1 self-start">
            <div className="flex gap-2 justify-between items-start whitespace-nowrap">
              <div className="grow justify-center p-4 border-2 border-solid border-zinc-900 rounded-[100px]">
                linkedin marketing
              </div>
              <div className="grow justify-center p-4 border-2 border-solid border-zinc-900 rounded-[100px] max-md:pr-5">
                adverising
              </div>
            </div>
            <div className="justify-center p-4 border-2 border-solid border-zinc-900 rounded-[100px]">
              appointment setting
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c675e89f877a999908ab0c656883ba5a00679eb9ad2ce482cb36790ad86750e?"
            className="self-end mt-6 aspect-square w-[72px]"
          />
          <div className="flex flex-col flex-1 self-start">
            <div className="flex gap-2 justify-between items-start whitespace-nowrap">
              <div className="grow justify-center p-4 border-2 border-solid border-zinc-900 rounded-[100px]">
                linkedin marketing
              </div>
              <div className="grow justify-center p-4 border-2 border-solid border-zinc-900 rounded-[100px] max-md:pr-5">
                adverising
              </div>
            </div>
            <div className="justify-center p-4 border-2 border-solid border-zinc-900 rounded-[100px]">
              appointment setting
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c675e89f877a999908ab0c656883ba5a00679eb9ad2ce482cb36790ad86750e?"
            className="self-end mt-6 aspect-square w-[72px]"
          />
        </div>
      </div>
      <div className="flex flex-col px-20 mt-40 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="self-start ml-6 text-6xl font-medium leading-[72px] text-zinc-900 max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
          Contact us if you’re{" "}
          <span className="text-zinc-900">interested </span>in getting involved
        </div>
        <div className="mt-9 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                <div className="text-xl text-white max-md:max-w-full">
                  With Kazif App your support agents have the information they
                  need to provide fast effective support to your customers.
                </div>
                <div className="flex gap-3 self-start px-12 py-6 mt-11 text-lg text-center whitespace-nowrap bg-lime-200 border border-black border-solid rounded-[100px] text-neutral-900 max-md:px-5 max-md:mt-10">
                  <div className="grow my-auto">Join The Wishlist</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/60802bd358de4a283f971c3c0dd59ef5717dc3cfb7572889b610037d51e5c19f?"
                    className="w-6 aspect-square"
                  />
                </div>
                <div className="mt-24 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow text-center max-md:mt-10">
                        <div className="flex gap-4 justify-between whitespace-nowrap">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b06febbe49d0124e0684090b4b827408fd61d5b53c8583f90caf62a7af410f6?"
                            className="aspect-square w-[72px]"
                          />
                          <div className="flex flex-col flex-1 my-auto">
                            <div className="text-xs text-zinc-300 text-opacity-70">
                              MAIL
                            </div>
                            <div className="mt-3.5 text-base font-medium text-white">
                              infor@mail.com
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-4 justify-between mt-10">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c8566474ee6d0a812d6ce17f085128fb145a9b587ad7d6003bd1886ba0c7d71?"
                            className="aspect-square w-[72px]"
                          />
                          <div className="flex flex-col flex-1 my-auto">
                            <div className="text-xs text-zinc-300 text-opacity-70">
                              Location
                            </div>
                            <div className="mt-5 text-base font-medium text-white">
                              Nairobi, Kenya
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex gap-4 text-center max-md:mt-10">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/31dc0aecd90f423d92cb632db08177daca88ed0da9295056318b57d9756ede70?"
                          className="aspect-square w-[72px]"
                        />
                        <div className="flex flex-col flex-1 my-auto">
                          <div className="text-xs text-zinc-300 text-opacity-70">
                            PHONE
                          </div>
                          <div className="mt-3 text-base font-medium text-white">
                            (254) 54434553
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="..."
                className="self-stretch my-auto w-full aspect-[1.56] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between items-center px-20 py-12 mt-52 w-full bg-white max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-start self-stretch my-auto text-base text-black whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c64c2e321e858e91666a272dadca096e62bc264f41dc2accf3786c5d9bc1c0d5?"
            className="max-w-full aspect-[3.33] w-[108px]"
          />
          <div className="flex flex-col mt-3">
            <div className="text-xs font-semibold text-neutral-400">About</div>
            <div className="mt-7">Company</div>
            <div className="mt-2.5">Careers</div>
          </div>
          <div className="flex flex-col mt-3">
            <div className="text-xs font-semibold text-neutral-400">Legal</div>
            <div className="mt-6">Terms of user</div>
            <div className="mt-3">Privacypolicy</div>
          </div>
        </div>
        <div className="self-stretch my-auto max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow mt-1 text-base text-black whitespace-nowrap max-md:mt-10">
                <div className="text-xs font-semibold text-neutral-400">
                  Connect
                </div>
                <div className="mt-7">Instagram</div>
                <div className="mt-2">Linkedin</div>
                <div className="mt-4">Facebook</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-10">
                <div className="text-xs font-semibold text-neutral-400">
                  Newsletter
                </div>
                <div className="flex gap-5 justify-between py-2 pr-3 pl-8 mt-7 text-base text-white bg-zinc-900 rounded-[32px] max-md:pl-5">
                  <div className="my-auto">Get started</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c17581fdfcd138354273d4bbf3af5caf0c26ae3962cefcd95223ce1f335057c?"
                    className="w-12 aspect-square"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-center px-16 py-12 w-full text-xs font-semibold text-black whitespace-nowrap border border-dashed bg-stone-50 border-neutral-400 max-md:px-5 max-md:max-w-full">
        KAZIF @ 2024
      </div>
    </div>
  );
}
export default LandingPage;
