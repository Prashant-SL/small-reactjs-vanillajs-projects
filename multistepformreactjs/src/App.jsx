import { useState } from "react";
import "./App.css";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

function App() {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    nation: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted");
    setPage(1);
  };

  const pageTitle = ["Page1", "Page2", "Page3"];

  return (
    <div>
      {pageTitle[page - 1]}
      {page == 1 && <Step1 formData={formData} setFormData={setFormData} />}
      {page == 2 && <Step2 formData={formData} setFormData={setFormData} />}
      {page == 3 && (
        <Step3
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        />
      )}
      <button
        onClick={() => {
          setPage(page - 1);
        }}
        disabled={page == 1}
      >
        Prev
      </button>
      &nbsp;
      <button
        onClick={() => {
          setPage(page + 1);
        }}
        disabled={page == pageTitle.length}
      >
        Next
      </button>
    </div>
  );
}

export default App;
