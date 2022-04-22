import './ProductList.css'
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { ProductRows } from "./components/Data";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductList() {

 const [data, setData] = useState(ProductRows);
  const handleDelete = (id) => {
    setData(data.filter((items) => items.id !== id));
  };
  const columns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "product",
    headerName: "product",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="productListUser">
          <img className="productListImg" src={params.row.img} alt="" />
          {params.row.name}
        </div>
      );
    },
  },
  { field: "stock", headerName: "Stock", width: 200 },
  {
    field: "status",
    headerName: "Status",
    width: 140,
  },
  {
    field: "price",
    headerName: "Price",
    width: 200,
  },
  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <>
          <Link to={"/product/" + params.row.id}>
            <button className="productListEdit">Edit</button>
          </Link>
          <DeleteOutline
            className="productListDelete"
            onClick={() => handleDelete(params.row.id)}
          />
        </>
      );
    },
  },
];
  return (
    <div className='productList'>
        <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={18}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

