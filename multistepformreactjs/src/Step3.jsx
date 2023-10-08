const Step3 = ({ formData, setFormData, handleSubmit }) => {
  return (
    <form>
      <input
        placeholder="nation"
        name="nation"
        onChange={(e) =>
          setFormData({ ...formData, [e.target.name]: e.target.value })
        }
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default Step3;
