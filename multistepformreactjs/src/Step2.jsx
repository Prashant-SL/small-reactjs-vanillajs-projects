const Step2 = ({ formData, setFormData }) => {
  return (
    <form>
      <input
        placeholder="phone"
        name="phone"
        onChange={(e) =>
          setFormData({ ...formData, [e.target.name]: e.target.value })
        }
      />
    </form>
  );
};

export default Step2;
