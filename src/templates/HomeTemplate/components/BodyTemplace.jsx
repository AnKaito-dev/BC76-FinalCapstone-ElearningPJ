import React, { useEffect, useState } from "react";
import AnimationData from "../../../assets/animation/AnimationHomeTemplace.json";
import Lottie from "react-lottie";
import { ButtonDangKy } from "../../../components/Button/ButtonCustom";
import { timKiemKhoaHoc } from "../../../services/Module/User/timKiem.service";

const BodyTemplace = () => {
  const defaultOption = {
    loop: true,
    autoPlay: true,
    animationData: JSON.parse(JSON.stringify(AnimationData)),
    renderSetting: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    timKiemKhoaHoc
      .layDanhSachKhoaHoc()
      .then((res) => {
        setData(res.data.slice(18, 26));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container mb-20">
      <div className="lg:h-screen grid grid-cols-1 lg:grid-cols-2 justify-between items-center  ">
        <div>
          <Lottie options={defaultOption} height={"50%"} width={"100%"} />
        </div>
        <div className=" space-y-3 text-center mt-7 lg:mt-0">
          <h2 className="text-3xl font-bold">Khởi đầu sự nghiệp của bạn </h2>
          <div className=" space-y-3">
            <h4 className="text-2xl font-medium">
              Trở thành lập trình viên chuyên nghiệp tại Cybersoft
            </h4>
            <div className="space-x-3">
              <ButtonDangKy content={"Xem Khóa Học"} />
              <ButtonDangKy content={"Tư vấn trực tiếp"} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-3xl font-bold mt-5 mb-5 text-center">
          Danh sách khóa học
        </h3>
        <div className=" mt-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 ">
            {data.map((data, index) => (
              <div key={index} className="border p-4 space-y-3">
                <img
                  src={data.hinhAnh}
                  alt={data.tenKhoaHoc}
                  className="w-full h-32 object-cover"
                />
                <h3 className="text-xl font-bold mt-2">{data.tenKhoaHoc}</h3>

                <ButtonDangKy content={"Đăng ký"} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyTemplace;
