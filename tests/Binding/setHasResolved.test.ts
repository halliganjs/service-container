import { Binding } from '../../src/Binding'

describe('Binding: setHasResolved()', function () {
  it('should set the hasResolved property value', function () {
    const binding = new Binding()

    this.assert.isFalse(binding.hasResolved())

    binding.setHasResolved(true)

    this.assert.isTrue(binding.hasResolved())
  })

  it('should return the binding', function () {
    const binding = new Binding()

    this.assert.equal(binding.setHasResolved(true), binding)
  })
})
