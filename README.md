# Halligan JS: Service Container

[![Build Status](https://travis-ci.com/halliganjs/service-container.svg?branch=master)](https://travis-ci.com/halliganjs/service-container)
[![Coverage Status](https://coveralls.io/repos/github/halliganjs/service-container/badge.svg?branch=master)](https://coveralls.io/github/halliganjs/service-container?branch=master)

The Service Container provides a very simple centralized container that stores and resolves libraries, objects, and values to better organize code, manage dependencies, and enhance testability.

Benefits:

- Encourages up-front, centralized dependency configuration
- Configuration allows for resolving values, one-time-run factories, and multi-run factories
- Defers dependency resolution to mitigate circular references
- Allows for easy mocking during unit testing

---

Inspired by the [Laravel Service Container](https://github.com/illuminate/container).
