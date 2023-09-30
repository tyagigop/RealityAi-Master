import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "./Layout";
import { useAirTable } from "./provider";
import "./vastu.css";

export default function VastuDetail() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" }
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [isFailed, setIsFailed] = useState(false);
  const [societyData, setSocietyData] = useState(null);
  const [flatData, setFlatData] = useState([]);
  const [isZoomed, setIsZoomed] = useState(false);
  const [tableData, setTableData] = useState([]);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  let { society_id, flat_id } = useParams();

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
      console.error(err);
      setIsFailed(true);
    }
  };

  const openTable = async () => {
    var base = await AirTable.base("appxU1kFZ7dRXpFQs");
    let response = await base("Sizing Guide").select().all();
    setTableData(response);
    setOpen(true);
  };

  const getSocietyDetail = async (SocietyName) => {
    var base = await AirTable.base("appxU1kFZ7dRXpFQs");
    let response = await base("Sheet2").find(flat_id);
    setSocietyData(response);
    let response2 = await base("Sheet1")
      .select({
        filterByFormula: `AND(SocietyName = "${SocietyName}" , Tower = "${response.get("Tower")}" , Configuration = "${response.get("Configuration")}" , Size = "${response.get("Size")}")`
      })
      .all();
    setFlatData(response2);
  };

  useEffect(() => {
    getSociety();
  }, []);
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const initialRowCount = 10;
  const additionalRowCount = 5;

  const [rowCount, setRowCount] = useState(initialRowCount);

  const handleViewMore = () => {
    setRowCount(rowCount + additionalRowCount);
  };

  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(`/${route}`); // Redirect to the home page
  };

  return (
    <Layout>
      <header className="flex items-center justify-between bg-white p-4 shadow-lg shadow-slate-200/50">
        <div className="flex items-center">
          <a href="#" className="mr-4 ml-2 text-xl" onClick={() => handleNavigate(`society/${society_id}`)}>
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
          <div className="flex justify-between items-center ">
            <div>
              <div className="text-lg font-semibold">
                Tower {societyData.get("Tower")} - {societyData.get("Configuration")}
              </div>
              <div className="text-slate-400">
                {societyData.get("Size")} - Series {societyData.get("Series")}
              </div>
            </div>
            <div>
              <div className="text-xl font-semibold">{societyData.get("Vastu Score")}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
            <div className={`zoomable-image ${isZoomed ? "zoomed" : ""} flex items-center justify-center `} onClick={toggleZoom}>
              <img className="h-64 lg:h-full md:h-80 w:full object-contain border rounded-md border-[#00B3DA]" src={societyData.get("Attachments").length > 0 ? societyData.get("Attachments")[0].url : ""} />
            </div>
            <button className="bg-red-500 border border-gray-300 rounded-lg w-80 h-12 px-4 py-2 text-white hover:bg-red-600 focus:outline-none focus:border-blue-500" onClick={openTable}>
              Scoring Guide
            </button>

            <div>
              {/* <div className='flex justify-between items-center'>
                        <Select options={options} value={selectedOption} onChange={handleSelectChange} />
                        <Select options={options} value={selectedOption} onChange={handleSelectChange} />
                        <button className="flex items-center text-sm h-8 text-[#00B3DA] border border-[#00B3DA] rounded-lg pl-4 pr-4 focus:outline-none focus:border-blue-500">
                            Reset
                        </button>

                    </div> */}

              <div className="">
                <div className="mt-4">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border rounded-lg">
                      <thead>
                        <tr>
                          {/* <th className="p-2 bg-gray-100 border whitespace-nowrap ">Society</th> */}
                          <th className="p-2 bg-gray-100 border whitespace-nowrap ">Room</th>
                          <th className="p-2 bg-gray-100 border whitespace-nowrap ">Score</th>
                          <th className="p-2 bg-gray-100 border whitespace-nowrap ">Direction</th>
                          <th className="p-2 bg-gray-100 border whitespace-nowrap ">Best Direction</th>
                          {/* Add more header columns as needed */}
                        </tr>
                      </thead>
                      <tbody>
                        {flatData.slice(0, rowCount).map((item, index) => (
                          <tr key={index} className="border">
                            {/* <td className="p-2 border cursor-pointer">{item.get("SocietyName")}</td> */}
                            <td className="p-2 border cursor-pointer">{item.get("Room")}</td>
                            <td className="p-2 border cursor-pointer">{item.get("Score")}</td>
                            <td className="p-2 border cursor-pointer">{item.get("Direction")}</td>
                            <td className="p-2 border cursor-pointer">{item.get("Best Direction")}</td>
                            {/* Add more data columns as needed */}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {rowCount < flatData.length && (
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

      {tableData.length > 0 && (
        <>
          <Modal isOpen={open} onRequestClose={handleClose} ariaHideApp={false}>
            <div className="container">
              <button onClick={handleClose} style={{ fontSize: "30px" }}>
                x
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border rounded-lg">
                <thead>
                  <tr>
                    {/* <th className="p-2 bg-gray-100 border whitespace-nowrap ">Society</th> */}
                    <th className="p-2 bg-gray-100 border whitespace-nowrap ">Room</th>
                    <th className="p-2 bg-gray-100 border whitespace-nowrap ">Direction</th>
                    <th className="p-2 bg-gray-100 border whitespace-nowrap ">Score</th>
                    {/* Add more header columns as needed */}
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((item, index) => (
                    <tr key={index} className="border">
                      {/* <td className="p-2 border cursor-pointer">{item.get("SocietyName")}</td> */}
                      <td className="p-2 border cursor-pointer">{item.get("Room")}</td>
                      <td className="p-2 border cursor-pointer">{item.get("Direction")}</td>
                      <td className="p-2 border cursor-pointer">{item.get("Score")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Modal>
        </>
      )}
    </Layout>
  );
}
