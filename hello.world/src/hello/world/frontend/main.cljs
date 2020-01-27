(ns ^:figwheel-hooks hello.world.frontend.main
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<! take!]]))

(js/console.log "Hello, world, -- from main.cljs.")

;; We can change the string here to see an instant change on the page.

(defn update-greeting []
  (go (let [response (<! (http/get "http://localhost:6800/hello-parameters"
                                   ;; parameters
                                   {:query-params {"p" "Alice"}}))]
        (let [nom (:body response)]
          (set! (.-innerHTML (js/document.getElementById "req")) nom)
          (set! (.-innerHTML (js/document.getElementById "req2")) (re-find #"[A-Za-z]*" 
                                                                           (second
                                                                            (clojure.string/split
                                                                             nom " "))))))))

;; This is called each time the page loads:
(defonce init
  (do (set! (.-innerHTML (js/document.getElementById "app"))
            "<p>Loaded 'Hello World'!</p>
            <p>Edit the file <strong><code>src/hello/world/frontend/main.cljs</code></strong> to change this message.</p>")
      (update-greeting)
      true))

;; This is called every time you make a code change, so that you see the code state in the buffer.
(defn ^:after-load reload []
  (set! (.-innerText (js/document.getElementById "app")) "Hot Reloaded world! Time to reload the page."))

