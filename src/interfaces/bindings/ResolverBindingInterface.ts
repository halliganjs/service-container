import { BindingInterface } from './BindingInterface'
import { Resolver } from '../../types/Resolver'

export interface ResolverBindingInterface extends BindingInterface {
  /**
   * Retrieve the value of the resolver property.
   *
   * @return {Resolver}
   */
  getResolver (): Resolver

  /**
   * Determine if the binding has been resolved at least once.
   *
   * @return {boolean}
   */
  hasResolved (): boolean

  /**
   * Set the value of the hasResolved property.
   *
   * @param  {boolean} hasResolved
   * @return {this}
   */
  setHasResolved (hasResolved: boolean): this
}
