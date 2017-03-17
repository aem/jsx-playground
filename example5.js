/* @jsx buildModel */

class Schema {
  constructor(schema) {
    this.schema = schema
  }

  validate(obj, schema = this.schema) {
    for (let key of Object.keys(obj)) {
      if (typeof obj[key] !== schema[key]) {
        if (typeof schema[key] === 'string') {
          return false
        } else if (typeof schema[key] === Type.object) {
          return this.validate(obj[key], schema[key])
        }
      }
    }
    return true
  }
}

const buildModel = (obj, props, children) => {
  if (obj === Schema) return new Schema(children)
  let result = {}
  switch (obj) {
    case 'map':
      if (children && children.name) {
        if (props[children.name] === 'object') {
          result = Object.assign({}, props, { [children.name] : children })
        } else {
          throw new Error(`Attempted to assign object "${children.name}" to type ${props[children.name]}`)
        }
      } else {
        result = props
      }
      break;
    default:
      result = (children && children.name) ? Object.assign({}, props, { [children.name] : children }) : props
  }
  if (children && children.name) delete result[children.name].name
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
      id={Type.number}
      firstName={Type.string}
      lastName={Type.string}
      address={Type.object}
    >
      <map
        name="address"
        street={Type.string}
        street2={Type.string}
        city={Type.string}
        state={Type.string}
        postalCode={Type.string}
      />
    </map>
  </Schema>
)

const model = dataModel()
console.log(model)
console.log(model.validate({
  id: 1,
  firstName: 'John',
  lastName: 'Smith',
  address: {
    street: '123 Main Street',
    street2: 'Apt 1',
    city: 'New York',
    state: 'New York',
    postalCode: '12345'
  }
}))
console.log(model.validate({
  id: 1,
  firstName: 'John',
  lastName: 'Smith',
  address: {
    street: '123 Main Street',
    street2: 'Apt 1',
    city: 'New York',
    state: 'New York',
    postalCode: 12345
  }
}))
