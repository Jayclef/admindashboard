import { Link } from "react-router-dom";
import Chart from "./components/Chart";
import "./Product.css";
import { productData } from "./components/Data";

function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="topLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="topRight">
          <div className="productInfoTop">
            <img src="" alt="" className="productInfoImg" />
            <span className="productName">Apple Airdrop</span>
          </div>
          <br />
          <div className="productInfoButton">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">123:</span>
            </div>
            <br />
          </div>
          <div className="productInfoButton">
            <div className="productInfoItem">
              <span className="productInfoKey">Sales:</span>
              <span className="productInfoValue">5123:</span>
            </div>
            <br />
          </div>
          <div className="productInfoButton">
            <div className="productInfoItem">
              <span className="productInfoKey">Active:</span>
              <span className="productInfoValue">123:</span>
            </div>
            <br />
          </div>
          <div className="productInfoButton">
            <div classNam e="productInfoItem">
              <span className="productInfoKey">In Stock:</span>
              <span className="productInfoValue">No:</span>
            </div>
            <br />
          </div>
        </div>
      </div>
      <div className="productBottom"></div>
    </div>
  );
}

export default Product;
