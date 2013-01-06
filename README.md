jbar
====

jBar jQuery plugin.
Put nice horizontal bar stats to your website.

Uses jQuery 1.8.3, should work in all browsers.

How to use:
===========
1) Download jquery.jbar.js and jbar.css and link to them in your html head
2) Link to jquery-1.8.3.js (maybe older versions might work also).
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

The values put in de 'dd' blocks are automagically resolved. You can also use '%' postfix as a valid value. For example '30 %'.

Tip: See also the example index.html in the demo directory