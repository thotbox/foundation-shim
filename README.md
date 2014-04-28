## Description

Translates Foundation 5 markup for use with Foundation 3 JS and CSS, providing legacy browser support for Internet Explorer 8. For builds where Internet Explorer 8 support is a must (should be most builds), this should reduce the amount to IE8/F3 specific markup you need to write and maintain.

### Disclaimer

ZURB Foundation is a free collection of tools for creating websites and web applications. It contains HTML and CSS-based design templates for typography, forms, buttons, navigation and other interface components, as well as optional JavaScript extensions.

All credit for Foundation (all verions) goes to Zurb.

Form more information:

http://foundation.zurb.com/

http://zurb.com/

### Usage

Conditionally load Foundation CSS/JS in your page header/footer using whatever serverside conditionals you prefer. See example.html for reference.

Note: For ExpressionEngine users, check out my browser detection plugin (https://github.com/thotbox/expressionengine-browser-detect)

Make sure that your Foundation 5 initialization happens conditionally so that IE8 doesn't throw an error. Since I'm writing an html class in my header, I prefer to test for that.

Example:

```
if (!$('html').hasClass('lt-ie9')) {
    $(document).foundation();
}
```

#### Grid

Default Foundation grid classes for rows, columns and block-grids should translate on the fly.

Example (F5):

```
<div class="row">
    <div class="small-12 medium-8 large-9 columns">
        <!-- content -->
    </div>
    <div class="small-12 medium-4 large-3 columns">
        <!-- content -->
    </div>
</div>
```

Becomes (F3):

```
<div class="row">
    <div class="nine columns">
        <!-- content -->
    </div>
    <div class="three columns">
        <!-- content -->
    </div>
</div>
```

For classless builds (SCSS), add selectors to the custom arrays provided in foundation-shim.js.

Example:

```
var sixCol = [ "#div_id_1,#div_id_2,#div_id_3" ];
$.each( sixCol, function( i, val ) {
    $(val).addClass("six columns");
});
```

Important: Currently no support for offsets and source ordering. I'll add that once I run into an instance where I need it for my own projects.

#### Interchange

Default markup for Foundation 5's Interchange images do not include a "src" attribute (this is written by Interchange's javascript). So as not to interfere with Interchange's operations in Foundation 5, you can either output a src conditionally for IE8, or in situations where caching prevents conditionals from firing this deep in your code, add a custom "fallback" parameter to your image tag pointing to your default image. The shim will rename all instances of the "fallback" paramater to "src" after page load.

Example:

```
<img fallback="/path/to/default.jpg" data-interchange="[/path/to/default.jpg, (default)], [/path/to/bigger-image.jpg, (large)]">
```

#### Tabs

Tab markup translates well, despite the significant differences in the structure. You'll need to recreate any custom styles you've setup to work with the translated F3 markup.

Example (F5):

```
<dl class="tabs" data-tab>
    <dd class="active"><a href="#tab-1">Tab 1</a></dd>
    <dd><a href="#tab-2">Tab 2</a></dd>
    <dd><a href="#tab-3">Tab 3</a></dd>
    <dd><a href="#tab-4">Tab 4</a></dd>
</dl>
<div class="tabs-content">
    <div class="content active" id="tab-1">
        <!-- Tab 1 Content -->
    </div>
    <div class="content" id="tab-2">
        <!-- Tab 2 Content -->
    </div>
    <div class="content" id="tab-3">
        <!-- Tab 3 Content -->
    </div>
</div>
```

Becomes (F3):

```
<dl class="tabs" data-tab>
    <dd class="active"><a href="#tab-1">Tab 1</a></dd>
    <dd><a href="#tab-2">Tab 2</a></dd>
    <dd><a href="#tab-3">Tab 3</a></dd>
    <dd><a href="#tab-4">Tab 4</a></dd>
</dl>
<ul class="tabs-content">
    <li class="content active" id="tab-1Tab">
        <!-- Tab 1 Content -->
    </li>
    <li class="content" id="tab-2Tab">
        <!-- Tab 2 Content -->
    </li>
    <li class="content" id="tab-3Tab">
        <!-- Tab 1 Content -->
    </li>
</ul>
```

#### Accordions

Accordian markup also translates well. Again, you'll need to recreate any custom styles you've setup to work with the translated F3 markup.

Example (F5):

```
<dl class="accordion" data-accordion>
    <dd>
        <a href="#panel-1">Accordion 1</a>
        <div id="panel-1" class="content active">
            <!-- Panel 1 Content -->
        </div>
    </dd>
    <dd>
        <a href="#panel-2">Accordion 2</a>
        <div id="panel-2" class="content">
            <!-- Panel 2 Content -->
        </div>
    </dd>
    <dd>
        <a href="#panel-3">Accordion 3</a>
        <div id="panel-3" class="content">
            <!-- Panel 3 Content -->
        </div>
    </dd>
</dl>
```

Becomes (F3):

```
<ul class="accordion" data-accordion>
    <li class="active">
        <div class="title">Accordion 1</div>
        <div id="panel-1" class="content active">
            <!-- Panel 1 Content -->
        </div>
    </li>
    <li>
        <div class="title">Accordion 2</div>
        <div id="panel-2" class="content">
            <!-- Panel 2 Content -->
        </div>
    </li>
    <li>
        <div class="title">Accordion 3</div>
        <div id="panel-3" class="content">
            <!-- Panel 3 Content -->
        </div>
    </li>
</ul>
```

#### Clearing

For the most part, clearing works out of the box, however F3's clearing tends to be a little on the buggy side.

#### Top Bar

Top bar also works fairly well out of the box. The markup structure hasn't changed significantly from F3 to F5, although default styles vary somewhat.

### Notes

I've included the latest release of Foundation 3 in this package. I'm opearating under the assumption that you'll be bolting this shim on to an existing F5 build.

Since IE8 isn't used on mobile devices, I recommend setting a sensible minimum body width (1024px or 1280px) in your IE8 specicific styles to prevent any of your large columns breaking at viewport sizes under 768px wide.

### Foundation Docs

Foundation 5 - http://foundation.zurb.com/docs/

Foundation 3 - http://foundation.zurb.com/docs/v/3.2.5/



