import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

import Product from "./Product";

function Item(props: any) {
  return (
    <Paper sx={{ boxShadow: "none" }}>
      <img
        className="imageCarousel"
        src={props.item.image}
        alt={props.item.name}
        style={{ width: "100%", height: "30em", objectFit: "cover" }}
      />
    </Paper>
  );
}

const Home = () => {
  var items = [
    {
      image: "./assets/images/carousel/01.jpg"
    },
    {
      image: "./assets/images/carousel/02.jpg"
    },
    {
      image: "./assets/images/carousel/03.jpg"
    },
    {
      image: "./assets/images/carousel/04.jpg"
    }
  ];

  return (
    <>
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
      <Product />
    </>
  );
};

export default Home;
