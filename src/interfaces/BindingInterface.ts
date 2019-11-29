import { ContainerInterface } from './ContainerInterface'
import { Resolver } from '../types/Resolver'

export interface BindingInterface {
  /**
   * Retrieve the value of the resolver property.
   *
   * @return {Resolver}
   */
  getResolver (): Resolver|null

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
   * Determine if the binding is an instance that should resolve to the
   * binding's value every time the binding is resolved.
   *
   * @return {boolean}
   */
  isInstance (): boolean

  /**
   * Determine if the binding is a singleton factory that should run its
   * resolver exactly once and then return the same resulting instance value
   * every time the binding is resolved.
   *
   * @return {boolean}
   */
  isSingleton (): boolean

  /**
   * Resolve and return the value of the binding.
   *
   * @param  {ContainerInterface} container
   * @return {any}
   */
  resolve (container: ContainerInterface): any
}
