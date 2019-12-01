import { Binding } from '../../src/Binding'

describe('Binding: getValue()', function () {
  it('should return the value', function () {
    const value = {}
    const binding = new Binding(value)

    this.assert.equal(binding.getValue(), value)
  })
})
