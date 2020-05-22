import { Container } from '../../src/Container'
import { Singleton } from '../../src/bindings/Singleton'

describe('Container: fakeSingleton()', function () {
  it('should add the fake binding to the collection of fake bindings', function () {
    const value = () => {}
    const container = new Container()

    this.assert.notProperty(container.getFakes(), 'testing')

    container.fakeSingleton('testing', value)

    this.assert.hasAnyKeys(container.getFakes(), ['testing'])
    this.assert.instanceOf(container.getFakes().get('testing'), Singleton)
  })

  it('should replace the fake binding in the collection of fake bindings', function () {
    const firstValue = () => {}
    const secondValue = () => {}

    const container = new Container()

    container.fakeSingleton('testing', firstValue)

    const firstFake = container.getFakes().get('testing')

    container.fakeSingleton('testing', secondValue)

    this.assert.hasAnyKeys(container.getFakes(), ['testing'])
    this.assert.instanceOf(container.getFakes().get('testing'), Singleton)
    this.assert.notEqual(container.getFakes().get('testing'), firstFake)
  })
})
