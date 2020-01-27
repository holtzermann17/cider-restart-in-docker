// Compiled by ClojureScript 1.10.238 {}
goog.provide('hello.world.frontend.main');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
console.log("Hello, world, -- from main.cljs.");
hello.world.frontend.main.update_greeting = (function hello$world$frontend$main$update_greeting(){
var c__54834__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54834__auto__){
return (function (){
var f__54835__auto__ = (function (){var switch__54677__auto__ = ((function (c__54834__auto__){
return (function (state_64635){
var state_val_64636 = (state_64635[(1)]);
if((state_val_64636 === (1))){
var inst_64617 = [new cljs.core.Keyword(null,"query-params","query-params",900640534)];
var inst_64618 = ["p"];
var inst_64619 = ["Alice"];
var inst_64620 = cljs.core.PersistentHashMap.fromArrays(inst_64618,inst_64619);
var inst_64621 = [inst_64620];
var inst_64622 = cljs.core.PersistentHashMap.fromArrays(inst_64617,inst_64621);
var inst_64623 = cljs_http.client.get.call(null,"http://localhost:6800/hello-parameters",inst_64622);
var state_64635__$1 = state_64635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64635__$1,(2),inst_64623);
} else {
if((state_val_64636 === (2))){
var inst_64625 = (state_64635[(2)]);
var inst_64626 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_64625);
var inst_64627 = document.getElementById("req");
var inst_64628 = inst_64627.innerHTML = inst_64626;
var inst_64629 = document.getElementById("req2");
var inst_64630 = clojure.string.split.call(null,inst_64626," ");
var inst_64631 = cljs.core.second.call(null,inst_64630);
var inst_64632 = cljs.core.re_find.call(null,/[A-Za-z]*/,inst_64631);
var inst_64633 = inst_64629.innerHTML = inst_64632;
var state_64635__$1 = (function (){var statearr_64637 = state_64635;
(statearr_64637[(7)] = inst_64628);

return statearr_64637;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64635__$1,inst_64633);
} else {
return null;
}
}
});})(c__54834__auto__))
;
return ((function (switch__54677__auto__,c__54834__auto__){
return (function() {
var hello$world$frontend$main$update_greeting_$_state_machine__54678__auto__ = null;
var hello$world$frontend$main$update_greeting_$_state_machine__54678__auto____0 = (function (){
var statearr_64638 = [null,null,null,null,null,null,null,null];
(statearr_64638[(0)] = hello$world$frontend$main$update_greeting_$_state_machine__54678__auto__);

(statearr_64638[(1)] = (1));

return statearr_64638;
});
var hello$world$frontend$main$update_greeting_$_state_machine__54678__auto____1 = (function (state_64635){
while(true){
var ret_value__54679__auto__ = (function (){try{while(true){
var result__54680__auto__ = switch__54677__auto__.call(null,state_64635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54680__auto__;
}
break;
}
}catch (e64639){if((e64639 instanceof Object)){
var ex__54681__auto__ = e64639;
var statearr_64640_64642 = state_64635;
(statearr_64640_64642[(5)] = ex__54681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64643 = state_64635;
state_64635 = G__64643;
continue;
} else {
return ret_value__54679__auto__;
}
break;
}
});
hello$world$frontend$main$update_greeting_$_state_machine__54678__auto__ = function(state_64635){
switch(arguments.length){
case 0:
return hello$world$frontend$main$update_greeting_$_state_machine__54678__auto____0.call(this);
case 1:
return hello$world$frontend$main$update_greeting_$_state_machine__54678__auto____1.call(this,state_64635);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
hello$world$frontend$main$update_greeting_$_state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$0 = hello$world$frontend$main$update_greeting_$_state_machine__54678__auto____0;
hello$world$frontend$main$update_greeting_$_state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$1 = hello$world$frontend$main$update_greeting_$_state_machine__54678__auto____1;
return hello$world$frontend$main$update_greeting_$_state_machine__54678__auto__;
})()
;})(switch__54677__auto__,c__54834__auto__))
})();
var state__54836__auto__ = (function (){var statearr_64641 = f__54835__auto__.call(null);
(statearr_64641[(6)] = c__54834__auto__);

return statearr_64641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54836__auto__);
});})(c__54834__auto__))
);

return c__54834__auto__;
});
if(typeof hello.world.frontend.main.init !== 'undefined'){
} else {
hello.world.frontend.main.init = (function (){
document.getElementById("app").innerHTML = "<p>Loaded 'Hello World'!</p>\n            <p>Edit the file <strong><code>src/hello/world/frontend/main.cljs</code></strong> to change this message.</p>";

hello.world.frontend.main.update_greeting.call(null);

return true;
})()
;
}
hello.world.frontend.main.reload = (function hello$world$frontend$main$reload(){
return document.getElementById("app").innerText = "Hot Reloaded world! Time to reload the page.";
});

//# sourceMappingURL=main.js.map
