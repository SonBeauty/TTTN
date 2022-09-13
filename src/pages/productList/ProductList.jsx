import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductList() {
  const [products, setProduct] = useState([]);

  const fetchProduct = async () => {
    try {
      const { data } = await axios.get(
        "https://62dd528679b9f8c30aa6ec7e.mockapi.io/TTTN_product"
      );
      setProduct(data);
    } catch (error) {}
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://62b9626541bf319d227b2b79.mockapi.io/user/${id}`
      );
    } catch (error) {}
  };
  const handleUpdate = async (productId)=>{
    console.log(123)
    try {
      const { data } = await axios.get(
        `https://62dd528679b9f8c30aa6ec7e.mockapi.io/TTTN_product/${productId}`
      );
      const {image, id, title, price, description } = data
      localStorage.setItem('product',title )
      localStorage.setItem('id', id)
      localStorage.setItem('productImage', image)
      localStorage.setItem('productPrice', price)
      localStorage.setItem('description', description)
    } catch (error) {}
  };

  useEffect(()=>{
    fetchProduct()
  },[])
  return (
    <table className="table">
      <thead>
        <tr className="bg-warning">
          <th scope="col">Id</th>
          <th>Image</th>
          <th>Product</th>
          <th>Stock</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className="bg-light">
        {products.map((product) => {
          return (
            <>
              <tr key={product.id}>
                <td>{product.id}</td>
                <td><img className="productListImg" src={product.image} alt=""/></td>
                <td style={{width:"400px"}}>{product.title}</td>
                <td>{product.count}</td>
                <td>{product.price}</td>
                <td>
                  {/* <Link to={{ pathname: "/product/" + product.id }}> */}
                  <button
                    className="btn btn-primary"
                    onClick={() => handleUpdate(product.id)}
                  >
                    <AiFillEdit/>
                  </button>
                  {/* </Link> */}
                  <button
                    className="btn btn-danger m-2"
                    onClick={() => handleDelete(product.id)}
                  >
                    <AiTwotoneDelete/>
                  </button>
                </td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
}

//   const columns = [
//     { field: "id", headerName: "ID", width: 90 },
//     {
//       field: "product",
//       headerName: "Product",
//       width: 200,
//       renderCell: (params) => {
//         return (
//           <div className="productListItem">
//             <img className="productListImg" src={params.row.img} alt="" />
//             {params.row.name}
//           </div>
//         );
//       },
//     },
//     { field: "stock", headerName: "Stock", width: 200 },
//     {
//       field: "status",
//       headerName: "Status",
//       width: 120,
//     },
//     {
//       field: "price",
//       headerName: "Price",
//       width: 160,
//     },
//     {
//       field: "action",
//       headerName: "Action",
//       width: 150,
//       renderCell: (params) => {
//         return (
//           <>
//             <Link to={"/product/" + params.row.id}>
//               <button className="productListEdit">Edit</button>
//             </Link>
//             <DeleteOutline
//               className="productListDelete"
//               onClick={() => handleDelete(params.row.id)}
//             />
//           </>
//         );
//       },
//     },
//   ];

//   return (
//     <div className="productList">
//       <DataGrid
//         rows={data}
//         disableSelectionOnClick
//         columns={columns}
//         pageSize={8}
//         checkboxSelection
//       />
//     </div>
//   );
// }
