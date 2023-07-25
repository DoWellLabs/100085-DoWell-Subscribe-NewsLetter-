import React from "react";
import { BackIcon, Spinner } from "./icons";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { fetchAllSubscribers } from "../services/request";

export const Subscribers = () => {
  const navigate = useNavigate();
  const { isLoading, data: results } = useQuery("fetch-all-subscribers", () =>
    fetchAllSubscribers({ type: "subscriberlist" })
  );

  const {
    Details: { data },
  } = results ?? { Details: { data: [] } };

  return (
    <div className=" w-8/12 mx-auto mt-8 ">
      <BackIcon
        clickHandler={() => navigate(-1)}
        classNames={[
          "absolute cursor-pointer top-[20px] left-[20px] rounded-full bg-white",
        ]}
        size="2rem"
      />
      <div className="text-xl text-sky-700">
        <h1>List of Subscribers</h1>
      </div>
      <div>
        {isLoading ? (
          <Spinner
            classNames={[
              "animate-spin h-5 w-5 mt-16 size={size} fill-sky-500 flex justify-center items-center",
            ]}
          />
        ) : (
          <>
            {data.map((item) => (
              <>
                <div
                  key={item.id}
                  className="mt-4 bg-white rounded-lg px-8 pt-4"
                >
                  <h1 className="text-black text-lg">Subscriber Information</h1>

                  <div className="info divide-y divide-zinc-300">
                    <div className="topic pt-3">
                      <p className="text-lg">Topic</p>
                      <p className="py-2">{item.topic}</p>
                    </div>

                    <div className="eamil pt-4">
                      <p className="text-lg">Email</p>
                      <p>{item.subscriberEmail}</p>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
