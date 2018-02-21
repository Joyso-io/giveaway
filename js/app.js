(function ($) {
  $(document).ready(function () {
    $('#button').click(function () {
      var hash = new BigNumber($('#hash').val());
      var total = $('#total').val() || 0;
      if (total === 0) {
        return;
      }
      var number = hash.mod(total).toNumber();
      if (number === 0) {
        number = total;
      }
      $('#number').text(number);
    });
  });
})(jQuery);
