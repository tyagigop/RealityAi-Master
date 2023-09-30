import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ imageSrc, title, content, buttonText, id }) => {
  const navigate = useNavigate();
  const verifyOtpHandler = () => {
    navigate("/otp"); // Redirect to the home page
  };

  const handleSearchClick = (id) => {
    console.log(id);
    navigate(`/society/${id}`, { society_id: id }); // Redirect to the home page
  };

  const handleNavigate = (route) => {
    navigate(`/${route}`); // Redirect to the home page
  };

  return (
    <div className="border rounded-md m-1 max-w-md mx-auto bg-white shadow-md overflow-hidden md:max-w-2xl" onClick={() => handleSearchClick(id)}>
      <div className=" m-2">
        <img className="h-48 w-full object-cover rounded-md " src={imageSrc[0].url} alt={title} />
      </div>
      <div className="p-2 flex justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          {/* <p className="mt-1 text-gray-600 text-base">{content}</p> */}
          <p className="mt-1 text-gray-400 text-sm">{content}</p>
        </div>

        <div className="mt-4">
          <button className="text-sm text-[#00B3DA] border border-[#00B3DA] rounded-lg p-2 focus:outline-none focus:border-blue-500">{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
