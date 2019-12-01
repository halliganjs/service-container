import { Binding } from '../../src/Binding'

describe('Binding: isInstance()', function () {
  it('should return false if the binding has a resolver', function () {
    const binding = new Binding(null, () => {})

    this.assert.isFalse(binding.isInstance())
  })

  it('should return true if the binding has no resolver', function () {
    const binding = new Binding()

    this.assert.isTrue(binding.isInstance())
  })
})
