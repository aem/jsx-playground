const React = require('react')
const renderToString = require('react-dom/server').renderToString

const HelloWorld = () => {
  return <div>Hello, World!</div>
}

console.log(renderToString(<HelloWorld />))
