/* @jsx execute */

const execute = (fun, props, children) => {
  fun()
}

const SayHello = () => console.log('Hello!')

const getContent = () => {
  return (
    <SayHello />
  );
}

getContent()
