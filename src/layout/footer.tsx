import Paragraph from "antd/es/typography/Paragraph";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div>
      <footer className=" flex flex-col items-center justify-center py-4 font-thin  bg-gray-800">
        <Paragraph className="m-0 text-white">
          &copy; 2023 Generate Roadmap. All rights reserved.
        </Paragraph>
      </footer>
    </div>
  );
};

export default Footer;
