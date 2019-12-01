import { Binding } from '../../src/Binding'

describe('Binding: setValue()', function () {
  it('should set the value property value', function () {
    const binding = new Binding()

    this.assert.isNull(binding.getValue())

    binding.setValue(true)

    this.assert.isTrue(binding.getValue())
  })

  it('should return the binding', function () {
    const binding = new Binding()

    this.assert.equal(binding.setValue(true), binding)
  })
})
