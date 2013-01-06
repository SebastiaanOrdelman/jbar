jbar
====

jBar jQuery plugin.
Put nice horizontal animated bar stats to your website. Live demo can be viewed here http://www.sebastiaanordelman.nl/jbar/demo

Uses jQuery 1.8.3, should work in all browsers.

How to use:
===========
1) Download jquery.jbar.js and jbar.css and link to them in your html head

2) Link to jquery-1.8.3.js (maybe older versions might work too).

3) Create a bar chart by writing a definition list with class 'jbar'
```
    <dl class="jbar">
        <dt>Item 1</dt>
        <dd>60</dd>
        
        <dt>Item 2</dt>
        <dd>55</dd>
        
        <dt>Item 3</dt>
        <dd>80</dd>
    </dl>
```
4) Initialize the bar chart and fire-it-up! (I would add this to the head, or even better, separate file)
```
    <script language="javascript">
        $(function(){ // ..when page is loaded
            $( '.jbar' ).jbar(); // init
            $( '.jbar' ).jbar( 'start' ); // fire it up
        });
    </script>
```

The width of the chart is defined by the parent element. The label width ('dt' block) is set to 100px by default. You can change this by overwriting css. 
The values put in de 'dd' blocks are automagically resolved. You can also use '%' postfix as a valid value. For example '30 %' will resolve to 30.

Options:
========
You can give some options for bar chart behavior.
* speed; default 2000ms
* width; default zero, resolving to the parent width (in pixels)
* maxValue; default zero, detecting the value by itself, can be used as unit scale (nice when showing more related bar charts with same unit)
* showLabel; default true, can be set to false to hide label
* showValue; dafault true, can be set to false to hide value

```
    <script language="javascript">
        $(function(){
            $( '.jbar' ).jbar( {
                width: 350,
                speed: 4000,
                maxValue: 100,
                showLabel : false, 
                showValue : false 
            });
            $( '.jbar' ).jbar( 'start' );
        });
    </script>
```

Colors:
=======
You can adjust the colors by overwriting the default colors:
```
    <!-- color overwrite -->
    <style type="text/css">
        .jbar .bg-0 { background: #FF0000; }
        .jbar .bg-1 { background: #FF3300; }
        .jbar .bg-2 { background: #FF6600; }
        /* etc */
    </style>
```

Infographics:
=============
You can use jBar to show nice animated infographics.
```
    <!-- style overwrite -->
    <style type="text/css">
        /**
         * Infographic sprite example
         * See image in demo directory
         */
        .jbar.men-vs-women dt,
        .jbar.men-vs-women dd {
            height: 104px;  
        }
        .jbar.men-vs-women .bar {
            /* the example sprite is 35x200px, holding an image of man symbol and woman symbol */
            background: transparent url( man-woman-sprite-35x100.png) repeat-x;
            height: 100px;  
        }
        .jbar.men-vs-women .bg-0 { background-position: 0 -100px; }
        .jbar.men-vs-women .bg-1 { background-position: 0 0; }
    </style>
    
    <!-- do not show label and value -->
    <script language="javascript">
        $(function(){
            $( '.jbar.men-vs-women' ).jbar( {
                width: 350,
                speed: 4000,
                maxValue: 100,
                showLabel : false, 
                showValue : false 
            });
            $( '.jbar' ).jbar( 'start' );
        });
    </script>
    
    <!-- example -->
    <div>
       <dl class="jbar men-vs-women">
           <dt>Man</dt><dd>60 %</dd>
           <dt>Woman</dt><dd>40 %</dd>
       </dl>
   </div>
```

Tip: See the index.html example in the demo directory for more tips, or view the live demo http://www.sebastiaanordelman.nl/jbar/demo .