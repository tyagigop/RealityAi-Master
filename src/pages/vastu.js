import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Layout from "./Layout";
import { useAirTable } from "./provider";
import Select from "./select";
import "./vastu.css";

export default function Vastu() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [isFailed, setIsFailed] = useState(false);
  const [data, setData] = useState(null);
  const [societyData, setSocietyData] = useState([]);
  const [towerOptions, setTowerOptions] = useState([{ label: "Select Tower", value: "0" }]);
  const [sizeOptions, setSizeOptions] = useState([{ label: "Select Size", value: "0" }]);
  const [selectedBhk, setSelectedBhk] = useState("all");
  const [selectedBhkData, setSelectedBhkData] = useState(null);
  const [selectedTower, setSelectedTower] = useState("0");
  const [selectedSize, setSelectedSize] = useState("0");
  const [societyFilterData, setSocietyFilterData] = useState([]);
  const [societyConfigsData, setSocietyConfigsData] = useState([]);
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  useEffect(() => {
    societyFilterData.sort((a, b) => b.get("Vastu Score") - a.get("Vastu Score"));
  }, [societyFilterData]);

  function getBackgroundColor(score) {
    if (score >= 7) {
      return "green";
    } else if (score >= 5) {
      return "lightgreen";
    } else {
      return "red";
    }
  }

  let { society_id } = useParams();

  // console.log(location.society_id);
  // const society_id = location.society_id

  const { AirTable } = useAirTable();

  const getSociety = async () => {
    try {
      setIsLoading(true);
      var base = await AirTable.base("appxU1kFZ7dRXpFQs");
      let response = await base("Societies").find(society_id);
      setData(response);
      await getSocietyDetail(response.get("SocietyName"));
      setIsLoading(false);
    } catch (err) {
      setIsFailed(true);
    }
  };

  const getSocietyDetail = async (SocietyName) => {
    var base = await AirTable.base("appxU1kFZ7dRXpFQs");
    let response = await base("Sheet2")
      .select({
        filterByFormula: `SocietyName = "${SocietyName}"`
      })
      .all();
    let towerOptions = [{ label: "Select Tower", value: "0" }];
    let sizeOptions = [{ label: "Select Size", value: "0" }];

    for (let res of response) {
      let tObj = { label: res.get("Tower"), value: res.get("Tower") };
      if (towerOptions.filter((e) => e.label === tObj.label).length == 0) {
        towerOptions.push(tObj);
      }

      let sObj = { label: res.get("Size"), value: res.get("Size") };
      if (sizeOptions.filter((e) => e.label === sObj.label).length == 0) {
        sizeOptions.push(sObj);
      }
    }

    setTowerOptions(towerOptions);
    setSizeOptions(sizeOptions);

    setSocietyData(response);
    setSocietyFilterData(response);

    getConfigsDetail(SocietyName);
  };

  const getConfigsDetail = async (SocietyName) => {
    var base = await AirTable.base("appxU1kFZ7dRXpFQs");
    let response = await base("Images")
      .select({
        filterByFormula: `Name = "${SocietyName}"`
      })
      .all();

    let op = [];
    for (let res of response) {
      op.push({
        label: res.get("Configuration"),
        value: res.get("Configuration"),
        image: res.get("Attachments").length > 0 ? res.get("Attachments")[0].url : ""
      });
    }
    setSocietyConfigsData(op);
    setSelectedBhkData(op.find((ele) => ele.label == "all"));
  };

  useEffect(() => {
    getSociety();
  }, []);

  useEffect(() => {
    if (societyData.length > 0) {
      const filteredData = societyData.filter((ele) => {
        return (selectedBhk == "0" || ele.get("Configuration") == selectedBhk || selectedBhk == "all") && (selectedSize == "0" || ele.get("Size") == selectedSize) && (selectedTower == "0" || ele.get("Tower") == +selectedTower);
      });
      setSocietyFilterData(filteredData);
    }
  }, [selectedBhk, selectedSize, selectedTower, societyData]);

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" }
  ];

  const bhkOptions = [
    { label: "1 BHK", value: "1 BHK" },
    { label: "2 BHK", value: "2 BHK" },
    { label: "3 BHK", value: "3 BHK" }
  ];

  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleBhkSelectChange = (event) => {
    setSelectedBhk(event.target.value);
    setSelectedBhkData(societyConfigsData.find((ele) => ele.label == event.target.value));
  };

  const handleTowerSelectChange = (event) => {
    setSelectedTower(event.target.value);
  };

  const handleSizeSelectChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleReset = () => {
    setSelectedSize("0");
    setSelectedTower("0");
    setSelectedBhk("1 BHK");
  };

  const navigate = useNavigate();
  const handleClick = (flat_id) => {
    navigate(`/vastu-detail/${society_id}/${flat_id}`); // Redirect to the home page
  };

  const initialRowCount = 10;
  const additionalRowCount = 5;

  const [rowCount, setRowCount] = useState(initialRowCount);

  const handleViewMore = () => {
    setRowCount(rowCount + additionalRowCount);
  };

  const handleNavigate = (route) => {
    navigate(`/${route}`); // Redirect to the home page
  };

  return (
    <Layout>
      <header className="flex items-center justify-between bg-white p-4 shadow-lg shadow-slate-200/50">
        <div className="flex items-center">
          <a className="mr-4 ml-2 text-xl" onClick={() => handleNavigate("search")}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </a>
          <span className="text-sm text-[#00B3DA]">Vaastu Expert</span>
          {/* <span className="text-sm text-[#00B3DA]">Pune <FontAwesomeIcon icon={faAngleDown} /></span> */}
        </div>
        <div className="mr-2">
          <a href="#">
            <img src="/assets/user.png" className="h-8 w-8" />
          </a>
        </div>
      </header>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">{isFailed ? <div>Not Found</div> : "Loading"}</div>
      ) : (
        <div className="pl-4 pr-4 mb-5 mt-5 lg:p-8">
          <div className="text-lg font-semibold">{data.get("SocietyName")}</div>
          <div className="text-slate-400">{data.get("Address")}</div>
          <div className="mt-6 font-semibold">Configuration</div>
          {/* <div className='mt-6 font-semibold'>I'm looking for a</div> */}

          <div className="mt-2 mb-4">
            <Select value={selectedBhk} options={societyConfigsData} onChange={handleBhkSelectChange} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className={`zoomable-image ${isZoomed ? "zoomed" : ""} flex items-center justify-center `} onClick={toggleZoom}>
              {selectedBhkData && selectedBhkData.image && <img className="h-64 lg:h-full md:h-80 w:full object-contain border rounded-md border-[#00B3DA]" src={selectedBhkData.image} />}
              {/* <img className='h-64 lg:h-full md:h-80 w:full object-contain border rounded-md border-[#00B3DA]' src='/assets/vaastu.jpeg' /> */}
            </div>

            <div>
              <div className="flex justify-between items-center">
                <Select value={selectedTower} options={towerOptions} onChange={handleTowerSelectChange} />
                <Select value={selectedSize} options={sizeOptions} onChange={handleSizeSelectChange} />
                <button onClick={handleReset} className="flex items-center text-sm h-8 text-[#00B3DA] border border-[#00B3DA] rounded-lg pl-4 pr-4 focus:outline-none focus:border-blue-500">
                  Reset
                </button>
              </div>

              <div className="">
                <div className="mt-4">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border rounded-lg">
                      <thead>
                        <tr>
                          <th className="p-2 bg-gray-100 border whitespace-nowrap ">Tower</th>
                          <th className="p-2 bg-gray-100 border whitespace-nowrap ">Series</th>
                          <th className="p-2 bg-gray-100 border whitespace-nowrap ">Config</th>
                          <th className="p-2 bg-gray-100 border whitespace-nowrap ">Size</th>
                          <th className="p-2 bg-gray-100 border whitespace-nowrap ">Score</th>
                          {/* Add more header columns as needed */}
                        </tr>
                      </thead>
                      <tbody>
                        {societyFilterData.slice(0, rowCount).map((item, index) => {
                          const score = item.get("Vastu Score");
                          const bgColor = getBackgroundColor(score);
                          return (
                            <tr key={index} className="border" onClick={() => handleClick(item.id)}>
                              <td className="p-2 border cursor-pointer">{item.get("Tower")}</td>
                              <td className="p-2 border cursor-pointer">{item.get("Series")}</td>
                              <td className="p-2 border cursor-pointer">{item.get("Configuration")}</td>
                              <td className="p-2 border cursor-pointer">{item.get("Size")}</td>
                              <td className="p-2 border cursor-pointer" style={{ backgroundColor: bgColor }}>
                                {item.get("Vastu Score")}
                              </td>
                              {/* Add more data columns as needed */}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  {rowCount < societyFilterData.length && (
                    <div onClick={handleViewMore} className="bg-transparent p-4 md:bottom-16 lg:bottom-20 flex justify-center items-center ">
                      <button className={`${true == true ? "bg-[#00B3DA] text-white" : "bg-transparent"} border border-gray-300 rounded-lg w-96 h-12 px-4 py-2 text-gray-700 focus:outline-none focus:border-blue-500`}>View More</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
