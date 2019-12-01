import { Binding } from '../../src/Binding'

describe('Binding: hasResolver()', function () {
  it('should return false if there is no resolver', function () {
    const binding = new Binding()

    this.assert.isFalse(binding.hasResolver())
  })

  it('should return true if there is a resolver', function () {
    const binding = new Binding(null, () => {})

    this.assert.isTrue(binding.hasResolver())
  })
})
