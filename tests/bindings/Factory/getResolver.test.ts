import { Factory } from '../../../src/bindings/Factory'

describe('bindings: Factory: getResolver()', function () {
  it('should return the resolver', function () {
    const resolver = () => {}
    const test = new Factory(resolver)

    this.assert.equal(test.getResolver(), resolver)
  })
})
