/* @jsx printPropsAndExecute */

const printPropsAndExecute = (fun, props) => {
  fun()
  console.log(props)
}

const SayHello = () => { console.log("Hello!") }

const getContent = () => {
  return <SayHello arg1={true} />
}

getContent()
