(function( $ ){

	var methods = {
		init : function( options ) {
			var settings = $.extend( {
				'speed' : 2000, // Miliseconds
				'width': 0, // In pixels
				'maxValue': 0, // Unit value
				'showLabel' : true, // Boolean
				'showValue' : true // Boolean
			}, options );
			
			return this.each( function() {
				var $this = $(this);
				var data = $this.data( 'jbar' );
				var set = $.extend( {}, settings ); // clone
				
				// Init for first time
				// Add spans into definition list for formatting
				if ( !data ) {
					if ( set.width ) $this.width( set.width );
					if ( !set.showLabel ) $this.addClass( 'no-label' );
					if ( !set.showValue ) $this.addClass( 'no-value' );
					
					$this.find( 'dt' ).each(function() {
						var string = $(this).text();
						var dd = $(this).next( 'dd' );
						
						$(this).empty();
						$(this).append( '<span class="label">' + string + '</span>' );
						dd.attr( 'title', string + ': ' + dd.text() );
					});
					
					var maxValue = 0;
					$this.find( 'dd' ).each(function() {
						var string = $(this).text();
						var value = parseInt( string.replace( /% /gi, '' ) );
						$(this).empty();
						$(this).data( 'value', value );
						$(this).append( '<span class="bar"></span>' );
						$(this).append( '<span class="value">' + string + '</span>' );
						maxValue = Math.max( maxValue, value );
				    });
					if ( set.maxValue < maxValue ) set.maxValue = maxValue;
					
					var dd = $this.find( 'dd' ).first();
					set.maxBarWidth = dd.width() - dd.find( 'span.value' ).outerWidth( true );
					set.unit = set.maxBarWidth / set.maxValue;
					
					$this.data( 'jbar', set );
				}
			});
	     },
	     destroy : function( ) {
	    	 return this.each( function() {
	    		 $( window ).unbind( '.jbar' );
	    	 });
	     },
	     start : function( ) { 
	    	 return this.each( function() {
	    		 var $this = $(this);
	    		 var data = $this.data( 'jbar' );
	    		 $(this).find( 'dd' ).each(function( index ) {
	    			 var $dd = $(this);
	    			 var $bar = $dd.find( 'span.bar' );
	    			 var value = $dd.data( 'value' );
	    			 
	    			 $bar.addClass( 'bg-' + index );
	    			 
	    			 $bar.animate( { width: (value * data.unit ) + 'px' }, data.speed, function() {
	    				 if ( !$this.hasClass( 'no-value') ) $dd.find( 'span.value' ).fadeIn();
	    			 });
			    });
	    	 }); 
	     },
	};
	
	/**
	 * jQuery plugin logic
	 */
	$.fn.jbar = function( method ) {
	    if ( methods[method] ) {
	    	return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
	    } else if ( typeof method === 'object' || ! method ) {
	    	return methods.init.apply( this, arguments );
	    } else {
	    	$.error( 'Method ' +  method + ' does not exist on jQuery.jbar' );
	    }
	};

})( jQuery );