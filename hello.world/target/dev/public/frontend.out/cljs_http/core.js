// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5720__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__5720__auto__)){
var req = temp__5720__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)),cljs.core.vals.call(null,headers));
return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (formatted_h){
return (function (p__58696){
var vec__58697 = p__58696;
var k = cljs.core.nth.call(null,vec__58697,(0),null);
var v = cljs.core.nth.call(null,vec__58697,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__58700 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__58700)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__58700)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__58700)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__58700)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__58700)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__58700)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58700)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__58701){
var map__58702 = p__58701;
var map__58702__$1 = ((((!((map__58702 == null)))?(((((map__58702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58702):map__58702);
var request = map__58702__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__58702__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__58702__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__58702__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__3922__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__58704 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__58704,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__58704,response_type);

G__58704.setTimeoutInterval(timeout);

G__58704.setWithCredentials(send_credentials);

return G__58704;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__58705){
var map__58706 = p__58705;
var map__58706__$1 = ((((!((map__58706 == null)))?(((((map__58706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58706):map__58706);
var request = map__58706__$1;
var request_method = cljs.core.get.call(null,map__58706__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__58706__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__58706__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__58706__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__58706__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.call(null,map__58706__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__3922__auto__ = request_method;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__58706,map__58706__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if(cljs.core.not.call(null,cljs_http.core.aborted_QMARK_.call(null,xhr))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,request_url,method,headers__$1,xhr,map__58706,map__58706__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_58730 = ((function (channel,request_url,method,headers__$1,xhr,map__58706,map__58706__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.call(null,progress,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)));
});})(channel,request_url,method,headers__$1,xhr,map__58706,map__58706__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__58708_58731 = xhr;
G__58708_58731.setProgressEventsEnabled(true);

G__58708_58731.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.call(null,listener_58730,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__58708_58731.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.call(null,listener_58730,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__54834__auto___58732 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54834__auto___58732,channel,request_url,method,headers__$1,xhr,map__58706,map__58706__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__54835__auto__ = (function (){var switch__54677__auto__ = ((function (c__54834__auto___58732,channel,request_url,method,headers__$1,xhr,map__58706,map__58706__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_58719){
var state_val_58720 = (state_58719[(1)]);
if((state_val_58720 === (1))){
var state_58719__$1 = state_58719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58719__$1,(2),cancel);
} else {
if((state_val_58720 === (2))){
var inst_58710 = (state_58719[(2)]);
var inst_58711 = xhr.isComplete();
var inst_58712 = cljs.core.not.call(null,inst_58711);
var state_58719__$1 = (function (){var statearr_58721 = state_58719;
(statearr_58721[(7)] = inst_58710);

return statearr_58721;
})();
if(inst_58712){
var statearr_58722_58733 = state_58719__$1;
(statearr_58722_58733[(1)] = (3));

} else {
var statearr_58723_58734 = state_58719__$1;
(statearr_58723_58734[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (3))){
var inst_58714 = xhr.abort();
var state_58719__$1 = state_58719;
var statearr_58724_58735 = state_58719__$1;
(statearr_58724_58735[(2)] = inst_58714);

(statearr_58724_58735[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (4))){
var state_58719__$1 = state_58719;
var statearr_58725_58736 = state_58719__$1;
(statearr_58725_58736[(2)] = null);

(statearr_58725_58736[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58720 === (5))){
var inst_58717 = (state_58719[(2)]);
var state_58719__$1 = state_58719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58719__$1,inst_58717);
} else {
return null;
}
}
}
}
}
});})(c__54834__auto___58732,channel,request_url,method,headers__$1,xhr,map__58706,map__58706__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__54677__auto__,c__54834__auto___58732,channel,request_url,method,headers__$1,xhr,map__58706,map__58706__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__54678__auto__ = null;
var cljs_http$core$xhr_$_state_machine__54678__auto____0 = (function (){
var statearr_58726 = [null,null,null,null,null,null,null,null];
(statearr_58726[(0)] = cljs_http$core$xhr_$_state_machine__54678__auto__);

(statearr_58726[(1)] = (1));

return statearr_58726;
});
var cljs_http$core$xhr_$_state_machine__54678__auto____1 = (function (state_58719){
while(true){
var ret_value__54679__auto__ = (function (){try{while(true){
var result__54680__auto__ = switch__54677__auto__.call(null,state_58719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54680__auto__;
}
break;
}
}catch (e58727){if((e58727 instanceof Object)){
var ex__54681__auto__ = e58727;
var statearr_58728_58737 = state_58719;
(statearr_58728_58737[(5)] = ex__54681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58738 = state_58719;
state_58719 = G__58738;
continue;
} else {
return ret_value__54679__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__54678__auto__ = function(state_58719){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__54678__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__54678__auto____1.call(this,state_58719);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$xhr_$_state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__54678__auto____0;
cljs_http$core$xhr_$_state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__54678__auto____1;
return cljs_http$core$xhr_$_state_machine__54678__auto__;
})()
;})(switch__54677__auto__,c__54834__auto___58732,channel,request_url,method,headers__$1,xhr,map__58706,map__58706__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__54836__auto__ = (function (){var statearr_58729 = f__54835__auto__.call(null);
(statearr_58729[(6)] = c__54834__auto___58732);

return statearr_58729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54836__auto__);
});})(c__54834__auto___58732,channel,request_url,method,headers__$1,xhr,map__58706,map__58706__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__58739){
var map__58740 = p__58739;
var map__58740__$1 = ((((!((map__58740 == null)))?(((((map__58740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58740):map__58740);
var request = map__58740__$1;
var timeout = cljs.core.get.call(null,map__58740__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__58740__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__58740__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__58740__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_58753 = jsonp.send(null,((function (channel,jsonp,map__58740,map__58740__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp,map__58740,map__58740__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__58740,map__58740__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp,map__58740,map__58740__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_58753], null));

if(cljs.core.truth_(cancel)){
var c__54834__auto___58754 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54834__auto___58754,req_58753,channel,jsonp,map__58740,map__58740__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__54835__auto__ = (function (){var switch__54677__auto__ = ((function (c__54834__auto___58754,req_58753,channel,jsonp,map__58740,map__58740__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_58746){
var state_val_58747 = (state_58746[(1)]);
if((state_val_58747 === (1))){
var state_58746__$1 = state_58746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58746__$1,(2),cancel);
} else {
if((state_val_58747 === (2))){
var inst_58743 = (state_58746[(2)]);
var inst_58744 = jsonp.cancel(req_58753);
var state_58746__$1 = (function (){var statearr_58748 = state_58746;
(statearr_58748[(7)] = inst_58743);

return statearr_58748;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58746__$1,inst_58744);
} else {
return null;
}
}
});})(c__54834__auto___58754,req_58753,channel,jsonp,map__58740,map__58740__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__54677__auto__,c__54834__auto___58754,req_58753,channel,jsonp,map__58740,map__58740__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__54678__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__54678__auto____0 = (function (){
var statearr_58749 = [null,null,null,null,null,null,null,null];
(statearr_58749[(0)] = cljs_http$core$jsonp_$_state_machine__54678__auto__);

(statearr_58749[(1)] = (1));

return statearr_58749;
});
var cljs_http$core$jsonp_$_state_machine__54678__auto____1 = (function (state_58746){
while(true){
var ret_value__54679__auto__ = (function (){try{while(true){
var result__54680__auto__ = switch__54677__auto__.call(null,state_58746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54680__auto__;
}
break;
}
}catch (e58750){if((e58750 instanceof Object)){
var ex__54681__auto__ = e58750;
var statearr_58751_58755 = state_58746;
(statearr_58751_58755[(5)] = ex__54681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58756 = state_58746;
state_58746 = G__58756;
continue;
} else {
return ret_value__54679__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__54678__auto__ = function(state_58746){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__54678__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__54678__auto____1.call(this,state_58746);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$jsonp_$_state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__54678__auto____0;
cljs_http$core$jsonp_$_state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__54678__auto____1;
return cljs_http$core$jsonp_$_state_machine__54678__auto__;
})()
;})(switch__54677__auto__,c__54834__auto___58754,req_58753,channel,jsonp,map__58740,map__58740__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__54836__auto__ = (function (){var statearr_58752 = f__54835__auto__.call(null);
(statearr_58752[(6)] = c__54834__auto___58754);

return statearr_58752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54836__auto__);
});})(c__54834__auto___58754,req_58753,channel,jsonp,map__58740,map__58740__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__58757){
var map__58758 = p__58757;
var map__58758__$1 = ((((!((map__58758 == null)))?(((((map__58758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58758):map__58758);
var request = map__58758__$1;
var request_method = cljs.core.get.call(null,map__58758__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request);
} else {
return cljs_http.core.xhr.call(null,request);
}
});

//# sourceMappingURL=core.js.map
