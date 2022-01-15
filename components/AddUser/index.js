import react, { useState } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";

const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const useStyles = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      marginTop: 20,
    },
    marginBottom: 100,
  },
});

const AddUser = () => {
  const [user, setUser] = useState(initialValue);
  const { name, username, email, phone } = user;
  const classes = useStyles();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    console.log(user);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-4/5 ">
        <FormGroup className={classes.container}>
          <h1 className="text-3xl text-center text-slate-600">Add User</h1>
          <FormControl>
            <InputLabel htmlFor="my-input">Name</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="name"
              value={name}
              id="my-input"
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Username</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="username"
              value={username}
              id="my-input"
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Email</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="email"
              value={email}
              id="my-input"
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Phone</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="phone"
              value={phone}
              id="my-input"
            />
          </FormControl>
          <FormControl>
            <Button
              variant="contained"
              color="primary"
              onClick={() => addUserDetails()}
            >
              Add User
            </Button>
          </FormControl>
        </FormGroup>
      </div>
    </div>
  );
};

export default AddUser;

// import react, { useState } from "react";

// const initialValue = {
//   name: "",
//   username: "",
//   email: "",
//   phone: "",
// };

// const AddUser = () => {
//   const [user, setUser] = useState(initialValue);
//   const { name, username, email, phone } = user;

//   const onValueChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const addUserDetails = async () => {
//     console.log(user);
//     setUser(initialValue);
//   };

//   return (
//     <div className="bg-zinc-700 w-full text-red-50">
//       <h2 className="text-center">Add User</h2>
//       <div className="flex flex-col items-center">
//         <div>
//           <div className="w-1/5">
//             <label className="block">Name</label>
//             <input
//               className="px-4 py-2 rounded"
//               onChange={(e) => onValueChange(e)}
//               name="name"
//               value={name}
//               id="my-input"
//             />
//           </div>
//           <div>
//             <label className="block">Username</label>

//             <input
//               className="px-4 py-2 rounded"
//               onChange={(e) => onValueChange(e)}
//               name="username"
//               value={username}
//               id="my-input"
//             />
//           </div>
//           <div>
//             <label className="block">Email</label>
//             <input
//               className="px-4 py-2 rounded"
//               onChange={(e) => onValueChange(e)}
//               name="email"
//               value={email}
//               id="my-input"
//             />
//           </div>
//           <div>
//             <label className="block">Phone</label>
//             <input
//               className="px-4 py-2 rounded"
//               onChange={(e) => onValueChange(e)}
//               name="phone"
//               value={phone}
//               id="my-input"
//             />
//           </div>
//           <div className="my-5">
//             <button
//               className="bg-green-400 w-full py-2 rounded text-base  hover:bg-green-300 text-slate-800"
//               onClick={() => addUserDetails()}
//             >
//               Add User
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddUser;
