import { Factory } from '../../../src/bindings/Factory'

describe('bindings: Factory: setHasResolved()', function () {
  it('should return the binding', function () {
    const test = new Factory(() => {})

    this.assert.equal(test.setHasResolved(true), test)
  })

  it('should set the value of the hasResolved property', function () {
    const resolver = () => {}
    const test = new Factory(resolver)

    test.setHasResolved(true)

    this.assert.isTrue(test.hasResolved())

    test.setHasResolved(false)

    this.assert.isFalse(test.hasResolved())
  })
})
