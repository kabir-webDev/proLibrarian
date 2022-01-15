import react, { useState } from "react";

const initialValue = {
  name: "",
  author: "",
  publisher: "",
  available: "",
};

const AddBook = () => {
  const [book, setbook] = useState(initialValue);
  const { name, author, publisher, available } = book;

  const onValueChange = (e) => {
    setbook({ ...book, [e.target.name]: e.target.value });
  };

  const addbookDetails = async () => {
    console.log(book);
    setbook(initialValue);
  };

  return (
    <div className="bg-zinc-700 w-full text-red-50">
      <h2 className="text-center">Add Book</h2>
      <div className="flex flex-col items-center">
        <div>
          <div className="w-1/5">
            <label className="block">Name</label>
            <input
              className="px-4 py-2 rounded text-black"
              onChange={(e) => onValueChange(e)}
              name="name"
              value={name}
              id="my-input"
            />
          </div>
          <div>
            <label className="block">Author</label>

            <input
              className="px-4 py-2 rounded text-black"
              onChange={(e) => onValueChange(e)}
              name="author"
              value={author}
              id="my-input"
            />
          </div>
          <div>
            <label className="block">Publisher</label>
            <input
              className="px-4 py-2 rounded text-black"
              onChange={(e) => onValueChange(e)}
              name="publisher"
              value={publisher}
              id="my-input"
            />
          </div>
          <div>
            <label className="block">Available</label>
            <input
              className="px-4 py-2 rounded text-black"
              onChange={(e) => onValueChange(e)}
              name="available"
              value={available}
              id="my-input"
            />
          </div>
          <div className="my-5">
            <button
              className="bg-green-400 w-full py-2 rounded text-base  hover:bg-green-300 text-slate-800"
              onClick={() => addbookDetails()}
            >
              Add Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
