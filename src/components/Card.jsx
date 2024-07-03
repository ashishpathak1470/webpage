import React, { useState } from "react";

const Card = ({ title, description }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const imageUrl =
    "https://s3-alpha-sig.figma.com/img/e6fa/4d5a/9fa67efdaff0836c6b48500e00b4f1f6?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LdmYr5MqACzkzoqBJySPUXr-BgPcR0Tv3kWP7smBJk--CfbuhTMUeL~FMaGC4SN5ZEuVpAtG9X3pq7V-lFONPEgYXtiQgjpDLVicqokdVgKAG17B6PBljOTgqwDlqjkT91uZcWjHC9vS2~9OCxnUzyLBFTAMwIWADc3yRpeqvV4g4u7k1STFHxq~Nk-vsBw2sXcsVHlMpoa6DT4rTAlmpAlBEQvkmCJkxtQLTPRQ-SXMckrjKDHOo8b~Kgj4tGQ87tTwRTYzx7iSX~K8LxAT9I6ADjFT~SLM-aa0qQXZLomWgc3JLzJmeJ1JIMhF~b2kyqbQfDjrjAyzRqrkIZomYw__";

  return (
    <>
      <div
        className="border border-gray-300 rounded-md shadow-sm flex mb-4 cursor-pointer"
        style={{ width: "300px", height: "115px" }}
        onClick={openModal}
      >
        <div
          className="bg-cover bg-center w-32 h-full rounded-sm"
          style={{ backgroundImage: `url('${imageUrl}')` }}
        ></div>
        <div
          className="flex flex-col justify-between p-2"
          style={{ width: "calc(100% - 80px)" }}
        >
          <div className="flex justify-between items-center">
            <div className="text-sm font-semibold">{title}</div>
            <button
              aria-haspopup="true"
              className="p-1 bg-transparent hover:bg-gray-200 rounded-full"
            >
              <svg
                className="w-6 h-6 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 12a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm6 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm6 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"></path>
              </svg>
            </button>
          </div>
          <div className="text-xs text-gray-600">{description}</div>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg max-w-xl w-full">
            <div className="text-lg font-semibold">{title}</div>
            <hr className="my-2" />
            <div className="text-sm">{description}</div>
            <div className="flex justify-between mt-4">
              <button
                className="flex items-center bg-gray-300 rounded-full px-3 py-1 text-sm font-bold"
                onClick={closeModal}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/860/860826.png"
                  alt=""
                  className="w-3 h-3 mr-2"
                />
                Upload Image
              </button>
              <div>
                <button className="border-2 border-gray-400 rounded-full w-16 mr-2 text-sm h-8" onClick={closeModal}>
                  Cancel
                </button>
                <button className="border-black rounded-full px-4 py-2 text-sm font-bold border-2">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
