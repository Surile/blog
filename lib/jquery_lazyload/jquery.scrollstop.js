// build time:Tue Mar 12 2019 13:00:59 GMT+0800 (GMT+08:00)
(function(){var t=jQuery.event.special,e="D"+ +new Date,n="D"+(+new Date+1);t.scrollstart={setup:function(){var n,l=function(e){var l=this,s=arguments;if(n){clearTimeout(n)}else{e.type="scrollstart";jQuery.event.dispatch.apply(l,s)}n=setTimeout(function(){n=null},t.scrollstop.latency)};jQuery(this).bind("scroll",l).data(e,l)},teardown:function(){jQuery(this).unbind("scroll",jQuery(this).data(e))}};t.scrollstop={latency:300,setup:function(){var e,l=function(n){var l=this,s=arguments;if(e){clearTimeout(e)}e=setTimeout(function(){e=null;n.type="scrollstop";jQuery.event.dispatch.apply(l,s)},t.scrollstop.latency)};jQuery(this).bind("scroll",l).data(n,l)},teardown:function(){jQuery(this).unbind("scroll",jQuery(this).data(n))}}})();
//rebuild by neat 