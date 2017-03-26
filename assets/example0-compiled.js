const React = require('react')
const {renderToString} =
  require('react-dom/server')

const HelloWorld = () => {
  return React.createElement(
    'div',
    null,
    'Hello, World!'
  )
}

console.log(renderToString(
  React.createElement(HelloWorld)
))
