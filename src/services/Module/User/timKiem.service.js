import { http } from "../../config";
export const timKiemKhoaHoc = {
  layKhoaHocTheoTen: (keyword) => {
    return http.get(
      `/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${keyword}&MaNhom=GP01`
    );
  },
  layDanhMucKhoaHoc: () => {
    return http.get(`/QuanLyKhoaHoc/LayDanhMucKhoaHoc`);
  },
};
