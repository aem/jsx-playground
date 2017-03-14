/* @jsx accumulateProps */

const accumulateProps = (fun, props, children) => {
  return {
    ...props,
    children
  }
}

const empty = () => {  }

const getContent = () => {
  return (
    <empty level1={"top level component"}>
      <empty level2={"this one is nested"} />
    </empty>
  );
}

console.log(getContent())
