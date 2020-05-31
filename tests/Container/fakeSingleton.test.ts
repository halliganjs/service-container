import { Container } from '../../src/Container'
import { Singleton } from '../../src/bindings/Singleton'

describe('Container: fakeSingleton()', function () {
  it('should add the fake binding to the collection of fake bindings', function () {
    const value = () => {}
    const container = new Container()

    this.assert.notProperty(container.fakes, 'testing')

    container.fakeSingleton('testing', value)

    this.assert.hasAnyKeys(container.fakes, ['testing'])
    this.assert.instanceOf(container.fakes.get('testing'), Singleton)
  })

  it('should replace the fake binding in the collection of fake bindings', function () {
    const firstValue = () => {}
    const secondValue = () => {}

    const container = new Container()

    container.fakeSingleton('testing', firstValue)

    const firstFake = container.fakes.get('testing')

    container.fakeSingleton('testing', secondValue)

    this.assert.hasAnyKeys(container.fakes, ['testing'])
    this.assert.instanceOf(container.fakes.get('testing'), Singleton)
    this.assert.notEqual(container.fakes.get('testing'), firstFake)
  })
})
