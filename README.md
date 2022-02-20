# Halligan JS: Service Container

![NPM](https://img.shields.io/npm/l/@halliganjs/service-container)
[![Build Status](https://travis-ci.com/halliganjs/service-container.svg?branch=main)](https://travis-ci.com/halliganjs/service-container)
[![Coverage Status](https://coveralls.io/repos/github/halliganjs/service-container/badge.svg?branch=main)](https://coveralls.io/github/halliganjs/service-container?branch=main)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/halliganjs/service-container.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/halliganjs/service-container/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/halliganjs/service-container.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/halliganjs/service-container/context:javascript)
![npm](https://img.shields.io/npm/v/@halliganjs/service-container)
![npm](https://img.shields.io/npm/dm/@halliganjs/service-container)
![npm bundle size](https://img.shields.io/bundlephobia/min/@halliganjs/service-container)
![Maintenance](https://img.shields.io/maintenance/yes/2022)

The Service Container provides a very simple, centralized container that stores and resolves libraries, objects, and values to better organize code, manage dependencies, and enhance testability.

Benefits:

- Encourages up-front, centralized dependency configuration
- Configuration allows for resolving values, one-time-run factories, and multi-run factories
- Defers dependency resolution to mitigate circular references
- Allows for easy mocking during unit testing

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
    * [Creating the Container](#creating-the-container)
    * [Registering Values](#registering-values)
        * [`instance(key: any, value: any)`](#instancekey-any-value-any)
        * [`singleton(key: any, value: (container: ContainerInterface) => any)`](#singletonkey-any-value-container-containerinterface--any)
        * [`binding(key: any, value: (container: ContainerInterface) => any)`](#bindingkey-any-value-container-containerinterface--any)
    * [Retrieving Values](#retrieving-values)
        * [`make(key: any)`](#makekey-any)
            * [Type-hinting Supprt [TypeScript Only]](#type-hinting-supprt-typescript-only)
    * [Binding Fakes and Mocks for Unit Testing](#binding-fakes-and-mocks-for-unit-testing)
        * [`fake(key: any, value: any)`](#fakekey-any-value-any)
        * [`reset(hard: boolean)`](#resethard-boolean)
    * [Bundling Registrations with Providers](#bundling-registrations-with-providers)
        * [Creating a `Provider`](#creating-a-provider)
        * [Register `Provider` with `provider (provider: Provider)`](#register-provider-with-provider-provider-provider)

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
const { Container } = require('@halliganjs/service-container')

const container = new Container()

module.exports = container
```

### Registering Values

There are 3 methods for registering values, depending on how the value is used.

#### `instance(key: any, value: any)`

The `instance()` method is used to register a single value to a specific key. When an instance value is resolved from the container the value provided is the exact same value that will be returned. This makes `instance()` great for registering strings, numbers, and libraries that either don't need to be constructed or do not depend on other items in the container.

Since bindings are stored in a `Map`, any value can be used as a key, including library references themselves.

> Note: values such as objects, functions, and arrays are passed by reference, so be careful mutating such values when resolved from the container.

```js
const container = require('./container.js')
const axios = require('axios')

// Registers the number 3 to the key 'loginAttemptsAllowed'
container.instance('loginAttemptsAllowed', 3)

// Registers the string 'TESTING' to the key 'typeConstant'
container.instance('typeConstant', 'TESTING')

// Registers the library axios to the key that is a reference to the axios library
container.instance(axios, axios)
```

#### `singleton(key: any, value: (container: ContainerInterface) => any)`

The `singleton()` method is used to register a closure that is responsible for building a value to a specific key. The _first time_ the value is requested the closure will be run and its return value will be stored as the new value for that key as if it was registered with `instance()`. The new value will always be returned as the value for the key.

This method is perfect for when you want a singleton instance, but it has to be made from other items that may be in the container.

The container instance is provided as the only parameter to the closure.

Since bindings are stored in a `Map`, any value can be used as a key, including library references themselves.

```js
const container = require('./container.js')
const Network = require('./Network')
const axios = require('axios')

// The closure is registered to the Network key.
// When resolved for the first time, the closure will be run and its value will replace the closure as the value of the key
// The closure recieves the container as its only parameter
container.singleton(Network, (container) => {
    return new Network(container.make(axios))
})

// Registers the closure to the key 'randomNumber'.
// When the value is requested the first time the closure is run and the random number is stored
// The same number will always be returned when the key 'randomNumber' is requested because the closure is only run once
container.singleton('randomNumber', () => {
    return Math.floor(Math.random() * 10)
})
```

#### `binding(key: any, value: (container: ContainerInterface) => any)`

The `binding()` method is used to register a closure that is responsible for building a value to a specific key. Unlike `singleton()`, the closure registered with `binding()` is run _every single time the value is requested_. As a result, a new value is given every time the value is requested.

This method is perfect for when you want a new value or a new instance of a class every time you request one from the container.

The container instance is provided as the only parameter to the closure.

Since bindings are stored in a `Map`, any value can be used as a key, including library references themselves.

```js
const container = require('./container.js')
const User = require('./User')
const Network = require('./Network')

// The closure is registered to the User key.
// A new instance of User will be provided every time the key is requested
// The closure recieves the container as its only parameter
container.binding(User, (container) => {
    return new User(container.make(Network))
})

// Registers the closure to the key 'randomNumber'.
// A new number will always be returned when the key 'randomNumber' is requested
container.binding('randomNumber', () => {
    return Math.floor(Math.random() * 10)
})
```

### Retrieving Values

#### `make(key: any)`

Once values and factory functions have been registered into the container, they can be retrieved by calling `make()` with the key you wish to retrieve.

```js
const container = require('./container')
const Network = require('./Network')
const User = require('./User')

const randomNumber = container.make('randomNumber')
const network = container.make(Network)
const user = container.make(User)
```

##### Type-hinting Supprt [TypeScript Only]

When calling the `make()` method inside a TypeScript environment, you may choose to provide a generic type that will be used as the return type of the `make()` method for type-hinting purposes. If you choose not to provide a generic type, then TypeScript will assume that the returned value has a type of any.

```js
// Default behavior - value has a type of any
const value = container.make(MyClass)

// Opt-in behavior - newValue has a type of MyClass
const value = container.make<MyClass>(MyClass)
```

> Note: Be careful when defining the return type of the `make()` method. TypeScript does not check that the value returned is the correct type, it merely casts the type for type-hinting purposes.

### Binding Fakes and Mocks for Unit Testing

One of the best features of a centralized service container is that it is really easy to fake, mock, and stub dependencies when unit testing. So long as your code retrieves values from the container, you can have the container provide your mock during testing and the code under test won't know the difference.

The Service Container provides several methods that make this process easy and straightforward, from binding fake values to resetting the container so that each individual test starts with a full original container.

#### `fake(key: any, value: any)`

The `fake()` method behaves exactly like the `instance()` method, except the value provided to it is stored separately and tagged as a fake. When a fake value is registered and `make()` is called, the fake value will be provided until it is cleared with `reset()`.

For unit testing, create your mock value and register it with `fake()`. When the code you intend to test runs and requests the value for the key you have faked, the fake value will be returned. When the test is finished executing, call `reset()` and the fake value will be removed so the next test will use the real value again.

> `fakeInstance()` is an alias for `fake()` since instance binding is almost exclusively what unit testing will need. `fakeSingleton()` and `fakeBinding()` exist as well for the sake of completeness, with signatures that match their non-fake versions, but are not likely to be necessary.

```js
const container = require('./container')
const moment = require('moment')

describe('Test description', function () {
  it('should use the fake moment', function () {
    // Create the fake
    const fakeMoment = {
      normalizeUnits () {
        return 'year'
      }
    }

    // Register the fake
    container.fake(moment, fakeMoment)

    // Run your test
    const result = myCode.doSomethingWithMoment()
    assert.equal(result, 'year')

    // Reset the container (see the reset() docs for better ways to do this)
    container.reset()
  })
}
```

#### `reset(hard: boolean)`

If you are registering fakes in a unit test, odds are you don't want the fakes from one test to bleed into other tests. The `reset()` method allows you to eliminate all the fakes currently registered so that only actual bindings remain. By calling `reset()` between tests, you are guaranteed that each test only fakes what it needs and relies on actual bindings for everything else, regardless of what other tests do.

While you could call `reset()` at the end of every test, all the major test runners provide some means of running functions before each test or after each test. It is highly recommended that you reset your container in a global before-each or after-each function so that it is automatic and not reliant on developers remembering to redundantly call `reset()` in all of their tests.

> If you wish for the container to be cleaned of _ALL_ of its bindings, both fakes and actual ones, then pass `true` as the first argument to `reset()` for a hard reset that eliminates all bindings.

```js
const container = require('./container')
const moment = require('moment')

describe('Test description', function () {
  beforeEach(function () {
    // Ensure that the container is always clean before a test runs
    container.reset()
  })

  it('should use the fake moment', function () {
    // Create the fake
    const fakeMoment = {
      normalizeUnits () {
        return 'year'
      }
    }

    // Register the fake
    container.fake(moment, fakeMoment)

    // Run your test
    const result = myCode.doSomethingWithMoment()
    assert.equal(result, 'year')
  })
})
```

### Bundling Registrations with Providers

While it's fairly easy to create a container and wire it up together all at once, it is not always the most organized way. Also, if you want to reuse libraries across projects, you will need to duplicate the registrations in every project that you use that library in.

To make life easier, the container supports providers, which are just a way to bundle multiple registrations on a container into one callback. This allows you to organize multiple registrations for the same service, or the same category of services, into a single file that exports a `Provider` closure. When the closure is registered with the container, the container will extract all of the registrations automatically. This makes providers a great way to organize similar services together, or to bundle with a library you use across projects so you can just reference the bundled provider for consistent, DRY service registration.

#### Creating a `Provider`

A `Provider` is just a closure that accepts the container as its only parameter. Inside the closure you can run as many operations (such as `instance()`, `singleton()`, and `binding()`) as you like on the container. Once given to the container, the `Provider`'s registrations will all be run on the container itself.

```js
// in ./providers/dBProvider.js
const DBConnection = require('./DBConnection')
const ModelFactory = require('./ModelFactory')

// This closure is the Provider, and registers two items into the container
module.exports = function (container) {
  container.singleton(DBConnection, function () {
    return new DBConnection(
      process.env.DB_HOST,
      process.env.DB_USER,
      process.env.DB_PASS
    )
  })

  container.binding(ModelFactory, function (container) {
    return new ModelFactory(container.make(DBConnection))
  })
}
```

#### Register `Provider` with `provider (provider: Provider)`

Once you have services organized into one or more providers, they just need to be registered with the container. This is done by calling `provider()` on the container instance and passing your provider. The container will take the provider and run it, registering each item defined within the provider.

> Note: Unlike `instance()`, `singleton()`, and `binding()` registrations, providers are not stored or remembered by the container. Only the items that the provider registers by calling `instance()`, `singleton()`, and `binding()` are stored.

```js
//in ./container.js
const Container = require('@halliganjs/service-container')
const DBConnection = require('./DBConnection')
const dbProvider = require('./providers/dBProvider.js')

// Instantiate container instance
const container = new Container()

// Register the provider
container.provider(dbProvider)

// All the provider's registered items are now available in the container
const dbConnection = container.make(DBConnection)
```

---

Inspired by the [Laravel Service Container](https://github.com/illuminate/container).
