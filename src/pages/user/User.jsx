import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function User({ handleUpdate }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setid] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [typeUser, setTypeUser] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: "",
      name: "",
      email: "",
      address: "",
      phoneNumber: "",
    },
  });

  const onSubmit = async (value) => {
    console.log(value);

    try {
      await axios.put(
        `https://62dd528679b9f8c30aa6ec7e.mockapi.io/TTTN_user/${id}`,
        value
      );
      handleUpdate();
    } catch (error) {
      console.log(error);
    }
  };
  const onError = (error) => {
    console.log(error);
  };
  const postData = async () => {};

  useEffect(() => {
    setEmail(localStorage.getItem("email"));
    setName(localStorage.getItem("user"));
    setid(localStorage.getItem("id"));
    setPhone(localStorage.getItem("phoneNumber"));
    setBirthDay(localStorage.getItem("birthDay"));
    setTypeUser(localStorage.getItem("typeUser"));
  }, []);
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle fw-bold text-primary">Cập nhật người dùng</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername"></span>
              <span className="userShowUserTitle">{typeUser}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{name}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">{birthDay}</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{phone}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{email}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form
            className="userUpdateForm"
            onSubmit={handleSubmit(onSubmit, onError)}
          >
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="tên tài khoản"
                  className="userUpdateInput"
                  {...register("userName", {
                    required: {
                      value: true,
                      message: "Tài khoản không được để trống",
                    },
                    minLength: {
                      value: 5,
                      message: "Tài khoản phải lớn hơn 5 kí tự",
                    },
                    maxLength: {
                      value: 20,
                      message: "Tài khoản từ 5 đến 20 kí tự",
                    },
                  })}
                />
                {errors.userName && (
                  <p className="text-danger">{errors.userName.message}</p>
                )}
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Họ và Tên"
                  className="userUpdateInput"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Tên không được để trống",
                    },
                    minLength: {
                      value: 5,
                      message: "Tên phải lớn hơn 5 kí tự",
                    },
                    maxLength: {
                      value: 20,
                      message: "Tên từ 5 đến 20 kí tự",
                    },
                  })}
                />
                {errors.name && (
                  <p className="text-danger">{errors.name.message}</p>
                )}
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Email"
                  className="userUpdateInput"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email không được để trống",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-danger">{errors.email.message}</p>
                )}
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="Nhập số điện thoại"
                  className="userUpdateInput"
                  {...register("phoneNumber", {
                    required: {
                      value: true,
                      message: "Số điện thoại không được để trống",
                    },
                    minLength: {
                      value: 10,
                      message: "Số điện thoại phải lớn hơn 10 kí tự",
                    },
                    maxLength: {
                      value: 11,
                      message: "Số điện thoại từ 10 đến 11 kí tự",
                    },
                  })}
                />
                {errors.phoneNumber && (
                  <p className="text-danger">{errors.phoneNumber.message}</p>
                )}
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Nhập địa chỉ"
                  className="userUpdateInput"
                  {...register("address", {
                    required: {
                      value: true,
                      message: "Tài khoản không được để trống",
                    },
                    minLength: {
                      value: 5,
                      message: "Tài khoản phải lớn hơn 5 kí tự",
                    },
                    maxLength: {
                      value: 20,
                      message: "Tài khoản từ 5 đến 20 kí tự",
                    },
                  })}
                />
                {errors.address && (
                  <p className="text-danger">{errors.address.message}</p>
                )}
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <Link to={{ pathname: "/users/"}}>
                <button
                  className="userUpdateButton"
                  type="submit"
                  onClick={postData}
                >
                  Update
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
