import { ContainerInterface } from '../interfaces/ContainerInterface'

/**
 * A function that resolves a binding's value.
 *
 * @name Resolver
 * @type {(container: ContainerInterface) => any}
 */
export type Resolver = (container: ContainerInterface) => any
