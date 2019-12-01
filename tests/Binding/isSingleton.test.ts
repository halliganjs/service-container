import { Binding } from '../../src/Binding'

describe('Binding: isSingleton()', function () {
  it('should return false if the binding has no resolver', function () {
    const binding = new Binding(null, null, false)

    this.assert.isFalse(binding.isSingleton())
  })

  it('should return false if the binding is a factory', function () {
    const binding = new Binding(null, () => {}, true)

    this.assert.isFalse(binding.isSingleton())
  })

  it('should return true if the binding has a resolved and is not a factory', function () {
    const binding = new Binding(null, () => {}, false)

    this.assert.isTrue(binding.isSingleton())
  })
})
