/* @jsx execute */

const execute = (fun, props) => (props.shouldExecute) ? fun() : undefined

const SayHello = () => { console.log("Hello!") }

const getContent = () => {
    return <SayHello shouldExecute={true} />
}

const getOtherContent = () => {
    return <SayHello shouldExecute={false} />
}

getContent()
getOtherContent()
