import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(1);
  return (
    <div className="bg-blue-50 py-2 ">
      <div className=" min-h-screen flex my-10">
        <div className=" my-auto mx-auto text-center w-1/2">
          <h1 className=" font-black m-5 text-5xl text-blue-900 ">
            The bank & fiancial hub built for independen landlords
          </h1>
          <p className="text-blue-900 w-2/3 my-10 mx-auto">
            Effortlessly manage your finances in one places to save time,
            increase your return and grow your real estate portofolio
          </p>
          <div class=" m-10 ">
            <form>
              <input
                className="placeholder-gray-500 placeholder-opacity-100 w-60 border-solid border-2 border-grey-100 h-auto p-1 rounded-lg"
                type="text"
                velue="name"
                placeholder="Enter your email"
              />
              <input
                className=" w-36 bg-blue-900 text-white rounded-lg p-2 ml-2"
                type="submit"
                value="Submit"
              />
            </form>
            <div className="flex flex-wrap justify-center">
              <div className="sm:w-full min-w-0 px-0 p-20 ">
                <img
                  src="amico.png"
                  className="shadow rounded max-w-xl my-auto mx-auto h-auto align-middle border-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
