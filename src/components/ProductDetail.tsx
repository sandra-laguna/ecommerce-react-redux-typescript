import { useState } from "react";
import { useParams } from "react-router-dom";

import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { DATA } from "../Data";

const ProductDetail = () => {
  const [cartBtn, setCartBtn] = useState("Add to Cart");
  const { prodId }: any = useParams();
  const prodIdInt = parseInt(prodId.replace(/\D/g, ""));
  const prodDetail = DATA.filter((x) => x.id === prodIdInt);
  const product = prodDetail[0];

  const handleCart = (product: any) => {
    if (cartBtn === "Add to Cart") {
      setCartBtn("Remove to Cart");
    } else {
      setCartBtn("Add to Cart");
    }
  };

  return (
    <Box sx={{ display: "flex", padding: "50px" }}>
      <Box sx={{ display: "flex", justifyContent: "center", width: "50%" }}>
        <img className="product" src={product.img} alt={product.title} style={{ width: "80%", objectFit: "contain" }} />
      </Box>
      <Box sx={{ width: "50%" }}>
        <Typography
          sx={{ paddingBottom: "10px", marginBottom: "40px", borderBottom: "1px solid gray" }}
          variant="h3"
          align="center"
        >
          {product.title}
        </Typography>
        <Typography variant="h4">{product.price}€</Typography>
        <p>{product.desc}</p>

        <Button variant="outlined" onClick={() => handleCart(product)}>
          {cartBtn}
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetail;
