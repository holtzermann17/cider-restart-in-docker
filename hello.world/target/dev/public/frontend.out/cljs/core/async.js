// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__56753 = arguments.length;
switch (G__56753) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async56754 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56754 = (function (f,blockable,meta56755){
this.f = f;
this.blockable = blockable;
this.meta56755 = meta56755;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async56754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56756,meta56755__$1){
var self__ = this;
var _56756__$1 = this;
return (new cljs.core.async.t_cljs$core$async56754(self__.f,self__.blockable,meta56755__$1));
});

cljs.core.async.t_cljs$core$async56754.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56756){
var self__ = this;
var _56756__$1 = this;
return self__.meta56755;
});

cljs.core.async.t_cljs$core$async56754.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56754.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async56754.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async56754.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async56754.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta56755","meta56755",1066241110,null)], null);
});

cljs.core.async.t_cljs$core$async56754.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56754.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56754";

cljs.core.async.t_cljs$core$async56754.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async56754");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56754.
 */
cljs.core.async.__GT_t_cljs$core$async56754 = (function cljs$core$async$__GT_t_cljs$core$async56754(f__$1,blockable__$1,meta56755){
return (new cljs.core.async.t_cljs$core$async56754(f__$1,blockable__$1,meta56755));
});

}

return (new cljs.core.async.t_cljs$core$async56754(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__56760 = arguments.length;
switch (G__56760) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__56763 = arguments.length;
switch (G__56763) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__56766 = arguments.length;
switch (G__56766) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_56768 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_56768);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_56768,ret){
return (function (){
return fn1.call(null,val_56768);
});})(val_56768,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__56770 = arguments.length;
switch (G__56770) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___56772 = n;
var x_56773 = (0);
while(true){
if((x_56773 < n__4376__auto___56772)){
(a[x_56773] = x_56773);

var G__56774 = (x_56773 + (1));
x_56773 = G__56774;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async56775 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56775 = (function (flag,meta56776){
this.flag = flag;
this.meta56776 = meta56776;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async56775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_56777,meta56776__$1){
var self__ = this;
var _56777__$1 = this;
return (new cljs.core.async.t_cljs$core$async56775(self__.flag,meta56776__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async56775.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_56777){
var self__ = this;
var _56777__$1 = this;
return self__.meta56776;
});})(flag))
;

cljs.core.async.t_cljs$core$async56775.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56775.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async56775.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async56775.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async56775.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta56776","meta56776",2006315348,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async56775.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56775.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56775";

cljs.core.async.t_cljs$core$async56775.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async56775");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56775.
 */
cljs.core.async.__GT_t_cljs$core$async56775 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async56775(flag__$1,meta56776){
return (new cljs.core.async.t_cljs$core$async56775(flag__$1,meta56776));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async56775(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async56778 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56778 = (function (flag,cb,meta56779){
this.flag = flag;
this.cb = cb;
this.meta56779 = meta56779;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async56778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56780,meta56779__$1){
var self__ = this;
var _56780__$1 = this;
return (new cljs.core.async.t_cljs$core$async56778(self__.flag,self__.cb,meta56779__$1));
});

cljs.core.async.t_cljs$core$async56778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56780){
var self__ = this;
var _56780__$1 = this;
return self__.meta56779;
});

cljs.core.async.t_cljs$core$async56778.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56778.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async56778.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async56778.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async56778.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta56779","meta56779",-699477147,null)], null);
});

cljs.core.async.t_cljs$core$async56778.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56778.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56778";

cljs.core.async.t_cljs$core$async56778.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async56778");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56778.
 */
cljs.core.async.__GT_t_cljs$core$async56778 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async56778(flag__$1,cb__$1,meta56779){
return (new cljs.core.async.t_cljs$core$async56778(flag__$1,cb__$1,meta56779));
});

}

