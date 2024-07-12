// import React, { useState } from "react";
// import Section_1 from "../Components/Section_1";
// import Section_2 from "../Components/Section_2";
// import Section_3 from "../Components/Section_3";
// import Section_4 from "../Components/Section_4";
// import Section_5 from "../Components/Section_5";
// import Section_6 from "../Components/Section_6";

// const Home = () => {
//   let [toggle, setToggle] = useState(false);

//   function handleChange() {
//     setToggle(!toggle);
//   }

//   return (
//     <>
//       <div
//         className={`absolute  top-2 right-[460px]  font-bold ${toggle ? " text-white" : ""}`}
//         onClick={handleChange}
//       >
//         {toggle ? "Dark" : "Light"}
//       </div>
//       <div className={`${toggle ? "bg-black text-white" : "bg-white"}`}>
//       <Section_1 />
//       <Section_2 />
//       <Section_3 />
//       <Section_4 />
//       <Section_5 />
//       <Section_6 />
//       </div>
//     </>
//   );
// };

// export default Home;
import React, { useState } from "react";
import Section_1 from "../Components/Section_1";
import Section_2 from "../Components/Section_2";
import Section_3 from "../Components/Section_3";
import Section_4 from "../Components/Section_4";
import Section_5 from "../Components/Section_5";
import Section_6 from "../Components/Section_6";

const Home = () => {
  const [toggle, setToggle] = useState(false);

  function handleChange() {
    setToggle(!toggle);
  }

  return (
    <div className={toggle ? "dark-mode" : "light-mode"}>
      <div
        className={`absolute top-2 right-[460px] font-bold cursor-pointer ${
          toggle ? "text-white" : ""
        }`}
        onClick={handleChange}
      >
        {toggle ? "Dark" : "Light"}
      </div>

      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Section_5 />
      <Section_6 />
    </div>
  );
};

export default Home;
