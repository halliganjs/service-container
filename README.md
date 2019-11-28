# Halligan JS: Service Container

[![Build Status](https://travis-ci.com/halliganjs/service-container.svg?branch=master)](https://travis-ci.com/halliganjs/service-container)
[![Coverage Status](https://coveralls.io/repos/github/halliganjs/service-container/badge.svg?branch=master)](https://coveralls.io/github/halliganjs/service-container?branch=master)

The Service Container provides a very simple centralized container that stores and resolves libraries, objects, and values to better organize code, manage dependencies, and enhance testability.

Benefits:

- Encourages up-front, centralized dependency configuration
- Configuration allows for resolving values, one-time-run factories, and multi-run factories
- Defers dependency resolution to mitigate circular references
- Allows for easy mocking during unit testing

## Installation

The Service Container is registered on NPM and can be installed with both `npm` and `yarn`.

```sh
# Install with NPM
$ npm i @halliganjs/service-container

# Install with yarn
$ yarn add @halliganjs/service-container
```

## Usage

### Creating the Container

The Service Container is a class that needs to be instantiated. The resulting instance should be exported for use throughout your application as a singleton so that everything interacts with the same instance of the container.

```js
const Container = require('@halliganjs/service-container')

const container = new Container()

module.exports = container
```

### Registering Values

There are 3 methods for registering values, depending on how the value is used:

- `instance(key, value)` registers a single value to a specific key; the same value will always be returned.
- `singleton(key, fn)` registers a factory function for a specific key that will be run exactly once; the return value of the factory function's first run will always be returned.
- `binding(key, fn)` registers a factory function for a specific key that will _always_ be run when the value is requested, yielding new instances.

```js
// Import the container instance
const container = require('./container.js')

// instance() is great for static values and libraries that need to be shared, and that you never want more than one copy of
const axios = require('axios')
container.instance('axios', axios)

// singleton() is great for when you want to create a singleton instance, but it depends on something else in the container
const Network = require('./lib/Network')
container.singleton('network', container => {
  return new Network(container.make('axios'))
})

// binding() is great for when you always need a fresh instance of a value
const UserModel = require('./models/User')
container.binding('userModel', () => {
  return new UserModel()
})
```

### Retrieving Values

Once values and factory functions have been registered into the container, they can be retrieved by calling `make()` with the key you wish to retrieve.

```js
// Import the container instance
const container = require('./container')

const network = container.make('network')
const user = container.make('user')
```

---

Inspired by the [Laravel Service Container](https://github.com/illuminate/container).
