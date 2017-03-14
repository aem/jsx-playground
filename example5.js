/* @jsx compileMathOps */

const compileMathOps = (fun, {value}, children) => fun(value, children)

const Add = (val1, val2) => val1 + (val2 || val1)

const Square = (value, rest) => value * value + (rest || 0)

const getContent = () => {
  return (
    <Add value={5}>
      <Square value={6} />
    </Add>
  );
}

console.log(getContent())
