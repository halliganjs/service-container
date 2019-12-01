import { Binding } from '../../src/Binding'

describe('Binding: constructor()', function () {
  it('should set default values', function () {
    const binding = new Binding()

    this.assert.isNull(binding.getValue())
    this.assert.isNull(binding.getResolver())
    this.assert.isFalse(binding.isFactory())
  })

  it('should set provided values', function () {
    const value = {}
    const resolver = () => {}
    const isFactory = true

    const binding = new Binding(value, resolver, isFactory)

    this.assert.equal(binding.getValue(), value)
    this.assert.equal(binding.getResolver(), resolver)
    this.assert.isTrue(binding.isFactory())
  })
})
