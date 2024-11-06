import React from "react";

const Footer: React.FC = () => {
  return (
    <div>
      <footer className=" flex flex-col items-center justify-center py-4 font-thin text-white bg-cyan-950">
        <div className="text-xl font-bold">Thông tin liên hệ </div>
        <div>Địa chỉ: 33E/1 HT22, Hiệp thành, Quận 12</div>
        <div>Số điện thoại: 0348281713</div>
        <div>Email: MinhKienCosmetic@gmail.com</div>
      </footer>
    </div>
  );
};

export default Footer;
