/* @jsx accumulateProps */

const accumulateProps = (fun, props, children) => {
  return {
    ...props,
    children
  }
}

const getContent = () => {
  return (
    <null level1={"top level component"}>
      <null level2={"this one is nested"} />
    </null>
  );
}

console.log(getContent())
