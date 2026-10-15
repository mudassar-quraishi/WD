import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

function Product() {
  //const { pid } = useParams();
  const [filter, setFilter] = useSearchParams();
  const pid = filter.get("pid")
  const [info, setInfo] = useState();

  const switchCase = (pid) => {
    let product;
    switch (pid) {
      case "p1":
        product = "Product 1";
        break;
      case "p2":
        product = "Product 2";
        break;
      case "p3":
        product = "Product 3";
        break;
      default:
        product = "Product not found";
        break;
    }
    return product;
  };

  const onSearch=(e)=>{
    e.preventDefault()
    setFilter({pid:info})
  }

  return (
    <div>
      <h1>This is product page</h1>
      <h1>{switchCase(pid)}</h1>
      <form className="d-flex" onSubmit={onSearch}>
        <input type="text" value={info} onChange={(e)=>setInfo(e.target.value)} />
        <button className="btn btn-primary">Search PID</button>
      </form>
    </div>
  );
}

export default Product;
