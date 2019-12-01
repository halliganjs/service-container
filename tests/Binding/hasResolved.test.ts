import { Binding } from '../../src/Binding'

describe('Binding: hasResolved()', function () {
  it('should return the hasResolved value', function () {
    const binding = new Binding()

    this.assert.isFalse(binding.hasResolved())

    binding.setHasResolved(true)

    this.assert.isTrue(binding.hasResolved())
  })
})
