
// IF IE then implement Extend Hack
if($.browser.msie){
	
	var DOMElement =
	{
		extend: function(name,fn)
		{
			if(!document.all)
				eval("HTMLElement.prototype." + name + " = fn");
			else
			{
				//
				//	IE doesn't allow access to HTMLElement
				//	so we need to override
				//	*document.createElement
				//	*document.getElementById
				//	*document.getElementsByTagName
				//
	
				//take a copy of
				//document.createElement
				var _createElement = document.createElement;
	
				//override document.createElement
				document.createElement = function(tag)
				{
					var _elem = _createElement(tag);
					eval("_elem." + name + " = fn");
					return _elem;
				}
	
				//take copy of
				//document.getElementById
				var _getElementById = document.getElementById;
	
				//override document.getElementById
				document.getElementById = function(id)
				{
					var _elem = _getElementById(id);
					eval("_elem." + name + " = fn");
					return _elem;
				}
	
				//take copy of
				//document.getElementsByTagName
				var _getElementsByTagName = document.getElementsByTagName;
	
				//override document.getElementsByTagName
				document.getElementsByTagName = function(tag)
				{
					var _arr = _getElementsByTagName(tag);
					for(var _elem=0;_elem<_arr.length;_elem++)
						eval("_arr[_elem]." + name + " = fn");
					return _arr;
				}
			}
		}
	};
}