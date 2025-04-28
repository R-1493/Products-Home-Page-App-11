import React, { useEffect, useState } from "react";
import axios from "axios";
import CardItem from "./CardItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Category from "./Category";
import Search from "./Search";

const Home = ({ url }) => {
  const [info, setInfo] = useState({ products: [] });
  const [category, setCategory] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState(1000);
  const getInfo = async () => {
    try {
      const res = await axios.get(url);
      setInfo(res.data);
      const categories = [
        "all",
        ...new Set(res.data.products.map((item) => item.category)),
      ];
      setCategory(categories);
      setActiveCategory("all");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  const filteredProducts = info.products
    .filter((item) =>
      activeCategory === "all" ? true : item.category === activeCategory
    )
    .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
    .filter((item) => item.price <= maxPrice);

  return (
    <Container>
      <Row className="my-4">
        <Col sm={3}>
          <Search
            search={search}
            setSearch={setSearch}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
          />
        </Col>
        <Col sm={9}>
          <h1>Clarusway Shopping</h1>
          <Category
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            category={category}
          />
          <Row>
            {filteredProducts.map((item) => (
              <Col sm={4} key={item.id} className="mb-4">
                <CardItem item={item} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
