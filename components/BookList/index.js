import react, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import ReactLoading from "react-loading";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    try {
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
      setLoading(false);
    } catch (err) {
      console.log("Error: ", err);
    }
  };
  console.log(users);
  return loading == true ? (
    <div className="w-full">
      <div className="flex justify-center">
        <ReactLoading type="spinningBubbles" color="#CB4335" />
      </div>
    </div>
  ) : (
    <div className="w-full">
      <div className="w-11/12 m-auto">
        <table>
          <tr className="text-xl text-teal-500">
            <th className="border-2 text-left">
              <div className="py-2 pr-6 pl-2">Id</div>
            </th>
            <th className="text-left border-2 pl-2">
              <div>Name</div>
            </th>
            <th className="text-left border-2 pl-2">
              <div>Username</div>
            </th>
            <th className="text-left border-2 pl-2">
              <div>Email</div>
            </th>
            <th className="text-left border-2 pl-2">
              <div>Phone</div>
            </th>
            <th className="text-center border-2 pl-2 text-rose-500">
              <div>Operation</div>
            </th>
          </tr>
          {users.map((user, index) => (
            <tr key={user.id} className="text-lg text-teal-900">
              <td className="border-2 pl-2">
                <span className="text-xl">{index + 1}</span>
              </td>
              <td className="border-2 pr-6 pl-2">
                <span className="text-xl">{user.name}</span>
              </td>
              <td className="border-2 pr-6 pl-2">
                <span className="text-xl">{user.username}</span>
              </td>
              <td className="border-2 pr-6 pl-2">
                <span className="text-xl">{user.email}</span>
              </td>
              <td className="border-2 pr-6 pl-2">
                <span className="text-xl">{user.phone}</span>
              </td>
              <td className="border-2">
                <button className="px-4 py-2 bg-emerald-400 hover:text-rose-50 rounded">
                  <Link href={`/edit-book/${user.id}`}>Edit User</Link>
                </button>{" "}
                <button
                  className="px-4 py-2 bg-rose-500 hover:text-rose-50 rounded"
                  onClick={() => deleteUserData(user.id)}
                >
                  Delete
                </button>{" "}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default UserList;
