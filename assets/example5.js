/* @jsx model */

class Schema {
  constructor(schema) {
    this.schema = schema
  }

  validate(obj, schema = this.schema) {
    for (let key of Object.keys(obj)) {
      if (typeof obj[key] !== schema[key] &&
        !(schema[key] === Type.array &&
        Array.isArray(obj[key])))
      {
        if (typeof schema[key] === 'string') {
          return false
        }
        if (typeof schema[key] === 'object') {
          return this.validate(
            obj[key],
            schema[key]
          )
        }
      }
    }
    return true
  }
}

const model = (obj, props, child) => {
  if (obj === Schema) {
    return new Schema(child)
  }
  let result = {}
  switch (obj) {
    case 'map':
      if (child && child.name) {
        if (props[child.name] === 'object') {
          result = Object.assign({}, props, {
            [child.name] : child
          })
        } else {
          throw new Error(`Attempted to assign
           object "${child.name}" to
            type ${props[child.name]}`
          )
        }
      } else {
        result = props
      }
      break;
    default:
      result = (child && child.name) ?
        Object.assign({}, props, {
        [child.name] : child
      }) : props
  }
  if (child && child.name) {
    delete result[child.name].name
  }
  return result
}

const Type = {
  number: 'number',
  string: 'string',
  array: 'array',
  object: 'object'
}

const dataModel = () => (
  <Schema>
    <map
      name={Type.string}
      address={Type.object}
      friends={Type.array}
    >
      <map
        name="address"
        street={Type.string}
        city={Type.string}
        postalCode={Type.string}
      />
    </map>
  </Schema>
)

const schema = dataModel()
console.log(schema)
console.log(schema.validate({
  id: 1,
  name: 'John',
  friends: [2, 3, 4],
  address: {
    street: '123 Main Street',
    city: 'New York',
    postalCode: '12345'
  }
}))
console.log(schema.validate({
  id: 1,
  name: 'John',
  friends: [2, 3, 4],
  address: {
    street: '123 Main Street',
    city: 'New York',
    postalCode: 12345
  }
}))
