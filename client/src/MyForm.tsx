import React, { useState } from "react";
type MyFormProps = {
  onSubmit: (form: { name: string; age: number }) => void;
};
function MyForm({ onSubmit }: MyFormProps) {
  const [Form, setForm] = useState({
    name: "",
    age: 0,
  });

  const { name, age } = Form;

  const onChange = (e: any) => {
    console.log(e);
    const { name, value } = e.target;
    setForm({
      ...Form,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    onSubmit(Form);

    setForm({
      name: "",
      age: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={onChange}></input>
      <input name="age" value={age} onChange={onChange}></input>
      <button type="submit">등록</button>
    </form>
  );
}

export default MyForm;
