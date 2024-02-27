import { Link } from "react-router-dom";
import Footer from "../components/sections/Footer";
import Navbar from "../components/sections/navbar";

function HomePage() {
  return (
    <>
      <div className="flex flex-col items-center bg-white rounded-2xl border border-solid shadow-sm border-stone-20 w-[393px]">
        <Navbar />
        <div className=" flex flex-col items-center w-full p-8">
          <div className="text-2xl font-semibold text-center whitespace-nowrap text-slate-950">
            Scan Linkedin Job
          </div>
          <div className="mt-3 text-sm leading-4 text-center text-slate-600">
            Open the Linkedin tab of the job post you want to scan
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb88fa71504fa3e1e9c55539c00d83ed7071fe6038e2ee99cdeb0f9b0b0f92d0?"
            className="mt-7 w-full aspect-[1.49]"
          />
          <Link
            to="/scan"
            className=" px-16 py-4 w-full inline-flex justify-center items-center gap-5 mt-12 text-base font-semibold text-center text-white shadow-sm bg-slate-950 rounded-full"
          >
            Scan Job
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/eee024c007a1292148e9db5b3b71a760455ff8f777dbf5a0092c0a30f546e5ad?"
              className="aspect-square w-[30px]"
            />
          </Link>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
