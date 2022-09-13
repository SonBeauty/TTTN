import React from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      emai: "",
      address: "",
      phone: "",
    },
  });

  const onSubmit = (value) => {
    console.log(value);
  };
  const onError = (error) => {
    console.log(error);
  };

  let total = 0;
  const itemList = (item) => {
    total = total + item.qty * item.price;
    return (
      <>
        <li className="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <div className="d-flex">
              <h6 className="fs-6">Tên Sản Phẩm: </h6>
              <h6 className="my-0">{item.title}</h6>
            </div>
            <div className="d-flex">
              <h6>Mô tả sản phẩm: </h6>
              <h6 className="mx-3">{item.category}</h6>
            </div>
            <div className="d-flex">
              <h6>Số lượng sản phẩm: </h6>
              <h6 className="mx-3">{item.qty}</h6>
            </div>
            <div className="d-flex">
              <h6>Đơn giá </h6>
              <span className="text-muted mx-3">{item.price}</span>
            </div>
            <div className="d-flex">
              <h6>Thành tiền</h6>
              <span className="mx-3">{item.price * item.qty}</span>
            </div>
          </div>
        </li>
      </>
    );
  };
  return (
    <div className="container">
      <div className="py-5 text-center fs-1 fw-bold text-primary">TS Shop</div>
      {/* <div className="text-danger fw-bold">
        Vui lòng đăng nhập để tiếp tục!!{"  "}
        <NavLink to="/login" className="btn btn-outline-primary">
          Login
        </NavLink>
      </div> */}
      <h3 className="text-primary fw-bold">Xác nhận đơn hàng</h3>
      <div className="row g-5">
        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-primary">Đơn hàng của bạn</span>
            <span className="badge bg-primary rounded-pill">
              {state.length}
            </span>
          </h4>
          <ul className="list-group mb-3">{state.map(itemList)}</ul>
          <ul className="text-success fs-5 fw-bold">Tổng hóa đơn: {total}</ul>
          <form className="card p-2">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Promo code"
              />
              <button type="submit" className="btn btn-secondary">
                Redeem
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3 text-primary">Thông tin người nhận</h4>
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className="needs-validation"
            noValidate
          >
            <div className="row g-3">
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">
                  Họ tên người nhận
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Nhập họ tên người nhận"
                  {...register("name", {
                    required: {value: true, message:"Tài khoản không được để trống"},
                    minLength: {value: 5, message:"Họ và tên phải lớn hơn 5 kí tự"},
                    maxLength: {value: 20, message:"Tài khoản từ 5 đến 20 kí tự"},
                  })}
                  //defaultValue
                />
                {errors.name && <p className="text-danger">{errors.name.message}</p>}
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email <span className="text-muted">(Optional)</span>
                </label>
                <input
                  {...register("emai", { required: true })}
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="you@example.com"
                />
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="address" className="form-label">
                  Địa chỉ nhận hàng
                </label>
                <input
                  {...register("address", { required: true })}
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="123 Quang Trung, Q.Gò Vấp..."
                  required
                />
              </div>
              <div className="col-12">
                <label htmlFor="address" className="form-label">
                  Số điện thoại người nhận
                </label>
                <input
                  {...register("phone", { required: true })}
                  type="text"
                  className="form-control"
                  id="phoneNumber"
                  placeholder="0123..."
                  required
                />
              </div>
              <div>
                <button className="btn btn-outline-success fw-bold">
                  Đặt hàng
                </button>
              </div>
            </div>
            {/* <hr className="my-4" />
            <h4 className="mb-3">Payment</h4>
            <div className="my-3">
              <div className="form-check">
                <input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  defaultChecked
                  required
                />
                <label className="form-check-label" htmlFor="credit">
                  Credit card
                </label>
              </div>
              <div className="form-check">
                <input
                  id="debit"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  required
                />
                <label className="form-check-label" htmlFor="debit">
                  Debit card
                </label>
              </div>
              <div className="form-check">
                <input
                  id="paypal"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  required
                />
                <label className="form-check-label" htmlFor="paypal">
                  PayPal
                </label>
              </div>
            </div>
            <div className="row gy-3">
              <div className="col-md-6">
                <label htmlFor="cc-name" className="form-label">
                  Name on card
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-name"
                  placeholder
                  required
                />
                <small className="text-muted">
                  Full name as displayed on card
                </small>
                <div className="invalid-feedback">Name on card is required</div>
              </div>
              <div className="col-md-6">
                <label htmlFor="cc-number" className="form-label">
                  Credit card number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-number"
                  placeholder
                  required
                />
                <div className="invalid-feedback">
                  Credit card number is required
                </div>
              </div>
              <div className="col-md-3">
                <label htmlFor="cc-expiration" className="form-label">
                  Expiration
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-expiration"
                  placeholder
                  required
                />
                <div className="invalid-feedback">Expiration date required</div>
              </div>
              <div className="col-md-3">
                <label htmlFor="cc-cvv" className="form-label">
                  CVV
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-cvv"
                  placeholder
                  required
                />
                <div className="invalid-feedback">Security code required</div>
              </div>
            </div>
            <hr className="my-4" />
            <button className="w-100 btn btn-primary btn-lg" type="submit">
              Continue to checkout
    </button>*/}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
