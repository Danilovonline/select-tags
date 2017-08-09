# jquery-select-tags

Select-tags plugin for jquery displaying selected SELECT list items in the form of tags.

## Usage

Include it in your HTML after importing jQuery, like:

```html
    <script type="text/JavaScript" src="path/to/jquery.select-tags.js" />
```

Use it like:

```html
    $( document ).ready(function() {
        $('.select-tags').selectTags();
    });
```

## Events
 
  - selectTags.remove
  - selectTags.add
 
```html
    $('.select-tags')
        .on(
            'selectTags.remove',
            function(e, param) {
                $(this).selectpicker('refresh');
                console.log('remove "'+ param + '"');
            })
        .on(
            'selectTags.add',
            function(e, param) {
                console.log('add "'+ param + '"');
            });
```