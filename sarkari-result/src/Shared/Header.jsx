import React from "react";

const Header = () => {
  return (
    <div>
      <div className="bg-[#ab183d] flex justify-between w-[1010px] h-44 mt-2">
        <div>
          <img
            src="https://www.sarkariresult.com/images/logo-new.png"
            alt="logo"
            className="py-3 ml-5"
          />
        </div>
        <div className="text-white font-bold flex flex-col justify-center items-center mr-[25%]">
          <h1 className="text-5xl">SARKARI RESULT</h1>
          <h5 className="text-lg">WWW.SARKARIRESULT.COM</h5>
        </div>
      </div>
      <ul className="flex justify-around items-center w-[1010px] bg-black text-white font-bold">
        <li className="border-r p-4">Home</li>
        <li className="border-r p-4">Latest Jobs</li>
        <li className="border-r p-4">Results</li>
        <li className="border-r p-4">Admit Card</li>
        <li className="border-r p-4">Answer Key</li>
        <li className="border-r p-4">Syllabus</li>
        <li className="border-r p-4">Search</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default Header;
