# jsx-playground
JSX is an incredibly expressive syntax. Most people rightly associate it with React, as Facebook created the syntax to build React components. However, most people don't realize that JSX is simply an [AST extension](https://github.com/facebook/jsx/blob/master/AST.md) that can be generically applied to any environment.

Knowing this, by using Babel's JSX transformer plugin or the JSX compiler itself it is actually possible to use arbitrary functions when transforming JSX instead of [React](http://facebook.github.io/react)'s `React#createElement`. Babel provides two ways to hook into this functionality:

#### Via Per-file Pragma

_Only applies to one file. Helpful if different files should use different transformations_

`/src/logJsx.js`
```jsx
/* @jsx log */
const log = (fun, props) => console.log(props)
const jsx = () => <null prop1={true} />
jsx()  // { prop1: true }
```

#### Via .babelrc

_Applies to the global project. Requires listed function to be imported into any file that uses JSX. This is why React builds fail on builds where `React` isn't in the global scope and isn't imported into every component._

`.babelrc`
```json
{
  "plugins": [
    ["transform-react-jsx", {
      "pragma": "log"
    }]
  ]
}
```
`/src/logJsx.js`
```jsx
const log = (fun, props) => console.log(props)
const jsx = () => <null prop1={true} />
jsx()  // { prop1: true }
```

This project was created to go along with a talk given to the April 2017 DublinJS Meetup. The examples demonstrate the following:

0. `npm start - example0.js` A standard React component. Provides a typical JSX usecase, printing the markup rendered by React.
1. `npm run example1` A simple use of the JSX pragma. Prints out the props of the JSX to the console.
2. `npm run example2` Take advantage of the function itself that was used to create the component by executing it and then printing props.
3. `npm run example3` Adding in nested components now. Accumulates the props of the nested components and print them.
4. `npm run example4` First look at "useful" JSX. Create fully composeable mathematical operation components
