// USELESS PART

(function($){
  $.fn.setStyle = function(element, style) {
    return this.css(element, style);
  };
})(jQuery);

(function($){
  $.fn.getStyle = function(style) {
    return this.css(style);
  };
})(jQuery);

(function($){
  $.fn.makeItBlue = function() {
    return this.css('color', 'blue');
  };
})(jQuery);

(function($){
  $.fn.setValue = function(value) {
    return this.val(value);
    
  };
})(jQuery);

(function($){
  $.fn.getValue = function() {
    return this.val();
  };
})(jQuery);

(function($){
  $.fn.setTextValue = function(value) {
    return this.text(value);
    
  };
})(jQuery);

(function($){
  $.fn.addEventListener = function(event_name, fn_name) {
    return this.bind(event_name, {}, fn_name);
    
  };
})(jQuery);

(function($){ 
  $.fn.setClassName = function(className) {  
      if (className == "") {
          return this.removeClass(className);
          
      }
      else {
          return this.addClass(className);
      }
  };
})(jQuery);

(function($){ 
	  $.fn.setClassName = function(className) { 
	      if (className == "") {
	          return this.removeClass(className);  
	      }
	      else {
	          return this.addClass(className);
	      }
	  }
	})(jQuery);

jQuery.expr[':'].regex = function(elem, index, match) {
    var matchParams = match[3].split(','),
        validLabels = /^(data|css):/,
        attr = {
            method: matchParams[0].match(validLabels) ? 
                        matchParams[0].split(':')[0] : 'attr',
            property: matchParams.shift().replace(validLabels,'')
        },
        regexFlags = 'ig',
        regex = new RegExp(matchParams.join('').replace(/^\s+|\s+$/g,''), regexFlags);
    return regex.test(jQuery(elem)[attr.method](attr.property));
};


// Emad Customization
/**
 * ADDING New Methods to the Dom
 */
$(document).ready(function(){
	//With Firefox / Mozilla
	if($.browser.msie == undefined){
		HTMLElement.prototype.setInnerXHTML = function( HTML ){ this.innerHTML = HTML; };
		HTMLElement.prototype.setInnerFBML = function( HTML ){ this.innerHTML = HTML; };
		HTMLElement.prototype.setTextValue = function( HTML ){ this.innerHTML = HTML; };
		HTMLElement.prototype.serialize = function( ArrayOrObj ){ return $(this).serialize(ArrayOrObj); };
		HTMLElement.prototype.setValue = function (val) { $(this).val(val); };
		HTMLElement.prototype.getValue = function () { return $(this).val(); };
		HTMLElement.prototype.setDisabled = function () { $(this).attr('disabled','disabled'); };
		HTMLElement.prototype.setAction = function (url) { $(this).attr('action', url); };
		
		HTMLElement.prototype.setStyle = function (property, value) { $(this).css(property, value); };
		HTMLElement.prototype.getStyle = function (property) { $(this).css(property); };
		
		// its matching "div#tagBoxContent.contentBox", it needs to match the next element! so it should have children then eq(0)
		HTMLElement.prototype.getFirstChild = function () { return $(this).children().eq(0); };
		HTMLElement.prototype.submit = function () { $(this).submit(); };
		
		HTMLElement.prototype.setClassName = function(className) { $(this).attr('class',className); };
		HTMLElement.prototype.removeClassName = function (className) { $(this).removeClass(className); };
		HTMLElement.prototype.addClass = function(className) { $(this).addClass(className); };
		HTMLElement.prototype.removeClass = function(className) { $(this).removeClass(className); };
		HTMLElement.prototype.getClassName = function(){ return $(this).attr('class'); }; 
		
		HTMLElement.prototype.getTagName = function(){ return $(this).get(0).tagName; };
		HTMLElement.prototype.getHref = function(){ return $(this).attr('href'); };
		HTMLElement.prototype.getSelectedIndex = function(){ return $(this).attr("selectedIndex"); };
		
		// it uses the "document" object directly
		Node.prototype.setLocation = function (url) { window.location.replace(url); };
	}else{ 
		// Manipulate the HTMLElement object for IE
		DOMElement.extend('setInnerXHTML',function( HTML ){ this.innerHTML = HTML; });
		DOMElement.extend('setInnerFBML',function( HTML ){ this.innerHTML = HTML; });
		DOMElement.extend('setTextValue',function( HTML ){ this.innerHTML = HTML; });
		DOMElement.extend('serialize',function( ArrayOrObj ){ return $(this).serialize(ArrayOrObj); });
		DOMElement.extend('setValue',function (val) { $(this).val(val); });
		DOMElement.extend('getValue',function () { return $(this).val(); });
		DOMElement.extend('setDisabled',function () { $(this).attr('disabled','disabled'); });
		DOMElement.extend('setStyle',function (property, value) { $(this).css(property, value); });
		DOMElement.extend('getStyle',function (property) { $(this).css(property); });
		DOMElement.extend('setAction',function (url) { $(this).attr('action', url); });
		DOMElement.extend('setLocation',function (url) { window.location.replace(url); });
		DOMElement.extend('submit',function () { $(this).submit(); });
		DOMElement.extend('setClassName',function (className) { $(this).attr('class',className); });
		DOMElement.extend('removeClassName',function (className) { $(this).removeClass(className); });
		DOMElement.extend('addClass',function(className) { $(this).addClass(className); });
		DOMElement.extend('removeClass',function(className) { $(this).removeClass(className); });
		DOMElement.extend('getClassName',function(){ return $(this).attr('class'); });
		DOMElement.extend('getTagName',function(){ return $(this).get(0).tagName; });
		DOMElement.extend('getHref',function(){ return $(this).attr('href'); });
		DOMElement.extend('getSelectedIndex',function(){ return $(this).attr("selectedIndex"); });
	}
});

// tabs selected
$(document).ready(function(){
	$('a[selected=true],div[selected=true]').addClass('selected');
});