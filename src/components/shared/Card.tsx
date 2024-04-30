import React, { ReactNode } from "react";

interface CardProps {
  className: string;
  children: ReactNode;
}

const Card = (props: CardProps) => {
  return (
    <div
      className={`card m-0 shadow-md rounded-lg overflow-hidden bg-white ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Card;
