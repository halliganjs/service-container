import { Container } from '../../src/Container'
import { Factory } from '../../src/bindings/Factory'

describe('Container: fakeBinding()', function () {
  it('should add the fake binding to the collection of fake bindings', function () {
    const value = () => {}
    const container = new Container()

    this.assert.notProperty(container.getFakes(), 'testing')

    container.fakeBinding('testing', value)

    this.assert.hasAnyKeys(container.getFakes(), ['testing'])
    this.assert.instanceOf(container.getFakes().get('testing'), Factory)
  })

  it('should replace the fake binding in the collection of fake bindings', function () {
    const firstValue = () => {}
    const secondValue = () => {}

    const container = new Container()

    container.fakeBinding('testing', firstValue)

    const firstFake = container.getFakes().get('testing')

    container.fakeBinding('testing', secondValue)

    this.assert.hasAnyKeys(container.getFakes(), ['testing'])
    this.assert.instanceOf(container.getFakes().get('testing'), Factory)
    this.assert.notEqual(container.getFakes().get('testing'), firstFake)
  })
})
