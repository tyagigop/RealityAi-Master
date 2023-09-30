import { faAngleLeft, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import { useAirTable } from "./provider";
export default function Search() {
  const navigate = useNavigate();
  const handleSearchClick = (id) => {
    console.log(id);
    navigate(`/society/${id}`, { society_id: id }); // Redirect to the home page
  };

  const handleNavigate = (route) => {
    navigate(`/${route}`); // Redirect to the home page
  };

  const { AirTable } = useAirTable();

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [recommended, setRecommended] = useState([]);

  const getSocities = async () => {
    setIsLoading(true);
    var base = await AirTable.base("appxU1kFZ7dRXpFQs");

    let response = await base("Societies").select().all();

    console.log(response);
    // setData(response)
    setIsLoading(false);
    if (recommended.length == 0)
      for (let res of response) {
        if (res.get("Recommended") && !recommended.includes(res)) {
          recommended.push(res);
          // setRecommended(recommended)
        }
      }
  };

  useEffect(() => {
    console.log("usetstate");
    getSocities();
  }, []);

  const handleSearch = async (e) => {
    if (e.target.value.length > 2) {
      setIsLoading(true);
      var base = await AirTable.base("appxU1kFZ7dRXpFQs");
      let response = await base("Societies")
        .select({ filterByFormula: `SEARCH(LOWER("${e.target.value}"), LOWER(SocietyName)) > 0` })
        .all();
      setData(response);
      setIsLoading(false);
    } else {
      setData([]);
    }
  };

  const cardData = [
    {
      title: "Card 1",
      content: "This is the content of Card 1."
    },
    {
      title: "Card 2",
      content: "This is the content of Card 2."
    }
    // Add more card data as needed
  ];
  return (
    <div className="bg-slate-50">
      <header className="flex items-center justify-between bg-white p-4 shadow-lg shadow-slate-200/50">
        <div className="flex items-center">
          <a onClick={() => handleNavigate("home")} className="mr-4 ml-2 text-xl cursor-pointer">
            <FontAwesomeIcon icon={faAngleLeft} />
          </a>
          <span className="text-sm">Vastu Expert</span>
          {/* <span className="text-sm">Comparing in&nbsp;</span> */}
          {/* <span className="text-sm text-[#00B3DA]">
            Pune <FontAwesomeIcon icon={faAngleDown} />
          </span> */}
        </div>
        <div className="mr-2">
          <a href="#">
            <img src="/assets/user.png" className="h-8 w-8" />
          </a>
        </div>
      </header>
      <div className="lg:p-8">
        <div className="flex flex-col sm:flex-row items-center p-4">
          <div className="relative flex w-full">
            <input onChange={handleSearch} type="text" placeholder="Search" className="border border-black rounded-lg py-2 px-4 w-full focus:outline-none focus:border-[#00B3DA]" />
            <div className="absolute right-0 top-0 bottom-0 flex items-center pr-3 rounded-lg">
              <FontAwesomeIcon icon={faSearch} className="text-slate-300" />
            </div>
          </div>
        </div>

        <div className="">
          {data.length > 0 ? (
            data.map((element, index) => (
              <div className="mt-3">
                <div className="flex justify-between pl-4 pr-4 cursor-pointer" onClick={() => handleSearchClick(element.id)}>
                  <div>
                    <div className="flex">
                      <div className="font-semibold">{element.get("SocietyName").split(" ")[0]}&nbsp;</div>
                      <div>{element.get("SocietyName").split(" ").slice(1)} </div>
                    </div>
                    <div className="text-slate-400">{element.get("Address")}</div>
                  </div>
                  {/* <div className='flex flex-col-reverse'>
                                            <div className='text-slate-400'>111 </div>
                                        </div> */}
                </div>
                <hr className="my-1.5 border-gray-300" />
              </div>
            ))
          ) : (
            <div className="pl-4 pr-4"></div>
          )}
        </div>
        <div className="pl-4 pr-4 mb-5 mt-5">
          <h3 className="text-lg font-semibold">Recommended localities</h3>
        </div>

        <div className="">
          {recommended.map((element, index) => (
            <div className="mt-3">
              <div className="flex justify-between pl-4 pr-4 cursor-pointer" onClick={() => handleSearchClick(element.id)}>
                <div>
                  <div className="flex">
                    <div className="font-semibold">{element.get("SocietyName").split(" ")[0]}&nbsp;</div>
                    <div>{element.get("Address").split(" ").slice(1)} </div>
                  </div>
                  <div className="text-slate-400">{element.get("Address")}</div>
                </div>
                {/* <div className="flex flex-col-reverse">
                  <div className="text-slate-400">111 </div>
                </div> */}
              </div>
              <hr className="my-1.5 border-gray-300" />
            </div>
          ))}
        </div>

        {/* <div className="mt-16 bg-transparent p-4 md:bottom-16 lg:bottom-20 flex justify-center items-center ">
                    <button className={`${true == true ? "bg-[#00B3DA] text-white" : "bg-transparent"} border border-gray-300 rounded-lg w-96 h-12 px-4 py-2 text-gray-700 focus:outline-none focus:border-blue-500`}>
                        Search
                    </button>
                </div> */}
      </div>
    </div>
  );
}
