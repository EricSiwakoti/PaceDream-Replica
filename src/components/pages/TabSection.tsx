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
      className={`cursor-pointer p-2 ${active ? "border border-blue-500" : ""}`}
    >
      {title}
    </div>
  );
};

export default TabSection;
