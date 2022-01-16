import react, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableCell,
  Paper,
  TableRow,
  TableBody,
  Button,
  makeStyles,
} from "@material-ui/core";
import axios from "axios";
import Link from "next/link";

const BookList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteUserData = async (id) => {
    console.log(id);
    const deleteUser = users.filter((user) => user.id != id);
    setUsers(deleteUser);
    // getAllUsers();
  };

  const getAllUsers = async () => {
    try {
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (err) {
      console.log("Error: ", err);
    }
  };
  console.log(users);
  return (
    <>
      <div className="flex bg-emerald-400 h-14 items-center text-xl font-bold text-teal-900 text">
        <div className="ml-[70px]">Id</div>
        <div className="ml-[32px]">Name</div>
        <div className="ml-[185px]">Author</div>
        <div className="ml-[99px]">Publisher</div>
        <div className="ml-[226px]">Available</div>
        <div></div>
      </div>

      <div className="w-11/12 mx-auto">
        <Table>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={user.id}>
                <TableCell>
                  <span className="text-base">{index + 1}</span>
                </TableCell>
                <TableCell>
                  <span className="text-base">{user.name}</span>
                </TableCell>
                <TableCell>
                  <span className="text-base">{user.username}</span>
                </TableCell>
                <TableCell>
                  <span className="text-base">{user.email}</span>
                </TableCell>
                <TableCell>
                  <span className="text-base">{user.phone}</span>
                </TableCell>
                <TableCell>
                  <Button
                    color="primary"
                    variant="contained"
                    style={{ marginRight: 10 }}
                    // component={Link}
                    // to={`/edit/${user._id}`}
                  >
                    <Link href={`/edit-book/${user.id}`}>Edit</Link>
                  </Button>{" "}
                  {/* change it to user.id to use JSON Server */}
                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={() => deleteUserData(user.id)}
                  >
                    Delete
                  </Button>{" "}
                  {/* change it to user.id to use JSON Server */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default BookList;
