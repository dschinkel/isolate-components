## isolate-components
[![npm badge](https://img.shields.io/npm/v/isolate-components)](https://npmjs.com/package/isolate-components)

Isolate and test your modern react components without the need for DOM emulators and with support for hooks.

### Installation

`yarn add --dev isolate-components` or `npm install -D isolate-components`

### Usage

See [API documentation](https://davidmfoley.github.io/isolate-components/globals.html#isolatecomponent).

```
import { isolateComponent } from 'isolate-components'

// the component we are going to test
const MyComponent = (props) => (
  <span>Hello {props.name}</span>
)

// render the component, in isolation
const component = isolateComponent(<MyComponent name='Trillian' />)
console.log(component.findOne('span').content()) // => 'Hello Trillian'

// now update the props
component.setProps({name: 'Zaphod'})
console.log(component.findOne('span').content()) // => 'Hello Zaphod'
```


### Usage with hooks


```
import { isolateComponent } from 'isolate-components'

// the component we are going to test
const Example = (props) => {
  
  <span>Hello {props.name}</span>
}

// render the component, in isolation
const component = isolateComponent(<MyComponent name='Trillian' />)
console.log(component.findOne('span').content()) // => 'Hello Trillian'

// now update the props
component.setProps({name: 'Zaphod'})
console.log(component.findOne('span').content()) // => 'Hello Zaphod'
```

### Project progress

This is relatively new -- your feature requests and feedback are appreciated.

See the [project tracker](https://github.com/davidmfoley/isolate-components/projects/1) for project progress.

File an [issue](https://github.com/davidmfoley/isolate-components/issues) if you have a suggestion or request.

