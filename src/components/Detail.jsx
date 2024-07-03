import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Card from "./Card";
import Services from "./Services";

const Detail = () => {
  const { name } = useParams();
  const [activeTab, setActiveTab] = useState("Terminals");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="ml-80 mt-24 mr-20">
      <nav className="flex mb-4">
        <ol className="flex list-none">
          <li className="flex items-center">
            <Link to="/airport"><span className="text-gray-500">Airports</span></Link>
            <span className="mx-2">&gt;</span>
          </li>
          <li className="flex items-center">
            <span className="font-bold">{name}</span>
          </li>
        </ol>
      </nav>
      <h1 className="text-2xl font-bold mb-4">{name}</h1>

      <div className="flex relative mb-4">
        <div className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-300"></div>

        <div
          className={`cursor-pointer py-2 px-4 relative ${
            activeTab === "Terminals" ? "text-black" : "text-gray-500"
          }`}
          onClick={() => handleTabClick("Terminals")}
        >
          <span className="font-medium">Terminals</span>
          {activeTab === "Terminals" && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black"></div>
          )}
        </div>

        <div
          className={`cursor-pointer py-2 px-4 relative ${
            activeTab === "Transport" ? "text-black" : "text-gray-500"
          }`}
          onClick={() => handleTabClick("Transport")}
        >
          <span className="font-medium">Transport</span>
          {activeTab === "Transport" && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black"></div>
          )}
        </div>

        <div
          className={`cursor-pointer py-2 px-4 relative ${
            activeTab === "Contact Details" ? "text-black" : "text-gray-500"
          }`}
          onClick={() => handleTabClick("Contact Details")}
        >
          <span className="font-medium">Contact Details</span>
          {activeTab === "Contact Details" && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black"></div>
          )}
        </div>
      </div>

      {activeTab === "Terminals" && (
        <div className="flex">
          <div className="flex flex-row items-center space-x-5">
            <Card
              title="Terminal 1"
              description="Explore Terminal 1 with ease and comfort, offering a range of amenities for your travel convenience."
            />
            <div className="px-1"></div>
            <Card
              title="Terminal 2"
              description="Explore Terminal 2 with ease and comfort, offering a range of amenities for your travel convenience."
            />
          </div>
          <div className="px-1"></div>
          <div className="flex items-center ml-5">
            <div className="justify-center border-2 border-black rounded-full px-2 h-8 w-32 flex items-center">
              <button>+ Add Terminal</button>
            </div>
          </div>
        </div>
      )}
      {activeTab === "Transport" && (
        <div className="flex">
          <div className="flex flex-row items-center space-x-5">
            <Card
              title="Transport 1"
              description="Transport services at our location are designed to ensure your travel needs are met conveniently and efficiently."
            />
            <div className="px-1"></div>
            <Card
              title="Transport 2"
              description="Transport services at our location are designed to ensure your travel needs are met conveniently and efficiently."
            />
          </div>
          <div className="px-1"></div>
          <div className="flex items-center ml-5">
            <div className="justify-center border-2 border-black rounded-full px-2 h-8 w-36 flex items-center">
              <button>+ Add Transport</button>
            </div>
          </div>
        </div>
      )}
      {activeTab === "Contact Details" && (
        <div className="flex">
          <div className="flex flex-row items-center space-x-5">
            <Card
              title="Contact Detail 1"
              description="For specific inquiries or assistance, please feel free to reach out to us using this detail. We're here to help!"
            />
            <div className="px-1"></div>
            <Card
              title="Contact Detail 2"
              description="For specific inquiries or assistance, please feel free to reach out to us using this detail. We're here to help!"
            />
          </div>
          <div className="px-1"></div>
          <div className="flex items-center ml-5">
            <div className="justify-center border-2 border-black rounded-full px-2 h-8 w-44 flex items-center">
              <button>+ Add Contact Details</button>
            </div>
          </div>
        </div>
      )}
      <div>
        <Services />
      </div>
    </div>
  );
};

export default Detail;
