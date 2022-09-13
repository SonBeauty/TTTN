import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";
import {useState, useEffect} from 'react'

export default function Product() {
    const [product, setproduct] = useState("");
    const [id, setid] = useState("");
    const [productImage, setproductImage] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [description, setdescription] = useState("");

useEffect(()=>{
    setproduct(localStorage.getItem("product"))
    setid(localStorage.getItem("id"))
    setproductImage(localStorage.getItem("productImage"))
    setProductPrice(localStorage.getItem("productPrice"))
    setdescription(localStorage.getItem("description"))
})
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src={productImage} alt="" className="productInfoImg" />
                  <span className="productName">{product}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">Số thứ tự sản phẩm: </span>
                      <span className="productInfoValue">{id}</span>
                  </div>
                  
                  <div className="productInfoItem">
                      <span className="productInfoKey">Giá bán: </span>
                      <span className="productInfoValue">{productPrice}</span>
                  </div>

                  <div className="">
                      <span className="productInfoKey">Description: </span>
                      <span className="productInfoValue">{description}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input type="text" placeholder={product} />
                  <label>Giá</label>
                  <input type="text" placeholder="Nhập giá mới" />
                  <label>Mô tả sản phẩm</label>
                  <input type="text" placeholder="nhập mô tả sản phẩm" />
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src={productImage} alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
