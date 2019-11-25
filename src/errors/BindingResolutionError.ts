export class BindingResolutionError extends Error {
  constructor (key: string) {
    super(`Failed to resolve a binding with the key '${key}' from the service container.`)
  }
}
