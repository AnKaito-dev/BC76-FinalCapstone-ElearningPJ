import React, { useContext, useMemo } from "react";
import AnimationData from "../../assets/animation/AnimationLogIn.json";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { NotificationContext } from "../../App";
import { useFormik, validateYupSchema } from "formik";
import { authService } from "../../services/Module/User/auth.service";
import Icon from "../../components/Icon";
import { LeftOutlined } from "@ant-design/icons";
import Lottie from "react-lottie";
import { Input } from "antd";
import { ButtonDangKy } from "../../components/Button/ButtonCustom";
import { pathDefault } from "../../common/path";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNotification = useContext(NotificationContext);
  const { handleBlur, handleChange, touched, handleSubmit, values, errors } =
    useFormik({
      initialValues: {
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        soDT: "",
        maNhom: "",
        email: "",
      },
      onSubmit: (values) => {
        authService
          .logIn(values)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      },
      //validation
      validationSchema: Yup.object({
        taiKhoan: Yup.string().required("Vui lòng không để trống"),
        matKhau: Yup.string().required("Vui lòng không để trống"),
        hoTen: Yup.string().required("Vui lòng không để trống"),
        email: Yup.string()
          .email("Vui lòng nhập đúng định dạng email")
          .required("Vui lòng không để trống"),
        password: Yup.string().required("Vui lòng không bỏ trống"),
      }),
    });

  const defaultOptions = useMemo(
    () => ({
      loop: true,
      autoPlay: true,
      animationData: AnimationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    }),
    []
  );
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-3">
      <div className="SignIn_animation col-span-2 mt-10">
        <Lottie options={defaultOptions} height={"90%"} width={"80%"} />
      </div>
      <div>
        <div className=" w-full flex justify-center lg:justify-start  items-center mt-10">
          <Link to={pathDefault.homePage}>
            <Icon />
          </Link>

          <div className="text-sm">
            <Link to={pathDefault.homePage}>
              <LeftOutlined /> Về trang chủ
            </Link>
          </div>
        </div>
        {/* form */}
        <div className=" grid mt-10 lg:mt-0 justify-center lg:justify-start ml-15 lg:ml-0">
          <h1 className="text-3xl font-bold">Trang đăng nhập</h1>
          <p className="font-semibold text-sm text-gray-500">
            Nhập Email để bắt đầu truy cập
          </p>
          <form className="space-y-3 mt-10" onSubmit={handleSubmit}>
            <div className="w-2/3 space-y-3">
              <div>
                <label htmlFor="">Họ tên</label>
                <Input
                  placeholder="Vui lòng nhập họ tên"
                  name="hoTen"
                  value={values.hoTen}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.hoTen && touched.hoTen && (
                  <p className="text-red-500 text-sm mt-1"> {errors.hoTen}</p>
                )}
              </div>
              <div>
                <label htmlFor="">Số điện thoại</label>
                <Input
                  name="soDT"
                  value={values.soDT}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Vui lòng nhập số điện thoại"
                />
                {errors.email && touched.email && (
                  <p className="text-red-500 text-sm mt-1"> {errors.soDT}</p>
                )}
              </div>

              <div>
                <label htmlFor="">Email</label>
                <Input
                  name="email"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Vui lòng nhập email"
                />
                {errors.email && touched.email && (
                  <p className="text-red-500 text-sm mt-1"> {errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="">Password</label>
                <Input
                  type="password"
                  name="password"
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Vui lòng nhập mật khẩu"
                />
                {errors.password && touched.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>
            </div>
            <div className="flex gap-4">
              <ButtonDangKy content={"Đăng Ký"} />
              <Link to={pathDefault.signIn}>
                <ButtonDangKy content={"Đăng nhập"} />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
