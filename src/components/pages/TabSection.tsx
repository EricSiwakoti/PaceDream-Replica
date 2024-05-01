import React from "react";

interface TabSectionProps {
  title: string;
  active: boolean;
  onClick: () => void;
}

const TabSection: React.FC<TabSectionProps> = ({ title, active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer p-2 py-4 px-6 rounded-md ${
        active ? "bg-purple-900" : ""
      }`}
    >
      {title}
    </div>
  );
};

export default TabSection;
