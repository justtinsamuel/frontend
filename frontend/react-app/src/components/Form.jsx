import React, { useState } from "react";

const Form = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    setItems([
      ...items,
      {
        name,
        category,
        stock,
        price,
        image,
      },
    ]);
    console.log(`Submit`, {
      name,
      category,
      stock,
      price,
      image,
    });
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>Name : </label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>

        <div>
          <label>Category : </label>
          <input type="text" onChange={(e) => setCategory(e.target.value)} />
        </div>

        <div>
          <label>Stock : </label>
          <input
            type="number"
            onChange={(e) => setStock(Number(e.target.value))}
          />
        </div>

        <div>
          <label>Price : </label>
          <input
            type="number"
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>

        <div>
          <label>Image : </label>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </div>

        <button type="submit">Submit</button>
      </form>

      <div>
        <table cellPadding={10} cellSpacing={10} border={2}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.length > 0 ? (
              items.map((item) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>{item.price}</td>
                    <td>{item.stock}</td>
                    <td>{item.image}</td>
                    <td>-</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td>There's no data</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Form;
