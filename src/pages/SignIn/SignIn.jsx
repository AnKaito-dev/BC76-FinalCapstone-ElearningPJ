import { useFormik } from "formik";
import React, { useContext, useMemo } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { NotificationContext } from "../../App";
import { authService } from "../../services/Module/User/auth.service";
import AnimationData from "../../assets/animation/AnimationSignIn.json";
import Lottie from "react-lottie";
import Icon from "../../components/Icon";
import { pathDefault } from "../../common/path";
import { LeftOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { ButtonDangKy } from "../../components/Button/ButtonCustom";
import * as Yup from "yup";
import { handleUpdateUser } from "../../redeux/User.Slice";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNotification = useContext(NotificationContext);
  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: (data) => {
        authService
          .signIn(data)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
            handleNotification(
              "error",
              "Tài khoản hoặc mật khẩu không đúng",
              3000
            );
          });
      },
      // validationSchema
      validationSchema: Yup.object({
        email: Yup.string()
          .email("Vui lòng nhập đúng định dạng email")
          .required("Vui lòng không bỏ trống"),
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
    <div className="container grid lg:grid-cols-3 ">
      <div className="SignIn_animation col-span-2 mt-10 ">
        <Lottie options={defaultOptions} height={"80%"} width={"80%"} />
      </div>
      <div>
        <div className=" w-full flex justify-start ml-20 mb-1 items-center mt-10">
          <Icon />
          <div className="text-sm">
            <Link to={pathDefault.homePage}>
              <LeftOutlined /> Về trang chủ
            </Link>
          </div>
        </div>
        {/* form */}
        <div className=" grid mt-10 lg:mt-0 justify-center">
          <h1 className="text-3xl font-bold">Trang đăng nhập</h1>
          <p className="font-semibold text-sm text-gray-500">
            Nhập Email để bắt đầu truy cập
          </p>
          <form className="space-y-3 mt-10" onSubmit={handleSubmit}>
            <div className="w-2/3 space-y-3">
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
              <ButtonDangKy type="submit" content={"Đăng nhập"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
