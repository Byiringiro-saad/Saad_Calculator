import styled from "styled-components";
import React, { useEffect, useState } from "react";

//features
import axios from "./features/axios";

function App() {
  const [text, setText] = useState("");
  const [operand1, setOperand1] = useState("");
  const [operand2, setOperand2] = useState("");
  const [operation, setOperation] = useState("");

  const handleOperand1 = (e) => {
    setOperand1(e.target.value);
  };

  const handleOperand2 = (e) => {
    setOperand2(e.target.value);
  };

  const handleOperation = (value) => {
    setOperation(value);
  };

  const handleReset = () => {
    setOperand1("");
    setOperand2("");
    setOperation("");
    setText("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (operand1 && operand2 && operation) {
      await axios
        .post("/math/doMath", {
          one: parseInt(operand1),
          two: parseInt(operand2),
          operation: operation,
        })
        .then((response) => {
          setText(`${text} = ${response?.data?.calcResponse}`);
        });
    } else {
      alert("Something is missing");
    }
  };

  useEffect(() => {
    setText(`${operand1} ${operation} ${operand2}`);
  }, [operand1, operand2, operation]);

  return (
    <Container>
      <div className="header">
        <p>SAAD_CALC</p>
      </div>
      <form action="#" onSubmit={handleSubmit}>
        <div className="row answer">
          <p id="result">{text}</p>
        </div>
        <div className="row input">
          <input
            type="text"
            placeholder="..."
            value={operand1}
            onChange={handleOperand1}
            id="operand1"
          />
        </div>
        <div className="row input">
          <input
            type="text"
            placeholder="..."
            value={operand2}
            onChange={handleOperand2}
            id="operand2"
          />
        </div>
        <div className="operations">
          <div
            id="operation-multi"
            className={operation === "*" ? "selected box" : "box"}
            onClick={() => handleOperation("*")}
          >
            <p>*</p>
          </div>
          <div
            id="operation-divide"
            className={operation === "/" ? "selected box" : "box"}
            onClick={() => handleOperation("/")}
          >
            <p>/</p>
          </div>
          <div
            id="operation-add"
            className={operation === "+" ? "selected box" : "box"}
            onClick={() => handleOperation("+")}
          >
            <p>+</p>
          </div>
          <div
            id="operation-subtr"
            className={operation === "-" ? "selected box" : "box"}
            onClick={() => handleOperation("-")}
          >
            <p>-</p>
          </div>
          <div
            id="operation-power"
            className={operation === "**" ? "selected box" : "box"}
            onClick={() => handleOperation("**")}
          >
            <p>**</p>
          </div>
          <div
            id="operation-log"
            className={operation === "log" ? "selected box" : "box"}
            onClick={() => handleOperation("log")}
          >
            <p>log</p>
          </div>
          <div
            id="operation-ln"
            className={operation === "ln" ? "selected box" : "box"}
            onClick={() => handleOperation("ln")}
          >
            <p>ln</p>
          </div>
          <div className="box reset" onClick={handleReset} id="reset">
            <p>Reset</p>
          </div>
        </div>
        <button id="operate-button" type="submit">
          Operate
        </button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .header {
    width: auto;
    height: 150px;
    display: flex;
    align-items: center;

    p {
      color: var(--white);
      font-size: 1.5em;
      font-weight: 700;
    }
  }

  form {
    width: 600px;
    height: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 2px solid var(--bright);
    border-radius: 10px;

    .row {
      width: 100%;
      height: 70px;
      margin: 0 0 10px 0;
      background: var(--gray);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      overflow: hidden;

      input {
        width: 100%;
        height: 100%;
        background: transparent;
        padding: 0 10px;
        text-align: center;
        border: none;
        color: var(--white);
      }
    }

    .answer {
      background: var(--bright);

      p {
        color: var(--white);
        font-size: 1.5em;
      }
    }

    .operations {
      width: 100%;
      height: auto;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;

      .box {
        width: 100%;
        height: 100px;
        display: flex;
        cursor: pointer;
        align-items: center;
        border-radius: 5px;
        justify-content: center;
        background: var(--gray);

        p {
          font-size: 1.2em;
          color: var(--white);
        }
      }

      .selected {
        background: var(--bright) !important;
      }
    }

    button {
      width: 100%;
      height: 60px;
      margin: 10px 0 0 0;
      border-radius: 5px;
      background: var(--bright);
      color: var(--white);
    }
  }
`;

export default App;
