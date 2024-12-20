import React, { useEffect, useState } from "react";
import {
  AlignCenterOutlined,
  DownOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { timKiemKhoaHoc } from "../../services/Module/User/timKiem.service";

const DropdownHeader = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    timKiemKhoaHoc
      .layDanhMucKhoaHoc()
      .then((res) => {
        const newItems = res.data.map((item, index) => ({
          key: index + 1,
          label: <a>{item.tenDanhMuc}</a>,
        }));
        setItems(newItems);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Dropdown
      menu={{
        items,
      }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space className="text-white hover:text-yellow-500">
          <AlignCenterOutlined className="text-white" />
          Danh sách khóa học
        </Space>
      </a>
    </Dropdown>
  );
};

export default DropdownHeader;
