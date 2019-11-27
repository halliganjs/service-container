import { ContainerInterface } from '../interfaces/ContainerInterface'

/**
 * A function that injects one or more services into the service container.
 *
 * @name Provider
 * @type {(container: ContainerInterface) => void}
 */
export type Provider = (container: ContainerInterface) => void
