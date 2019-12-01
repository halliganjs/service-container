import { Binding } from '../../src/Binding'

describe('Binding: isFactory()', function () {
  it('should return false if the binding is not a factory', function () {
    const binding = new Binding()

    this.assert.isFalse(binding.isFactory())
  })

  it('should return true if the binding is a factory', function () {
    const binding = new Binding(null, () => {}, true)

    this.assert.isTrue(binding.isFactory())
  })
})
