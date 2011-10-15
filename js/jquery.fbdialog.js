/**
 * 
 * @author Emad, emad@poolhouse.ca
 * @requires jquery.js, jquery.boxy.js
 * @version 0.3
 * 
 * This is a mimic file of FBJS's dialog
 */

/*
	var dialog = new Dialog(Dialog.DIALOG_CONTEXTUAL);
	dialog.onconfirm = function(){ alert('success'); };
	dialog.oncancel = function(){ alert('cancel'); };
	dialog.showChoice("Are you sure you want to remove this tag?",'', "Yes, Remove It!", "No, I Changed My Mind");
*/

var title = "Dialog";
var options = { closeText: 'close', modal: true, draggable: true};
//var dialog;
function Dialog(type){
	this.options = options;
	// TODO: it how the popup will look but both will be dialogs
	this.DIALOG_CONTEXTUAL = 'cont';
	this.DIALOG_POP = 'pop';
	this.ok = 'ok';
	this.cancel = 'cancel';
	this.property = null;
	this.value = null;
	// globalize it
	var dialog = this;
	
	this.onchoice = function (val){
		if(val == dialog.ok){
			dialog.onconfirm();
		} else{			
			dialog.oncancel();
		}
	};
	
	this.onconfirm = function(){};
	this.oncancel = function(){};
	
	this.setTitle = function (newTitle){
						options.title = "<span class='blueHeader'><div class='fb_dialog_icon'></div><span>"+newTitle+"</span></span><!-- <div class='confirmation_stripes'></div>-->";
					};
	
	this.setStyle = function (property , value){
						this.property = property;
						dialog.value = value;
					};
	this.triggerStyle = function(){
						if(this.property !== undefined && this.value !== undefined){
							$('.boxy-content').css(this.property,this.value);
							// -36 is the difference
							$('.boxy-wrapper .question').css(this.property, parseInt(this.value) - 50);
							$('.boxy-wrapper .answers').css(this.property, parseInt(this.value) - 12);
							//$('.boxy-wrapper').center('x');
							//$('.boxy-wrapper').center('y');
						}
					};
	
	this.setContext = function(newContent){
						if(typeof(newContent) == String )
							$('.question').html(newContent);
						else
							$('.question').html($(newContent).html());
					};
					
	this.showMessage = function (dialogTitle, Message,js_str,close){
						if(dialogTitle != undefined){
							title = dialogTitle;
						}
						this.setTitle(title);
						Boxy.alert(Message,this.onchoiceMethod,this.options);
						this.triggerStyle();
						this.dialog = this;
					};
					
	this.showChoice = function(text, context, ok, cancel){
		if(text !== undefined){
			title = text;
		}
		this.setTitle(title);
		if(ok === undefined){
			this.ok = "OK";
		}else{
			this.ok = ok;
		}
		if(cancel == undefined){
			this.cancel = "Cancel";
		}else{
			this.cancel = cancel;
		}
		
		// a test without obj
		//obj = Boxy.ask(context,[this.ok, this.cancel], dialog.onchoice, options);
		//$('.boxy-wrapper').center('y');
		Boxy.ask(context,[this.ok, this.cancel], this.onchoice, this.options);
		this.triggerStyle();
		this.dialog = this;
	};
}

// http://stackoverflow.com/questions/210717/what-is-the-best-way-to-center-a-div-on-the-screen-using-jquery
jQuery.fn.center = function (axis) {
	both = false;
	if(axis === undefined){
		both = true;
	}
	if(axis == 'y' || both){
		this.css("top", ( $(window).height() - this.height() ) / 2+$(window).scrollTop() + "px");
	}
	if(axis == 'x' || both){
		this.css("left", ( $(window).width() - this.width() ) / 2+$(window).scrollLeft() + "px");
	}
    return this;
};

$(document).ready(function(){
	$('fb\\:js-string').each(function (i) {
		addToDom(this,"var");
	});
	//exceptions
	$('.fbjsString').each(function (i) {
		addToDom(this,"id");
	});
});

//adding variables to the dom
function addToDom(obj, type){
	// type: id or var
	str = $(obj).attr(type);
	window[str] = $(obj).html();
	$(obj).remove();
}