return (new cljs.core.async.t_cljs$core$async56778(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__56781_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56781_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__56782_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56782_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__56783 = (i + (1));
i = G__56783;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___56789 = arguments.length;
var i__4500__auto___56790 = (0);
while(true){
if((i__4500__auto___56790 < len__4499__auto___56789)){
args__4502__auto__.push((arguments[i__4500__auto___56790]));

var G__56791 = (i__4500__auto___56790 + (1));
i__4500__auto___56790 = G__56791;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__56786){
var map__56787 = p__56786;
var map__56787__$1 = ((((!((map__56787 == null)))?(((((map__56787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56787):map__56787);
var opts = map__56787__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq56784){
var G__56785 = cljs.core.first.call(null,seq56784);
var seq56784__$1 = cljs.core.next.call(null,seq56784);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56785,seq56784__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__56793 = arguments.length;
switch (G__56793) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__54834__auto___56839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54834__auto___56839){
return (function (){
var f__54835__auto__ = (function (){var switch__54677__auto__ = ((function (c__54834__auto___56839){
return (function (state_56817){
var state_val_56818 = (state_56817[(1)]);
if((state_val_56818 === (7))){
var inst_56813 = (state_56817[(2)]);
var state_56817__$1 = state_56817;
var statearr_56819_56840 = state_56817__$1;
(statearr_56819_56840[(2)] = inst_56813);

(statearr_56819_56840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56818 === (1))){
var state_56817__$1 = state_56817;
var statearr_56820_56841 = state_56817__$1;
(statearr_56820_56841[(2)] = null);

(statearr_56820_56841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56818 === (4))){
var inst_56796 = (state_56817[(7)]);
var inst_56796__$1 = (state_56817[(2)]);
var inst_56797 = (inst_56796__$1 == null);
var state_56817__$1 = (function (){var statearr_56821 = state_56817;
(statearr_56821[(7)] = inst_56796__$1);

return statearr_56821;
})();
if(cljs.core.truth_(inst_56797)){
var statearr_56822_56842 = state_56817__$1;
(statearr_56822_56842[(1)] = (5));

} else {
var statearr_56823_56843 = state_56817__$1;
(statearr_56823_56843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56818 === (13))){
var state_56817__$1 = state_56817;
var statearr_56824_56844 = state_56817__$1;
(statearr_56824_56844[(2)] = null);

(statearr_56824_56844[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56818 === (6))){
var inst_56796 = (state_56817[(7)]);
var state_56817__$1 = state_56817;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56817__$1,(11),to,inst_56796);
} else {
if((state_val_56818 === (3))){
var inst_56815 = (state_56817[(2)]);
var state_56817__$1 = state_56817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56817__$1,inst_56815);
} else {
if((state_val_56818 === (12))){
var state_56817__$1 = state_56817;
var statearr_56825_56845 = state_56817__$1;
(statearr_56825_56845[(2)] = null);

(statearr_56825_56845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56818 === (2))){
var state_56817__$1 = state_56817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56817__$1,(4),from);
} else {
if((state_val_56818 === (11))){
var inst_56806 = (state_56817[(2)]);
var state_56817__$1 = state_56817;
if(cljs.core.truth_(inst_56806)){
var statearr_56826_56846 = state_56817__$1;
(statearr_56826_56846[(1)] = (12));

} else {
var statearr_56827_56847 = state_56817__$1;
(statearr_56827_56847[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56818 === (9))){
var state_56817__$1 = state_56817;
var statearr_56828_56848 = state_56817__$1;
(statearr_56828_56848[(2)] = null);

(statearr_56828_56848[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56818 === (5))){
var state_56817__$1 = state_56817;
if(cljs.core.truth_(close_QMARK_)){
var statearr_56829_56849 = state_56817__$1;
(statearr_56829_56849[(1)] = (8));

} else {
var statearr_56830_56850 = state_56817__$1;
(statearr_56830_56850[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56818 === (14))){
var inst_56811 = (state_56817[(2)]);
var state_56817__$1 = state_56817;
var statearr_56831_56851 = state_56817__$1;
(statearr_56831_56851[(2)] = inst_56811);

(statearr_56831_56851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56818 === (10))){
var inst_56803 = (state_56817[(2)]);
var state_56817__$1 = state_56817;
var statearr_56832_56852 = state_56817__$1;
(statearr_56832_56852[(2)] = inst_56803);

(statearr_56832_56852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56818 === (8))){
var inst_56800 = cljs.core.async.close_BANG_.call(null,to);
var state_56817__$1 = state_56817;
var statearr_56833_56853 = state_56817__$1;
(statearr_56833_56853[(2)] = inst_56800);

(statearr_56833_56853[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__54834__auto___56839))
;
return ((function (switch__54677__auto__,c__54834__auto___56839){
return (function() {
var cljs$core$async$state_machine__54678__auto__ = null;
var cljs$core$async$state_machine__54678__auto____0 = (function (){
var statearr_56834 = [null,null,null,null,null,null,null,null];
(statearr_56834[(0)] = cljs$core$async$state_machine__54678__auto__);

(statearr_56834[(1)] = (1));

return statearr_56834;
});
var cljs$core$async$state_machine__54678__auto____1 = (function (state_56817){
while(true){
var ret_value__54679__auto__ = (function (){try{while(true){
var result__54680__auto__ = switch__54677__auto__.call(null,state_56817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54680__auto__;
}
break;
}
}catch (e56835){if((e56835 instanceof Object)){
var ex__54681__auto__ = e56835;
var statearr_56836_56854 = state_56817;
(statearr_56836_56854[(5)] = ex__54681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56855 = state_56817;
state_56817 = G__56855;
continue;
} else {
return ret_value__54679__auto__;
}
break;
}
});
cljs$core$async$state_machine__54678__auto__ = function(state_56817){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54678__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54678__auto____1.call(this,state_56817);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54678__auto____0;
cljs$core$async$state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54678__auto____1;
return cljs$core$async$state_machine__54678__auto__;
})()
;})(switch__54677__auto__,c__54834__auto___56839))
})();
var state__54836__auto__ = (function (){var statearr_56837 = f__54835__auto__.call(null);
(statearr_56837[(6)] = c__54834__auto___56839);

return statearr_56837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54836__auto__);
});})(c__54834__auto___56839))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__56856){
var vec__56857 = p__56856;
var v = cljs.core.nth.call(null,vec__56857,(0),null);
var p = cljs.core.nth.call(null,vec__56857,(1),null);
var job = vec__56857;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__54834__auto___57028 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54834__auto___57028,res,vec__56857,v,p,job,jobs,results){
return (function (){
var f__54835__auto__ = (function (){var switch__54677__auto__ = ((function (c__54834__auto___57028,res,vec__56857,v,p,job,jobs,results){
return (function (state_56864){
var state_val_56865 = (state_56864[(1)]);
if((state_val_56865 === (1))){
var state_56864__$1 = state_56864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56864__$1,(2),res,v);
} else {
if((state_val_56865 === (2))){
var inst_56861 = (state_56864[(2)]);
var inst_56862 = cljs.core.async.close_BANG_.call(null,res);
var state_56864__$1 = (function (){var statearr_56866 = state_56864;
(statearr_56866[(7)] = inst_56861);

return statearr_56866;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56864__$1,inst_56862);
} else {
return null;
}
}
});})(c__54834__auto___57028,res,vec__56857,v,p,job,jobs,results))
;
return ((function (switch__54677__auto__,c__54834__auto___57028,res,vec__56857,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54678__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54678__auto____0 = (function (){
var statearr_56867 = [null,null,null,null,null,null,null,null];
(statearr_56867[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54678__auto__);

(statearr_56867[(1)] = (1));

return statearr_56867;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54678__auto____1 = (function (state_56864){
while(true){
var ret_value__54679__auto__ = (function (){try{while(true){
var result__54680__auto__ = switch__54677__auto__.call(null,state_56864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54680__auto__;
}
break;
}
}catch (e56868){if((e56868 instanceof Object)){
var ex__54681__auto__ = e56868;
var statearr_56869_57029 = state_56864;
(statearr_56869_57029[(5)] = ex__54681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57030 = state_56864;
state_56864 = G__57030;
continue;
} else {
return ret_value__54679__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54678__auto__ = function(state_56864){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54678__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54678__auto____1.call(this,state_56864);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54678__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54678__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54678__auto__;
})()
;})(switch__54677__auto__,c__54834__auto___57028,res,vec__56857,v,p,job,jobs,results))
})();
var state__54836__auto__ = (function (){var statearr_56870 = f__54835__auto__.call(null);
(statearr_56870[(6)] = c__54834__auto___57028);

return statearr_56870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54836__auto__);
});})(c__54834__auto___57028,res,vec__56857,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__56871){
var vec__56872 = p__56871;
var v = cljs.core.nth.call(null,vec__56872,(0),null);
var p = cljs.core.nth.call(null,vec__56872,(1),null);
var job = vec__56872;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___57031 = n;
var __57032 = (0);
while(true){
if((__57032 < n__4376__auto___57031)){
var G__56875_57033 = type;
var G__56875_57034__$1 = (((G__56875_57033 instanceof cljs.core.Keyword))?G__56875_57033.fqn:null);
switch (G__56875_57034__$1) {
case "compute":
var c__54834__auto___57036 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__57032,c__54834__auto___57036,G__56875_57033,G__56875_57034__$1,n__4376__auto___57031,jobs,results,process,async){
return (function (){
var f__54835__auto__ = (function (){var switch__54677__auto__ = ((function (__57032,c__54834__auto___57036,G__56875_57033,G__56875_57034__$1,n__4376__auto___57031,jobs,results,process,async){
return (function (state_56888){
var state_val_56889 = (state_56888[(1)]);
if((state_val_56889 === (1))){
var state_56888__$1 = state_56888;
var statearr_56890_57037 = state_56888__$1;
(statearr_56890_57037[(2)] = null);

(statearr_56890_57037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56889 === (2))){
var state_56888__$1 = state_56888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56888__$1,(4),jobs);
} else {
if((state_val_56889 === (3))){
var inst_56886 = (state_56888[(2)]);
var state_56888__$1 = state_56888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56888__$1,inst_56886);
} else {
if((state_val_56889 === (4))){
var inst_56878 = (state_56888[(2)]);
var inst_56879 = process.call(null,inst_56878);
var state_56888__$1 = state_56888;
if(cljs.core.truth_(inst_56879)){
var statearr_56891_57038 = state_56888__$1;
(statearr_56891_57038[(1)] = (5));

} else {
var statearr_56892_57039 = state_56888__$1;
(statearr_56892_57039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56889 === (5))){
var state_56888__$1 = state_56888;
var statearr_56893_57040 = state_56888__$1;
(statearr_56893_57040[(2)] = null);

(statearr_56893_57040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56889 === (6))){
var state_56888__$1 = state_56888;
var statearr_56894_57041 = state_56888__$1;
(statearr_56894_57041[(2)] = null);

(statearr_56894_57041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56889 === (7))){
var inst_56884 = (state_56888[(2)]);
var state_56888__$1 = state_56888;
var statearr_56895_57042 = state_56888__$1;
(statearr_56895_57042[(2)] = inst_56884);

(statearr_56895_57042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__57032,c__54834__auto___57036,G__56875_57033,G__56875_57034__$1,n__4376__auto___57031,jobs,results,process,async))
;
return ((function (__57032,switch__54677__auto__,c__54834__auto___57036,G__56875_57033,G__56875_57034__$1,n__4376__auto___57031,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54678__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54678__auto____0 = (function (){
var statearr_56896 = [null,null,null,null,null,null,null];
(statearr_56896[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54678__auto__);

(statearr_56896[(1)] = (1));

return statearr_56896;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54678__auto____1 = (function (state_56888){
while(true){
var ret_value__54679__auto__ = (function (){try{while(true){
var result__54680__auto__ = switch__54677__auto__.call(null,state_56888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54680__auto__;
}
break;
}
}catch (e56897){if((e56897 instanceof Object)){
var ex__54681__auto__ = e56897;
var statearr_56898_57043 = state_56888;
(statearr_56898_57043[(5)] = ex__54681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57044 = state_56888;
state_56888 = G__57044;
continue;
} else {
return ret_value__54679__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54678__auto__ = function(state_56888){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54678__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54678__auto____1.call(this,state_56888);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54678__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54678__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54678__auto__;
})()
;})(__57032,switch__54677__auto__,c__54834__auto___57036,G__56875_57033,G__56875_57034__$1,n__4376__auto___57031,jobs,results,process,async))
})();
var state__54836__auto__ = (function (){var statearr_56899 = f__54835__auto__.call(null);
(statearr_56899[(6)] = c__54834__auto___57036);

return statearr_56899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54836__auto__);
});})(__57032,c__54834__auto___57036,G__56875_57033,G__56875_57034__$1,n__4376__auto___57031,jobs,results,process,async))
);


break;
case "async":
var c__54834__auto___57045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__57032,c__54834__auto___57045,G__56875_57033,G__56875_57034__$1,n__4376__auto___57031,jobs,results,process,async){
return (function (){
var f__54835__auto__ = (function (){var switch__54677__auto__ = ((function (__57032,c__54834__auto___57045,G__56875_57033,G__56875_57034__$1,n__4376__auto___57031,jobs,results,process,async){
return (function (state_56912){
var state_val_56913 = (state_56912[(1)]);
if((state_val_56913 === (1))){
var state_56912__$1 = state_56912;
var statearr_56914_57046 = state_56912__$1;
(statearr_56914_57046[(2)] = null);

(statearr_56914_57046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56913 === (2))){
var state_56912__$1 = state_56912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56912__$1,(4),jobs);
} else {
if((state_val_56913 === (3))){
var inst_56910 = (state_56912[(2)]);
var state_56912__$1 = state_56912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56912__$1,inst_56910);
} else {
if((state_val_56913 === (4))){
var inst_56902 = (state_56912[(2)]);
var inst_56903 = async.call(null,inst_56902);
var state_56912__$1 = state_56912;
if(cljs.core.truth_(inst_56903)){
var statearr_56915_57047 = state_56912__$1;
(statearr_56915_57047[(1)] = (5));

} else {
var statearr_56916_57048 = state_56912__$1;
(statearr_56916_57048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56913 === (5))){
var state_56912__$1 = state_56912;
var statearr_56917_57049 = state_56912__$1;
(statearr_56917_57049[(2)] = null);

(statearr_56917_57049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56913 === (6))){
var state_56912__$1 = state_56912;
var statearr_56918_57050 = state_56912__$1;
(statearr_56918_57050[(2)] = null);

(statearr_56918_57050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56913 === (7))){
var inst_56908 = (state_56912[(2)]);
var state_56912__$1 = state_56912;
var statearr_56919_57051 = state_56912__$1;
(statearr_56919_57051[(2)] = inst_56908);

(statearr_56919_57051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__57032,c__54834__auto___57045,G__56875_57033,G__56875_57034__$1,n__4376__auto___57031,jobs,results,process,async))
;
return ((function (__57032,switch__54677__auto__,c__54834__auto___57045,G__56875_57033,G__56875_57034__$1,n__4376__auto___57031,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54678__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54678__auto____0 = (function (){
var statearr_56920 = [null,null,null,null,null,null,null];
(statearr_56920[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54678__auto__);

(statearr_56920[(1)] = (1));

return statearr_56920;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54678__auto____1 = (function (state_56912){
while(true){
var ret_value__54679__auto__ = (function (){try{while(true){
var result__54680__auto__ = switch__54677__auto__.call(null,state_56912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54680__auto__;
}
break;
}
}catch (e56921){if((e56921 instanceof Object)){
var ex__54681__auto__ = e56921;
var statearr_56922_57052 = state_56912;
(statearr_56922_57052[(5)] = ex__54681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57053 = state_56912;
state_56912 = G__57053;
continue;
} else {
return ret_value__54679__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54678__auto__ = function(state_56912){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54678__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54678__auto____1.call(this,state_56912);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54678__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54678__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54678__auto__;
})()
;})(__57032,switch__54677__auto__,c__54834__auto___57045,G__56875_57033,G__56875_57034__$1,n__4376__auto___57031,jobs,results,process,async))
})();
var state__54836__auto__ = (function (){var statearr_56923 = f__54835__auto__.call(null);
(statearr_56923[(6)] = c__54834__auto___57045);

return statearr_56923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54836__auto__);
});})(__57032,c__54834__auto___57045,G__56875_57033,G__56875_57034__$1,n__4376__auto___57031,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56875_57034__$1)].join('')));

}

var G__57054 = (__57032 + (1));
__57032 = G__57054;
continue;
} else {
}
break;
}

var c__54834__auto___57055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54834__auto___57055,jobs,results,process,async){
return (function (){
var f__54835__auto__ = (function (){var switch__54677__auto__ = ((function (c__54834__auto___57055,jobs,results,process,async){
return (function (state_56945){
var state_val_56946 = (state_56945[(1)]);
if((state_val_56946 === (7))){
var inst_56941 = (state_56945[(2)]);
var state_56945__$1 = state_56945;
var statearr_56947_57056 = state_56945__$1;
(statearr_56947_57056[(2)] = inst_56941);

(statearr_56947_57056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56946 === (1))){
var state_56945__$1 = state_56945;
var statearr_56948_57057 = state_56945__$1;
(statearr_56948_57057[(2)] = null);

(statearr_56948_57057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56946 === (4))){
var inst_56926 = (state_56945[(7)]);
var inst_56926__$1 = (state_56945[(2)]);
var inst_56927 = (inst_56926__$1 == null);
var state_56945__$1 = (function (){var statearr_56949 = state_56945;
(statearr_56949[(7)] = inst_56926__$1);

return statearr_56949;
})();
if(cljs.core.truth_(inst_56927)){
var statearr_56950_57058 = state_56945__$1;
(statearr_56950_57058[(1)] = (5));

} else {
var statearr_56951_57059 = state_56945__$1;
(statearr_56951_57059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56946 === (6))){
var inst_56926 = (state_56945[(7)]);
var inst_56931 = (state_56945[(8)]);
var inst_56931__$1 = cljs.core.async.chan.call(null,(1));
var inst_56932 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56933 = [inst_56926,inst_56931__$1];
var inst_56934 = (new cljs.core.PersistentVector(null,2,(5),inst_56932,inst_56933,null));
var state_56945__$1 = (function (){var statearr_56952 = state_56945;
(statearr_56952[(8)] = inst_56931__$1);

return statearr_56952;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56945__$1,(8),jobs,inst_56934);
} else {
if((state_val_56946 === (3))){
var inst_56943 = (state_56945[(2)]);
var state_56945__$1 = state_56945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56945__$1,inst_56943);
} else {
if((state_val_56946 === (2))){
var state_56945__$1 = state_56945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56945__$1,(4),from);
} else {
if((state_val_56946 === (9))){
var inst_56938 = (state_56945[(2)]);
var state_56945__$1 = (function (){var statearr_56953 = state_56945;
(statearr_56953[(9)] = inst_56938);

return statearr_56953;
})();
var statearr_56954_57060 = state_56945__$1;
(statearr_56954_57060[(2)] = null);

(statearr_56954_57060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56946 === (5))){
var inst_56929 = cljs.core.async.close_BANG_.call(null,jobs);
var state_56945__$1 = state_56945;
var statearr_56955_57061 = state_56945__$1;
(statearr_56955_57061[(2)] = inst_56929);

(statearr_56955_57061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56946 === (8))){
var inst_56931 = (state_56945[(8)]);
var inst_56936 = (state_56945[(2)]);
var state_56945__$1 = (function (){var statearr_56956 = state_56945;
(statearr_56956[(10)] = inst_56936);

return statearr_56956;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56945__$1,(9),results,inst_56931);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__54834__auto___57055,jobs,results,process,async))
;
return ((function (switch__54677__auto__,c__54834__auto___57055,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54678__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54678__auto____0 = (function (){
var statearr_56957 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56957[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54678__auto__);

(statearr_56957[(1)] = (1));

return statearr_56957;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54678__auto____1 = (function (state_56945){
while(true){
var ret_value__54679__auto__ = (function (){try{while(true){
var result__54680__auto__ = switch__54677__auto__.call(null,state_56945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54680__auto__;
}
break;
}
}catch (e56958){if((e56958 instanceof Object)){
var ex__54681__auto__ = e56958;
var statearr_56959_57062 = state_56945;
(statearr_56959_57062[(5)] = ex__54681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57063 = state_56945;
state_56945 = G__57063;
continue;
} else {
return ret_value__54679__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54678__auto__ = function(state_56945){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54678__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54678__auto____1.call(this,state_56945);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54678__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54678__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54678__auto__;
})()
;})(switch__54677__auto__,c__54834__auto___57055,jobs,results,process,async))
})();
var state__54836__auto__ = (function (){var statearr_56960 = f__54835__auto__.call(null);
(statearr_56960[(6)] = c__54834__auto___57055);

return statearr_56960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54836__auto__);
});})(c__54834__auto___57055,jobs,results,process,async))
);


var c__54834__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54834__auto__,jobs,results,process,async){
return (function (){
var f__54835__auto__ = (function (){var switch__54677__auto__ = ((function (c__54834__auto__,jobs,results,process,async){
return (function (state_56998){
var state_val_56999 = (state_56998[(1)]);
if((state_val_56999 === (7))){
var inst_56994 = (state_56998[(2)]);
var state_56998__$1 = state_56998;
var statearr_57000_57064 = state_56998__$1;
(statearr_57000_57064[(2)] = inst_56994);

(statearr_57000_57064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56999 === (20))){
var state_56998__$1 = state_56998;
var statearr_57001_57065 = state_56998__$1;
(statearr_57001_57065[(2)] = null);

(statearr_57001_57065[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56999 === (1))){
var state_56998__$1 = state_56998;
var statearr_57002_57066 = state_56998__$1;
(statearr_57002_57066[(2)] = null);

(statearr_57002_57066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56999 === (4))){
var inst_56963 = (state_56998[(7)]);
var inst_56963__$1 = (state_56998[(2)]);
var inst_56964 = (inst_56963__$1 == null);
var state_56998__$1 = (function (){var statearr_57003 = state_56998;
(statearr_57003[(7)] = inst_56963__$1);

return statearr_57003;
})();
if(cljs.core.truth_(inst_56964)){
var statearr_57004_57067 = state_56998__$1;
(statearr_57004_57067[(1)] = (5));

} else {
var statearr_57005_57068 = state_56998__$1;
(statearr_57005_57068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56999 === (15))){
var inst_56976 = (state_56998[(8)]);
var state_56998__$1 = state_56998;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56998__$1,(18),to,inst_56976);
} else {
if((state_val_56999 === (21))){
var inst_56989 = (state_56998[(2)]);
var state_56998__$1 = state_56998;
var statearr_57006_57069 = state_56998__$1;
(statearr_57006_57069[(2)] = inst_56989);

(statearr_57006_57069[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56999 === (13))){
var inst_56991 = (state_56998[(2)]);
var state_56998__$1 = (function (){var statearr_57007 = state_56998;
(statearr_57007[(9)] = inst_56991);

return statearr_57007;
})();
var statearr_57008_57070 = state_56998__$1;
(statearr_57008_57070[(2)] = null);

(statearr_57008_57070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56999 === (6))){
var inst_56963 = (state_56998[(7)]);
var state_56998__$1 = state_56998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56998__$1,(11),inst_56963);
} else {
if((state_val_56999 === (17))){
var inst_56984 = (state_56998[(2)]);
var state_56998__$1 = state_56998;
if(cljs.core.truth_(inst_56984)){
var statearr_57009_57071 = state_56998__$1;
(statearr_57009_57071[(1)] = (19));

} else {
var statearr_57010_57072 = state_56998__$1;
(statearr_57010_57072[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56999 === (3))){
var inst_56996 = (state_56998[(2)]);
var state_56998__$1 = state_56998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56998__$1,inst_56996);
} else {
if((state_val_56999 === (12))){
var inst_56973 = (state_56998[(10)]);
var state_56998__$1 = state_56998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56998__$1,(14),inst_56973);
} else {
if((state_val_56999 === (2))){
var state_56998__$1 = state_56998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56998__$1,(4),results);
} else {
if((state_val_56999 === (19))){
var state_56998__$1 = state_56998;
var statearr_57011_57073 = state_56998__$1;
(statearr_57011_57073[(2)] = null);

(statearr_57011_57073[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56999 === (11))){
var inst_56973 = (state_56998[(2)]);
var state_56998__$1 = (function (){var statearr_57012 = state_56998;
(statearr_57012[(10)] = inst_56973);

return statearr_57012;
})();
var statearr_57013_57074 = state_56998__$1;
(statearr_57013_57074[(2)] = null);

(statearr_57013_57074[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56999 === (9))){
var state_56998__$1 = state_56998;
var statearr_57014_57075 = state_56998__$1;
(statearr_57014_57075[(2)] = null);

(statearr_57014_57075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56999 === (5))){
var state_56998__$1 = state_56998;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57015_57076 = state_56998__$1;
(statearr_57015_57076[(1)] = (8));

} else {
var statearr_57016_57077 = state_56998__$1;
(statearr_57016_57077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56999 === (14))){
var inst_56976 = (state_56998[(8)]);
var inst_56978 = (state_56998[(11)]);
var inst_56976__$1 = (state_56998[(2)]);
var inst_56977 = (inst_56976__$1 == null);
var inst_56978__$1 = cljs.core.not.call(null,inst_56977);
var state_56998__$1 = (function (){var statearr_57017 = state_56998;
(statearr_57017[(8)] = inst_56976__$1);

(statearr_57017[(11)] = inst_56978__$1);

return statearr_57017;
})();
if(inst_56978__$1){
var statearr_57018_57078 = state_56998__$1;
(statearr_57018_57078[(1)] = (15));

} else {
var statearr_57019_57079 = state_56998__$1;
(statearr_57019_57079[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56999 === (16))){
var inst_56978 = (state_56998[(11)]);
var state_56998__$1 = state_56998;
var statearr_57020_57080 = state_56998__$1;
(statearr_57020_57080[(2)] = inst_56978);

(statearr_57020_57080[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56999 === (10))){
var inst_56970 = (state_56998[(2)]);
var state_56998__$1 = state_56998;
var statearr_57021_57081 = state_56998__$1;
(statearr_57021_57081[(2)] = inst_56970);

(statearr_57021_57081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56999 === (18))){
var inst_56981 = (state_56998[(2)]);
var state_56998__$1 = state_56998;
var statearr_57022_57082 = state_56998__$1;
(statearr_57022_57082[(2)] = inst_56981);

(statearr_57022_57082[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56999 === (8))){
var inst_56967 = cljs.core.async.close_BANG_.call(null,to);
var state_56998__$1 = state_56998;
var statearr_57023_57083 = state_56998__$1;
(statearr_57023_57083[(2)] = inst_56967);

(statearr_57023_57083[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__54834__auto__,jobs,results,process,async))
;
return ((function (switch__54677__auto__,c__54834__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54678__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54678__auto____0 = (function (){
var statearr_57024 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57024[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54678__auto__);

(statearr_57024[(1)] = (1));

return statearr_57024;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54678__auto____1 = (function (state_56998){
while(true){
var ret_value__54679__auto__ = (function (){try{while(true){
var result__54680__auto__ = switch__54677__auto__.call(null,state_56998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54680__auto__;
}
break;
}
}catch (e57025){if((e57025 instanceof Object)){
var ex__54681__auto__ = e57025;
var statearr_57026_57084 = state_56998;
(statearr_57026_57084[(5)] = ex__54681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57085 = state_56998;
state_56998 = G__57085;
continue;
} else {
return ret_value__54679__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54678__auto__ = function(state_56998){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54678__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54678__auto____1.call(this,state_56998);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54678__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54678__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54678__auto__;
})()
;})(switch__54677__auto__,c__54834__auto__,jobs,results,process,async))
})();
var state__54836__auto__ = (function (){var statearr_57027 = f__54835__auto__.call(null);
(statearr_57027[(6)] = c__54834__auto__);

return statearr_57027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54836__auto__);
});})(c__54834__auto__,jobs,results,process,async))
);

return c__54834__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__57087 = arguments.length;
switch (G__57087) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__57090 = arguments.length;
switch (G__57090) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__57093 = arguments.length;
switch (G__57093) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__54834__auto___57142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54834__auto___57142,tc,fc){
return (function (){
var f__54835__auto__ = (function (){var switch__54677__auto__ = ((function (c__54834__auto___57142,tc,fc){
return (function (state_57119){
var state_val_57120 = (state_57119[(1)]);
if((state_val_57120 === (7))){
var inst_57115 = (state_57119[(2)]);
var state_57119__$1 = state_57119;
var statearr_57121_57143 = state_57119__$1;
(statearr_57121_57143[(2)] = inst_57115);

(statearr_57121_57143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57120 === (1))){
var state_57119__$1 = state_57119;
var statearr_57122_57144 = state_57119__$1;
(statearr_57122_57144[(2)] = null);

(statearr_57122_57144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57120 === (4))){
var inst_57096 = (state_57119[(7)]);
var inst_57096__$1 = (state_57119[(2)]);
var inst_57097 = (inst_57096__$1 == null);
var state_57119__$1 = (function (){var statearr_57123 = state_57119;
(statearr_57123[(7)] = inst_57096__$1);

return statearr_57123;
})();
if(cljs.core.truth_(inst_57097)){
var statearr_57124_57145 = state_57119__$1;
(statearr_57124_57145[(1)] = (5));

} else {
var statearr_57125_57146 = state_57119__$1;
(statearr_57125_57146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57120 === (13))){
var state_57119__$1 = state_57119;
var statearr_57126_57147 = state_57119__$1;
(statearr_57126_57147[(2)] = null);

(statearr_57126_57147[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57120 === (6))){
var inst_57096 = (state_57119[(7)]);
var inst_57102 = p.call(null,inst_57096);
var state_57119__$1 = state_57119;
if(cljs.core.truth_(inst_57102)){
var statearr_57127_57148 = state_57119__$1;
(statearr_57127_57148[(1)] = (9));

} else {
var statearr_57128_57149 = state_57119__$1;
(statearr_57128_57149[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57120 === (3))){
var inst_57117 = (state_57119[(2)]);
var state_57119__$1 = state_57119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57119__$1,inst_57117);
} else {
if((state_val_57120 === (12))){
var state_57119__$1 = state_57119;
var statearr_57129_57150 = state_57119__$1;
(statearr_57129_57150[(2)] = null);

(statearr_57129_57150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57120 === (2))){
var state_57119__$1 = state_57119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57119__$1,(4),ch);
} else {
if((state_val_57120 === (11))){
var inst_57096 = (state_57119[(7)]);
var inst_57106 = (state_57119[(2)]);
var state_57119__$1 = state_57119;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57119__$1,(8),inst_57106,inst_57096);
} else {
if((state_val_57120 === (9))){
var state_57119__$1 = state_57119;
var statearr_57130_57151 = state_57119__$1;
(statearr_57130_57151[(2)] = tc);

(statearr_57130_57151[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57120 === (5))){
var inst_57099 = cljs.core.async.close_BANG_.call(null,tc);
var inst_57100 = cljs.core.async.close_BANG_.call(null,fc);
var state_57119__$1 = (function (){var statearr_57131 = state_57119;
(statearr_57131[(8)] = inst_57099);

return statearr_57131;
})();
var statearr_57132_57152 = state_57119__$1;
(statearr_57132_57152[(2)] = inst_57100);

(statearr_57132_57152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57120 === (14))){
var inst_57113 = (state_57119[(2)]);
var state_57119__$1 = state_57119;
var statearr_57133_57153 = state_57119__$1;
(statearr_57133_57153[(2)] = inst_57113);

(statearr_57133_57153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57120 === (10))){
var state_57119__$1 = state_57119;
var statearr_57134_57154 = state_57119__$1;
(statearr_57134_57154[(2)] = fc);

(statearr_57134_57154[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57120 === (8))){
var inst_57108 = (state_57119[(2)]);
var state_57119__$1 = state_57119;
if(cljs.core.truth_(inst_57108)){
var statearr_57135_57155 = state_57119__$1;
(statearr_57135_57155[(1)] = (12));

} else {
var statearr_57136_57156 = state_57119__$1;
(statearr_57136_57156[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__54834__auto___57142,tc,fc))
;
return ((function (switch__54677__auto__,c__54834__auto___57142,tc,fc){
return (function() {
var cljs$core$async$state_machine__54678__auto__ = null;
var cljs$core$async$state_machine__54678__auto____0 = (function (){
var statearr_57137 = [null,null,null,null,null,null,null,null,null];
(statearr_57137[(0)] = cljs$core$async$state_machine__54678__auto__);

(statearr_57137[(1)] = (1));

return statearr_57137;
});
var cljs$core$async$state_machine__54678__auto____1 = (function (state_57119){
while(true){
var ret_value__54679__auto__ = (function (){try{while(true){
var result__54680__auto__ = switch__54677__auto__.call(null,state_57119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54680__auto__;
}
break;
}
}catch (e57138){if((e57138 instanceof Object)){
var ex__54681__auto__ = e57138;
var statearr_57139_57157 = state_57119;
(statearr_57139_57157[(5)] = ex__54681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57158 = state_57119;
state_57119 = G__57158;
continue;
} else {
return ret_value__54679__auto__;
}
break;
}
});
cljs$core$async$state_machine__54678__auto__ = function(state_57119){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54678__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54678__auto____1.call(this,state_57119);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54678__auto____0;
cljs$core$async$state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54678__auto____1;
return cljs$core$async$state_machine__54678__auto__;
})()
;})(switch__54677__auto__,c__54834__auto___57142,tc,fc))
})();
var state__54836__auto__ = (function (){var statearr_57140 = f__54835__auto__.call(null);
(statearr_57140[(6)] = c__54834__auto___57142);

return statearr_57140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54836__auto__);
});})(c__54834__auto___57142,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__54834__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54834__auto__){
return (function (){
var f__54835__auto__ = (function (){var switch__54677__auto__ = ((function (c__54834__auto__){
return (function (state_57179){
var state_val_57180 = (state_57179[(1)]);
if((state_val_57180 === (7))){
var inst_57175 = (state_57179[(2)]);
var state_57179__$1 = state_57179;
var statearr_57181_57199 = state_57179__$1;
(statearr_57181_57199[(2)] = inst_57175);

(statearr_57181_57199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57180 === (1))){
var inst_57159 = init;
var state_57179__$1 = (function (){var statearr_57182 = state_57179;
(statearr_57182[(7)] = inst_57159);

return statearr_57182;
})();
var statearr_57183_57200 = state_57179__$1;
(statearr_57183_57200[(2)] = null);

(statearr_57183_57200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57180 === (4))){
var inst_57162 = (state_57179[(8)]);
var inst_57162__$1 = (state_57179[(2)]);
var inst_57163 = (inst_57162__$1 == null);
var state_57179__$1 = (function (){var statearr_57184 = state_57179;
(statearr_57184[(8)] = inst_57162__$1);

return statearr_57184;
})();
if(cljs.core.truth_(inst_57163)){
var statearr_57185_57201 = state_57179__$1;
(statearr_57185_57201[(1)] = (5));

} else {
var statearr_57186_57202 = state_57179__$1;
(statearr_57186_57202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57180 === (6))){
var inst_57162 = (state_57179[(8)]);
var inst_57159 = (state_57179[(7)]);
var inst_57166 = (state_57179[(9)]);
var inst_57166__$1 = f.call(null,inst_57159,inst_57162);
var inst_57167 = cljs.core.reduced_QMARK_.call(null,inst_57166__$1);
var state_57179__$1 = (function (){var statearr_57187 = state_57179;
(statearr_57187[(9)] = inst_57166__$1);

return statearr_57187;
})();
if(inst_57167){
var statearr_57188_57203 = state_57179__$1;
(statearr_57188_57203[(1)] = (8));

} else {
var statearr_57189_57204 = state_57179__$1;
(statearr_57189_57204[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57180 === (3))){
var inst_57177 = (state_57179[(2)]);
var state_57179__$1 = state_57179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57179__$1,inst_57177);
} else {
if((state_val_57180 === (2))){
var state_57179__$1 = state_57179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57179__$1,(4),ch);
} else {
if((state_val_57180 === (9))){
var inst_57166 = (state_57179[(9)]);
var inst_57159 = inst_57166;
var state_57179__$1 = (function (){var statearr_57190 = state_57179;
(statearr_57190[(7)] = inst_57159);

return statearr_57190;
})();
var statearr_57191_57205 = state_57179__$1;
(statearr_57191_57205[(2)] = null);

(statearr_57191_57205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57180 === (5))){
var inst_57159 = (state_57179[(7)]);
var state_57179__$1 = state_57179;
var statearr_57192_57206 = state_57179__$1;
(statearr_57192_57206[(2)] = inst_57159);

(statearr_57192_57206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57180 === (10))){
var inst_57173 = (state_57179[(2)]);
var state_57179__$1 = state_57179;
var statearr_57193_57207 = state_57179__$1;
(statearr_57193_57207[(2)] = inst_57173);

(statearr_57193_57207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57180 === (8))){
var inst_57166 = (state_57179[(9)]);
var inst_57169 = cljs.core.deref.call(null,inst_57166);
var state_57179__$1 = state_57179;
var statearr_57194_57208 = state_57179__$1;
(statearr_57194_57208[(2)] = inst_57169);

(statearr_57194_57208[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__54834__auto__))
;
return ((function (switch__54677__auto__,c__54834__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__54678__auto__ = null;
var cljs$core$async$reduce_$_state_machine__54678__auto____0 = (function (){
var statearr_57195 = [null,null,null,null,null,null,null,null,null,null];
(statearr_57195[(0)] = cljs$core$async$reduce_$_state_machine__54678__auto__);

(statearr_57195[(1)] = (1));

return statearr_57195;
});
var cljs$core$async$reduce_$_state_machine__54678__auto____1 = (function (state_57179){
while(true){
var ret_value__54679__auto__ = (function (){try{while(true){
var result__54680__auto__ = switch__54677__auto__.call(null,state_57179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54680__auto__;
}
break;
}
}catch (e57196){if((e57196 instanceof Object)){
var ex__54681__auto__ = e57196;
var statearr_57197_57209 = state_57179;
(statearr_57197_57209[(5)] = ex__54681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57210 = state_57179;
state_57179 = G__57210;
continue;
} else {
return ret_value__54679__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__54678__auto__ = function(state_57179){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__54678__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__54678__auto____1.call(this,state_57179);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__54678__auto____0;
cljs$core$async$reduce_$_state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__54678__auto____1;
return cljs$core$async$reduce_$_state_machine__54678__auto__;
})()
;})(switch__54677__auto__,c__54834__auto__))
})();
var state__54836__auto__ = (function (){var statearr_57198 = f__54835__auto__.call(null);
(statearr_57198[(6)] = c__54834__auto__);

return statearr_57198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54836__auto__);
});})(c__54834__auto__))
);

return c__54834__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__54834__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54834__auto__,f__$1){
return (function (){
var f__54835__auto__ = (function (){var switch__54677__auto__ = ((function (c__54834__auto__,f__$1){
return (function (state_57216){
var state_val_57217 = (state_57216[(1)]);
if((state_val_57217 === (1))){
var inst_57211 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_57216__$1 = state_57216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57216__$1,(2),inst_57211);
} else {
if((state_val_57217 === (2))){
var inst_57213 = (state_57216[(2)]);
var inst_57214 = f__$1.call(null,inst_57213);
var state_57216__$1 = state_57216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57216__$1,inst_57214);
} else {
return null;
}
}
});})(c__54834__auto__,f__$1))
;
return ((function (switch__54677__auto__,c__54834__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__54678__auto__ = null;
var cljs$core$async$transduce_$_state_machine__54678__auto____0 = (function (){
var statearr_57218 = [null,null,null,null,null,null,null];
(statearr_57218[(0)] = cljs$core$async$transduce_$_state_machine__54678__auto__);

(statearr_57218[(1)] = (1));

return statearr_57218;
});
var cljs$core$async$transduce_$_state_machine__54678__auto____1 = (function (state_57216){
while(true){
var ret_value__54679__auto__ = (function (){try{while(true){
var result__54680__auto__ = switch__54677__auto__.call(null,state_57216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54680__auto__;
}
break;
}
}catch (e57219){if((e57219 instanceof Object)){
var ex__54681__auto__ = e57219;
var statearr_57220_57222 = state_57216;
(statearr_57220_57222[(5)] = ex__54681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57223 = state_57216;
state_57216 = G__57223;
continue;
} else {
return ret_value__54679__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__54678__auto__ = function(state_57216){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__54678__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__54678__auto____1.call(this,state_57216);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__54678__auto____0;
cljs$core$async$transduce_$_state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__54678__auto____1;
return cljs$core$async$transduce_$_state_machine__54678__auto__;
})()
;})(switch__54677__auto__,c__54834__auto__,f__$1))
})();
var state__54836__auto__ = (function (){var statearr_57221 = f__54835__auto__.call(null);
(statearr_57221[(6)] = c__54834__auto__);

return statearr_57221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54836__auto__);
});})(c__54834__auto__,f__$1))
);

return c__54834__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__57225 = arguments.length;
switch (G__57225) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__54834__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54834__auto__){
return (function (){
var f__54835__auto__ = (function (){var switch__54677__auto__ = ((function (c__54834__auto__){
return (function (state_57250){
var state_val_57251 = (state_57250[(1)]);
if((state_val_57251 === (7))){
var inst_57232 = (state_57250[(2)]);
var state_57250__$1 = state_57250;
var statearr_57252_57273 = state_57250__$1;
(statearr_57252_57273[(2)] = inst_57232);

(statearr_57252_57273[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57251 === (1))){
var inst_57226 = cljs.core.seq.call(null,coll);
var inst_57227 = inst_57226;
var state_57250__$1 = (function (){var statearr_57253 = state_57250;
(statearr_57253[(7)] = inst_57227);

return statearr_57253;
})();
var statearr_57254_57274 = state_57250__$1;
(statearr_57254_57274[(2)] = null);

(statearr_57254_57274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57251 === (4))){
var inst_57227 = (state_57250[(7)]);
var inst_57230 = cljs.core.first.call(null,inst_57227);
var state_57250__$1 = state_57250;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57250__$1,(7),ch,inst_57230);
} else {
if((state_val_57251 === (13))){
var inst_57244 = (state_57250[(2)]);
var state_57250__$1 = state_57250;
var statearr_57255_57275 = state_57250__$1;
(statearr_57255_57275[(2)] = inst_57244);

(statearr_57255_57275[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57251 === (6))){
var inst_57235 = (state_57250[(2)]);
var state_57250__$1 = state_57250;
if(cljs.core.truth_(inst_57235)){
var statearr_57256_57276 = state_57250__$1;
(statearr_57256_57276[(1)] = (8));

} else {
var statearr_57257_57277 = state_57250__$1;
(statearr_57257_57277[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57251 === (3))){
var inst_57248 = (state_57250[(2)]);
var state_57250__$1 = state_57250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57250__$1,inst_57248);
} else {
if((state_val_57251 === (12))){
var state_57250__$1 = state_57250;
var statearr_57258_57278 = state_57250__$1;
(statearr_57258_57278[(2)] = null);

(statearr_57258_57278[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57251 === (2))){
var inst_57227 = (state_57250[(7)]);
var state_57250__$1 = state_57250;
if(cljs.core.truth_(inst_57227)){
var statearr_57259_57279 = state_57250__$1;
(statearr_57259_57279[(1)] = (4));

} else {
var statearr_57260_57280 = state_57250__$1;
(statearr_57260_57280[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57251 === (11))){
var inst_57241 = cljs.core.async.close_BANG_.call(null,ch);
var state_57250__$1 = state_57250;
var statearr_57261_57281 = state_57250__$1;
(statearr_57261_57281[(2)] = inst_57241);

(statearr_57261_57281[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57251 === (9))){
var state_57250__$1 = state_57250;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57262_57282 = state_57250__$1;
(statearr_57262_57282[(1)] = (11));

} else {
var statearr_57263_57283 = state_57250__$1;
(statearr_57263_57283[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57251 === (5))){
var inst_57227 = (state_57250[(7)]);
var state_57250__$1 = state_57250;
var statearr_57264_57284 = state_57250__$1;
(statearr_57264_57284[(2)] = inst_57227);

(statearr_57264_57284[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57251 === (10))){
var inst_57246 = (state_57250[(2)]);
var state_57250__$1 = state_57250;
var statearr_57265_57285 = state_57250__$1;
(statearr_57265_57285[(2)] = inst_57246);

(statearr_57265_57285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57251 === (8))){
var inst_57227 = (state_57250[(7)]);
var inst_57237 = cljs.core.next.call(null,inst_57227);
var inst_57227__$1 = inst_57237;
var state_57250__$1 = (function (){var statearr_57266 = state_57250;
(statearr_57266[(7)] = inst_57227__$1);

return statearr_57266;
})();
var statearr_57267_57286 = state_57250__$1;
(statearr_57267_57286[(2)] = null);

(statearr_57267_57286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__54834__auto__))
;
return ((function (switch__54677__auto__,c__54834__auto__){
return (function() {
var cljs$core$async$state_machine__54678__auto__ = null;
var cljs$core$async$state_machine__54678__auto____0 = (function (){
var statearr_57268 = [null,null,null,null,null,null,null,null];
(statearr_57268[(0)] = cljs$core$async$state_machine__54678__auto__);

(statearr_57268[(1)] = (1));

return statearr_57268;
});
var cljs$core$async$state_machine__54678__auto____1 = (function (state_57250){
while(true){
var ret_value__54679__auto__ = (function (){try{while(true){
var result__54680__auto__ = switch__54677__auto__.call(null,state_57250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54680__auto__;
}
break;
}
}catch (e57269){if((e57269 instanceof Object)){
var ex__54681__auto__ = e57269;
var statearr_57270_57287 = state_57250;
(statearr_57270_57287[(5)] = ex__54681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57288 = state_57250;
state_57250 = G__57288;
continue;
} else {
return ret_value__54679__auto__;
}
break;
}
});
cljs$core$async$state_machine__54678__auto__ = function(state_57250){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54678__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54678__auto____1.call(this,state_57250);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54678__auto____0;
cljs$core$async$state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54678__auto____1;
return cljs$core$async$state_machine__54678__auto__;
})()
;})(switch__54677__auto__,c__54834__auto__))
})();
var state__54836__auto__ = (function (){var statearr_57271 = f__54835__auto__.call(null);
(statearr_57271[(6)] = c__54834__auto__);

return statearr_57271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54836__auto__);
});})(c__54834__auto__))
);

return c__54834__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async57289 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57289 = (function (ch,cs,meta57290){
this.ch = ch;
this.cs = cs;
this.meta57290 = meta57290;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async57289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_57291,meta57290__$1){
var self__ = this;
var _57291__$1 = this;
return (new cljs.core.async.t_cljs$core$async57289(self__.ch,self__.cs,meta57290__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async57289.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_57291){
var self__ = this;
var _57291__$1 = this;
return self__.meta57290;
});})(cs))
;

cljs.core.async.t_cljs$core$async57289.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57289.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async57289.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57289.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async57289.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async57289.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async57289.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta57290","meta57290",2042260803,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async57289.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async57289.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57289";

cljs.core.async.t_cljs$core$async57289.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async57289");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57289.
 */
cljs.core.async.__GT_t_cljs$core$async57289 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async57289(ch__$1,cs__$1,meta57290){
return (new cljs.core.async.t_cljs$core$async57289(ch__$1,cs__$1,meta57290));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async57289(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__54834__auto___57507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54834__auto___57507,cs,m,dchan,dctr,done){
return (function (){
var f__54835__auto__ = (function (){var switch__54677__auto__ = ((function (c__54834__auto___57507,cs,m,dchan,dctr,done){
return (function (state_57424){
var state_val_57425 = (state_57424[(1)]);
if((state_val_57425 === (7))){
var inst_57420 = (state_57424[(2)]);
var state_57424__$1 = state_57424;
var statearr_57426_57508 = state_57424__$1;
(statearr_57426_57508[(2)] = inst_57420);

(statearr_57426_57508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57425 === (20))){
var inst_57325 = (state_57424[(7)]);
var inst_57337 = cljs.core.first.call(null,inst_57325);
var inst_57338 = cljs.core.nth.call(null,inst_57337,(0),null);
var inst_57339 = cljs.core.nth.call(null,inst_57337,(1),null);
var state_57424__$1 = (function (){var statearr_57427 = state_57424;
(statearr_57427[(8)] = inst_57338);

return statearr_57427;
})();
if(cljs.core.truth_(inst_57339)){
var statearr_57428_57509 = state_57424__$1;
(statearr_57428_57509[(1)] = (22));

} else {
var statearr_57429_57510 = state_57424__$1;
(statearr_57429_57510[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57425 === (27))){
var inst_57367 = (state_57424[(9)]);
var inst_57369 = (state_57424[(10)]);
var inst_57294 = (state_57424[(11)]);
var inst_57374 = (state_57424[(12)]);
var inst_57374__$1 = cljs.core._nth.call(null,inst_57367,inst_57369);
var inst_57375 = cljs.core.async.put_BANG_.call(null,inst_57374__$1,inst_57294,done);
var state_57424__$1 = (function (){var statearr_57430 = state_57424;
(statearr_57430[(12)] = inst_57374__$1);

return statearr_57430;
})();
if(cljs.core.truth_(inst_57375)){
var statearr_57431_57511 = state_57424__$1;
(statearr_57431_57511[(1)] = (30));

} else {
var statearr_57432_57512 = state_57424__$1;
(statearr_57432_57512[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57425 === (1))){
var state_57424__$1 = state_57424;
var statearr_57433_57513 = state_57424__$1;
(statearr_57433_57513[(2)] = null);

(statearr_57433_57513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57425 === (24))){
var inst_57325 = (state_57424[(7)]);
var inst_57344 = (state_57424[(2)]);
var inst_57345 = cljs.core.next.call(null,inst_57325);
var inst_57303 = inst_57345;
var inst_57304 = null;
var inst_57305 = (0);
var inst_57306 = (0);
var state_57424__$1 = (function (){var statearr_57434 = state_57424;
(statearr_57434[(13)] = inst_57304);

(statearr_57434[(14)] = inst_57303);

(statearr_57434[(15)] = inst_57344);

(statearr_57434[(16)] = inst_57305);

(statearr_57434[(17)] = inst_57306);

return statearr_57434;
})();
var statearr_57435_57514 = state_57424__$1;
(statearr_57435_57514[(2)] = null);

(statearr_57435_57514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57425 === (39))){
var state_57424__$1 = state_57424;
var statearr_57439_57515 = state_57424__$1;
(statearr_57439_57515[(2)] = null);

(statearr_57439_57515[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57425 === (4))){
var inst_57294 = (state_57424[(11)]);
var inst_57294__$1 = (state_57424[(2)]);
var inst_57295 = (inst_57294__$1 == null);
var state_57424__$1 = (function (){var statearr_57440 = state_57424;
(statearr_57440[(11)] = inst_57294__$1);

return statearr_57440;
})();
if(cljs.core.truth_(inst_57295)){
var statearr_57441_57516 = state_57424__$1;
(statearr_57441_57516[(1)] = (5));

} else {
var statearr_57442_57517 = state_57424__$1;
(statearr_57442_57517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57425 === (15))){
var inst_57304 = (state_57424[(13)]);
var inst_57303 = (state_57424[(14)]);
var inst_57305 = (state_57424[(16)]);
var inst_57306 = (state_57424[(17)]);
var inst_57321 = (state_57424[(2)]);
var inst_57322 = (inst_57306 + (1));
var tmp57436 = inst_57304;
var tmp57437 = inst_57303;
var tmp57438 = inst_57305;
var inst_57303__$1 = tmp57437;
var inst_57304__$1 = tmp57436;
var inst_57305__$1 = tmp57438;
var inst_57306__$1 = inst_57322;
var state_57424__$1 = (function (){var statearr_57443 = state_57424;
(statearr_57443[(13)] = inst_57304__$1);

(statearr_57443[(18)] = inst_57321);

(statearr_57443[(14)] = inst_57303__$1);

(statearr_57443[(16)] = inst_57305__$1);

(statearr_57443[(17)] = inst_57306__$1);

return statearr_57443;
})();
var statearr_57444_57518 = state_57424__$1;
(statearr_57444_57518[(2)] = null);

(statearr_57444_57518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57425 === (21))){
var inst_57348 = (state_57424[(2)]);
var state_57424__$1 = state_57424;
var statearr_57448_57519 = state_57424__$1;
(statearr_57448_57519[(2)] = inst_57348);

(statearr_57448_57519[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57425 === (31))){
var inst_57374 = (state_57424[(12)]);
var inst_57378 = cljs.core.async.untap_STAR_.call(null,m,inst_57374);
var state_57424__$1 = state_57424;
var statearr_57449_57520 = state_57424__$1;
(statearr_57449_57520[(2)] = inst_57378);

(statearr_57449_57520[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57425 === (32))){
var inst_57367 = (state_57424[(9)]);
var inst_57369 = (state_57424[(10)]);
var inst_57368 = (state_57424[(19)]);
var inst_57366 = (state_57424[(20)]);
var inst_57380 = (state_57424[(2)]);
var inst_57381 = (inst_57369 + (1));
var tmp57445 = inst_57367;
var tmp57446 = inst_57368;
var tmp57447 = inst_57366;
var inst_57366__$1 = tmp57447;
var inst_57367__$1 = tmp57445;
var inst_57368__$1 = tmp57446;
var inst_57369__$1 = inst_57381;
var state_57424__$1 = (function (){var statearr_57450 = state_57424;
(statearr_57450[(9)] = inst_57367__$1);

(statearr_57450[(10)] = inst_57369__$1);

(statearr_57450[(21)] = inst_57380);

(statearr_57450[(19)] = inst_57368__$1);

(statearr_57450[(20)] = inst_57366__$1);

return statearr_57450;
})();
var statearr_57451_57521 = state_57424__$1;
(statearr_57451_57521[(2)] = null);

(statearr_57451_57521[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57425 === (40))){
var inst_57393 = (state_57424[(22)]);
var inst_57397 = cljs.core.async.untap_STAR_.call(null,m,inst_57393);
var state_57424__$1 = state_57424;
var statearr_57452_57522 = state_57424__$1;
(statearr_57452_57522[(2)] = inst_57397);

(statearr_57452_57522[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57425 === (33))){
var inst_57384 = (state_57424[(23)]);
var inst_57386 = cljs.core.chunked_seq_QMARK_.call(null,inst_57384);
var state_57424__$1 = state_57424;
if(inst_57386){
var statearr_57453_57523 = state_57424__$1;
(statearr_57453_57523[(1)] = (36));

} else {
var statearr_57454_57524 = state_57424__$1;
(statearr_57454_57524[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57425 === (13))){
var inst_57315 = (state_57424[(24)]);
var inst_57318 = cljs.core.async.close_BANG_.call(null,inst_57315);
var state_57424__$1 = state_57424;
var statearr_57455_57525 = state_57424__$1;
(statearr_57455_57525[(2)] = inst_57318);

(statearr_57455_57525[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57425 === (22))){
var inst_57338 = (state_57424[(8)]);
var inst_57341 = cljs.core.async.close_BANG_.call(null,inst_57338);
var state_57424__$1 = state_57424;
var statearr_57456_57526 = state_57424__$1;
(statearr_57456_57526[(2)] = inst_57341);

(statearr_57456_57526[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57425 === (36))){
var inst_57384 = (state_57424[(23)]);
var inst_57388 = cljs.core.chunk_first.call(null,inst_57384);
var inst_57389 = cljs.core.chunk_rest.call(null,inst_57384);
var inst_57390 = cljs.core.count.call(null,inst_57388);
var inst_57366 = inst_57389;
var inst_57367 = inst_57388;
var inst_57368 = inst_57390;
var inst_57369 = (0);
var state_57424__$1 = (function (){var statearr_57457 = state_57424;
(statearr_57457[(9)] = inst_57367);

(statearr_57457[(10)] = inst_57369);

(statearr_57457[(19)] = inst_57368);

(statearr_57457[(20)] = inst_57366);

return statearr_57457;
})();
var statearr_57458_57527 = state_57424__$1;
(statearr_57458_57527[(2)] = null);

(statearr_57458_57527[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57425 === (41))){
var inst_57384 = (state_57424[(23)]);
var inst_57399 = (state_57424[(2)]);
var inst_57400 = cljs.core.next.call(null,inst_57384);
var inst_57366 = inst_57400;
var inst_57367 = null;
var inst_57368 = (0);
var inst_57369 = (0);
var state_57424__$1 = (function (){var statearr_57459 = state_57424;
(statearr_57459[(9)] = inst_57367);

(statearr_57459[(25)] = inst_57399);

(statearr_57459[(10)] = inst_57369);

(statearr_57459[(19)] = inst_57368);

(statearr_57459[(20)] = inst_57366);

return statearr_57459;
})();
var statearr_57460_57528 = state_57424__$1;
(statearr_57460_57528[(2)] = null);

(statearr_57460_57528[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57425 === (43))){
var state_57424__$1 = state_57424;
var statearr_57461_57529 = state_57424__$1;
(statearr_57461_57529[(2)] = null);

(statearr_57461_57529[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57425 === (29))){
var inst_57408 = (state_57424[(2)]);
var state_57424__$1 = state_57424;
var statearr_57462_57530 = state_57424__$1;
(statearr_57462_57530[(2)] = inst_57408);

(statearr_57462_57530[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57425 === (44))){
var inst_57417 = (state_57424[(2)]);
var state_57424__$1 = (function (){var statearr_57463 = state_57424;
(statearr_57463[(26)] = inst_57417);

return statearr_57463;
})();
var statearr_57464_57531 = state_57424__$1;
(statearr_57464_57531[(2)] = null);

(statearr_57464_57531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57425 === (6))){
var inst_57358 = (state_57424[(27)]);
var inst_57357 = cljs.core.deref.call(null,cs);
var inst_57358__$1 = cljs.core.keys.call(null,inst_57357);
var inst_57359 = cljs.core.count.call(null,inst_57358__$1);
var inst_57360 = cljs.core.reset_BANG_.call(null,dctr,inst_57359);
var inst_57365 = cljs.core.seq.call(null,inst_57358__$1);
var inst_57366 = inst_57365;
var inst_57367 = null;
var inst_57368 = (0);
var inst_57369 = (0);
var state_57424__$1 = (function (){var statearr_57465 = state_57424;
(statearr_57465[(9)] = inst_57367);

(statearr_57465[(10)] = inst_57369);

(statearr_57465[(28)] = inst_57360);

(statearr_57465[(19)] = inst_57368);

(statearr_57465[(20)] = inst_57366);

(statearr_57465[(27)] = inst_57358__$1);

return statearr_57465;
})();
var statearr_57466_57532 = state_57424__$1;
(statearr_57466_57532[(2)] = null);

(statearr_57466_57532[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57425 === (28))){
var inst_57384 = (state_57424[(23)]);
var inst_57366 = (state_57424[(20)]);
var inst_57384__$1 = cljs.core.seq.call(null,inst_57366);
var state_57424__$1 = (function (){var statearr_57467 = state_57424;
(statearr_57467[(23)] = inst_57384__$1);

return statearr_57467;
})();
if(inst_57384__$1){
var statearr_57468_57533 = state_57424__$1;
(statearr_57468_57533[(1)] = (33));

} else {
var statearr_57469_57534 = state_57424__$1;
(statearr_57469_57534[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57425 === (25))){
var inst_57369 = (state_57424[(10)]);
var inst_57368 = (state_57424[(19)]);
var inst_57371 = (inst_57369 < inst_57368);
var inst_57372 = inst_57371;
var state_57424__$1 = state_57424;
if(cljs.core.truth_(inst_57372)){
var statearr_57470_57535 = state_57424__$1;
(statearr_57470_57535[(1)] = (27));

} else {
var statearr_57471_57536 = state_57424__$1;
(statearr_57471_57536[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57425 === (34))){
var state_57424__$1 = state_57424;
var statearr_57472_57537 = state_57424__$1;
(statearr_57472_57537[(2)] = null);

(statearr_57472_57537[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57425 === (17))){
var state_57424__$1 = state_57424;
var statearr_57473_57538 = state_57424__$1;
(statearr_57473_57538[(2)] = null);

(statearr_57473_57538[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57425 === (3))){
var inst_57422 = (state_57424[(2)]);
var state_57424__$1 = state_57424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57424__$1,inst_57422);
} else {
if((state_val_57425 === (12))){
var inst_57353 = (state_57424[(2)]);
var state_57424__$1 = state_57424;
var statearr_57474_57539 = state_57424__$1;
(statearr_57474_57539[(2)] = inst_57353);

(statearr_57474_57539[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57425 === (2))){
var state_57424__$1 = state_57424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57424__$1,(4),ch);
} else {
if((state_val_57425 === (23))){
var state_57424__$1 = state_57424;
var statearr_57475_57540 = state_57424__$1;
(statearr_57475_57540[(2)] = null);

(statearr_57475_57540[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57425 === (35))){
var inst_57406 = (state_57424[(2)]);
var state_57424__$1 = state_57424;
var statearr_57476_57541 = state_57424__$1;
(statearr_57476_57541[(2)] = inst_57406);

(statearr_57476_57541[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57425 === (19))){
var inst_57325 = (state_57424[(7)]);
var inst_57329 = cljs.core.chunk_first.call(null,inst_57325);
var inst_57330 = cljs.core.chunk_rest.call(null,inst_57325);
var inst_57331 = cljs.core.count.call(null,inst_57329);
var inst_57303 = inst_57330;
var inst_57304 = inst_57329;
var inst_57305 = inst_57331;
var inst_57306 = (0);
var state_57424__$1 = (function (){var statearr_57477 = state_57424;
(statearr_57477[(13)] = inst_57304);

(statearr_57477[(14)] = inst_57303);

(statearr_57477[(16)] = inst_57305);

(statearr_57477[(17)] = inst_57306);

return statearr_57477;
})();
var statearr_57478_57542 = state_57424__$1;
(statearr_57478_57542[(2)] = null);

(statearr_57478_57542[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57425 === (11))){
var inst_57303 = (state_57424[(14)]);
var inst_57325 = (state_57424[(7)]);
var inst_57325__$1 = cljs.core.seq.call(null,inst_57303);
var state_57424__$1 = (function (){var statearr_57479 = state_57424;
(statearr_57479[(7)] = inst_57325__$1);

return statearr_57479;
})();
if(inst_57325__$1){
var statearr_57480_57543 = state_57424__$1;
(statearr_57480_57543[(1)] = (16));

} else {
var statearr_57481_57544 = state_57424__$1;
(statearr_57481_57544[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57425 === (9))){
var inst_57355 = (state_57424[(2)]);
var state_57424__$1 = state_57424;
var statearr_57482_57545 = state_57424__$1;
(statearr_57482_57545[(2)] = inst_57355);

(statearr_57482_57545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57425 === (5))){
var inst_57301 = cljs.core.deref.call(null,cs);
var inst_57302 = cljs.core.seq.call(null,inst_57301);
var inst_57303 = inst_57302;
var inst_57304 = null;
var inst_57305 = (0);
var inst_57306 = (0);
var state_57424__$1 = (function (){var statearr_57483 = state_57424;
(statearr_57483[(13)] = inst_57304);

(statearr_57483[(14)] = inst_57303);

(statearr_57483[(16)] = inst_57305);

(statearr_57483[(17)] = inst_57306);

return statearr_57483;
})();
var statearr_57484_57546 = state_57424__$1;
(statearr_57484_57546[(2)] = null);

(statearr_57484_57546[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57425 === (14))){
var state_57424__$1 = state_57424;
var statearr_57485_57547 = state_57424__$1;
(statearr_57485_57547[(2)] = null);

(statearr_57485_57547[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57425 === (45))){
var inst_57414 = (state_57424[(2)]);
var state_57424__$1 = state_57424;
var statearr_57486_57548 = state_57424__$1;
(statearr_57486_57548[(2)] = inst_57414);

(statearr_57486_57548[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57425 === (26))){
var inst_57358 = (state_57424[(27)]);
var inst_57410 = (state_57424[(2)]);
var inst_57411 = cljs.core.seq.call(null,inst_57358);
var state_57424__$1 = (function (){var statearr_57487 = state_57424;
(statearr_57487[(29)] = inst_57410);

return statearr_57487;
})();
if(inst_57411){
var statearr_57488_57549 = state_57424__$1;
(statearr_57488_57549[(1)] = (42));

} else {
var statearr_57489_57550 = state_57424__$1;
(statearr_57489_57550[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57425 === (16))){
var inst_57325 = (state_57424[(7)]);
var inst_57327 = cljs.core.chunked_seq_QMARK_.call(null,inst_57325);
var state_57424__$1 = state_57424;
if(inst_57327){
var statearr_57490_57551 = state_57424__$1;
(statearr_57490_57551[(1)] = (19));

} else {
var statearr_57491_57552 = state_57424__$1;
(statearr_57491_57552[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57425 === (38))){
var inst_57403 = (state_57424[(2)]);
var state_57424__$1 = state_57424;
var statearr_57492_57553 = state_57424__$1;
(statearr_57492_57553[(2)] = inst_57403);

(statearr_57492_57553[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57425 === (30))){
var state_57424__$1 = state_57424;
var statearr_57493_57554 = state_57424__$1;
(statearr_57493_57554[(2)] = null);

(statearr_57493_57554[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57425 === (10))){
var inst_57304 = (state_57424[(13)]);
var inst_57306 = (state_57424[(17)]);
var inst_57314 = cljs.core._nth.call(null,inst_57304,inst_57306);
var inst_57315 = cljs.core.nth.call(null,inst_57314,(0),null);
var inst_57316 = cljs.core.nth.call(null,inst_57314,(1),null);
var state_57424__$1 = (function (){var statearr_57494 = state_57424;
(statearr_57494[(24)] = inst_57315);

return statearr_57494;
})();
if(cljs.core.truth_(inst_57316)){
var statearr_57495_57555 = state_57424__$1;
(statearr_57495_57555[(1)] = (13));

} else {
var statearr_57496_57556 = state_57424__$1;
(statearr_57496_57556[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57425 === (18))){
var inst_57351 = (state_57424[(2)]);
var state_57424__$1 = state_57424;
var statearr_57497_57557 = state_57424__$1;
(statearr_57497_57557[(2)] = inst_57351);

(statearr_57497_57557[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57425 === (42))){
var state_57424__$1 = state_57424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57424__$1,(45),dchan);
} else {
if((state_val_57425 === (37))){
var inst_57294 = (state_57424[(11)]);
var inst_57384 = (state_57424[(23)]);
var inst_57393 = (state_57424[(22)]);
var inst_57393__$1 = cljs.core.first.call(null,inst_57384);
var inst_57394 = cljs.core.async.put_BANG_.call(null,inst_57393__$1,inst_57294,done);
var state_57424__$1 = (function (){var statearr_57498 = state_57424;
(statearr_57498[(22)] = inst_57393__$1);

return statearr_57498;
})();
if(cljs.core.truth_(inst_57394)){
var statearr_57499_57558 = state_57424__$1;
(statearr_57499_57558[(1)] = (39));

} else {
var statearr_57500_57559 = state_57424__$1;
(statearr_57500_57559[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57425 === (8))){
var inst_57305 = (state_57424[(16)]);
var inst_57306 = (state_57424[(17)]);
var inst_57308 = (inst_57306 < inst_57305);
var inst_57309 = inst_57308;
var state_57424__$1 = state_57424;
if(cljs.core.truth_(inst_57309)){
var statearr_57501_57560 = state_57424__$1;
(statearr_57501_57560[(1)] = (10));

} else {
var statearr_57502_57561 = state_57424__$1;
(statearr_57502_57561[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__54834__auto___57507,cs,m,dchan,dctr,done))
;
return ((function (switch__54677__auto__,c__54834__auto___57507,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__54678__auto__ = null;
var cljs$core$async$mult_$_state_machine__54678__auto____0 = (function (){
var statearr_57503 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57503[(0)] = cljs$core$async$mult_$_state_machine__54678__auto__);

(statearr_57503[(1)] = (1));

return statearr_57503;
});
var cljs$core$async$mult_$_state_machine__54678__auto____1 = (function (state_57424){
while(true){
var ret_value__54679__auto__ = (function (){try{while(true){
var result__54680__auto__ = switch__54677__auto__.call(null,state_57424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54680__auto__;
}
break;
}
}catch (e57504){if((e57504 instanceof Object)){
var ex__54681__auto__ = e57504;
var statearr_57505_57562 = state_57424;
(statearr_57505_57562[(5)] = ex__54681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57563 = state_57424;
state_57424 = G__57563;
continue;
} else {
return ret_value__54679__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__54678__auto__ = function(state_57424){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__54678__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__54678__auto____1.call(this,state_57424);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__54678__auto____0;
cljs$core$async$mult_$_state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__54678__auto____1;
return cljs$core$async$mult_$_state_machine__54678__auto__;
})()
;})(switch__54677__auto__,c__54834__auto___57507,cs,m,dchan,dctr,done))
})();
var state__54836__auto__ = (function (){var statearr_57506 = f__54835__auto__.call(null);
(statearr_57506[(6)] = c__54834__auto___57507);

return statearr_57506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54836__auto__);
});})(c__54834__auto___57507,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__57565 = arguments.length;
switch (G__57565) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___57577 = arguments.length;
var i__4500__auto___57578 = (0);
while(true){
if((i__4500__auto___57578 < len__4499__auto___57577)){
args__4502__auto__.push((arguments[i__4500__auto___57578]));

var G__57579 = (i__4500__auto___57578 + (1));
i__4500__auto___57578 = G__57579;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__57571){
var map__57572 = p__57571;
var map__57572__$1 = ((((!((map__57572 == null)))?(((((map__57572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57572):map__57572);
var opts = map__57572__$1;
var statearr_57574_57580 = state;
(statearr_57574_57580[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__57572,map__57572__$1,opts){
return (function (val){
var statearr_57575_57581 = state;
(statearr_57575_57581[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__57572,map__57572__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_57576_57582 = state;
(statearr_57576_57582[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq57567){
var G__57568 = cljs.core.first.call(null,seq57567);
var seq57567__$1 = cljs.core.next.call(null,seq57567);
var G__57569 = cljs.core.first.call(null,seq57567__$1);
var seq57567__$2 = cljs.core.next.call(null,seq57567__$1);
var G__57570 = cljs.core.first.call(null,seq57567__$2);
var seq57567__$3 = cljs.core.next.call(null,seq57567__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57568,G__57569,G__57570,seq57567__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async57583 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57583 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta57584){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta57584 = meta57584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async57583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_57585,meta57584__$1){
var self__ = this;
var _57585__$1 = this;
return (new cljs.core.async.t_cljs$core$async57583(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta57584__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57583.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_57585){
var self__ = this;
var _57585__$1 = this;
return self__.meta57584;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57583.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57583.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57583.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57583.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57583.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57583.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57583.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57583.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57583.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta57584","meta57584",-435972011,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57583.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async57583.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57583";

cljs.core.async.t_cljs$core$async57583.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async57583");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57583.
 */
cljs.core.async.__GT_t_cljs$core$async57583 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async57583(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta57584){
return (new cljs.core.async.t_cljs$core$async57583(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta57584));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async57583(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__54834__auto___57747 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54834__auto___57747,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__54835__auto__ = (function (){var switch__54677__auto__ = ((function (c__54834__auto___57747,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_57687){
var state_val_57688 = (state_57687[(1)]);
if((state_val_57688 === (7))){
var inst_57602 = (state_57687[(2)]);
var state_57687__$1 = state_57687;
var statearr_57689_57748 = state_57687__$1;
(statearr_57689_57748[(2)] = inst_57602);

(statearr_57689_57748[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (20))){
var inst_57614 = (state_57687[(7)]);
var state_57687__$1 = state_57687;
var statearr_57690_57749 = state_57687__$1;
(statearr_57690_57749[(2)] = inst_57614);

(statearr_57690_57749[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (27))){
var state_57687__$1 = state_57687;
var statearr_57691_57750 = state_57687__$1;
(statearr_57691_57750[(2)] = null);

(statearr_57691_57750[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (1))){
var inst_57589 = (state_57687[(8)]);
var inst_57589__$1 = calc_state.call(null);
var inst_57591 = (inst_57589__$1 == null);
var inst_57592 = cljs.core.not.call(null,inst_57591);
var state_57687__$1 = (function (){var statearr_57692 = state_57687;
(statearr_57692[(8)] = inst_57589__$1);

return statearr_57692;
})();
if(inst_57592){
var statearr_57693_57751 = state_57687__$1;
(statearr_57693_57751[(1)] = (2));

} else {
var statearr_57694_57752 = state_57687__$1;
(statearr_57694_57752[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (24))){
var inst_57638 = (state_57687[(9)]);
var inst_57661 = (state_57687[(10)]);
var inst_57647 = (state_57687[(11)]);
var inst_57661__$1 = inst_57638.call(null,inst_57647);
var state_57687__$1 = (function (){var statearr_57695 = state_57687;
(statearr_57695[(10)] = inst_57661__$1);

return statearr_57695;
})();
if(cljs.core.truth_(inst_57661__$1)){
var statearr_57696_57753 = state_57687__$1;
(statearr_57696_57753[(1)] = (29));

} else {
var statearr_57697_57754 = state_57687__$1;
(statearr_57697_57754[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (4))){
var inst_57605 = (state_57687[(2)]);
var state_57687__$1 = state_57687;
if(cljs.core.truth_(inst_57605)){
var statearr_57698_57755 = state_57687__$1;
(statearr_57698_57755[(1)] = (8));

} else {
var statearr_57699_57756 = state_57687__$1;
(statearr_57699_57756[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (15))){
var inst_57632 = (state_57687[(2)]);
var state_57687__$1 = state_57687;
if(cljs.core.truth_(inst_57632)){
var statearr_57700_57757 = state_57687__$1;
(statearr_57700_57757[(1)] = (19));

} else {
var statearr_57701_57758 = state_57687__$1;
(statearr_57701_57758[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (21))){
var inst_57637 = (state_57687[(12)]);
var inst_57637__$1 = (state_57687[(2)]);
var inst_57638 = cljs.core.get.call(null,inst_57637__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_57639 = cljs.core.get.call(null,inst_57637__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_57640 = cljs.core.get.call(null,inst_57637__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_57687__$1 = (function (){var statearr_57702 = state_57687;
(statearr_57702[(9)] = inst_57638);

(statearr_57702[(12)] = inst_57637__$1);

(statearr_57702[(13)] = inst_57639);

return statearr_57702;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_57687__$1,(22),inst_57640);
} else {
if((state_val_57688 === (31))){
var inst_57669 = (state_57687[(2)]);
var state_57687__$1 = state_57687;
if(cljs.core.truth_(inst_57669)){
var statearr_57703_57759 = state_57687__$1;
(statearr_57703_57759[(1)] = (32));

} else {
var statearr_57704_57760 = state_57687__$1;
(statearr_57704_57760[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (32))){
var inst_57646 = (state_57687[(14)]);
var state_57687__$1 = state_57687;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57687__$1,(35),out,inst_57646);
} else {
if((state_val_57688 === (33))){
var inst_57637 = (state_57687[(12)]);
var inst_57614 = inst_57637;
var state_57687__$1 = (function (){var statearr_57705 = state_57687;
(statearr_57705[(7)] = inst_57614);

return statearr_57705;
})();
var statearr_57706_57761 = state_57687__$1;
(statearr_57706_57761[(2)] = null);

(statearr_57706_57761[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (13))){
var inst_57614 = (state_57687[(7)]);
var inst_57621 = inst_57614.cljs$lang$protocol_mask$partition0$;
var inst_57622 = (inst_57621 & (64));
var inst_57623 = inst_57614.cljs$core$ISeq$;
var inst_57624 = (cljs.core.PROTOCOL_SENTINEL === inst_57623);
var inst_57625 = ((inst_57622) || (inst_57624));
var state_57687__$1 = state_57687;
if(cljs.core.truth_(inst_57625)){
var statearr_57707_57762 = state_57687__$1;
(statearr_57707_57762[(1)] = (16));

} else {
var statearr_57708_57763 = state_57687__$1;
(statearr_57708_57763[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (22))){
var inst_57646 = (state_57687[(14)]);
var inst_57647 = (state_57687[(11)]);
var inst_57645 = (state_57687[(2)]);
var inst_57646__$1 = cljs.core.nth.call(null,inst_57645,(0),null);
var inst_57647__$1 = cljs.core.nth.call(null,inst_57645,(1),null);
var inst_57648 = (inst_57646__$1 == null);
var inst_57649 = cljs.core._EQ_.call(null,inst_57647__$1,change);
var inst_57650 = ((inst_57648) || (inst_57649));
var state_57687__$1 = (function (){var statearr_57709 = state_57687;
(statearr_57709[(14)] = inst_57646__$1);

(statearr_57709[(11)] = inst_57647__$1);

return statearr_57709;
})();
if(cljs.core.truth_(inst_57650)){
var statearr_57710_57764 = state_57687__$1;
(statearr_57710_57764[(1)] = (23));

} else {
var statearr_57711_57765 = state_57687__$1;
(statearr_57711_57765[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (36))){
var inst_57637 = (state_57687[(12)]);
var inst_57614 = inst_57637;
var state_57687__$1 = (function (){var statearr_57712 = state_57687;
(statearr_57712[(7)] = inst_57614);

return statearr_57712;
})();
var statearr_57713_57766 = state_57687__$1;
(statearr_57713_57766[(2)] = null);

(statearr_57713_57766[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (29))){
var inst_57661 = (state_57687[(10)]);
var state_57687__$1 = state_57687;
var statearr_57714_57767 = state_57687__$1;
(statearr_57714_57767[(2)] = inst_57661);

(statearr_57714_57767[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (6))){
var state_57687__$1 = state_57687;
var statearr_57715_57768 = state_57687__$1;
(statearr_57715_57768[(2)] = false);

(statearr_57715_57768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (28))){
var inst_57657 = (state_57687[(2)]);
var inst_57658 = calc_state.call(null);
var inst_57614 = inst_57658;
var state_57687__$1 = (function (){var statearr_57716 = state_57687;
(statearr_57716[(7)] = inst_57614);

(statearr_57716[(15)] = inst_57657);

return statearr_57716;
})();
var statearr_57717_57769 = state_57687__$1;
(statearr_57717_57769[(2)] = null);

(statearr_57717_57769[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (25))){
var inst_57683 = (state_57687[(2)]);
var state_57687__$1 = state_57687;
var statearr_57718_57770 = state_57687__$1;
(statearr_57718_57770[(2)] = inst_57683);

(statearr_57718_57770[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (34))){
var inst_57681 = (state_57687[(2)]);
var state_57687__$1 = state_57687;
var statearr_57719_57771 = state_57687__$1;
(statearr_57719_57771[(2)] = inst_57681);

(statearr_57719_57771[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (17))){
var state_57687__$1 = state_57687;
var statearr_57720_57772 = state_57687__$1;
(statearr_57720_57772[(2)] = false);

(statearr_57720_57772[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (3))){
var state_57687__$1 = state_57687;
var statearr_57721_57773 = state_57687__$1;
(statearr_57721_57773[(2)] = false);

(statearr_57721_57773[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (12))){
var inst_57685 = (state_57687[(2)]);
var state_57687__$1 = state_57687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57687__$1,inst_57685);
} else {
if((state_val_57688 === (2))){
var inst_57589 = (state_57687[(8)]);
var inst_57594 = inst_57589.cljs$lang$protocol_mask$partition0$;
var inst_57595 = (inst_57594 & (64));
var inst_57596 = inst_57589.cljs$core$ISeq$;
var inst_57597 = (cljs.core.PROTOCOL_SENTINEL === inst_57596);
var inst_57598 = ((inst_57595) || (inst_57597));
var state_57687__$1 = state_57687;
if(cljs.core.truth_(inst_57598)){
var statearr_57722_57774 = state_57687__$1;
(statearr_57722_57774[(1)] = (5));

} else {
var statearr_57723_57775 = state_57687__$1;
(statearr_57723_57775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (23))){
var inst_57646 = (state_57687[(14)]);
var inst_57652 = (inst_57646 == null);
var state_57687__$1 = state_57687;
if(cljs.core.truth_(inst_57652)){
var statearr_57724_57776 = state_57687__$1;
(statearr_57724_57776[(1)] = (26));

} else {
var statearr_57725_57777 = state_57687__$1;
(statearr_57725_57777[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (35))){
var inst_57672 = (state_57687[(2)]);
var state_57687__$1 = state_57687;
if(cljs.core.truth_(inst_57672)){
var statearr_57726_57778 = state_57687__$1;
(statearr_57726_57778[(1)] = (36));

} else {
var statearr_57727_57779 = state_57687__$1;
(statearr_57727_57779[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (19))){
var inst_57614 = (state_57687[(7)]);
var inst_57634 = cljs.core.apply.call(null,cljs.core.hash_map,inst_57614);
var state_57687__$1 = state_57687;
var statearr_57728_57780 = state_57687__$1;
(statearr_57728_57780[(2)] = inst_57634);

(statearr_57728_57780[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (11))){
var inst_57614 = (state_57687[(7)]);
var inst_57618 = (inst_57614 == null);
var inst_57619 = cljs.core.not.call(null,inst_57618);
var state_57687__$1 = state_57687;
if(inst_57619){
var statearr_57729_57781 = state_57687__$1;
(statearr_57729_57781[(1)] = (13));

} else {
var statearr_57730_57782 = state_57687__$1;
(statearr_57730_57782[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (9))){
var inst_57589 = (state_57687[(8)]);
var state_57687__$1 = state_57687;
var statearr_57731_57783 = state_57687__$1;
(statearr_57731_57783[(2)] = inst_57589);

(statearr_57731_57783[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (5))){
var state_57687__$1 = state_57687;
var statearr_57732_57784 = state_57687__$1;
(statearr_57732_57784[(2)] = true);

(statearr_57732_57784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (14))){
var state_57687__$1 = state_57687;
var statearr_57733_57785 = state_57687__$1;
(statearr_57733_57785[(2)] = false);

(statearr_57733_57785[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (26))){
var inst_57647 = (state_57687[(11)]);
var inst_57654 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_57647);
var state_57687__$1 = state_57687;
var statearr_57734_57786 = state_57687__$1;
(statearr_57734_57786[(2)] = inst_57654);

(statearr_57734_57786[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (16))){
var state_57687__$1 = state_57687;
var statearr_57735_57787 = state_57687__$1;
(statearr_57735_57787[(2)] = true);

(statearr_57735_57787[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (38))){
var inst_57677 = (state_57687[(2)]);
var state_57687__$1 = state_57687;
var statearr_57736_57788 = state_57687__$1;
(statearr_57736_57788[(2)] = inst_57677);

(statearr_57736_57788[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (30))){
var inst_57638 = (state_57687[(9)]);
var inst_57639 = (state_57687[(13)]);
var inst_57647 = (state_57687[(11)]);
var inst_57664 = cljs.core.empty_QMARK_.call(null,inst_57638);
var inst_57665 = inst_57639.call(null,inst_57647);
var inst_57666 = cljs.core.not.call(null,inst_57665);
var inst_57667 = ((inst_57664) && (inst_57666));
var state_57687__$1 = state_57687;
var statearr_57737_57789 = state_57687__$1;
(statearr_57737_57789[(2)] = inst_57667);

(statearr_57737_57789[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (10))){
var inst_57589 = (state_57687[(8)]);
var inst_57610 = (state_57687[(2)]);
var inst_57611 = cljs.core.get.call(null,inst_57610,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_57612 = cljs.core.get.call(null,inst_57610,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_57613 = cljs.core.get.call(null,inst_57610,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_57614 = inst_57589;
var state_57687__$1 = (function (){var statearr_57738 = state_57687;
(statearr_57738[(7)] = inst_57614);

(statearr_57738[(16)] = inst_57612);

(statearr_57738[(17)] = inst_57613);

(statearr_57738[(18)] = inst_57611);

return statearr_57738;
})();
var statearr_57739_57790 = state_57687__$1;
(statearr_57739_57790[(2)] = null);

(statearr_57739_57790[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (18))){
var inst_57629 = (state_57687[(2)]);
var state_57687__$1 = state_57687;
var statearr_57740_57791 = state_57687__$1;
(statearr_57740_57791[(2)] = inst_57629);

(statearr_57740_57791[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (37))){
var state_57687__$1 = state_57687;
var statearr_57741_57792 = state_57687__$1;
(statearr_57741_57792[(2)] = null);

(statearr_57741_57792[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57688 === (8))){
var inst_57589 = (state_57687[(8)]);
var inst_57607 = cljs.core.apply.call(null,cljs.core.hash_map,inst_57589);
var state_57687__$1 = state_57687;
var statearr_57742_57793 = state_57687__$1;
(statearr_57742_57793[(2)] = inst_57607);

(statearr_57742_57793[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__54834__auto___57747,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__54677__auto__,c__54834__auto___57747,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__54678__auto__ = null;
var cljs$core$async$mix_$_state_machine__54678__auto____0 = (function (){
var statearr_57743 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57743[(0)] = cljs$core$async$mix_$_state_machine__54678__auto__);

(statearr_57743[(1)] = (1));

return statearr_57743;
});
var cljs$core$async$mix_$_state_machine__54678__auto____1 = (function (state_57687){
while(true){
var ret_value__54679__auto__ = (function (){try{while(true){
var result__54680__auto__ = switch__54677__auto__.call(null,state_57687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54680__auto__;
}
break;
}
}catch (e57744){if((e57744 instanceof Object)){
var ex__54681__auto__ = e57744;
var statearr_57745_57794 = state_57687;
(statearr_57745_57794[(5)] = ex__54681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57795 = state_57687;
state_57687 = G__57795;
continue;
} else {
return ret_value__54679__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__54678__auto__ = function(state_57687){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__54678__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__54678__auto____1.call(this,state_57687);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__54678__auto____0;
cljs$core$async$mix_$_state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__54678__auto____1;
return cljs$core$async$mix_$_state_machine__54678__auto__;
})()
;})(switch__54677__auto__,c__54834__auto___57747,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__54836__auto__ = (function (){var statearr_57746 = f__54835__auto__.call(null);
(statearr_57746[(6)] = c__54834__auto___57747);

return statearr_57746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54836__auto__);
});})(c__54834__auto___57747,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__57797 = arguments.length;
switch (G__57797) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__57801 = arguments.length;
switch (G__57801) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__57799_SHARP_){
if(cljs.core.truth_(p1__57799_SHARP_.call(null,topic))){
return p1__57799_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__57799_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async57802 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57802 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta57803){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta57803 = meta57803;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async57802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_57804,meta57803__$1){
var self__ = this;
var _57804__$1 = this;
return (new cljs.core.async.t_cljs$core$async57802(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta57803__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async57802.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_57804){
var self__ = this;
var _57804__$1 = this;
return self__.meta57803;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async57802.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57802.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async57802.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57802.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async57802.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async57802.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async57802.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async57802.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta57803","meta57803",-1747506490,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async57802.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async57802.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57802";

cljs.core.async.t_cljs$core$async57802.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async57802");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57802.
 */
cljs.core.async.__GT_t_cljs$core$async57802 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async57802(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta57803){
return (new cljs.core.async.t_cljs$core$async57802(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta57803));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async57802(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__54834__auto___57922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54834__auto___57922,mults,ensure_mult,p){
return (function (){
var f__54835__auto__ = (function (){var switch__54677__auto__ = ((function (c__54834__auto___57922,mults,ensure_mult,p){
return (function (state_57876){
var state_val_57877 = (state_57876[(1)]);
if((state_val_57877 === (7))){
var inst_57872 = (state_57876[(2)]);
var state_57876__$1 = state_57876;
var statearr_57878_57923 = state_57876__$1;
(statearr_57878_57923[(2)] = inst_57872);

(statearr_57878_57923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57877 === (20))){
var state_57876__$1 = state_57876;
var statearr_57879_57924 = state_57876__$1;
(statearr_57879_57924[(2)] = null);

(statearr_57879_57924[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57877 === (1))){
var state_57876__$1 = state_57876;
var statearr_57880_57925 = state_57876__$1;
(statearr_57880_57925[(2)] = null);

(statearr_57880_57925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57877 === (24))){
var inst_57855 = (state_57876[(7)]);
var inst_57864 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_57855);
var state_57876__$1 = state_57876;
var statearr_57881_57926 = state_57876__$1;
(statearr_57881_57926[(2)] = inst_57864);

(statearr_57881_57926[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57877 === (4))){
var inst_57807 = (state_57876[(8)]);
var inst_57807__$1 = (state_57876[(2)]);
var inst_57808 = (inst_57807__$1 == null);
var state_57876__$1 = (function (){var statearr_57882 = state_57876;
(statearr_57882[(8)] = inst_57807__$1);

return statearr_57882;
})();
if(cljs.core.truth_(inst_57808)){
var statearr_57883_57927 = state_57876__$1;
(statearr_57883_57927[(1)] = (5));

} else {
var statearr_57884_57928 = state_57876__$1;
(statearr_57884_57928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57877 === (15))){
var inst_57849 = (state_57876[(2)]);
var state_57876__$1 = state_57876;
var statearr_57885_57929 = state_57876__$1;
(statearr_57885_57929[(2)] = inst_57849);

(statearr_57885_57929[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57877 === (21))){
var inst_57869 = (state_57876[(2)]);
var state_57876__$1 = (function (){var statearr_57886 = state_57876;
(statearr_57886[(9)] = inst_57869);

return statearr_57886;
})();
var statearr_57887_57930 = state_57876__$1;
(statearr_57887_57930[(2)] = null);

(statearr_57887_57930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57877 === (13))){
var inst_57831 = (state_57876[(10)]);
var inst_57833 = cljs.core.chunked_seq_QMARK_.call(null,inst_57831);
var state_57876__$1 = state_57876;
if(inst_57833){
var statearr_57888_57931 = state_57876__$1;
(statearr_57888_57931[(1)] = (16));

} else {
var statearr_57889_57932 = state_57876__$1;
(statearr_57889_57932[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57877 === (22))){
var inst_57861 = (state_57876[(2)]);
var state_57876__$1 = state_57876;
if(cljs.core.truth_(inst_57861)){
var statearr_57890_57933 = state_57876__$1;
(statearr_57890_57933[(1)] = (23));

} else {
var statearr_57891_57934 = state_57876__$1;
(statearr_57891_57934[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57877 === (6))){
var inst_57807 = (state_57876[(8)]);
var inst_57855 = (state_57876[(7)]);
var inst_57857 = (state_57876[(11)]);
var inst_57855__$1 = topic_fn.call(null,inst_57807);
var inst_57856 = cljs.core.deref.call(null,mults);
var inst_57857__$1 = cljs.core.get.call(null,inst_57856,inst_57855__$1);
var state_57876__$1 = (function (){var statearr_57892 = state_57876;
(statearr_57892[(7)] = inst_57855__$1);

(statearr_57892[(11)] = inst_57857__$1);

return statearr_57892;
})();
if(cljs.core.truth_(inst_57857__$1)){
var statearr_57893_57935 = state_57876__$1;
(statearr_57893_57935[(1)] = (19));

} else {
var statearr_57894_57936 = state_57876__$1;
(statearr_57894_57936[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57877 === (25))){
var inst_57866 = (state_57876[(2)]);
var state_57876__$1 = state_57876;
var statearr_57895_57937 = state_57876__$1;
(statearr_57895_57937[(2)] = inst_57866);

(statearr_57895_57937[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57877 === (17))){
var inst_57831 = (state_57876[(10)]);
var inst_57840 = cljs.core.first.call(null,inst_57831);
var inst_57841 = cljs.core.async.muxch_STAR_.call(null,inst_57840);
var inst_57842 = cljs.core.async.close_BANG_.call(null,inst_57841);
var inst_57843 = cljs.core.next.call(null,inst_57831);
var inst_57817 = inst_57843;
var inst_57818 = null;
var inst_57819 = (0);
var inst_57820 = (0);
var state_57876__$1 = (function (){var statearr_57896 = state_57876;
(statearr_57896[(12)] = inst_57819);

(statearr_57896[(13)] = inst_57817);

(statearr_57896[(14)] = inst_57820);

(statearr_57896[(15)] = inst_57818);

(statearr_57896[(16)] = inst_57842);

return statearr_57896;
})();
var statearr_57897_57938 = state_57876__$1;
(statearr_57897_57938[(2)] = null);

(statearr_57897_57938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57877 === (3))){
var inst_57874 = (state_57876[(2)]);
var state_57876__$1 = state_57876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57876__$1,inst_57874);
} else {
if((state_val_57877 === (12))){
var inst_57851 = (state_57876[(2)]);
var state_57876__$1 = state_57876;
var statearr_57898_57939 = state_57876__$1;
(statearr_57898_57939[(2)] = inst_57851);

(statearr_57898_57939[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57877 === (2))){
var state_57876__$1 = state_57876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57876__$1,(4),ch);
} else {
if((state_val_57877 === (23))){
var state_57876__$1 = state_57876;
var statearr_57899_57940 = state_57876__$1;
(statearr_57899_57940[(2)] = null);

(statearr_57899_57940[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57877 === (19))){
var inst_57807 = (state_57876[(8)]);
var inst_57857 = (state_57876[(11)]);
var inst_57859 = cljs.core.async.muxch_STAR_.call(null,inst_57857);
var state_57876__$1 = state_57876;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57876__$1,(22),inst_57859,inst_57807);
} else {
if((state_val_57877 === (11))){
var inst_57817 = (state_57876[(13)]);
var inst_57831 = (state_57876[(10)]);
var inst_57831__$1 = cljs.core.seq.call(null,inst_57817);
var state_57876__$1 = (function (){var statearr_57900 = state_57876;
(statearr_57900[(10)] = inst_57831__$1);

return statearr_57900;
})();
if(inst_57831__$1){
var statearr_57901_57941 = state_57876__$1;
(statearr_57901_57941[(1)] = (13));

} else {
var statearr_57902_57942 = state_57876__$1;
(statearr_57902_57942[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57877 === (9))){
var inst_57853 = (state_57876[(2)]);
var state_57876__$1 = state_57876;
var statearr_57903_57943 = state_57876__$1;
(statearr_57903_57943[(2)] = inst_57853);

(statearr_57903_57943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57877 === (5))){
var inst_57814 = cljs.core.deref.call(null,mults);
var inst_57815 = cljs.core.vals.call(null,inst_57814);
var inst_57816 = cljs.core.seq.call(null,inst_57815);
var inst_57817 = inst_57816;
var inst_57818 = null;
var inst_57819 = (0);
var inst_57820 = (0);
var state_57876__$1 = (function (){var statearr_57904 = state_57876;
(statearr_57904[(12)] = inst_57819);

(statearr_57904[(13)] = inst_57817);

(statearr_57904[(14)] = inst_57820);

(statearr_57904[(15)] = inst_57818);

return statearr_57904;
})();
var statearr_57905_57944 = state_57876__$1;
(statearr_57905_57944[(2)] = null);

(statearr_57905_57944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57877 === (14))){
var state_57876__$1 = state_57876;
var statearr_57909_57945 = state_57876__$1;
(statearr_57909_57945[(2)] = null);

(statearr_57909_57945[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57877 === (16))){
var inst_57831 = (state_57876[(10)]);
var inst_57835 = cljs.core.chunk_first.call(null,inst_57831);
var inst_57836 = cljs.core.chunk_rest.call(null,inst_57831);
var inst_57837 = cljs.core.count.call(null,inst_57835);
var inst_57817 = inst_57836;
var inst_57818 = inst_57835;
var inst_57819 = inst_57837;
var inst_57820 = (0);
var state_57876__$1 = (function (){var statearr_57910 = state_57876;
(statearr_57910[(12)] = inst_57819);

(statearr_57910[(13)] = inst_57817);

(statearr_57910[(14)] = inst_57820);

(statearr_57910[(15)] = inst_57818);

return statearr_57910;
})();
var statearr_57911_57946 = state_57876__$1;
(statearr_57911_57946[(2)] = null);

(statearr_57911_57946[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57877 === (10))){
var inst_57819 = (state_57876[(12)]);
var inst_57817 = (state_57876[(13)]);
var inst_57820 = (state_57876[(14)]);
var inst_57818 = (state_57876[(15)]);
var inst_57825 = cljs.core._nth.call(null,inst_57818,inst_57820);
var inst_57826 = cljs.core.async.muxch_STAR_.call(null,inst_57825);
var inst_57827 = cljs.core.async.close_BANG_.call(null,inst_57826);
var inst_57828 = (inst_57820 + (1));
var tmp57906 = inst_57819;
var tmp57907 = inst_57817;
var tmp57908 = inst_57818;
var inst_57817__$1 = tmp57907;
var inst_57818__$1 = tmp57908;
var inst_57819__$1 = tmp57906;
var inst_57820__$1 = inst_57828;
var state_57876__$1 = (function (){var statearr_57912 = state_57876;
(statearr_57912[(12)] = inst_57819__$1);

(statearr_57912[(13)] = inst_57817__$1);

(statearr_57912[(14)] = inst_57820__$1);

(statearr_57912[(15)] = inst_57818__$1);

(statearr_57912[(17)] = inst_57827);

return statearr_57912;
})();
var statearr_57913_57947 = state_57876__$1;
(statearr_57913_57947[(2)] = null);

(statearr_57913_57947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57877 === (18))){
var inst_57846 = (state_57876[(2)]);
var state_57876__$1 = state_57876;
var statearr_57914_57948 = state_57876__$1;
(statearr_57914_57948[(2)] = inst_57846);

(statearr_57914_57948[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57877 === (8))){
var inst_57819 = (state_57876[(12)]);
var inst_57820 = (state_57876[(14)]);
var inst_57822 = (inst_57820 < inst_57819);
var inst_57823 = inst_57822;
var state_57876__$1 = state_57876;
if(cljs.core.truth_(inst_57823)){
var statearr_57915_57949 = state_57876__$1;
(statearr_57915_57949[(1)] = (10));

} else {
var statearr_57916_57950 = state_57876__$1;
(statearr_57916_57950[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__54834__auto___57922,mults,ensure_mult,p))
;
return ((function (switch__54677__auto__,c__54834__auto___57922,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__54678__auto__ = null;
var cljs$core$async$state_machine__54678__auto____0 = (function (){
var statearr_57917 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57917[(0)] = cljs$core$async$state_machine__54678__auto__);

(statearr_57917[(1)] = (1));

return statearr_57917;
});
var cljs$core$async$state_machine__54678__auto____1 = (function (state_57876){
while(true){
var ret_value__54679__auto__ = (function (){try{while(true){
var result__54680__auto__ = switch__54677__auto__.call(null,state_57876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54680__auto__;
}
break;
}
}catch (e57918){if((e57918 instanceof Object)){
var ex__54681__auto__ = e57918;
var statearr_57919_57951 = state_57876;
(statearr_57919_57951[(5)] = ex__54681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57952 = state_57876;
state_57876 = G__57952;
continue;
} else {
return ret_value__54679__auto__;
}
break;
}
});
cljs$core$async$state_machine__54678__auto__ = function(state_57876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54678__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54678__auto____1.call(this,state_57876);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54678__auto____0;
cljs$core$async$state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54678__auto____1;
return cljs$core$async$state_machine__54678__auto__;
})()
;})(switch__54677__auto__,c__54834__auto___57922,mults,ensure_mult,p))
})();
var state__54836__auto__ = (function (){var statearr_57920 = f__54835__auto__.call(null);
(statearr_57920[(6)] = c__54834__auto___57922);

return statearr_57920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54836__auto__);
});})(c__54834__auto___57922,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__57954 = arguments.length;
switch (G__57954) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__57957 = arguments.length;
switch (G__57957) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__57960 = arguments.length;
switch (G__57960) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__54834__auto___58027 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54834__auto___58027,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__54835__auto__ = (function (){var switch__54677__auto__ = ((function (c__54834__auto___58027,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_57999){
var state_val_58000 = (state_57999[(1)]);
if((state_val_58000 === (7))){
var state_57999__$1 = state_57999;
var statearr_58001_58028 = state_57999__$1;
(statearr_58001_58028[(2)] = null);

(statearr_58001_58028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58000 === (1))){
var state_57999__$1 = state_57999;
var statearr_58002_58029 = state_57999__$1;
(statearr_58002_58029[(2)] = null);

(statearr_58002_58029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58000 === (4))){
var inst_57963 = (state_57999[(7)]);
var inst_57965 = (inst_57963 < cnt);
var state_57999__$1 = state_57999;
if(cljs.core.truth_(inst_57965)){
var statearr_58003_58030 = state_57999__$1;
(statearr_58003_58030[(1)] = (6));

} else {
var statearr_58004_58031 = state_57999__$1;
(statearr_58004_58031[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58000 === (15))){
var inst_57995 = (state_57999[(2)]);
var state_57999__$1 = state_57999;
var statearr_58005_58032 = state_57999__$1;
(statearr_58005_58032[(2)] = inst_57995);

(statearr_58005_58032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58000 === (13))){
var inst_57988 = cljs.core.async.close_BANG_.call(null,out);
var state_57999__$1 = state_57999;
var statearr_58006_58033 = state_57999__$1;
(statearr_58006_58033[(2)] = inst_57988);

(statearr_58006_58033[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58000 === (6))){
var state_57999__$1 = state_57999;
var statearr_58007_58034 = state_57999__$1;
(statearr_58007_58034[(2)] = null);

(statearr_58007_58034[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58000 === (3))){
var inst_57997 = (state_57999[(2)]);
var state_57999__$1 = state_57999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57999__$1,inst_57997);
} else {
if((state_val_58000 === (12))){
var inst_57985 = (state_57999[(8)]);
var inst_57985__$1 = (state_57999[(2)]);
var inst_57986 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_57985__$1);
var state_57999__$1 = (function (){var statearr_58008 = state_57999;
(statearr_58008[(8)] = inst_57985__$1);

return statearr_58008;
})();
if(cljs.core.truth_(inst_57986)){
var statearr_58009_58035 = state_57999__$1;
(statearr_58009_58035[(1)] = (13));

} else {
var statearr_58010_58036 = state_57999__$1;
(statearr_58010_58036[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58000 === (2))){
var inst_57962 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_57963 = (0);
var state_57999__$1 = (function (){var statearr_58011 = state_57999;
(statearr_58011[(7)] = inst_57963);

(statearr_58011[(9)] = inst_57962);

return statearr_58011;
})();
var statearr_58012_58037 = state_57999__$1;
(statearr_58012_58037[(2)] = null);

(statearr_58012_58037[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58000 === (11))){
var inst_57963 = (state_57999[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_57999,(10),Object,null,(9));
var inst_57972 = chs__$1.call(null,inst_57963);
var inst_57973 = done.call(null,inst_57963);
var inst_57974 = cljs.core.async.take_BANG_.call(null,inst_57972,inst_57973);
var state_57999__$1 = state_57999;
var statearr_58013_58038 = state_57999__$1;
(statearr_58013_58038[(2)] = inst_57974);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57999__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58000 === (9))){
var inst_57963 = (state_57999[(7)]);
var inst_57976 = (state_57999[(2)]);
var inst_57977 = (inst_57963 + (1));
var inst_57963__$1 = inst_57977;
var state_57999__$1 = (function (){var statearr_58014 = state_57999;
(statearr_58014[(10)] = inst_57976);

(statearr_58014[(7)] = inst_57963__$1);

return statearr_58014;
})();
var statearr_58015_58039 = state_57999__$1;
(statearr_58015_58039[(2)] = null);

(statearr_58015_58039[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58000 === (5))){
var inst_57983 = (state_57999[(2)]);
var state_57999__$1 = (function (){var statearr_58016 = state_57999;
(statearr_58016[(11)] = inst_57983);

return statearr_58016;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57999__$1,(12),dchan);
} else {
if((state_val_58000 === (14))){
var inst_57985 = (state_57999[(8)]);
var inst_57990 = cljs.core.apply.call(null,f,inst_57985);
var state_57999__$1 = state_57999;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57999__$1,(16),out,inst_57990);
} else {
if((state_val_58000 === (16))){
var inst_57992 = (state_57999[(2)]);
var state_57999__$1 = (function (){var statearr_58017 = state_57999;
(statearr_58017[(12)] = inst_57992);

return statearr_58017;
})();
var statearr_58018_58040 = state_57999__$1;
(statearr_58018_58040[(2)] = null);

(statearr_58018_58040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58000 === (10))){
var inst_57967 = (state_57999[(2)]);
var inst_57968 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_57999__$1 = (function (){var statearr_58019 = state_57999;
(statearr_58019[(13)] = inst_57967);

return statearr_58019;
})();
var statearr_58020_58041 = state_57999__$1;
(statearr_58020_58041[(2)] = inst_57968);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57999__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58000 === (8))){
var inst_57981 = (state_57999[(2)]);
var state_57999__$1 = state_57999;
var statearr_58021_58042 = state_57999__$1;
(statearr_58021_58042[(2)] = inst_57981);

(statearr_58021_58042[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__54834__auto___58027,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__54677__auto__,c__54834__auto___58027,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__54678__auto__ = null;
var cljs$core$async$state_machine__54678__auto____0 = (function (){
var statearr_58022 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58022[(0)] = cljs$core$async$state_machine__54678__auto__);

(statearr_58022[(1)] = (1));

return statearr_58022;
});
var cljs$core$async$state_machine__54678__auto____1 = (function (state_57999){
while(true){
var ret_value__54679__auto__ = (function (){try{while(true){
var result__54680__auto__ = switch__54677__auto__.call(null,state_57999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54680__auto__;
}
break;
}
}catch (e58023){if((e58023 instanceof Object)){
var ex__54681__auto__ = e58023;
var statearr_58024_58043 = state_57999;
(statearr_58024_58043[(5)] = ex__54681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58044 = state_57999;
state_57999 = G__58044;
continue;
} else {
return ret_value__54679__auto__;
}
break;
}
});
cljs$core$async$state_machine__54678__auto__ = function(state_57999){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54678__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54678__auto____1.call(this,state_57999);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54678__auto____0;
cljs$core$async$state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54678__auto____1;
return cljs$core$async$state_machine__54678__auto__;
})()
;})(switch__54677__auto__,c__54834__auto___58027,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__54836__auto__ = (function (){var statearr_58025 = f__54835__auto__.call(null);
(statearr_58025[(6)] = c__54834__auto___58027);

return statearr_58025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54836__auto__);
});})(c__54834__auto___58027,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__58047 = arguments.length;
switch (G__58047) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__54834__auto___58101 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54834__auto___58101,out){
return (function (){
var f__54835__auto__ = (function (){var switch__54677__auto__ = ((function (c__54834__auto___58101,out){
return (function (state_58079){
var state_val_58080 = (state_58079[(1)]);
if((state_val_58080 === (7))){
var inst_58059 = (state_58079[(7)]);
var inst_58058 = (state_58079[(8)]);
var inst_58058__$1 = (state_58079[(2)]);
var inst_58059__$1 = cljs.core.nth.call(null,inst_58058__$1,(0),null);
var inst_58060 = cljs.core.nth.call(null,inst_58058__$1,(1),null);
var inst_58061 = (inst_58059__$1 == null);
var state_58079__$1 = (function (){var statearr_58081 = state_58079;
(statearr_58081[(7)] = inst_58059__$1);

(statearr_58081[(9)] = inst_58060);

(statearr_58081[(8)] = inst_58058__$1);

return statearr_58081;
})();
if(cljs.core.truth_(inst_58061)){
var statearr_58082_58102 = state_58079__$1;
(statearr_58082_58102[(1)] = (8));

} else {
var statearr_58083_58103 = state_58079__$1;
(statearr_58083_58103[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (1))){
var inst_58048 = cljs.core.vec.call(null,chs);
var inst_58049 = inst_58048;
var state_58079__$1 = (function (){var statearr_58084 = state_58079;
(statearr_58084[(10)] = inst_58049);

return statearr_58084;
})();
var statearr_58085_58104 = state_58079__$1;
(statearr_58085_58104[(2)] = null);

(statearr_58085_58104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (4))){
var inst_58049 = (state_58079[(10)]);
var state_58079__$1 = state_58079;
return cljs.core.async.ioc_alts_BANG_.call(null,state_58079__$1,(7),inst_58049);
} else {
if((state_val_58080 === (6))){
var inst_58075 = (state_58079[(2)]);
var state_58079__$1 = state_58079;
var statearr_58086_58105 = state_58079__$1;
(statearr_58086_58105[(2)] = inst_58075);

(statearr_58086_58105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (3))){
var inst_58077 = (state_58079[(2)]);
var state_58079__$1 = state_58079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58079__$1,inst_58077);
} else {
if((state_val_58080 === (2))){
var inst_58049 = (state_58079[(10)]);
var inst_58051 = cljs.core.count.call(null,inst_58049);
var inst_58052 = (inst_58051 > (0));
var state_58079__$1 = state_58079;
if(cljs.core.truth_(inst_58052)){
var statearr_58088_58106 = state_58079__$1;
(statearr_58088_58106[(1)] = (4));

} else {
var statearr_58089_58107 = state_58079__$1;
(statearr_58089_58107[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (11))){
var inst_58049 = (state_58079[(10)]);
var inst_58068 = (state_58079[(2)]);
var tmp58087 = inst_58049;
var inst_58049__$1 = tmp58087;
var state_58079__$1 = (function (){var statearr_58090 = state_58079;
(statearr_58090[(11)] = inst_58068);

(statearr_58090[(10)] = inst_58049__$1);

return statearr_58090;
})();
var statearr_58091_58108 = state_58079__$1;
(statearr_58091_58108[(2)] = null);

(statearr_58091_58108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (9))){
var inst_58059 = (state_58079[(7)]);
var state_58079__$1 = state_58079;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58079__$1,(11),out,inst_58059);
} else {
if((state_val_58080 === (5))){
var inst_58073 = cljs.core.async.close_BANG_.call(null,out);
var state_58079__$1 = state_58079;
var statearr_58092_58109 = state_58079__$1;
(statearr_58092_58109[(2)] = inst_58073);

(statearr_58092_58109[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (10))){
var inst_58071 = (state_58079[(2)]);
var state_58079__$1 = state_58079;
var statearr_58093_58110 = state_58079__$1;
(statearr_58093_58110[(2)] = inst_58071);

(statearr_58093_58110[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (8))){
var inst_58059 = (state_58079[(7)]);
var inst_58060 = (state_58079[(9)]);
var inst_58058 = (state_58079[(8)]);
var inst_58049 = (state_58079[(10)]);
var inst_58063 = (function (){var cs = inst_58049;
var vec__58054 = inst_58058;
var v = inst_58059;
var c = inst_58060;
return ((function (cs,vec__58054,v,c,inst_58059,inst_58060,inst_58058,inst_58049,state_val_58080,c__54834__auto___58101,out){
return (function (p1__58045_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__58045_SHARP_);
});
;})(cs,vec__58054,v,c,inst_58059,inst_58060,inst_58058,inst_58049,state_val_58080,c__54834__auto___58101,out))
})();
var inst_58064 = cljs.core.filterv.call(null,inst_58063,inst_58049);
var inst_58049__$1 = inst_58064;
var state_58079__$1 = (function (){var statearr_58094 = state_58079;
(statearr_58094[(10)] = inst_58049__$1);

return statearr_58094;
})();
var statearr_58095_58111 = state_58079__$1;
(statearr_58095_58111[(2)] = null);

(statearr_58095_58111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__54834__auto___58101,out))
;
return ((function (switch__54677__auto__,c__54834__auto___58101,out){
return (function() {
var cljs$core$async$state_machine__54678__auto__ = null;
var cljs$core$async$state_machine__54678__auto____0 = (function (){
var statearr_58096 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58096[(0)] = cljs$core$async$state_machine__54678__auto__);

(statearr_58096[(1)] = (1));

return statearr_58096;
});
var cljs$core$async$state_machine__54678__auto____1 = (function (state_58079){
while(true){
var ret_value__54679__auto__ = (function (){try{while(true){
var result__54680__auto__ = switch__54677__auto__.call(null,state_58079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54680__auto__;
}
break;
}
}catch (e58097){if((e58097 instanceof Object)){
var ex__54681__auto__ = e58097;
var statearr_58098_58112 = state_58079;
(statearr_58098_58112[(5)] = ex__54681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58113 = state_58079;
state_58079 = G__58113;
continue;
} else {
return ret_value__54679__auto__;
}
break;
}
});
cljs$core$async$state_machine__54678__auto__ = function(state_58079){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54678__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54678__auto____1.call(this,state_58079);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54678__auto____0;
cljs$core$async$state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54678__auto____1;
return cljs$core$async$state_machine__54678__auto__;
})()
;})(switch__54677__auto__,c__54834__auto___58101,out))
})();
var state__54836__auto__ = (function (){var statearr_58099 = f__54835__auto__.call(null);
(statearr_58099[(6)] = c__54834__auto___58101);

return statearr_58099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54836__auto__);
});})(c__54834__auto___58101,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__58115 = arguments.length;
switch (G__58115) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__54834__auto___58160 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54834__auto___58160,out){
return (function (){
var f__54835__auto__ = (function (){var switch__54677__auto__ = ((function (c__54834__auto___58160,out){
return (function (state_58139){
var state_val_58140 = (state_58139[(1)]);
if((state_val_58140 === (7))){
var inst_58121 = (state_58139[(7)]);
var inst_58121__$1 = (state_58139[(2)]);
var inst_58122 = (inst_58121__$1 == null);
var inst_58123 = cljs.core.not.call(null,inst_58122);
var state_58139__$1 = (function (){var statearr_58141 = state_58139;
(statearr_58141[(7)] = inst_58121__$1);

return statearr_58141;
})();
if(inst_58123){
var statearr_58142_58161 = state_58139__$1;
(statearr_58142_58161[(1)] = (8));

} else {
var statearr_58143_58162 = state_58139__$1;
(statearr_58143_58162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58140 === (1))){
var inst_58116 = (0);
var state_58139__$1 = (function (){var statearr_58144 = state_58139;
(statearr_58144[(8)] = inst_58116);

return statearr_58144;
})();
var statearr_58145_58163 = state_58139__$1;
(statearr_58145_58163[(2)] = null);

(statearr_58145_58163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58140 === (4))){
var state_58139__$1 = state_58139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58139__$1,(7),ch);
} else {
if((state_val_58140 === (6))){
var inst_58134 = (state_58139[(2)]);
var state_58139__$1 = state_58139;
var statearr_58146_58164 = state_58139__$1;
(statearr_58146_58164[(2)] = inst_58134);

(statearr_58146_58164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58140 === (3))){
var inst_58136 = (state_58139[(2)]);
var inst_58137 = cljs.core.async.close_BANG_.call(null,out);
var state_58139__$1 = (function (){var statearr_58147 = state_58139;
(statearr_58147[(9)] = inst_58136);

return statearr_58147;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58139__$1,inst_58137);
} else {
if((state_val_58140 === (2))){
var inst_58116 = (state_58139[(8)]);
var inst_58118 = (inst_58116 < n);
var state_58139__$1 = state_58139;
if(cljs.core.truth_(inst_58118)){
var statearr_58148_58165 = state_58139__$1;
(statearr_58148_58165[(1)] = (4));

} else {
var statearr_58149_58166 = state_58139__$1;
(statearr_58149_58166[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58140 === (11))){
var inst_58116 = (state_58139[(8)]);
var inst_58126 = (state_58139[(2)]);
var inst_58127 = (inst_58116 + (1));
var inst_58116__$1 = inst_58127;
var state_58139__$1 = (function (){var statearr_58150 = state_58139;
(statearr_58150[(10)] = inst_58126);

(statearr_58150[(8)] = inst_58116__$1);

return statearr_58150;
})();
var statearr_58151_58167 = state_58139__$1;
(statearr_58151_58167[(2)] = null);

(statearr_58151_58167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58140 === (9))){
var state_58139__$1 = state_58139;
var statearr_58152_58168 = state_58139__$1;
(statearr_58152_58168[(2)] = null);

(statearr_58152_58168[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58140 === (5))){
var state_58139__$1 = state_58139;
var statearr_58153_58169 = state_58139__$1;
(statearr_58153_58169[(2)] = null);

(statearr_58153_58169[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58140 === (10))){
var inst_58131 = (state_58139[(2)]);
var state_58139__$1 = state_58139;
var statearr_58154_58170 = state_58139__$1;
(statearr_58154_58170[(2)] = inst_58131);

(statearr_58154_58170[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58140 === (8))){
var inst_58121 = (state_58139[(7)]);
var state_58139__$1 = state_58139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58139__$1,(11),out,inst_58121);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__54834__auto___58160,out))
;
return ((function (switch__54677__auto__,c__54834__auto___58160,out){
return (function() {
var cljs$core$async$state_machine__54678__auto__ = null;
var cljs$core$async$state_machine__54678__auto____0 = (function (){
var statearr_58155 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58155[(0)] = cljs$core$async$state_machine__54678__auto__);

(statearr_58155[(1)] = (1));

return statearr_58155;
});
var cljs$core$async$state_machine__54678__auto____1 = (function (state_58139){
while(true){
var ret_value__54679__auto__ = (function (){try{while(true){
var result__54680__auto__ = switch__54677__auto__.call(null,state_58139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54680__auto__;
}
break;
}
}catch (e58156){if((e58156 instanceof Object)){
var ex__54681__auto__ = e58156;
var statearr_58157_58171 = state_58139;
(statearr_58157_58171[(5)] = ex__54681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58172 = state_58139;
state_58139 = G__58172;
continue;
} else {
return ret_value__54679__auto__;
}
break;
}
});
cljs$core$async$state_machine__54678__auto__ = function(state_58139){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54678__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54678__auto____1.call(this,state_58139);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54678__auto____0;
cljs$core$async$state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54678__auto____1;
return cljs$core$async$state_machine__54678__auto__;
})()
;})(switch__54677__auto__,c__54834__auto___58160,out))
})();
var state__54836__auto__ = (function (){var statearr_58158 = f__54835__auto__.call(null);
(statearr_58158[(6)] = c__54834__auto___58160);

return statearr_58158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54836__auto__);
});})(c__54834__auto___58160,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async58174 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58174 = (function (f,ch,meta58175){
this.f = f;
this.ch = ch;
this.meta58175 = meta58175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async58174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58176,meta58175__$1){
var self__ = this;
var _58176__$1 = this;
return (new cljs.core.async.t_cljs$core$async58174(self__.f,self__.ch,meta58175__$1));
});

cljs.core.async.t_cljs$core$async58174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58176){
var self__ = this;
var _58176__$1 = this;
return self__.meta58175;
});

cljs.core.async.t_cljs$core$async58174.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58174.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async58174.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async58174.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58174.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async58177 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58177 = (function (f,ch,meta58175,_,fn1,meta58178){
this.f = f;
this.ch = ch;
this.meta58175 = meta58175;
this._ = _;
this.fn1 = fn1;
this.meta58178 = meta58178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async58177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_58179,meta58178__$1){
var self__ = this;
var _58179__$1 = this;
return (new cljs.core.async.t_cljs$core$async58177(self__.f,self__.ch,self__.meta58175,self__._,self__.fn1,meta58178__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async58177.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_58179){
var self__ = this;
var _58179__$1 = this;
return self__.meta58178;
});})(___$1))
;

cljs.core.async.t_cljs$core$async58177.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58177.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async58177.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async58177.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__58173_SHARP_){
return f1.call(null,(((p1__58173_SHARP_ == null))?null:self__.f.call(null,p1__58173_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async58177.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58175","meta58175",-551944213,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async58174","cljs.core.async/t_cljs$core$async58174",940040941,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta58178","meta58178",1394153200,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async58177.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58177";

cljs.core.async.t_cljs$core$async58177.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async58177");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58177.
 */
cljs.core.async.__GT_t_cljs$core$async58177 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async58177(f__$1,ch__$1,meta58175__$1,___$2,fn1__$1,meta58178){
return (new cljs.core.async.t_cljs$core$async58177(f__$1,ch__$1,meta58175__$1,___$2,fn1__$1,meta58178));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async58177(self__.f,self__.ch,self__.meta58175,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async58174.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58174.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async58174.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58175","meta58175",-551944213,null)], null);
});

cljs.core.async.t_cljs$core$async58174.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58174.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58174";

cljs.core.async.t_cljs$core$async58174.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async58174");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58174.
 */
cljs.core.async.__GT_t_cljs$core$async58174 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async58174(f__$1,ch__$1,meta58175){
return (new cljs.core.async.t_cljs$core$async58174(f__$1,ch__$1,meta58175));
});

}

return (new cljs.core.async.t_cljs$core$async58174(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async58180 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58180 = (function (f,ch,meta58181){
this.f = f;
this.ch = ch;
this.meta58181 = meta58181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async58180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58182,meta58181__$1){
var self__ = this;
var _58182__$1 = this;
return (new cljs.core.async.t_cljs$core$async58180(self__.f,self__.ch,meta58181__$1));
});

cljs.core.async.t_cljs$core$async58180.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58182){
var self__ = this;
var _58182__$1 = this;
return self__.meta58181;
});

cljs.core.async.t_cljs$core$async58180.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58180.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async58180.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58180.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async58180.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58180.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async58180.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58181","meta58181",1396627769,null)], null);
});

cljs.core.async.t_cljs$core$async58180.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58180.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58180";

cljs.core.async.t_cljs$core$async58180.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async58180");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58180.
 */
cljs.core.async.__GT_t_cljs$core$async58180 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async58180(f__$1,ch__$1,meta58181){
return (new cljs.core.async.t_cljs$core$async58180(f__$1,ch__$1,meta58181));
});

}

return (new cljs.core.async.t_cljs$core$async58180(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async58183 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58183 = (function (p,ch,meta58184){
this.p = p;
this.ch = ch;
this.meta58184 = meta58184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async58183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58185,meta58184__$1){
var self__ = this;
var _58185__$1 = this;
return (new cljs.core.async.t_cljs$core$async58183(self__.p,self__.ch,meta58184__$1));
});

cljs.core.async.t_cljs$core$async58183.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58185){
var self__ = this;
var _58185__$1 = this;
return self__.meta58184;
});

cljs.core.async.t_cljs$core$async58183.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58183.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async58183.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async58183.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58183.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async58183.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58183.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async58183.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58184","meta58184",-2025973363,null)], null);
});

cljs.core.async.t_cljs$core$async58183.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58183.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58183";

cljs.core.async.t_cljs$core$async58183.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async58183");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58183.
 */
cljs.core.async.__GT_t_cljs$core$async58183 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async58183(p__$1,ch__$1,meta58184){
return (new cljs.core.async.t_cljs$core$async58183(p__$1,ch__$1,meta58184));
});

}

return (new cljs.core.async.t_cljs$core$async58183(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__58187 = arguments.length;
switch (G__58187) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__54834__auto___58227 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54834__auto___58227,out){
return (function (){
var f__54835__auto__ = (function (){var switch__54677__auto__ = ((function (c__54834__auto___58227,out){
return (function (state_58208){
var state_val_58209 = (state_58208[(1)]);
if((state_val_58209 === (7))){
var inst_58204 = (state_58208[(2)]);
var state_58208__$1 = state_58208;
var statearr_58210_58228 = state_58208__$1;
(statearr_58210_58228[(2)] = inst_58204);

(statearr_58210_58228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58209 === (1))){
var state_58208__$1 = state_58208;
var statearr_58211_58229 = state_58208__$1;
(statearr_58211_58229[(2)] = null);

(statearr_58211_58229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58209 === (4))){
var inst_58190 = (state_58208[(7)]);
var inst_58190__$1 = (state_58208[(2)]);
var inst_58191 = (inst_58190__$1 == null);
var state_58208__$1 = (function (){var statearr_58212 = state_58208;
(statearr_58212[(7)] = inst_58190__$1);

return statearr_58212;
})();
if(cljs.core.truth_(inst_58191)){
var statearr_58213_58230 = state_58208__$1;
(statearr_58213_58230[(1)] = (5));

} else {
var statearr_58214_58231 = state_58208__$1;
(statearr_58214_58231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58209 === (6))){
var inst_58190 = (state_58208[(7)]);
var inst_58195 = p.call(null,inst_58190);
var state_58208__$1 = state_58208;
if(cljs.core.truth_(inst_58195)){
var statearr_58215_58232 = state_58208__$1;
(statearr_58215_58232[(1)] = (8));

} else {
var statearr_58216_58233 = state_58208__$1;
(statearr_58216_58233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58209 === (3))){
var inst_58206 = (state_58208[(2)]);
var state_58208__$1 = state_58208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58208__$1,inst_58206);
} else {
if((state_val_58209 === (2))){
var state_58208__$1 = state_58208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58208__$1,(4),ch);
} else {
if((state_val_58209 === (11))){
var inst_58198 = (state_58208[(2)]);
var state_58208__$1 = state_58208;
var statearr_58217_58234 = state_58208__$1;
(statearr_58217_58234[(2)] = inst_58198);

(statearr_58217_58234[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58209 === (9))){
var state_58208__$1 = state_58208;
var statearr_58218_58235 = state_58208__$1;
(statearr_58218_58235[(2)] = null);

(statearr_58218_58235[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58209 === (5))){
var inst_58193 = cljs.core.async.close_BANG_.call(null,out);
var state_58208__$1 = state_58208;
var statearr_58219_58236 = state_58208__$1;
(statearr_58219_58236[(2)] = inst_58193);

(statearr_58219_58236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58209 === (10))){
var inst_58201 = (state_58208[(2)]);
var state_58208__$1 = (function (){var statearr_58220 = state_58208;
(statearr_58220[(8)] = inst_58201);

return statearr_58220;
})();
var statearr_58221_58237 = state_58208__$1;
(statearr_58221_58237[(2)] = null);

(statearr_58221_58237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58209 === (8))){
var inst_58190 = (state_58208[(7)]);
var state_58208__$1 = state_58208;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58208__$1,(11),out,inst_58190);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__54834__auto___58227,out))
;
return ((function (switch__54677__auto__,c__54834__auto___58227,out){
return (function() {
var cljs$core$async$state_machine__54678__auto__ = null;
var cljs$core$async$state_machine__54678__auto____0 = (function (){
var statearr_58222 = [null,null,null,null,null,null,null,null,null];
(statearr_58222[(0)] = cljs$core$async$state_machine__54678__auto__);

(statearr_58222[(1)] = (1));

return statearr_58222;
});
var cljs$core$async$state_machine__54678__auto____1 = (function (state_58208){
while(true){
var ret_value__54679__auto__ = (function (){try{while(true){
var result__54680__auto__ = switch__54677__auto__.call(null,state_58208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54680__auto__;
}
break;
}
}catch (e58223){if((e58223 instanceof Object)){
var ex__54681__auto__ = e58223;
var statearr_58224_58238 = state_58208;
(statearr_58224_58238[(5)] = ex__54681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58239 = state_58208;
state_58208 = G__58239;
continue;
} else {
return ret_value__54679__auto__;
}
break;
}
});
cljs$core$async$state_machine__54678__auto__ = function(state_58208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54678__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54678__auto____1.call(this,state_58208);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54678__auto____0;
cljs$core$async$state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54678__auto____1;
return cljs$core$async$state_machine__54678__auto__;
})()
;})(switch__54677__auto__,c__54834__auto___58227,out))
})();
var state__54836__auto__ = (function (){var statearr_58225 = f__54835__auto__.call(null);
(statearr_58225[(6)] = c__54834__auto___58227);

return statearr_58225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54836__auto__);
});})(c__54834__auto___58227,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__58241 = arguments.length;
switch (G__58241) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__54834__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54834__auto__){
return (function (){
var f__54835__auto__ = (function (){var switch__54677__auto__ = ((function (c__54834__auto__){
return (function (state_58304){
var state_val_58305 = (state_58304[(1)]);
if((state_val_58305 === (7))){
var inst_58300 = (state_58304[(2)]);
var state_58304__$1 = state_58304;
var statearr_58306_58344 = state_58304__$1;
(statearr_58306_58344[(2)] = inst_58300);

(statearr_58306_58344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58305 === (20))){
var inst_58270 = (state_58304[(7)]);
var inst_58281 = (state_58304[(2)]);
var inst_58282 = cljs.core.next.call(null,inst_58270);
var inst_58256 = inst_58282;
var inst_58257 = null;
var inst_58258 = (0);
var inst_58259 = (0);
var state_58304__$1 = (function (){var statearr_58307 = state_58304;
(statearr_58307[(8)] = inst_58259);

(statearr_58307[(9)] = inst_58257);

(statearr_58307[(10)] = inst_58281);

(statearr_58307[(11)] = inst_58258);

(statearr_58307[(12)] = inst_58256);

return statearr_58307;
})();
var statearr_58308_58345 = state_58304__$1;
(statearr_58308_58345[(2)] = null);

(statearr_58308_58345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58305 === (1))){
var state_58304__$1 = state_58304;
var statearr_58309_58346 = state_58304__$1;
(statearr_58309_58346[(2)] = null);

(statearr_58309_58346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58305 === (4))){
var inst_58245 = (state_58304[(13)]);
var inst_58245__$1 = (state_58304[(2)]);
var inst_58246 = (inst_58245__$1 == null);
var state_58304__$1 = (function (){var statearr_58310 = state_58304;
(statearr_58310[(13)] = inst_58245__$1);

return statearr_58310;
})();
if(cljs.core.truth_(inst_58246)){
var statearr_58311_58347 = state_58304__$1;
(statearr_58311_58347[(1)] = (5));

} else {
var statearr_58312_58348 = state_58304__$1;
(statearr_58312_58348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58305 === (15))){
var state_58304__$1 = state_58304;
var statearr_58316_58349 = state_58304__$1;
(statearr_58316_58349[(2)] = null);

(statearr_58316_58349[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58305 === (21))){
var state_58304__$1 = state_58304;
var statearr_58317_58350 = state_58304__$1;
(statearr_58317_58350[(2)] = null);

(statearr_58317_58350[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58305 === (13))){
var inst_58259 = (state_58304[(8)]);
var inst_58257 = (state_58304[(9)]);
var inst_58258 = (state_58304[(11)]);
var inst_58256 = (state_58304[(12)]);
var inst_58266 = (state_58304[(2)]);
var inst_58267 = (inst_58259 + (1));
var tmp58313 = inst_58257;
var tmp58314 = inst_58258;
var tmp58315 = inst_58256;
var inst_58256__$1 = tmp58315;
var inst_58257__$1 = tmp58313;
var inst_58258__$1 = tmp58314;
var inst_58259__$1 = inst_58267;
var state_58304__$1 = (function (){var statearr_58318 = state_58304;
(statearr_58318[(8)] = inst_58259__$1);

(statearr_58318[(9)] = inst_58257__$1);

(statearr_58318[(11)] = inst_58258__$1);

(statearr_58318[(14)] = inst_58266);

(statearr_58318[(12)] = inst_58256__$1);

return statearr_58318;
})();
var statearr_58319_58351 = state_58304__$1;
(statearr_58319_58351[(2)] = null);

(statearr_58319_58351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58305 === (22))){
var state_58304__$1 = state_58304;
var statearr_58320_58352 = state_58304__$1;
(statearr_58320_58352[(2)] = null);

(statearr_58320_58352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58305 === (6))){
var inst_58245 = (state_58304[(13)]);
var inst_58254 = f.call(null,inst_58245);
var inst_58255 = cljs.core.seq.call(null,inst_58254);
var inst_58256 = inst_58255;
var inst_58257 = null;
var inst_58258 = (0);
var inst_58259 = (0);
var state_58304__$1 = (function (){var statearr_58321 = state_58304;
(statearr_58321[(8)] = inst_58259);

(statearr_58321[(9)] = inst_58257);

(statearr_58321[(11)] = inst_58258);

(statearr_58321[(12)] = inst_58256);

return statearr_58321;
})();
var statearr_58322_58353 = state_58304__$1;
(statearr_58322_58353[(2)] = null);

(statearr_58322_58353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58305 === (17))){
var inst_58270 = (state_58304[(7)]);
var inst_58274 = cljs.core.chunk_first.call(null,inst_58270);
var inst_58275 = cljs.core.chunk_rest.call(null,inst_58270);
var inst_58276 = cljs.core.count.call(null,inst_58274);
var inst_58256 = inst_58275;
var inst_58257 = inst_58274;
var inst_58258 = inst_58276;
var inst_58259 = (0);
var state_58304__$1 = (function (){var statearr_58323 = state_58304;
(statearr_58323[(8)] = inst_58259);

(statearr_58323[(9)] = inst_58257);

(statearr_58323[(11)] = inst_58258);

(statearr_58323[(12)] = inst_58256);

return statearr_58323;
})();
var statearr_58324_58354 = state_58304__$1;
(statearr_58324_58354[(2)] = null);

(statearr_58324_58354[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58305 === (3))){
var inst_58302 = (state_58304[(2)]);
var state_58304__$1 = state_58304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58304__$1,inst_58302);
} else {
if((state_val_58305 === (12))){
var inst_58290 = (state_58304[(2)]);
var state_58304__$1 = state_58304;
var statearr_58325_58355 = state_58304__$1;
(statearr_58325_58355[(2)] = inst_58290);

(statearr_58325_58355[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58305 === (2))){
var state_58304__$1 = state_58304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58304__$1,(4),in$);
} else {
if((state_val_58305 === (23))){
var inst_58298 = (state_58304[(2)]);
var state_58304__$1 = state_58304;
var statearr_58326_58356 = state_58304__$1;
(statearr_58326_58356[(2)] = inst_58298);

(statearr_58326_58356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58305 === (19))){
var inst_58285 = (state_58304[(2)]);
var state_58304__$1 = state_58304;
var statearr_58327_58357 = state_58304__$1;
(statearr_58327_58357[(2)] = inst_58285);

(statearr_58327_58357[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58305 === (11))){
var inst_58270 = (state_58304[(7)]);
var inst_58256 = (state_58304[(12)]);
var inst_58270__$1 = cljs.core.seq.call(null,inst_58256);
var state_58304__$1 = (function (){var statearr_58328 = state_58304;
(statearr_58328[(7)] = inst_58270__$1);

return statearr_58328;
})();
if(inst_58270__$1){
var statearr_58329_58358 = state_58304__$1;
(statearr_58329_58358[(1)] = (14));

} else {
var statearr_58330_58359 = state_58304__$1;
(statearr_58330_58359[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58305 === (9))){
var inst_58292 = (state_58304[(2)]);
var inst_58293 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_58304__$1 = (function (){var statearr_58331 = state_58304;
(statearr_58331[(15)] = inst_58292);

return statearr_58331;
})();
if(cljs.core.truth_(inst_58293)){
var statearr_58332_58360 = state_58304__$1;
(statearr_58332_58360[(1)] = (21));

} else {
var statearr_58333_58361 = state_58304__$1;
(statearr_58333_58361[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58305 === (5))){
var inst_58248 = cljs.core.async.close_BANG_.call(null,out);
var state_58304__$1 = state_58304;
var statearr_58334_58362 = state_58304__$1;
(statearr_58334_58362[(2)] = inst_58248);

(statearr_58334_58362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58305 === (14))){
var inst_58270 = (state_58304[(7)]);
var inst_58272 = cljs.core.chunked_seq_QMARK_.call(null,inst_58270);
var state_58304__$1 = state_58304;
if(inst_58272){
var statearr_58335_58363 = state_58304__$1;
(statearr_58335_58363[(1)] = (17));

} else {
var statearr_58336_58364 = state_58304__$1;
(statearr_58336_58364[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58305 === (16))){
var inst_58288 = (state_58304[(2)]);
var state_58304__$1 = state_58304;
var statearr_58337_58365 = state_58304__$1;
(statearr_58337_58365[(2)] = inst_58288);

(statearr_58337_58365[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58305 === (10))){
var inst_58259 = (state_58304[(8)]);
var inst_58257 = (state_58304[(9)]);
var inst_58264 = cljs.core._nth.call(null,inst_58257,inst_58259);
var state_58304__$1 = state_58304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58304__$1,(13),out,inst_58264);
} else {
if((state_val_58305 === (18))){
var inst_58270 = (state_58304[(7)]);
var inst_58279 = cljs.core.first.call(null,inst_58270);
var state_58304__$1 = state_58304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58304__$1,(20),out,inst_58279);
} else {
if((state_val_58305 === (8))){
var inst_58259 = (state_58304[(8)]);
var inst_58258 = (state_58304[(11)]);
var inst_58261 = (inst_58259 < inst_58258);
var inst_58262 = inst_58261;
var state_58304__$1 = state_58304;
if(cljs.core.truth_(inst_58262)){
var statearr_58338_58366 = state_58304__$1;
(statearr_58338_58366[(1)] = (10));

} else {
var statearr_58339_58367 = state_58304__$1;
(statearr_58339_58367[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__54834__auto__))
;
return ((function (switch__54677__auto__,c__54834__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__54678__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__54678__auto____0 = (function (){
var statearr_58340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58340[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__54678__auto__);

(statearr_58340[(1)] = (1));

return statearr_58340;
});
var cljs$core$async$mapcat_STAR__$_state_machine__54678__auto____1 = (function (state_58304){
while(true){
var ret_value__54679__auto__ = (function (){try{while(true){
var result__54680__auto__ = switch__54677__auto__.call(null,state_58304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54680__auto__;
}
break;
}
}catch (e58341){if((e58341 instanceof Object)){
var ex__54681__auto__ = e58341;
var statearr_58342_58368 = state_58304;
(statearr_58342_58368[(5)] = ex__54681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58369 = state_58304;
state_58304 = G__58369;
continue;
} else {
return ret_value__54679__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__54678__auto__ = function(state_58304){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__54678__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__54678__auto____1.call(this,state_58304);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__54678__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__54678__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__54678__auto__;
})()
;})(switch__54677__auto__,c__54834__auto__))
})();
var state__54836__auto__ = (function (){var statearr_58343 = f__54835__auto__.call(null);
(statearr_58343[(6)] = c__54834__auto__);

return statearr_58343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54836__auto__);
});})(c__54834__auto__))
);

return c__54834__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__58371 = arguments.length;
switch (G__58371) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__58374 = arguments.length;
switch (G__58374) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__58377 = arguments.length;
switch (G__58377) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__54834__auto___58424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54834__auto___58424,out){
return (function (){
var f__54835__auto__ = (function (){var switch__54677__auto__ = ((function (c__54834__auto___58424,out){
return (function (state_58401){
var state_val_58402 = (state_58401[(1)]);
if((state_val_58402 === (7))){
var inst_58396 = (state_58401[(2)]);
var state_58401__$1 = state_58401;
var statearr_58403_58425 = state_58401__$1;
(statearr_58403_58425[(2)] = inst_58396);

(statearr_58403_58425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58402 === (1))){
var inst_58378 = null;
var state_58401__$1 = (function (){var statearr_58404 = state_58401;
(statearr_58404[(7)] = inst_58378);

return statearr_58404;
})();
var statearr_58405_58426 = state_58401__$1;
(statearr_58405_58426[(2)] = null);

(statearr_58405_58426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58402 === (4))){
var inst_58381 = (state_58401[(8)]);
var inst_58381__$1 = (state_58401[(2)]);
var inst_58382 = (inst_58381__$1 == null);
var inst_58383 = cljs.core.not.call(null,inst_58382);
var state_58401__$1 = (function (){var statearr_58406 = state_58401;
(statearr_58406[(8)] = inst_58381__$1);

return statearr_58406;
})();
if(inst_58383){
var statearr_58407_58427 = state_58401__$1;
(statearr_58407_58427[(1)] = (5));

} else {
var statearr_58408_58428 = state_58401__$1;
(statearr_58408_58428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58402 === (6))){
var state_58401__$1 = state_58401;
var statearr_58409_58429 = state_58401__$1;
(statearr_58409_58429[(2)] = null);

(statearr_58409_58429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58402 === (3))){
var inst_58398 = (state_58401[(2)]);
var inst_58399 = cljs.core.async.close_BANG_.call(null,out);
var state_58401__$1 = (function (){var statearr_58410 = state_58401;
(statearr_58410[(9)] = inst_58398);

return statearr_58410;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58401__$1,inst_58399);
} else {
if((state_val_58402 === (2))){
var state_58401__$1 = state_58401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58401__$1,(4),ch);
} else {
if((state_val_58402 === (11))){
var inst_58381 = (state_58401[(8)]);
var inst_58390 = (state_58401[(2)]);
var inst_58378 = inst_58381;
var state_58401__$1 = (function (){var statearr_58411 = state_58401;
(statearr_58411[(7)] = inst_58378);

(statearr_58411[(10)] = inst_58390);

return statearr_58411;
})();
var statearr_58412_58430 = state_58401__$1;
(statearr_58412_58430[(2)] = null);

(statearr_58412_58430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58402 === (9))){
var inst_58381 = (state_58401[(8)]);
var state_58401__$1 = state_58401;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58401__$1,(11),out,inst_58381);
} else {
if((state_val_58402 === (5))){
var inst_58378 = (state_58401[(7)]);
var inst_58381 = (state_58401[(8)]);
var inst_58385 = cljs.core._EQ_.call(null,inst_58381,inst_58378);
var state_58401__$1 = state_58401;
if(inst_58385){
var statearr_58414_58431 = state_58401__$1;
(statearr_58414_58431[(1)] = (8));

} else {
var statearr_58415_58432 = state_58401__$1;
(statearr_58415_58432[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58402 === (10))){
var inst_58393 = (state_58401[(2)]);
var state_58401__$1 = state_58401;
var statearr_58416_58433 = state_58401__$1;
(statearr_58416_58433[(2)] = inst_58393);

(statearr_58416_58433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58402 === (8))){
var inst_58378 = (state_58401[(7)]);
var tmp58413 = inst_58378;
var inst_58378__$1 = tmp58413;
var state_58401__$1 = (function (){var statearr_58417 = state_58401;
(statearr_58417[(7)] = inst_58378__$1);

return statearr_58417;
})();
var statearr_58418_58434 = state_58401__$1;
(statearr_58418_58434[(2)] = null);

(statearr_58418_58434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__54834__auto___58424,out))
;
return ((function (switch__54677__auto__,c__54834__auto___58424,out){
return (function() {
var cljs$core$async$state_machine__54678__auto__ = null;
var cljs$core$async$state_machine__54678__auto____0 = (function (){
var statearr_58419 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58419[(0)] = cljs$core$async$state_machine__54678__auto__);

(statearr_58419[(1)] = (1));

return statearr_58419;
});
var cljs$core$async$state_machine__54678__auto____1 = (function (state_58401){
while(true){
var ret_value__54679__auto__ = (function (){try{while(true){
var result__54680__auto__ = switch__54677__auto__.call(null,state_58401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54680__auto__;
}
break;
}
}catch (e58420){if((e58420 instanceof Object)){
var ex__54681__auto__ = e58420;
var statearr_58421_58435 = state_58401;
(statearr_58421_58435[(5)] = ex__54681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58436 = state_58401;
state_58401 = G__58436;
continue;
} else {
return ret_value__54679__auto__;
}
break;
}
});
cljs$core$async$state_machine__54678__auto__ = function(state_58401){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54678__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54678__auto____1.call(this,state_58401);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54678__auto____0;
cljs$core$async$state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54678__auto____1;
return cljs$core$async$state_machine__54678__auto__;
})()
;})(switch__54677__auto__,c__54834__auto___58424,out))
})();
var state__54836__auto__ = (function (){var statearr_58422 = f__54835__auto__.call(null);
(statearr_58422[(6)] = c__54834__auto___58424);

return statearr_58422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54836__auto__);
});})(c__54834__auto___58424,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__58438 = arguments.length;
switch (G__58438) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__54834__auto___58504 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54834__auto___58504,out){
return (function (){
var f__54835__auto__ = (function (){var switch__54677__auto__ = ((function (c__54834__auto___58504,out){
return (function (state_58476){
var state_val_58477 = (state_58476[(1)]);
if((state_val_58477 === (7))){
var inst_58472 = (state_58476[(2)]);
var state_58476__$1 = state_58476;
var statearr_58478_58505 = state_58476__$1;
(statearr_58478_58505[(2)] = inst_58472);

(statearr_58478_58505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58477 === (1))){
var inst_58439 = (new Array(n));
var inst_58440 = inst_58439;
var inst_58441 = (0);
var state_58476__$1 = (function (){var statearr_58479 = state_58476;
(statearr_58479[(7)] = inst_58440);

(statearr_58479[(8)] = inst_58441);

return statearr_58479;
})();
var statearr_58480_58506 = state_58476__$1;
(statearr_58480_58506[(2)] = null);

(statearr_58480_58506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58477 === (4))){
var inst_58444 = (state_58476[(9)]);
var inst_58444__$1 = (state_58476[(2)]);
var inst_58445 = (inst_58444__$1 == null);
var inst_58446 = cljs.core.not.call(null,inst_58445);
var state_58476__$1 = (function (){var statearr_58481 = state_58476;
(statearr_58481[(9)] = inst_58444__$1);

return statearr_58481;
})();
if(inst_58446){
var statearr_58482_58507 = state_58476__$1;
(statearr_58482_58507[(1)] = (5));

} else {
var statearr_58483_58508 = state_58476__$1;
(statearr_58483_58508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58477 === (15))){
var inst_58466 = (state_58476[(2)]);
var state_58476__$1 = state_58476;
var statearr_58484_58509 = state_58476__$1;
(statearr_58484_58509[(2)] = inst_58466);

(statearr_58484_58509[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58477 === (13))){
var state_58476__$1 = state_58476;
var statearr_58485_58510 = state_58476__$1;
(statearr_58485_58510[(2)] = null);

(statearr_58485_58510[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58477 === (6))){
var inst_58441 = (state_58476[(8)]);
var inst_58462 = (inst_58441 > (0));
var state_58476__$1 = state_58476;
if(cljs.core.truth_(inst_58462)){
var statearr_58486_58511 = state_58476__$1;
(statearr_58486_58511[(1)] = (12));

} else {
var statearr_58487_58512 = state_58476__$1;
(statearr_58487_58512[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58477 === (3))){
var inst_58474 = (state_58476[(2)]);
var state_58476__$1 = state_58476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58476__$1,inst_58474);
} else {
if((state_val_58477 === (12))){
var inst_58440 = (state_58476[(7)]);
var inst_58464 = cljs.core.vec.call(null,inst_58440);
var state_58476__$1 = state_58476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58476__$1,(15),out,inst_58464);
} else {
if((state_val_58477 === (2))){
var state_58476__$1 = state_58476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58476__$1,(4),ch);
} else {
if((state_val_58477 === (11))){
var inst_58456 = (state_58476[(2)]);
var inst_58457 = (new Array(n));
var inst_58440 = inst_58457;
var inst_58441 = (0);
var state_58476__$1 = (function (){var statearr_58488 = state_58476;
(statearr_58488[(7)] = inst_58440);

(statearr_58488[(8)] = inst_58441);

(statearr_58488[(10)] = inst_58456);

return statearr_58488;
})();
var statearr_58489_58513 = state_58476__$1;
(statearr_58489_58513[(2)] = null);

(statearr_58489_58513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58477 === (9))){
var inst_58440 = (state_58476[(7)]);
var inst_58454 = cljs.core.vec.call(null,inst_58440);
var state_58476__$1 = state_58476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58476__$1,(11),out,inst_58454);
} else {
if((state_val_58477 === (5))){
var inst_58444 = (state_58476[(9)]);
var inst_58440 = (state_58476[(7)]);
var inst_58449 = (state_58476[(11)]);
var inst_58441 = (state_58476[(8)]);
var inst_58448 = (inst_58440[inst_58441] = inst_58444);
var inst_58449__$1 = (inst_58441 + (1));
var inst_58450 = (inst_58449__$1 < n);
var state_58476__$1 = (function (){var statearr_58490 = state_58476;
(statearr_58490[(11)] = inst_58449__$1);

(statearr_58490[(12)] = inst_58448);

return statearr_58490;
})();
if(cljs.core.truth_(inst_58450)){
var statearr_58491_58514 = state_58476__$1;
(statearr_58491_58514[(1)] = (8));

} else {
var statearr_58492_58515 = state_58476__$1;
(statearr_58492_58515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58477 === (14))){
var inst_58469 = (state_58476[(2)]);
var inst_58470 = cljs.core.async.close_BANG_.call(null,out);
var state_58476__$1 = (function (){var statearr_58494 = state_58476;
(statearr_58494[(13)] = inst_58469);

return statearr_58494;
})();
var statearr_58495_58516 = state_58476__$1;
(statearr_58495_58516[(2)] = inst_58470);

(statearr_58495_58516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58477 === (10))){
var inst_58460 = (state_58476[(2)]);
var state_58476__$1 = state_58476;
var statearr_58496_58517 = state_58476__$1;
(statearr_58496_58517[(2)] = inst_58460);

(statearr_58496_58517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58477 === (8))){
var inst_58440 = (state_58476[(7)]);
var inst_58449 = (state_58476[(11)]);
var tmp58493 = inst_58440;
var inst_58440__$1 = tmp58493;
var inst_58441 = inst_58449;
var state_58476__$1 = (function (){var statearr_58497 = state_58476;
(statearr_58497[(7)] = inst_58440__$1);

(statearr_58497[(8)] = inst_58441);

return statearr_58497;
})();
var statearr_58498_58518 = state_58476__$1;
(statearr_58498_58518[(2)] = null);

(statearr_58498_58518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__54834__auto___58504,out))
;
return ((function (switch__54677__auto__,c__54834__auto___58504,out){
return (function() {
var cljs$core$async$state_machine__54678__auto__ = null;
var cljs$core$async$state_machine__54678__auto____0 = (function (){
var statearr_58499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58499[(0)] = cljs$core$async$state_machine__54678__auto__);

(statearr_58499[(1)] = (1));

return statearr_58499;
});
var cljs$core$async$state_machine__54678__auto____1 = (function (state_58476){
while(true){
var ret_value__54679__auto__ = (function (){try{while(true){
var result__54680__auto__ = switch__54677__auto__.call(null,state_58476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54680__auto__;
}
break;
}
}catch (e58500){if((e58500 instanceof Object)){
var ex__54681__auto__ = e58500;
var statearr_58501_58519 = state_58476;
(statearr_58501_58519[(5)] = ex__54681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58520 = state_58476;
state_58476 = G__58520;
continue;
} else {
return ret_value__54679__auto__;
}
break;
}
});
cljs$core$async$state_machine__54678__auto__ = function(state_58476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54678__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54678__auto____1.call(this,state_58476);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54678__auto____0;
cljs$core$async$state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54678__auto____1;
return cljs$core$async$state_machine__54678__auto__;
})()
;})(switch__54677__auto__,c__54834__auto___58504,out))
})();
var state__54836__auto__ = (function (){var statearr_58502 = f__54835__auto__.call(null);
(statearr_58502[(6)] = c__54834__auto___58504);

return statearr_58502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54836__auto__);
});})(c__54834__auto___58504,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__58522 = arguments.length;
switch (G__58522) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__54834__auto___58592 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__54834__auto___58592,out){
return (function (){
var f__54835__auto__ = (function (){var switch__54677__auto__ = ((function (c__54834__auto___58592,out){
return (function (state_58564){
var state_val_58565 = (state_58564[(1)]);
if((state_val_58565 === (7))){
var inst_58560 = (state_58564[(2)]);
var state_58564__$1 = state_58564;
var statearr_58566_58593 = state_58564__$1;
(statearr_58566_58593[(2)] = inst_58560);

(statearr_58566_58593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58565 === (1))){
var inst_58523 = [];
var inst_58524 = inst_58523;
var inst_58525 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_58564__$1 = (function (){var statearr_58567 = state_58564;
(statearr_58567[(7)] = inst_58525);

(statearr_58567[(8)] = inst_58524);

return statearr_58567;
})();
var statearr_58568_58594 = state_58564__$1;
(statearr_58568_58594[(2)] = null);

(statearr_58568_58594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58565 === (4))){
var inst_58528 = (state_58564[(9)]);
var inst_58528__$1 = (state_58564[(2)]);
var inst_58529 = (inst_58528__$1 == null);
var inst_58530 = cljs.core.not.call(null,inst_58529);
var state_58564__$1 = (function (){var statearr_58569 = state_58564;
(statearr_58569[(9)] = inst_58528__$1);

return statearr_58569;
})();
if(inst_58530){
var statearr_58570_58595 = state_58564__$1;
(statearr_58570_58595[(1)] = (5));

} else {
var statearr_58571_58596 = state_58564__$1;
(statearr_58571_58596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58565 === (15))){
var inst_58554 = (state_58564[(2)]);
var state_58564__$1 = state_58564;
var statearr_58572_58597 = state_58564__$1;
(statearr_58572_58597[(2)] = inst_58554);

(statearr_58572_58597[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58565 === (13))){
var state_58564__$1 = state_58564;
var statearr_58573_58598 = state_58564__$1;
(statearr_58573_58598[(2)] = null);

(statearr_58573_58598[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58565 === (6))){
var inst_58524 = (state_58564[(8)]);
var inst_58549 = inst_58524.length;
var inst_58550 = (inst_58549 > (0));
var state_58564__$1 = state_58564;
if(cljs.core.truth_(inst_58550)){
var statearr_58574_58599 = state_58564__$1;
(statearr_58574_58599[(1)] = (12));

} else {
var statearr_58575_58600 = state_58564__$1;
(statearr_58575_58600[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58565 === (3))){
var inst_58562 = (state_58564[(2)]);
var state_58564__$1 = state_58564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58564__$1,inst_58562);
} else {
if((state_val_58565 === (12))){
var inst_58524 = (state_58564[(8)]);
var inst_58552 = cljs.core.vec.call(null,inst_58524);
var state_58564__$1 = state_58564;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58564__$1,(15),out,inst_58552);
} else {
if((state_val_58565 === (2))){
var state_58564__$1 = state_58564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58564__$1,(4),ch);
} else {
if((state_val_58565 === (11))){
var inst_58528 = (state_58564[(9)]);
var inst_58532 = (state_58564[(10)]);
var inst_58542 = (state_58564[(2)]);
var inst_58543 = [];
var inst_58544 = inst_58543.push(inst_58528);
var inst_58524 = inst_58543;
var inst_58525 = inst_58532;
var state_58564__$1 = (function (){var statearr_58576 = state_58564;
(statearr_58576[(11)] = inst_58542);

(statearr_58576[(7)] = inst_58525);

(statearr_58576[(12)] = inst_58544);

(statearr_58576[(8)] = inst_58524);

return statearr_58576;
})();
var statearr_58577_58601 = state_58564__$1;
(statearr_58577_58601[(2)] = null);

(statearr_58577_58601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58565 === (9))){
var inst_58524 = (state_58564[(8)]);
var inst_58540 = cljs.core.vec.call(null,inst_58524);
var state_58564__$1 = state_58564;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58564__$1,(11),out,inst_58540);
} else {
if((state_val_58565 === (5))){
var inst_58525 = (state_58564[(7)]);
var inst_58528 = (state_58564[(9)]);
var inst_58532 = (state_58564[(10)]);
var inst_58532__$1 = f.call(null,inst_58528);
var inst_58533 = cljs.core._EQ_.call(null,inst_58532__$1,inst_58525);
var inst_58534 = cljs.core.keyword_identical_QMARK_.call(null,inst_58525,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_58535 = ((inst_58533) || (inst_58534));
var state_58564__$1 = (function (){var statearr_58578 = state_58564;
(statearr_58578[(10)] = inst_58532__$1);

return statearr_58578;
})();
if(cljs.core.truth_(inst_58535)){
var statearr_58579_58602 = state_58564__$1;
(statearr_58579_58602[(1)] = (8));

} else {
var statearr_58580_58603 = state_58564__$1;
(statearr_58580_58603[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58565 === (14))){
var inst_58557 = (state_58564[(2)]);
var inst_58558 = cljs.core.async.close_BANG_.call(null,out);
var state_58564__$1 = (function (){var statearr_58582 = state_58564;
(statearr_58582[(13)] = inst_58557);

return statearr_58582;
})();
var statearr_58583_58604 = state_58564__$1;
(statearr_58583_58604[(2)] = inst_58558);

(statearr_58583_58604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58565 === (10))){
var inst_58547 = (state_58564[(2)]);
var state_58564__$1 = state_58564;
var statearr_58584_58605 = state_58564__$1;
(statearr_58584_58605[(2)] = inst_58547);

(statearr_58584_58605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58565 === (8))){
var inst_58528 = (state_58564[(9)]);
var inst_58532 = (state_58564[(10)]);
var inst_58524 = (state_58564[(8)]);
var inst_58537 = inst_58524.push(inst_58528);
var tmp58581 = inst_58524;
var inst_58524__$1 = tmp58581;
var inst_58525 = inst_58532;
var state_58564__$1 = (function (){var statearr_58585 = state_58564;
(statearr_58585[(7)] = inst_58525);

(statearr_58585[(8)] = inst_58524__$1);

(statearr_58585[(14)] = inst_58537);

return statearr_58585;
})();
var statearr_58586_58606 = state_58564__$1;
(statearr_58586_58606[(2)] = null);

(statearr_58586_58606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__54834__auto___58592,out))
;
return ((function (switch__54677__auto__,c__54834__auto___58592,out){
return (function() {
var cljs$core$async$state_machine__54678__auto__ = null;
var cljs$core$async$state_machine__54678__auto____0 = (function (){
var statearr_58587 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58587[(0)] = cljs$core$async$state_machine__54678__auto__);

(statearr_58587[(1)] = (1));

return statearr_58587;
});
var cljs$core$async$state_machine__54678__auto____1 = (function (state_58564){
while(true){
var ret_value__54679__auto__ = (function (){try{while(true){
var result__54680__auto__ = switch__54677__auto__.call(null,state_58564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__54680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54680__auto__;
}
break;
}
}catch (e58588){if((e58588 instanceof Object)){
var ex__54681__auto__ = e58588;
var statearr_58589_58607 = state_58564;
(statearr_58589_58607[(5)] = ex__54681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__54679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58608 = state_58564;
state_58564 = G__58608;
continue;
} else {
return ret_value__54679__auto__;
}
break;
}
});
cljs$core$async$state_machine__54678__auto__ = function(state_58564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54678__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54678__auto____1.call(this,state_58564);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54678__auto____0;
cljs$core$async$state_machine__54678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54678__auto____1;
return cljs$core$async$state_machine__54678__auto__;
})()
;})(switch__54677__auto__,c__54834__auto___58592,out))
})();
var state__54836__auto__ = (function (){var statearr_58590 = f__54835__auto__.call(null);
(statearr_58590[(6)] = c__54834__auto___58592);

return statearr_58590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__54836__auto__);
});})(c__54834__auto___58592,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
