import React, { useState } from "react";

const AssessmentForm = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Handler for image file upload
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Handle FileList correctly
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleDrop = (event: {
    preventDefault: () => void;
    dataTransfer: { files: any };
  }) => {
    event.preventDefault();

    const files = event.dataTransfer.files;
    if (files && files.length > 0) {
      const file = files[0];
      // Handle the file upload here (preview or process it)
      handleFileUpload(file);
    }
  };

  const handleFileUpload = (file: File) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;

        // Check if result is a string before setting the state
        if (typeof result === "string") {
          setSelectedImage(result); // Ensure it's a string (Data URL)
        }
      };
      reader.readAsDataURL(file); // Read the file as a data URL (base64 string)
    }
  };

  return (
    <div className="mt-8">
      {/* Share Assessment */}
      <div className="bg-white p-6 rounded-[16px] shadow-sm mb-6">
        <div className="flex flex-col">
          <span
            className="text-[20px] font-medium leading-[36px] text-left mb-4 text-[#0B1D2E]"
            style={{
              fontFamily: "P22 Mackinac",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            Share Assessment
          </span>
          <span
            className="text-[16px] font-normal leading-[36px] text-left text-[#0B1D2E]"
            style={{
              fontFamily: "P22 Mackinac",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            Add Cover image (Optional)
          </span>
        </div>

        <div
          className="w-full sm:w-[358px] h-[188px] p-[40px] pt-[50px] pb-[35px] bg-[#004EE114] border-[1.5px] border-solid border-[#B6C0F3] rounded-[9px] mt-4 cursor-pointer"
          style={{
            top: "40px",
          }}
          onClick={() => document.getElementById("fileInput")?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Uploaded Preview"
              className="w-full h-full object-cover rounded-[9px]"
            />
          ) : (
            <>
              <div className="flex justify-center items-center">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12"
                >
                  <path
                    d="M18 44H30C40 44 44 40 44 30V18C44 8 40 4 30 4H18C8 4 4 8 4 18V30C4 40 8 44 18 44Z"
                    fill="#B6C0F3"
                    stroke="#4A56DC"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 20C20.2091 20 22 18.2091 22 16C22 13.7909 20.2091 12 18 12C15.7909 12 14 13.7909 14 16C14 18.2091 15.7909 20 18 20Z"
                    fill="#B6C0F3"
                    stroke="#4A56DC"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.33984 37.9001L15.1998 31.2801C16.7798 30.2201 19.0598 30.3401 20.4798 31.5601L21.1398 32.1401C22.6998 33.4801 25.2198 33.4801 26.7798 32.1401L35.0998 25.0001C36.6598 23.6601 39.1798 23.6601 40.7398 25.0001L43.9998 27.8001"
                    fill="#B6C0F3"
                  />
                  <path
                    d="M5.33984 37.9001L15.1998 31.2801C16.7798 30.2201 19.0598 30.3401 20.4798 31.5601L21.1398 32.1401C22.6998 33.4801 25.2198 33.4801 26.7798 32.1401L35.0998 25.0001C36.6598 23.6601 39.1798 23.6601 40.7398 25.0001L43.9998 27.8001"
                    stroke="#4A56DC"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-gray-500">
                  Drop your image here, or{" "}
                  <span className="text-blue-500 cursor-pointer">browse</span>
                </p>
                <p className="text-xs text-gray-400">Maximum file size 5MB</p>
              </div>
            </>
          )}

          {/* File Input (hidden but clickable on click) */}
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={handleImageUpload}
            className="relative inset-0 opacity-0 cursor-pointer"
          />
        </div>
      </div>

      {/* Publish Time */}
      <div className="bg-white border border-[#E7E8EA] rounded-[16px] p-6 mb-6">
        <span
          className="text-[20px] font-normal leading-[36px] mb-4"
          style={{
            fontFamily: "P22 Mackinac",
          }}
        >
          Publish Time (Optional)
        </span>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 max-w-[591.5px] mt-4">
          <div className="flex-1">
            <label
              className="block text-[16px] font-medium leading-[36px] text-[#0B1D2E]"
              style={{
                fontFamily: "P22 Mackinac",
              }}
            >
              Add Date
            </label>
            <input type="date" className="mt-2 p-2 border rounded-lg w-full" />
          </div>
          <div className="flex-1">
            <label
              className="block text-[16px] font-medium leading-[36px] text-[#0B1D2E]"
              style={{
                fontFamily: "P22 Mackinac",
              }}
            >
              Add Time
            </label>
            <input type="time" className="mt-2 p-2 border rounded-lg w-full" />
          </div>
        </div>
      </div>

      {/* End Page */}
      <div className="bg-white border border-[#E7E8EA] rounded-[16px] p-6 mb-6 w-full h-[343px]">
        <span
          className="text-[20px] font-medium leading-[36px] text-[#0B1D2E] mb-4"
          style={{
            fontFamily: "P22 Mackinac",
          }}
        >
          End Page
        </span>
        <div className="mb-4">
          <label
            className="block text-[16px] font-medium leading-[36px] text-gray-700 text-[#0B1D2E] mb-2"
            style={{
              fontFamily: "P22 Mackinac",
            }}
          >
            Heading Text
          </label>
          <input
            type="text"
            value="You have completed this assessment!"
            className="mt-2 p-2 w-full max-w-[579px] h-[36px] border rounded-lg border-[#E7E8EA] bg-[#F4F4F4]"
          />
        </div>
        <div>
          <label
            className="block text-[16px] font-medium leading-[36px] text-left text-[#0B1D2E]"
            style={{
              fontFamily: "P22 Mackinac",
            }}
          >
            Body Text
          </label>
          <textarea
            value="Thank you for taking the time to answer this assessment."
            className="mt-2 p-2 w-full max-w-[579px] h-[80px] border rounded-lg border-[#E7E8EA] bg-[#F4F4F4]"
            rows={3}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-end items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <button
          className="bg-gray-300 text-[#0B1D2E] rounded-full w-full sm:w-[102px] h-[40px] px-[10px] py-[8px] border border-[#0B1D2E] flex items-center justify-center font-medium text-[14px] leading-[36px] text-right"
          style={{
            fontFamily: "P22 Mackinac",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Preview
        </button>
        <button
          className="bg-[#4A57DA] text-white w-full sm:w-[184px] h-[40px] px-[10px] py-[10px] rounded-full flex items-center justify-center font-medium text-[16px] leading-[36px]"
          style={{
            fontFamily: "P22 Mackinac",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            gap: "10px",
          }}
        >
          Send Assessment
        </button>
      </div>
    </div>
  );
};

export default AssessmentForm;
