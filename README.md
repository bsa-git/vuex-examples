# Vuex2-Examples

These examples make it possible get acquainted with Vuex.
Vuex is a `state management pattern + library` for [Vue.js](http://vuejs.org/) applications. 
It serves as a centralized store for all the components in an application, 
with rules ensuring that the state can only be mutated in a predictable fashion. 
It also integrates with Vue's official [devtools extension](https://github.com/vuejs/vue-devtools) to provide advanced 
features such as zero-config time-travel debugging and state snapshot export / import.

This package can Build reactive Web user interfaces.

It can process HTML templates to generate Web application views that be composed by different parts.

## Installing

### Prerequisites

- [Apache2](https://httpd.apache.org/download.cgi), [Nginx](http://nginx.org/en/) web server or similar

### Deploying

1. Clone or download [vuex2-examples](https://github.com/bsa-git/vuex2-examples/) project with git.
2. Configure the web server so that the entry point was `index.html`.
3. Access your project url with web browser (eg. http://localhost/vuex2-examples/index.html).

## Overview Vuex

### What is a "State Management Pattern"? 

![vuex](img/vuex.png)

### Compatibility Note

Vue.js does not support IE8 and below, because Vue.js uses ECMAScript 5 features 
that are un-shimmable in IE8. However Vue.js supports all [ECMAScript 5 compliant browsers](http://caniuse.com/#feat=es5).

### Release Notes

Detailed release notes for each version are available on [GitHub](https://github.com/vuejs/vue/releases).

### CDN
Available on [jsdelivr](http://cdn.jsdelivr.net/vue/1.0.26/vue.min.js) or 
[cdnjs](http://cdnjs.cloudflare.com/ajax/libs/vue/1.0.26/vue.min.js) 
(takes some time to sync so the latest version might not be available yet).

Also available on [unpkg](https://unpkg.com/vue/dist/vue.min.js), 
which will reflect the latest version as soon as it is published to npm. 
You can also browse the source of the npm package at [unpkg.com/vue/](https://unpkg.com/vue/).
