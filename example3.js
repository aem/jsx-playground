/* @jsx printPropsAndExecute */

const printPropsAndExecute = (fun, props, children) => {
  fun()
  console.log(props)
}

const SayHello = () => { console.log("Hello!") }

const getContent = () => {
  return <SayHello arg1={true} />
}

getContent()
