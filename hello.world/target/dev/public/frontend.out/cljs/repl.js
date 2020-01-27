// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__47884){
var map__47885 = p__47884;
var map__47885__$1 = ((((!((map__47885 == null)))?(((((map__47885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47885):map__47885);
var m = map__47885__$1;
var n = cljs.core.get.call(null,map__47885__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__47885__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__47887_47909 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47888_47910 = null;
var count__47889_47911 = (0);
var i__47890_47912 = (0);
while(true){
if((i__47890_47912 < count__47889_47911)){
var f_47913 = cljs.core._nth.call(null,chunk__47888_47910,i__47890_47912);
cljs.core.println.call(null,"  ",f_47913);


var G__47914 = seq__47887_47909;
var G__47915 = chunk__47888_47910;
var G__47916 = count__47889_47911;
var G__47917 = (i__47890_47912 + (1));
seq__47887_47909 = G__47914;
chunk__47888_47910 = G__47915;
count__47889_47911 = G__47916;
i__47890_47912 = G__47917;
continue;
} else {
var temp__5720__auto___47918 = cljs.core.seq.call(null,seq__47887_47909);
if(temp__5720__auto___47918){
var seq__47887_47919__$1 = temp__5720__auto___47918;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47887_47919__$1)){
var c__4319__auto___47920 = cljs.core.chunk_first.call(null,seq__47887_47919__$1);
var G__47921 = cljs.core.chunk_rest.call(null,seq__47887_47919__$1);
var G__47922 = c__4319__auto___47920;
var G__47923 = cljs.core.count.call(null,c__4319__auto___47920);
var G__47924 = (0);
seq__47887_47909 = G__47921;
chunk__47888_47910 = G__47922;
count__47889_47911 = G__47923;
i__47890_47912 = G__47924;
continue;
} else {
var f_47925 = cljs.core.first.call(null,seq__47887_47919__$1);
cljs.core.println.call(null,"  ",f_47925);


var G__47926 = cljs.core.next.call(null,seq__47887_47919__$1);
var G__47927 = null;
var G__47928 = (0);
var G__47929 = (0);
seq__47887_47909 = G__47926;
chunk__47888_47910 = G__47927;
count__47889_47911 = G__47928;
i__47890_47912 = G__47929;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_47930 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_47930);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_47930)))?cljs.core.second.call(null,arglists_47930):arglists_47930));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__47891_47931 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47892_47932 = null;
var count__47893_47933 = (0);
var i__47894_47934 = (0);
while(true){
if((i__47894_47934 < count__47893_47933)){
var vec__47895_47935 = cljs.core._nth.call(null,chunk__47892_47932,i__47894_47934);
var name_47936 = cljs.core.nth.call(null,vec__47895_47935,(0),null);
var map__47898_47937 = cljs.core.nth.call(null,vec__47895_47935,(1),null);
var map__47898_47938__$1 = ((((!((map__47898_47937 == null)))?(((((map__47898_47937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47898_47937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47898_47937):map__47898_47937);
var doc_47939 = cljs.core.get.call(null,map__47898_47938__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47940 = cljs.core.get.call(null,map__47898_47938__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_47936);

cljs.core.println.call(null," ",arglists_47940);

if(cljs.core.truth_(doc_47939)){
cljs.core.println.call(null," ",doc_47939);
} else {
}


var G__47941 = seq__47891_47931;
var G__47942 = chunk__47892_47932;
var G__47943 = count__47893_47933;
var G__47944 = (i__47894_47934 + (1));
seq__47891_47931 = G__47941;
chunk__47892_47932 = G__47942;
count__47893_47933 = G__47943;
i__47894_47934 = G__47944;
continue;
} else {
var temp__5720__auto___47945 = cljs.core.seq.call(null,seq__47891_47931);
if(temp__5720__auto___47945){
var seq__47891_47946__$1 = temp__5720__auto___47945;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47891_47946__$1)){
var c__4319__auto___47947 = cljs.core.chunk_first.call(null,seq__47891_47946__$1);
var G__47948 = cljs.core.chunk_rest.call(null,seq__47891_47946__$1);
var G__47949 = c__4319__auto___47947;
var G__47950 = cljs.core.count.call(null,c__4319__auto___47947);
var G__47951 = (0);
seq__47891_47931 = G__47948;
chunk__47892_47932 = G__47949;
count__47893_47933 = G__47950;
i__47894_47934 = G__47951;
continue;
} else {
var vec__47900_47952 = cljs.core.first.call(null,seq__47891_47946__$1);
var name_47953 = cljs.core.nth.call(null,vec__47900_47952,(0),null);
var map__47903_47954 = cljs.core.nth.call(null,vec__47900_47952,(1),null);
var map__47903_47955__$1 = ((((!((map__47903_47954 == null)))?(((((map__47903_47954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47903_47954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47903_47954):map__47903_47954);
var doc_47956 = cljs.core.get.call(null,map__47903_47955__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47957 = cljs.core.get.call(null,map__47903_47955__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_47953);

cljs.core.println.call(null," ",arglists_47957);

if(cljs.core.truth_(doc_47956)){
cljs.core.println.call(null," ",doc_47956);
} else {
}


var G__47958 = cljs.core.next.call(null,seq__47891_47946__$1);
var G__47959 = null;
var G__47960 = (0);
var G__47961 = (0);
seq__47891_47931 = G__47958;
chunk__47892_47932 = G__47959;
count__47893_47933 = G__47960;
i__47894_47934 = G__47961;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__47905 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__47906 = null;
var count__47907 = (0);
var i__47908 = (0);
while(true){
if((i__47908 < count__47907)){
var role = cljs.core._nth.call(null,chunk__47906,i__47908);
var temp__5720__auto___47962__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___47962__$1)){
var spec_47963 = temp__5720__auto___47962__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_47963));
} else {
}


var G__47964 = seq__47905;
var G__47965 = chunk__47906;
var G__47966 = count__47907;
var G__47967 = (i__47908 + (1));
seq__47905 = G__47964;
chunk__47906 = G__47965;
count__47907 = G__47966;
i__47908 = G__47967;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__47905);
if(temp__5720__auto____$1){
var seq__47905__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47905__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__47905__$1);
var G__47968 = cljs.core.chunk_rest.call(null,seq__47905__$1);
var G__47969 = c__4319__auto__;
var G__47970 = cljs.core.count.call(null,c__4319__auto__);
var G__47971 = (0);
seq__47905 = G__47968;
chunk__47906 = G__47969;
count__47907 = G__47970;
i__47908 = G__47971;
continue;
} else {
var role = cljs.core.first.call(null,seq__47905__$1);
var temp__5720__auto___47972__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___47972__$2)){
var spec_47973 = temp__5720__auto___47972__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_47973));
} else {
}


var G__47974 = cljs.core.next.call(null,seq__47905__$1);
var G__47975 = null;
var G__47976 = (0);
var G__47977 = (0);
seq__47905 = G__47974;
chunk__47906 = G__47975;
count__47907 = G__47976;
i__47908 = G__47977;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
