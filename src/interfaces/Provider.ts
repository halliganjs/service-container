import { ContainerInterface } from './Container'

export interface ProviderInterface {
  (container: ContainerInterface): void
}
