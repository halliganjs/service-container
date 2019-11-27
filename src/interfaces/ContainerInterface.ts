import { BindingInterface } from './BindingInterface'
import { Provider } from '../types/Provider'
import { Resolver } from '../types/Resolver'

export interface ContainerInterface {
  /**
   * Bind a single instance or value into the container under the provided key.
   *
   * @param  {string} key
   * @param  {any}    value
   * @return {this}
   */
  instance (key: string, value: any): this

  /**
   * Bind a resolver function into the container under the provided key. The
   * resolver will be run once and the resulting value will be returned for all
   * subsequent resolutions.
   *
   * @param  {string}   key
   * @param  {Resolver} resolver
   * @return {this}
   */
  singleton (key: string, resolver: Resolver): this

  /**
   * Bind a resolver function into the container under the provided key. The
   * resolver will be run each time the key is resolved resulting in new
   * instances each resolution.
   *
   * @param  {string}   key
   * @param  {Resolver} resolver
   * @return {this}
   */
  binding (key: string, resolver: Resolver): this

  /**
   * Resolve a value from the container by its key.
   *
   * @param  {string} key
   * @return {any}
   */
  make (key: string): any

  /**
   * Add a service provider into the container to register one or many bindings
   * as a unit. Provider functions are stored for soft resets.
   *
   * @param  {Provider} provider
   * @return {this}
   */
  provider (provider: Provider): this

  /**
   * Reset the container so that existing bindings are removed and stored
   * providers are re-run. If a hard request is run, the both the bindings and
   * providers will be emptied.
   *
   * @param  {boolean} hard
   * @return {this}
   */
  reset (hard: boolean): this

  /**
   * Retrieve the value of the bindings property.
   *
   * @return {{ [key: string]: BindingInterface }}
   */
  getBindings (): { [key: string]: BindingInterface }
}
