import { BindingInterface } from './interfaces/Binding'
import { ContainerInterface } from './interfaces/Container'
import { ResolverInterface } from './interfaces/Resolver'

export class Binding implements BindingInterface {
  protected _hasResolved: boolean = false
  protected _isFactory: boolean = false
  protected _resolver: ResolverInterface|null = null
  protected _value: any = null

  public constructor (
    value: any = null,
    resolver: ResolverInterface|null = null,
    isFactory: boolean = false
  ) {
    this._value = value
    this._resolver = resolver
    this._isFactory = isFactory
  }

  public getResolver (): ResolverInterface|null {
    return this._resolver
  }

  public getValue (): any {
    return this._value
  }

  public hasResolved (): boolean {
    return this._hasResolved
  }

  public isFactory (): boolean {
    return this._isFactory
  }

  public resolve (container: ContainerInterface): any {
    if (this._resolver !== null) {
      if (this.isFactory()) {
        return this._resolver(container)
      }

      if (this.hasResolved() === false) {
        this.setValue(this._resolver(container))
          .setHasResolved(true)
      }
    }

    return this._value
  }

  protected setHasResolved (hasResolved: boolean): this {
    this._hasResolved = hasResolved
    return this
  }

  protected setValue (value: any): this {
    this._value = value
    return this
  }
}
