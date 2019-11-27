import { ContainerInterface } from './Container'
import { ResolverInterface } from './Resolver'

export interface BindingInterface {
  /**
   * Retrieve the value of the resolver property.
   *
   * @return {ResolverInterface}
   */
  getResolver (): ResolverInterface|null

  /**
   * Retrieve the value of the value property.
   *
   * @return {any}
   */
  getValue (): any

  /**
   * Determine if the binding has been resolved at least once.
   *
   * @return {boolean}
   */
  hasResolved (): boolean

  /**
   * Determine if the binding has a resolver.
   *
   * @return {boolean}
   */
  hasResolver (): boolean

  /**
   * Determine if the binding is a factory that should run its resolver every
   * time the binding is resolved.
   *
   * @return {boolean}
   */
  isFactory (): boolean

  /**
   * Resolve and return the value of the binding.
   *
   * @param  {ContainerInterface} container
   * @return {any}
   */
  resolve (container: ContainerInterface): any
}
