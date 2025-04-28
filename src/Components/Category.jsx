import React from "react";
import Nav from "react-bootstrap/Nav";

const Category = ({ activeCategory, setActiveCategory, category }) => {
  return (
    <div>
      <Nav
        variant="tabs"
        activeKey={activeCategory}
        onSelect={(selectedKey) => setActiveCategory(selectedKey)}
        className="m-4"
      >
        {category.map((cat, index) => (
          <Nav.Item key={index}>
            <Nav.Link eventKey={cat}>{cat}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
};

export default Category;
