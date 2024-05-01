import React, { ReactNode } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CardProps {
  className: string;
  children: ReactNode;
  title: string;
  body: string;
  icon: IconProp;
}

const Card = (props: CardProps) => {
  return (
    <div
      className={`relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl p-3 w-1/4 ${props.className}`}
    >
      <p>{props.title}</p>
      <div className="flex items-center space-x-3 text-black">
        <p className="font-bold text-2xl">{props.body}</p>
        <FontAwesomeIcon icon={props.icon} />
      </div>
      <p className="text-xs py-1">{props.children}</p>
    </div>
  );
};

export default Card;
