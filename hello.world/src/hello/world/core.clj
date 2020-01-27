(ns hello.world.core
  (:require
    [yada.yada :as yada]
    [integrant.core :as ig]))

;;; COMMENTS:

;; There's no global state here, just defn and defmethod implementations.

;;; STRING

;; Example: curl -i http://localhost:6800/hello

(defn string-resource
  [x]
  (yada/as-resource x))

(defmethod ig/init-key ::string
  [_ x]
  (string-resource x))

;;; LANGUAGE

;; Example: curl -i http://localhost:6800/hello-language -H "Accept-Language: zh-CH"

(defmethod ig/init-key ::hello-language 
  [_ _] 
  (yada/resource 
   {:methods
    {:get 
     {:produces {:media-type "text/plain" :language #{"en" "zh-ch;q=0.9"}} 
      :response #(case (yada/language %) 
                   "zh-ch" "你好世界\n"
                   "en" "Hello World!\n")}}}))

;;; PARAMETERS

;; Example: curl -i http://localhost:6800/hello-parameters?p=Alice

(defmethod ig/init-key ::hello-parameters
  [_ _] 
  (yada/resource
   {:methods
    {:get
     {:produces "text/plain"
      :parameters {:query {:p String
                           :t String}}
      :response (fn [ctx] (str "Hello "
                               (if (get-in ctx [:parameters :query :t])
                                 (str " " (get-in ctx [:parameters :query :t]) " ")
                                 "")
                               (get-in ctx [:parameters :query :p])  "!\n"))}}}))


