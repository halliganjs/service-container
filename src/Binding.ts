import { BindingInterface } from './interfaces/Binding'
import { ContainerInterface } from './interfaces/Container'
import { ResolverInterface } from './interfaces/Resolver'

export class Binding implements BindingInterface {
  /**
   * @var {boolean} _hasResolved
   */
  protected _hasResolved: boolean = false

  /**
   * @var {boolean} _isFactory
   */
  protected _isFactory: boolean = false

  /**
   * @var {ResolverInterface|null} _resolver
   */
  protected _resolver: ResolverInterface|null = null

  /**
   * @var {any} _value
   */
  protected _value: any = null

  /**
   * Create a new instance of Binding.
   *
   * @param {any                    = null}  value
   * @param {ResolverInterface|null = null}  resolver
   * @param {boolean                = false} isFactory
   */
  public constructor (
    value: any = null,
    resolver: ResolverInterface|null = null,
    isFactory: boolean = false
  ) {
    this._value = value
    this._resolver = resolver
    this._isFactory = isFactory
  }

  /**
   * Retrieve the value of the resolver property.
   *
   * @return {ResolverInterface}
   */
  public getResolver (): ResolverInterface|null {
    return this._resolver
  }

  /**
   * Retrieve the value of the value property.
   *
   * @return {any}
   */
  public getValue (): any {
    return this._value
  }

  /**
   * Determine if the binding has been resolved at least once.
   *
   * @return {boolean}
   */
  public hasResolved (): boolean {
    return this._hasResolved
  }

  /**
   * Determine if the binding has a resolver.
   *
   * @return {boolean}
   */
  public hasResolver (): boolean {
    return this._resolver !== null
  }

  /**
   * Determine if the binding is a factory that should run its resolver every
   * time the binding is resolved.
   *
   * @return {boolean}
   */
  public isFactory (): boolean {
    return this._isFactory
  }

  /**
   * Resolve and return the value of the binding.
   *
   * @param  {ContainerInterface} container
   * @return {any}
   */
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

    return this.getValue()
  }

  /**
   * Set the value of the hasResolved property.
   *
   * @param  {boolean} hasResolved
   * @return {this}
   */
  protected setHasResolved (hasResolved: boolean): this {
    this._hasResolved = hasResolved
    return this
  }

  /**
   * Set the value of the value property.
   *
   * @param  {any}  value
   * @return {this}
   */
  protected setValue (value: any): this {
    this._value = value
    return this
  }
}
