# cider-restart-in-docker

## Status:

- The enclosed directory hello.world can be run inside of
  [Edge](https://juxt.pro/edge//docs/setup.html), see directions there.
- Docker integration needs to be added.
- The system is otherwise feature complete with regard to the objectives below.
- Documentation below is notional.

## Objectives

Spin up a minimal demonstration of a CIDER refreshable application.

To make a reasonable comparison with Figwheel, this will be a web app.
Let's make a website where we click a button to say "Hello `______`".

We can then:

- _Change who is being greeted in the frontend._
- _Change what the greeting says in the backend._
- _Witness the reloading._

Let's also make this inside a docker container to approximate a
standard industry workflow.

## Dependencies

- CIDER
- lein
- docker

## Installation

- `docker-compose up`

Browse to localhost:8070

## Usage

- Make code change in a clj or edn file and press <kbd>M-x</kbd> `cider-ns-reload` <kbd>RET</kbd>.
- Make code change in a cljs file and reload the page?

## Guided tour

### Emacs Interface

`.dir-locals.el` is a configuration for Emacs contains instructions
for stopping and starting the system using
[integrant.repl](https://github.com/weavejester/integrant-repl).

> Note, you will have to interactively accept the use of local
> variables inside Emacs.

``` lisp
((nil . ((cider-ns-refresh-before-fn "integrant.repl/suspend")
         (cider-ns-refresh-after-fn "integrant.repl/resume")))))
```

> Alternatively we could have defined these variables system-wide
> inside of `.emacs`.

### System Definition

We will define the system itself using
[Integrant](https://github.com/weavejester/integrant), but similar
functionality exists for Component.

- `system_config.edn` contains the outline of the system
- `core.clj` loads the system

### REPL configuration

`user.clj` configures the REPL

### Constraining Search

Inside `user.clj`, we set `clojure.tools.namespace/set-refresh-dirs`
to constrain which directories are scanned at the refresh stage.

## Documentation and gotchas

This looks good:

- https://docs.cider.mx/cider/usage/misc_features.html#_reloading_code

Here are some additional relevant bits of documentation about reloading

- http://clojure.github.io/tools.namespace/#clojure.tools.namespace.repl/refresh
- https://github.com/clojure/tools.namespace#reloading-code-preparing-your-application
- http://thinkrelevance.com/blog/2013/06/04/clojure-workflow-reloaded 
- https://lambdaisland.com/blog/2018-02-09-reloading-woes
- https://github.com/clojure-emacs/cider-nrepl/pull/503

Notable things:

- "Reloading code does not work in the presence of AOT-compiled namespaces."

- "Either keep your REPL in a namespace which has no file associated
  with it, such as `user`, or put all your REPL definitions in a file
  so that they can be reloaded."

# Other useful information

Saturday, 21:31: Leaving off with something sketched but not working 

- How to set up Jetty https://github.com/ring-clojure/ring/wiki/Getting-Started
- Integrant via Edge https://juxt.pro/edge/docs/setup.html (maybe this
  would have everything I need for a basic example)
