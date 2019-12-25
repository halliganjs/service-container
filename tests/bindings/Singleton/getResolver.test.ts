import { Singleton } from '../../../src/bindings/Singleton'

describe('bindings: Singleton: getResolver()', function () {
  it('should return the resolver', function () {
    const resolver = () => {}
    const test = new Singleton(resolver)

    this.assert.equal(test.getResolver(), resolver)
  })
})
