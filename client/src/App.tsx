import React, { useState } from "react";
import "./App.css";
import MyForm from "./MyForm";

function App() {
  interface initDataState {
    name: string | undefined;
    age: number | undefined;
  }

  interface initRequestState {
    name: string | undefined;
    age: number | undefined;
    datas: initDataState[] | undefined;
  }

  const [Request, setRequest] = useState<initRequestState | null>(null);

  const [Result, setResult] = useState("");

  const onSubmit = async (form: { name: string; age: number }) => {
    console.log(form);
    const response = await fetch("/api/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: form.name, age: form.age }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.code === 200) {
          setRequest({
            name: form.name,
            age: form.age,
            datas: [],
          });
        } else {
          setRequest({
            name: undefined,
            age: undefined,
            datas: undefined,
          });
        }
        setResult(json.message);
      });
  };

  const onSelectAll = async () => {
    const response = await fetch("/api/selectAll", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setRequest({
          name: Request ? Request.name : undefined,
          age: Request ? Request.age : undefined,
          datas: json.datas,
        });
      });
  };

  return (
    <div className="App">
      <MyForm onSubmit={onSubmit} />
      <button onClick={onSelectAll}> 조회 </button>
      <p>
        <span>이름 : {Request && Request.name}</span>
        <span>나이 : {Request && Request.age}</span>
      </p>
      <p>{Result}</p>
      <div>
        {Request &&
          Request.datas &&
          Request.datas.map((value, i) => (
            <p key={i}>
              <span>{value ? value.name : "NO"}</span> :
              <span>{value ? value.age : "NO"}</span>
            </p>
          ))}
      </div>
    </div>
  );
}
export default App;
