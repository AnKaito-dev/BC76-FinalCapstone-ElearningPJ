import React, { useState } from "react";
import useViewport from "./../../../hooks/UseViewport";
import { pathDefault } from "../../../common/path";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Icon from "../../../components/Icon";
import { AlignCenterOutlined } from "@ant-design/icons";
import InputSearch from "../../../components/Input/InputSearch";
import { useDebounce } from "use-debounce";
import {
  ButtonGhost,
  ButtonHover,
} from "../../../components/Button/ButtonCustom";
import DropdownHeader from "../../../components/Dropdown/DropdownHeader";

const HeaderTemplate = () => {
  const { width } = useViewport();
  console.log(width);
  const [keyword, setKeyword] = useState("");
  // debounce
  const [value] = useDebounce(keyword, 2000);
  // state quản lý dữ liệu thanh search
  const [litSearch, setListSearch] = useState([]);
  const navigate = useNavigate();
  // handle change keyword
  const handleChangeKeyword = (event) => {
    setKeyword(event.target.value);
    console.log(event.target.value);
  };

  // handle click inputSearch
  const handleClick = () => {};

  return (
    <header className="py-4 px-4 border-b-gray-200 bg-gray-800">
      <div className="container">
        <div className="header_content flex justify-evenly items-center ">
          <div className="flex items-center  space-x-3 ">
            {/* logo và danh mục khóa học */}
            <Link
              to={pathDefault.homePage}
              className="flex space-x-2 items-center"
            >
              <Icon />
              <p className=" lg:block hidden lg:text-xl text-xs  lg:font-medium font-normal text-white  ">
                CYBERSOFT
              </p>
            </Link>

            <DropdownHeader />
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-2 items-center">
            <div className="w-full hidden col-span-1 lg:col-span-2 lg:block">
              {/* inputSearch */}
              <InputSearch placeholder={"Tìm khóa học"} />
            </div>
            <div className="lg:col-span-1 col-span-2 grid grid-cols-2">
              <ButtonGhost
                content={"Đăng nhập"}
                onClick={() => {
                  navigate(pathDefault.signIn);
                }}
              />

              <ButtonHover
                content={"Đăng kí"}
                onClick={() => {
                  navigate(pathDefault.logIn);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTemplate;
