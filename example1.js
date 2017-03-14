/* @jsx printProps */

const printProps = (fun, props) => console.log(props)

const empty = () => { }

const getContent = () => {
    return <empty arg1={true} />
}

getContent()
