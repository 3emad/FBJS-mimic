/**
 * 
 * @author Emad, emad@poolhouse.ca
 * @requires jquery.js
 * @version 0.3
 * 
 * This is a mimic file of FBJS's Ajax
 */

var Obj = null;
function Ajax(){
	// no need for type here :S
	this.responseType = "Ajax.FBML";
	this.ondone = function(){ };
	this.onerror  = function(){};
	var ajax = this;
	
	this.requireLogin = false; /*function (){
						//make sure fbconnect got a session
					};*/
	
	this.post = function (url, query){
						var type;
						//modify type
						if(query !== undefined){
							query = '?'+query;
						}else{
							query = '';
						}
						type = typeValidate();
						$.ajax({
							url: url+query,
							data: null,
							dataType: type,
							success: ajax.ondone,
							error: ajax.onerror
						});
					};
	function typeValidate(){
		// Ajax.RAW, Ajax.JSON, or Ajax.FBML
		if(this.responseType == 'Ajax.JSON')
			return 'json';
		return 'html';
		};
}

/* Mock Ajax methods */

// clicktoshow
// clicktohide
// clickrewriteid
// clickrewriteform
// clickrewriteurl

$(document).ready(function(){
	// make tem pointers
	$('span[clicktoshow],input[clicktoshow],div[clicktoshow],a[clicktoshow],span[clicktohide],input[clicktohide],div[clicktohide],a[clicktohide],span[clickrewriteurl],input[clickrewriteurl],div[clickrewriteurl],a[clickrewriteurl]').css('cursor','pointer');
	
	$('span[clicktoshow],input[clicktoshow],div[clicktoshow],a[clicktoshow]').livequery('click', function() {
		clicktoshow($(this).attr('clicktoshow'));
		$(this).css('cursor','pointer');
	});
	$('span[clicktohide],input[clicktohide],div[clicktohide],a[clicktohide]').livequery('click', function() {
		clicktohide($(this).attr('clicktohide'));
		$(this).css('cursor','pointer');
	});
	$('span[clickrewriteurl],input[clickrewriteurl],div[clickrewriteurl],a[clickrewriteurl]').livequery('click', function() {
		clickrewriteurl($(this).attr('clickrewriteurl'),$(this).attr('clickrewriteform'),$(this).attr('clickrewriteid'),$(this));
		$(this).css('cursor','pointer');
	});
});

function clicktoshow(id){
	$('#'+id).show();
}

function clicktohide(id){
	$('#'+id).hide();
}

function clickrewriteurl(url,formId,reponseId,jQueryThis){
	if(formId !== undefined){
		queryString = $('form#'+formId).serialize();
		if(queryString !== undefined){
			url = url+'?'+queryString;
		}
	}else{
		queryString = jQueryThis.parent('form').serialize();
		if(queryString !== undefined){
			url = url+'?'+queryString;
		}
	}
	// post ajax request
	$.get(url,null,function(data){
		 $('#'+reponseId).html(data);
	   }
	 );
}