/* @jsx compileMathOps */

const compileMathOps = (fun, {value}, children) => fun(value, children)

const Add = (val1, val2) => val1 + (val2 || val1)
const Subtract = (val1, val2) => val2 - val1
const Square = (value, rest) => value * value + (rest || 0)

const getContent = () => {
  return (
    <Subtract value={10}>
      <Add value={5}>
        <Square value={6} />
      </Add>
    </Subtract>
  );
}

console.log(getContent())
