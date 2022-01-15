import react, { useState } from "react";

const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const AddUser = () => {
  const [user, setUser] = useState(initialValue);
  const { name, username, email, phone } = user;

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    console.log(user);
    setUser(initialValue);
  };

  return (
    <div className="bg-zinc-700 w-full text-red-50">
      <h2 className="text-center">Add User</h2>
      <div className="flex flex-col items-center">
        <div>
          <div className="w-1/5">
            <label className="block">Name</label>
            <input
              className="px-4 py-2 rounded"
              onChange={(e) => onValueChange(e)}
              name="name"
              value={name}
              id="my-input"
            />
          </div>
          <div>
            <label className="block">Username</label>

            <input
              className="px-4 py-2 rounded"
              onChange={(e) => onValueChange(e)}
              name="username"
              value={username}
              id="my-input"
            />
          </div>
          <div>
            <label className="block">Email</label>
            <input
              className="px-4 py-2 rounded"
              onChange={(e) => onValueChange(e)}
              name="email"
              value={email}
              id="my-input"
            />
          </div>
          <div>
            <label className="block">Phone</label>
            <input
              className="px-4 py-2 rounded"
              onChange={(e) => onValueChange(e)}
              name="phone"
              value={phone}
              id="my-input"
            />
          </div>
          <div className="my-5">
            <button
              className="bg-green-400 w-full py-2 rounded text-base  hover:bg-green-300 text-slate-800"
              onClick={() => addUserDetails()}
            >
              Add User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
