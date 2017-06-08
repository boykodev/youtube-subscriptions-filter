$(function() {
    var $subsContainer = $('#guide-subs-footer-container');
    var $container = $('<div class="yt-subs-filter-container"></div>');

    var $filter = $('<input type="text" class="yt-subs-filter">');
    var filterHint = 'Enter text to filter your subs';
    $filter.attr('placeholder', filterHint);

    $filter.keyup(function() {
        var filterText = $(this).val().toLowerCase();

        $('#guide-channels li').each(function(key, val) {
            var subName = $(this).text().trim().toLowerCase();

            if (subName.indexOf(filterText) >= 0) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    $container.html($filter);
    $subsContainer.prepend($filter);
});
