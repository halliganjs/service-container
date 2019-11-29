import { BindingResolutionError } from '../../src/errors/BindingResolutionError'
import { Container } from '../../src/Container'

describe('Container: make()', function () {
  it('should resolve the binding if it exists', function () {
    const container = new Container()

    const value = {}

    container.instance('testing', value)

    this.assert.equal(container.make('testing'), value)
  })

  it('should throw an error if the binding does not exist', function () {
    const container = new Container()

    this.assert.throws(
      () => container.make('testing'),
      BindingResolutionError,
      'Failed to resolve a binding with the key \'testing\' from the service container.'
    )
  })
})