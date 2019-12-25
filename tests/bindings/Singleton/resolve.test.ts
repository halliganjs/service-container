import { Container } from '../../../src/Container'
import { Singleton } from '../../../src/bindings/Singleton'

describe('bindings: Singleton: resolve()', function () {
  it('should return the binding\'s value', function () {
    const container = new Container()

    const value = {}
    const resolver = this.sinon.stub().returns(value)
    const test = new Singleton(resolver)

    this.assert.equal(test.resolve(container), value)
    this.assert.calledOnce(resolver)
  })

  it('should run the resolver once', function () {
    const container = new Container()

    const value = {}
    const resolver = this.sinon.stub().returns(value)
    const test = new Singleton(resolver)

    const firstValue = test.resolve(container)
    const secondValue = test.resolve(container)

    this.assert.equal(firstValue, value)
    this.assert.equal(secondValue, value)
    this.assert.calledOnce(resolver)
  })
})
