import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [beerBrand, setBeerBrand] = useState("");

  useEffect(() => {
    const url = "https://api.punkapi.com/v2/beers";
    // const url = "https://api.punkapi.com/v2/beers?page=33&per_page=10";
    const searchPages = async (page, perPage, beerBrand) => {
      const beername = beerBrand !== "" ? `&beer_name=${beerBrand}` : "";
      console.log("beernames", beername);
      try {
        const response = await fetch(
          `${url}?page=${page}&per_page=${perPage}${beername}`
        );
        const result = await response.json();
        setBeers(result);
      } catch (error) {
        console.log(error);
      }
    };
    searchPages(page, perPage, beerBrand);
  }, [page, perPage, beerBrand]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        style={{ width: "400px", padding: "10px" }}
        onChange={(e) => setBeerBrand(e.target.value)}
      />
      <select onChange={(e) => setPage(e.target.value)}>
        <option>5</option>
        <option>10</option>
        <option>15</option>
        <option>20</option>
        <option>25</option>
      </select>
      <div
        style={{
          maxHeight: "80vh",
          overflow: "scroll",
          border: "1px solid red",
          marginBottom: "10px",
          justifyContent: "center",
        }}
      >
        {beers?.map((beer) => (
          <div
            key={beer.id}
            style={{
              margin: "20px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
              justifyContent: "start",
              width: "400px",
              border: "1px solid black",
            }}
          >
            <img
              src={beer.image_url}
              style={{ height: "100px", width: "100px" }}
            />
            <p>{beer.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
