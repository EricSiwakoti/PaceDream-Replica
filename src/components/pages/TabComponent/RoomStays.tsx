import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faMapMarkerAlt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../../shared/Card";

const RoomStays = () => {
  const [selectedButton, setSelectedButton] = useState("");

  const buttonClass =
    "py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer mr-2 my-1 border bg-neutral-100 text-black border-neutral-300";
  const selectedButtonClass =
    "py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer mr-2 my-1 text-white   bg-purple-900";

  return (
    <div className="shadow-md p-4" style={{ width: "75vw" }}>
      <div className="flex items-start mx-4">
        <button
          className={
            selectedButton === "anytime" ? selectedButtonClass : buttonClass
          }
          onClick={() => setSelectedButton("anytime")}
        >
          Any time
        </button>
        <button
          className={
            selectedButton === "anytype" ? selectedButtonClass : buttonClass
          }
          onClick={() => setSelectedButton("anytype")}
        >
          Any Type
        </button>
        <button
          className={
            selectedButton === "hostel" ? selectedButtonClass : buttonClass
          }
          onClick={() => setSelectedButton("hostel")}
        >
          Hostel
        </button>
        <button
          className={
            selectedButton === "guesthouse" ? selectedButtonClass : buttonClass
          }
          onClick={() => setSelectedButton("guesthouse")}
        >
          Guesthouse
        </button>
        <button
          className={
            selectedButton === "longterm" ? selectedButtonClass : buttonClass
          }
          onClick={() => setSelectedButton("longterm")}
        >
          Long term
        </button>
        <button
          className={
            selectedButton === "shortterm" ? selectedButtonClass : buttonClass
          }
          onClick={() => setSelectedButton("shortterm")}
        >
          Short term
        </button>
      </div>
      <div className="flex items-center space-x-3 mx-4">
        <Card
          className=""
          title="Location"
          body="Select Location"
          icon={faMapMarkerAlt}
        >
          Hamptons, Suffolk Country, NY
        </Card>
        <Card className="" title="Guests" body="Add Guests" icon={faUsers}>
          - 1 +
        </Card>
        <button className="bg-purple-900 hover:bg-purple-500 text-white text-xl py-4 px-10 mt-8 rounded">
          Search <br />
          <FontAwesomeIcon icon={faArrowRight} className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default RoomStays;
