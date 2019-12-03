import { BindingResolutionError } from '../../../src/errors/BindingResolutionError'

describe('errors: BindingResolutionError: constructor()', function () {
  it('should set the correct message value', function () {
    const error = new BindingResolutionError('testing')

    this.assert.equal(
      error.message,
      'Failed to resolve a binding with the key \'testing\' from the service container.'
    )
  })
})
