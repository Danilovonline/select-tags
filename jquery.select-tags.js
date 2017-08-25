/*!
 * SelectTags 1.0.0
 * https://github.com/danilovonline/select-tags
 *
 * Copyright 2017 Danilov Anatoly
 * Released under the MIT license
 */

(function( $ ) {
    $.fn.selectTags = function( ) {
        $(this).each(function() {
            var select = this;
            var cont = $("<div class='with-tags-container'></div>");
            cont.insertAfter($(this));
            var redrawTags = function () {
                cont.text('');
                $(select).find('option:selected').each(function () {
                    cont.append(
                        $('<button type="button" data-key="' + $(this).attr('value') + '" class="btn btn-xs with-tags-tag"><span class="glyphicon glyphicon-remove"></span> ' + $(this).text() + '</button>')
                            .on('click', function () {
                                $(select).find('option[value="' + $(this).attr('data-key') + '"]').prop('selected', false);
                                $(this).hide('fast').remove();
                                $(select).trigger('selectTags.remove', [$(this).attr('data-key')]);
                            })
                    );
                    $(select).trigger('selectTags.add', [$(this).attr('value')]);
                });
            }
            redrawTags();
            $(select).on('change', redrawTags);
        });
        return this;
    };
}( jQuery ));