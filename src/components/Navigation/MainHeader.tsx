import React, { ReactNode } from "react";

interface MainHeaderProps {
  children: ReactNode;
}

const MainHeader = (props: MainHeaderProps) => {
  return (
    <header className="w-full h-16 flex items-center relative top-0 left-0 bg-white-100 shadow-md px-20 z-10 mt-5 pb-5 justify-between">
      {props.children}
    </header>
  );
};

export default MainHeader;
