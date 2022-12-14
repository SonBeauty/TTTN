import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import User from "../user/User";

export default function UserList({users, onSelect, onDelete}) {
  // const [data, setData] = useState(userRows);
const handleUpdate = (id)=>{
  onSelect(id)
}
const handleDelete = async(id)=>{
  try {
    await axios.delete(
      `https://62dd528679b9f8c30aa6ec7e.mockapi.io/TTTN_user/${id}`
    )
    onDelete()
  } catch (error) {
    console.log(error)
  }
}
  return (
    <table className="table">
      <thead className="bg-warning">
        <tr>
          <th scope="col">Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Type User</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <>
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.typeUser}</td>
                <td>
                  <Link to={{ pathname: "/user/" + user.id }}>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleUpdate(user.id)}
                    >
                      <AiFillEdit />
                    </button>
                  </Link>
                  <button className="btn btn-danger m-2" onClick={()=> handleDelete(user.id)}>
                    <AiTwotoneDelete />
                  </button>
                </td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
  // const columns = [
  //   { field: "id", headerName: "ID", width: 90 },
  //   {
  //     field: "user",
  //     headerName: "User",
  //     width: 200,
  //     renderCell: (params) => {
  //       return (
  //         <div className="userListUser">
  //           <img className="userListImg" src={params.row.avatar} alt="" />
  //           {params.row.username}
  //         </div>
  //       );
  //     },
  //   },
  //   { field: "email", headerName: "Email", width: 200 },

  //   {
  //     field: "action",
  //     headerName: "Action",
  //     width: 150,
  //     renderCell: (params) => {
  //       return (
  //         <>
  //           <Link to={"/user/" + params.row.id}>
  //             <button className="userListEdit">Edit</button>
  //           </Link>
  //           <DeleteOutline
  //             className="userListDelete"
  //             onClick={() => handleDelete(params.row.id)}
  //           />
  //         </>
  //       );
  //     },
  //   },
  // ];

  // return (
  //   <div className="userList">
  //     <DataGrid
  //       rows={data}
  //       disableSelectionOnClick
  //       columns={columns}
  //       pageSize={8}
  //       checkboxSelection
  //     />
  //   </div>
  // );
}
