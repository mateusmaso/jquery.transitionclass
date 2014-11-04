(function(root, factory) {

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports)
      module.exports = factory(global.$);
    exports = factory(global.$);
  } else {
    factory(root.$);
  }

}(this, function($) {

  $.fn.transitionClass = function(name, delay) {
    return this.each(function() {
      $(this).removeClass(name).delay(delay || 100).queue(function() {
        $(this).addClass(name);
        $(this).dequeue();
      });
    });
  };

}));
