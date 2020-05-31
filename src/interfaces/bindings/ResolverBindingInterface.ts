import { BindingInterface } from './BindingInterface'

export interface ResolverBindingInterface extends BindingInterface {
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
