import { Binding } from '../../src/Binding'

describe('Binding: getResolver()', function () {
  it('should return the resolver', function () {
    const resolver = () => {}
    const binding = new Binding(null, resolver)

    this.assert.equal(binding.getResolver(), resolver)
  })
})
