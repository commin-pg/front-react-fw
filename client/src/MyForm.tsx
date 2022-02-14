import React, { useState } from "react";
type MyFormProps = {
  onSubmit: (form: {
    name: string | undefined;
    age: number | undefined;
  }) => void;
};
function MyForm({ onSubmit }: MyFormProps) {
  const [Form, setForm] = useState({
    name: undefined,
    age: undefined,
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
      name: undefined,
      age: undefined,
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
