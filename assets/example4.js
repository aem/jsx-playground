/* @jsx doMaths */

const doMaths = (fun, {value}, children) => {
  return fun(value, children)
}

const Add = (val1, val2) => {
  return val1 + (val2 || 0)
}
const Subtract = (val1, val2) => val2 - val1
const Square = (value, rest) => {
  return value * value + (rest || 0)
}

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
