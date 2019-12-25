import { Container } from '../../../src/Container'
import { Factory } from '../../../src/bindings/Factory'

describe('bindings: Factory: resolve()', function () {
  it('should return the binding\'s value', function () {
    const container = new Container()

    const value = {}
    const resolver = this.sinon.stub().returns(value)
    const test = new Factory(resolver)

    this.assert.equal(test.resolve(container), value)
    this.assert.calledOnce(resolver)
  })

  it('should run the resolver every resolution', function () {
    const container = new Container()

    const value = {}
    const resolver = this.sinon.stub().returns(value)
    const test = new Factory(resolver)

    const firstValue = test.resolve(container)
    const secondValue = test.resolve(container)

    this.assert.equal(firstValue, value)
    this.assert.equal(secondValue, value)
    this.assert.calledTwice(resolver)
  })

  it('should return a new value for every resolution', function () {
    const container = new Container()

    const resolver = () => { return {} }
    const test = new Factory(resolver)

    const firstValue = test.resolve(container)
    const secondValue = test.resolve(container)

    this.assert.notEqual(firstValue, secondValue)
  })
})
