import React, { useState } from "react";
import "../assets/css/SearchProduct.css";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchProducts } from "../services/FetchApi";
import { Container } from "react-bootstrap";

const SearchProduct = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const { data } = useQuery("products", fetchProducts);
  const [searchResults, setSearchResults] = useState([]);

  //handleSubmit function to handle the form submission
  const handleSubmit = (e) => {
    
    //prevent default behavior of form submission
    e.preventDefault();

    //data array is filtered based on whether the product's title or category includes the search term
    const results = data.filter(
      (product) =>
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    //updating the searchResults state variable with the filtered results.
    setSearchResults(results);

    // resets the searchTerm state variable
    setSearchTerm("");

    if (results.length === 0) {
      setSearchResults(null); // Clear any previous search results
    }
  };

  const handleNavigate = (product) => {

    //navigate to product-details page
    navigate(`/product-details/${product.id}`);
  };

  return (
    <>
      <div className="search-list">
        <Container>
          <form onSubmit={handleSubmit} className="pt-5 ms-auto me-auto">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Products..."
            />
            <button type="submit">Submit</button>
          </form>
          {searchResults !== null ? (
            <div className="search-results me-auto ms-auto mt-5">
              <div className="search-items-wrapper">
                {searchResults.map((product) => (
                  <div
                    className="search-item"
                    lg={3}
                    key={product.id}
                    onClick={() => handleNavigate(product)}
                  >
                    <img src={product.image} alt="img" className="w-100" />
                    <p className="mb-0 pt-2">{product.price}</p>
                    <p className="mb-0">{product.category}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="no-results-message">
              <p className="fs-5 my-5">No products in the Cart.</p>
            </div>
          )}
        </Container>
      </div>
    </>
  );
};

export default SearchProduct;
