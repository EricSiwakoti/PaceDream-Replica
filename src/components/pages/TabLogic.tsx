import React, { useState } from "react";
import TabSection from "./TabSection";
import RoomStays from "./TabComponent/RoomStays";
import TimeBased from "./TabComponent/TimeBased";
import HourlyRentalGear from "./TabComponent/HourlyRentalGear";
import FindRoommate from "./TabComponent/FindRoommate";
import Experiences from "./TabComponent/Experiences";

interface TabContentProps {
  [key: string]: React.ReactNode;
}

const TabLogic: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("RoomStays");

  const tabContents: TabContentProps = {
    RoomStays: <RoomStays />,
    TimeBased: <TimeBased />,
    HourlyRentalGear: <HourlyRentalGear />,
    FindRoommate: <FindRoommate />,
    Experiences: <Experiences />,
  };

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="flex flex-col justify-start items-start px-20 mt-4">
      <div
        className="flex text-xl text-center text-white bg-slate-800"
        style={{ borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}
      >
        <TabSection
          title="Room Stays"
          active={activeTab === "RoomStays"}
          onClick={() => handleTabClick("RoomStays")}
        ></TabSection>
        <TabSection
          title="Time Based"
          active={activeTab === "TimeBased"}
          onClick={() => handleTabClick("TimeBased")}
        ></TabSection>
        <TabSection
          title="Hourly Rental Gear"
          active={activeTab === "HourlyRentalGear"}
          onClick={() => handleTabClick("HourlyRentalGear")}
        ></TabSection>
        <TabSection
          title="Find Roommate"
          active={activeTab === "FindRoommate"}
          onClick={() => handleTabClick("FindRoommate")}
        ></TabSection>
        <TabSection
          title="Experiences"
          active={activeTab === "Experiences"}
          onClick={() => handleTabClick("Experiences")}
        ></TabSection>
      </div>
      <div>{tabContents[activeTab]}</div>
    </div>
  );
};

export default TabLogic;
