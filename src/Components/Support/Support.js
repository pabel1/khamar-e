import React from "react";

const Support = ({ data }) => {
  return (
    <div className=" bg-secondary my-8">
      <div className=" flex justify-around items-center py-6  ">
        <h1
          className=" text-3xl text-white font-bold tracking-wide 
        transition-all font-myfont"
        >
          {data.title}
        </h1>
        {data?.phone && (
          <a
            className=" py-3 px-6 border   rounded-md text-white text-3xl font-bold 
          tracking-wide transition-all hover:text-black"
            href="/"
          >
            {data?.phone}
          </a>
        )}
        {data?.input && (
          <div className=" flex items-center bg-white border rounded ">
            <input
              className=" text-textDark p-2 outline-none  "
              type="email"
              placeholder={`${data.input}`}
            />
            <button className="p-2 bg-primaryColor text-white ">Submit</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Support;
