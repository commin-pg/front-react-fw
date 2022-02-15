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

  const onSubmit = async (form: {
    name: string | undefined;
    age: number | undefined;
  }) => {
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
          if (Request && Request.datas) {
            setRequest({
              name: form.name,
              age: form.age,
              datas: [...Request.datas, { name: form.name, age: form.age }],
            });
          } else {
            setRequest({
              name: form.name,
              age: form.age,
              datas: [{ name: form.name, age: form.age }],
            });
          }
        }

        setRequest({
          name: undefined,
          age: undefined,
          datas: undefined,
        });

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

  const onDeleteAll = async () => {
    const response = await fetch("/api/delete", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setRequest({
          name: undefined,
          age: undefined,
          datas: undefined,
        });
      });
  };

  const onTestSpeed = async () => {
    let count = 0;
    let startTime = Date.now() / 1000;

    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        fetch("/api/test/abcde", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            count++;
            return res.json();
          })
          .then((json) => {
            if (count === 100) {
              setResult(
                `걸린 시간 : ${Date.now() / 1000 - startTime} 서버 : ${
                  json.container_name
                }`
              );
            }
            console.log(i, json);
          });
      }, i * 5);
    }
  };

  return (
    <div className="App">
      <MyForm onSubmit={onSubmit} />
      <button onClick={onSelectAll}> 조회 3</button>
      <button onClick={onDeleteAll}> 전체삭제 </button>
      <button onClick={onTestSpeed}> 속도 테스트 </button>

      <p>{Result}</p>
      <div>
        <h1>React App</h1>
        <ul>
          {Request &&
            Request.datas &&
            Request.datas.map((value, i) => (
              <li key={i}>
                <span>{value ? value.name : "NO"}</span> :
                <span>{value ? value.age : "NO"}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
export default App;
