const Step1 = ({ formData, setFormData }) => {
  return (
    <form>
      <input
        placeholder="Name"
        name="name"
        onChange={(e) =>
          setFormData({ ...formData, [e.target.name]: e.target.value })
        }
      />
    </form>
  );
};

export default Step1;
