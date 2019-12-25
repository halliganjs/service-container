import { Binding } from './Binding'
import { Resolver } from '../types/Resolver'
import { ResolverBindingInterface } from '../interfaces/bindings/ResolverBindingInterface'

export abstract class ResolverBinding extends Binding implements ResolverBindingInterface {
  /**
   * @var {boolean} _hasResolved
   */
  protected _hasResolved: boolean = false

  /**
   * @var {Resolver|null} _resolver
   */
  protected _resolver: Resolver

  /**
   * Create a new instance of ResolverBinding.
   *
   * @param {Resolver} resolver
   */
  public constructor (resolver: Resolver) {
    super()

    this._resolver = resolver
  }

  /**
   * Retrieve the value of the resolver property.
   *
   * @return {Resolver}
   */
  public getResolver (): Resolver {
    return this._resolver
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
   * Set the value of the hasResolved property.
   *
   * @param  {boolean} hasResolved
   * @return {this}
   */
  public setHasResolved (hasResolved: boolean): this {
    this._hasResolved = hasResolved
    return this
  }
}
