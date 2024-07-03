import React, { useState } from "react";

function Services() {
  const [isChecked, setIsChecked] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [imageName, setImageName] = useState("");

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
      setImageName(file.name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isConfirmed = window.confirm("Are you sure you want to save?");
    if (!isConfirmed) {
      return;
    }

    console.log("Form submitted!");
  };

  return (
    <>
      <div className="text-xl font-bold py-5">Services</div>
      <div className="py-2 text-lg"> Lost & found</div>
      <hr className="h-0.5 bg-gray-300" />
      <div className="py-3"></div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row">
            <div className="flex flex-col px-7">
              <label htmlFor="serviceName">Service Name</label>
              <input
                className="border border-gray-400 rounded-sm"
                type="text"
                id="serviceName"
                required
              />
            </div>
            <div className="flex flex-col px-7">
              <label htmlFor="category">Category</label>
              <select
                className="border border-gray-400 rounded-sm w-36"
                id="category"
                required
              >
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 4">Option 4</option>
              </select>
            </div>
            <div className="flex flex-col px-7">
              <label htmlFor="subCategory">Sub Category</label>
              <select
                className="border border-gray-400 rounded-sm w-36"
                id="subCategory"
                required
              >
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 4">Option 4</option>
              </select>
            </div>
            <div className="flex flex-col px-7 justify-center">
              <label
                className="flex flex-row bg-gray-300 rounded-full w-40 h-8 px-4 py-1 cursor-pointer"
                htmlFor="imageUpload"
              >
                <input
                  type="file"
                  id="imageUpload"
                  className="hidden"
                  onChange={handleImageUpload}
                  required
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/860/860826.png"
                  alt=""
                  className="w-4 h-4 mx-1 my-1"
                />
                Upload image
              </label>
              {imageName && <span className="text-sm ml-2">{imageName}</span>}
            </div>

            <div className="flex flex-col px-7 justify-center">
              <input
                type="checkbox"
                id="switch"
                className="hidden"
                checked={isChecked}
                onChange={handleToggle}
              />
              <div
                className={`relative flex items-center justify-center h-4 w-8 rounded-full ${
                  isChecked ? "bg-black" : "bg-gray-300"
                }`}
              >
                <span
                  className={`absolute left-1 w-3 h-3 rounded-full bg-white shadow-md transition-transform ${
                    isChecked ? "transform translate-x-full" : ""
                  }`}
                ></span>
              </div>
              <label className="cursor-pointer" htmlFor="switch">
                {isChecked ? "Hide image" : "Show image"}
              </label>
            </div>

            <div className="flex flex-col px-7 justify-center">
              <button
                type="submit"
                className="flex flex-row bg-black rounded-full w-16 h-8 px-4 py-1 text-white"
              >
                Save
              </button>
            </div>
          </div>
          <div className="py-4"></div>
          <div className="flex flex-col px-7">
            <label htmlFor="description">Description:</label>
            <textarea
              className="w-96 h-7 border border-black"
              id="description"
              required
            />
          </div>
        </form>
      </div>

      {isChecked && imageUrl && (
        <div className="flex flex-col px-7">
          <img src={imageUrl} alt="Uploaded" className="mt-4 max-w-xs" />
        </div>
      )}

      <div className="py-2 text-lg mt-7"> Lost & found</div>
      <hr className=" bg-gray-300" />
      <div className="py-1"></div>
      <div className="py-2 text-lg"> Money Exchange</div>
      <hr className=" bg-gray-300" />
      <div className="py-4"></div>
    </>
  );
}

export default Services;
