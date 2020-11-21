# chama [![CircleCI](https://circleci.com/gh/marciovrl/chama.svg?style=svg)](https://circleci.com/gh/marciovrl/chama)

Chama - QA assignment

- [About project](#about-project)
  - [Design Patters](#design-patters)
  - [Structure](#structure)
- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Clone and installing dependencies](#clone-and-installing-dependencies)
  - [Tips](#tips)
- [Notes](#notes)

---

## About project

The test run in Cypress and report HTML in mochawesome. The CI is configured on CircleCI and there are two parallel one job run on Chrome and other job run on Firefox.

### Design patters

- [App Actions](https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/)

### Structure

```
chama/
 ├─ cypress/
 |   ├─ fixtures/
 |   |─ integration/
 |   |─ plugins/
 |   └─ support/
 ├─ cypress.json
 └─ package.json
```

- cypress: test code and configuration.
  - fixtures: data json.
  - integration: tests steps.
  - plugins: plugins
  - support: utils
- cypress.json: cypress configuration file.
- package.json: dependencies file.

## Getting started

### Prerequisites

- [Node](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [Chrome](https://www.google.com/intl/pt-BR/chrome/) || [Firefox](https://www.mozilla.org/pt-BR/firefox/)

### Clone and installing dependencies

- Clone the repo: `https://github.com/marciovrl/chama.git`

- Install the dependencies: `npm install`

### Tips

- Cypress does not need drivers.

## Commands

- Execute all tests on Google Chrome headless: `npm run test:chrome`
- Execute all tests on Firefox headless: `npm run test:firefox`
- Open Cypress console: `npm run cypress`

## Notes
