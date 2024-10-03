import { useState } from "react";
import "./App.css";

type Operation = {
  num1: number;
  num2: number;
  result: number;
};

const App: React.FC = () => {
  const [sum, setSum] = useState<Operation>({ num1: 0, num2: 0, result: 0 });

  const handleOperation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setSum((prevSum) => ({
      ...prevSum,
      [id]: parseInt(value),
    }));
  };

  const handleSum = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSum((prevSum) => ({
      ...prevSum,
      result: prevSum.num1 + prevSum.num2,
    }));
  };

  return (
    <div>
      <h1>Suma</h1>
      <form onSubmit={handleSum}>
        <input
          type="number"
          id="num1"
          value={sum.num1}
          onChange={handleOperation}
        />
        <input
          type="number"
          id="num2"
          value={sum.num2}
          onChange={handleOperation}
        />
        <button type="submit">Sumar</button>
      </form>
      <div>Resultado: {sum.result}</div>
    </div>
  );
};

export default App;
