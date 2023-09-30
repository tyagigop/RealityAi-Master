import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import Card from "../components/card_component";
import { useAirTable } from "./provider";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/society/${id}`, { society_id: id }); // Redirect to the home page
  };

  const handleNavigate = (route) => {
    navigate(`/${route}`); // Redirect to the home page
  };

  const handleSearchClick = () => {
    navigate("/search"); // Redirect to the home page
  };

  const { AirTable } = useAirTable();

  const getSocities = async () => {
    setIsLoading(true);
    var base = await AirTable.base("appxU1kFZ7dRXpFQs");

    let response = await base("Societies").select().all();
    setData(response);
    setIsLoading(false);
  };

  useEffect(() => {
    getSocities();
  }, []);

  //   const cardData = [
  //     {
  //       title: "Card 1",
  //       content: "This is the content of Card 1."
  //     },
  //     {
  //       title: "Card 2",
  //       content: "This is the content of Card 2."
  //     }
  //     // Add more card data as needed
  //   ];

  return (
    <div className="bg-slate-50">
      <header className="flex items-center justify-between bg-white p-4 shadow-lg shadow-slate-200/50">
        <div className="flex items-center">
          {/* <a href="#" className="mr-4 ml-2 text-xl">
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </a> */}
          {/* <span className="text-sm">Vastu Expert&nbsp;</span> */}
          {/* <span className="text-sm">Comparing in&nbsp;</span>
                    <span className="text-sm text-[#00B3DA]">Pune <FontAwesomeIcon icon={faAngleDown} /></span> */}
          <span className="text-sm text-[#00B3DA]">Vastu Expert</span>
        </div>
        <div className="mr-2">
          <a href="#">
            <img src="/assets/user.png" className="h-8 w-8" />
          </a>
        </div>
      </header>
      <div className="lg:p-8">
        <div className="flex flex-col sm:flex-row items-center p-4 ">
          <div className="relative flex w-full" onClick={handleSearchClick}>
            <input disabled={true} type="text" placeholder="Search" className="border border-black rounded-lg py-2 px-4 w-full focus:outline-none focus:border-[#00B3DA] bg-white" />
            <div className="absolute right-0 top-0 bottom-0 flex items-center pr-3 rounded-lg">
              <FontAwesomeIcon icon={faSearch} className="text-slate-300" />
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold">Newly Launched</h3>
        </div>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.map((card, index) => (
            <Card id={card.id} key={index} imageSrc={card.get("Attachments")} title={card.get("SocietyName")} buttonText={"visit"} content={card.get("Address")} />
          ))}
        </div>
      </div>
    </div>
  );
}
