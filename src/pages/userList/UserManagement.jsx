import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import User from "../user/User";
import UserList from "./UserList";

export default function UserManagement() {
  // const [data, setData] = useState(userRows);
  const [data, setData] = useState([]);
  const [userDetail, setUserDetail] = useState([]);
  const [show, setShow] = useState(false);

  const fetchUser = async () => {
    try {
      const { data } = await axios.get(
        "https://62dd528679b9f8c30aa6ec7e.mockapi.io/TTTN_user"
      );
      // setData(data);
      console.log(data);
      setData(data);
    } catch (error) {}
  };

  const fetchUserDetail = async (userId) => {
    try {
      const { data } = await axios.get(
        `https://62b9626541bf319d227b2b79.mockapi.io/user/${userId}`
      );
      // setData(data);
      console.log(data);
      setUserDetail(data);
    } catch (error) {}
  };

  const setLocal = async (userId) => {
    try {
      const { data } = await axios.get(
        `https://62dd528679b9f8c30aa6ec7e.mockapi.io/TTTN_user/${userId}`
      );
      const {name, email, id, phoneNumber, birthDay, typeUser} = data
      localStorage.setItem('user', name)
      localStorage.setItem('email', email)
      localStorage.setItem('id', id)
      localStorage.setItem('phoneNumber', phoneNumber)
      localStorage.setItem('birthDay', birthDay)
      localStorage.setItem('typeUser', typeUser)
    } catch (error) {}
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      {show && <User users={userDetail} handleUpdate={fetchUser} />}

      <UserList users={data} onSelect={setLocal} onDelete={fetchUser}/>
    </>
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
