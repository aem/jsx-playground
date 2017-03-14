/* @jsx printArgs */

function printArgs(fun, props) {
    console.log(props)
}

const runMyJSX = () => {
    <console.log arg1={true} />
};

runMyJSX();
