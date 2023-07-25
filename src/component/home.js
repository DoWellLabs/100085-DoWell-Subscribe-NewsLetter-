import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="mx-auto w-8/12 md:w-2/5 bg-[#282B34] mt-28 rounded-lg">
      <nav className="text-white w-full pt-4 px-8">
        <ul className="flex">
          <li className="hover:text-slate-400">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="ml-auto hover:text-slate-400">
            <Link to={"/subscribers"}>Subscribers</Link>
          </li>
          <li className="mx-4 hover:text-slate-400">
            <Link to={"/subscribe"}>Subscribe</Link>
          </li>
          <li className="hover:text-slate-400">
            <Link to={"/unsubscribe"}>Unsubscribe</Link>
          </li>
        </ul>
      </nav>
      <div className="text-white">
        <div className="pt-12 text-center">
          <h1 className="text-xl text-sky-500">
            Dowell Newsletter Subscription Service
          </h1>
          <p className="mt-4">
            Welcome to the Dowell Newsletter Subscripion Service
          </p>
        </div>
        <div className="px-12 pt-8 pb-12">
          <ul>
            <li className="py-4">
              <Link to={"/subscribers"}>List all subscribers</Link>
            </li>
            <li>
              <Link to={"/subscribe"}>Subscribe to newsletter</Link>
            </li>
            <li className="py-4">
              <Link to={"/unsubscribe"}>Unsubscribe from newsletter</Link>
            </li>
            {/* <li>
              <Link>Distribute Newsletter</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};
