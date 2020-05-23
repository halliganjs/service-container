import { BindingResolutionError } from '../../../src/errors/BindingResolutionError'

describe('errors: BindingResolutionError: constructor()', function () {
  const func = function () {}
  const obj = {}
  const constructedObj = new BindingResolutionError(undefined)

  const keys = [
    ['undefined', undefined, 'Failed to resolve a binding with a key of undefined from the service container.'],
    ['null', null, 'Failed to resolve a binding with a key of null from the service container.'],
    ['an arrow function', () => {}, 'Failed to resolve a binding with a key of [Function] from the service container.'],
    ['an anonymous function', function () {}, 'Failed to resolve a binding with a key of [Function] from the service container.'],
    ['a named function', func, 'Failed to resolve a binding with a key of [Function: func] from the service container.'],
    ['a generic object', {}, 'Failed to resolve a binding with a key of [Object: Object] from the service container.'],
    ['a named object', obj, 'Failed to resolve a binding with a key of [Object: Object] from the service container.'],
    ['a constructed object', constructedObj, 'Failed to resolve a binding with a key of [Object: BindingResolutionError] from the service container.'],
    ['a class constructor', BindingResolutionError, 'Failed to resolve a binding with a key of [Function: BindingResolutionError] from the service container.'],
    ['an empty string', '', 'Failed to resolve a binding with a key of type string with a value of \'\' from the service container.'],
    ['a string', 'testing', 'Failed to resolve a binding with a key of type string with a value of \'testing\' from the service container.'],
    ['a symbol', Symbol('testing'), 'Failed to resolve a binding with a key of Symbol(testing) from the service container.'],
    ['a number', 123, 'Failed to resolve a binding with a key of type number with a value of 123 from the service container.'],
    ['a float', 123.456, 'Failed to resolve a binding with a key of type number with a value of 123.456 from the service container.'],
    ['a big integer', 10000000000000000000000000, 'Failed to resolve a binding with a key of type number with a value of 1e+25 from the service container.']
  ]

  keys.forEach(([type, key, message]) => {
    it(`should set the correct message value when the key is ${type}`, function () {
      const error = new BindingResolutionError(key)
      this.assert.equal(error.message, message)
    })
  })
})
