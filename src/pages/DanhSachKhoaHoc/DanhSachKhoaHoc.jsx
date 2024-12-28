import React, { useEffect, useState } from "react";
import { timKiemKhoaHoc } from "../../services/Module/User/timKiem.service";
import { ButtonDangKy } from "../../components/Button/ButtonCustom";
import { useParams } from "react-router-dom";
import { Pagination } from "antd";
import { current } from "@reduxjs/toolkit";

const DanhSachKhoaHoc = ({ categoryId }) => {
  const [course, setCouser] = useState([]);
  const { id } = useParams();

  const [curentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(8);

  useEffect(() => {
    timKiemKhoaHoc
      .layDanhSachKhoaHocTheoDanhMuc(id)
      .then((res) => {
        setCouser(res.data);
        console.log(res.data.danhMucKhoaHoc.tenDanhMucKhoaHoc);
      })
      .catch(
        (err) => {
          console.log(err);
        },
        [categoryId]
      );
  }, [id]);
  // lấy khóa học cho trang hiện tại
  const currentCourse = course.slice(
    (curentPage - 1) * pageSize,
    curentPage * pageSize
  );

  //hàm xử lý khi đổi trang
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      <div>
        <h3 className="text-2xl mt-3 font-semibold"></h3>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-4">
        {currentCourse.map((course, index) => (
          <div key={index} className="border p-4 space-y-3">
            <img className="h-[180px]" src={course.hinhAnh} alt="" />
            <h3 className="font-medium">{course.tenKhoaHoc}</h3>
            <ButtonDangKy content={"Đăng ký"} />
          </div>
        ))}
      </div>
      <Pagination
        current={curentPage}
        pageSize={pageSize}
        total={course.length}
        onChange={handlePageChange}
      ></Pagination>
    </div>
  );
};

export default DanhSachKhoaHoc;
