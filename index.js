/**
 * The nuclear (or perhaps opposite thereof) option.
 * Remove all the preview guff and reset everything back how it is in production.
 */
module.exports = function(includeTools) {
  var $ctx = $('span[id^="CTX-"]');
  var scripts = $ctx
    .find('script')
    .filter(function() {
      var $this = $(this),
        txt = $this.text(),
        src = $this.attr('src');

      return (
        (src && src.match(/joo\.js/)) ||
        (src && src.match(/coremedia/)) ||
        txt.match(/coremedia/) ||
        txt.match(/joo\.classLoader/)
      );
    })
    .remove();

  $ctx.children().unwrap();
  $ctx.remove();

  if (includeTools) {
    $('#previewMobilePanel,#previewInfoPanel').remove();
    $('body').removeClass('preview');
  }
};
