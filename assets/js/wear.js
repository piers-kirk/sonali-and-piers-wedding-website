// What to Wear: switch between the Mehendi, Wedding and Reception tabs.
(function () {
  var buttons = document.querySelectorAll('.o-seg button');
  if (!buttons.length) return;
  function show(id) {
    var found = false;
    buttons.forEach(function (b) {
      var on = b.dataset.t === id;
      if (on) found = true;
      b.setAttribute('aria-selected', on);
      var pane = document.getElementById(b.dataset.t);
      if (pane) pane.hidden = !on;
    });
    return found;
  }
  buttons.forEach(function (b) {
    b.addEventListener('click', function () {
      show(b.dataset.t);
      try { history.replaceState(null, '', '#' + b.dataset.t); } catch (e) {}
    });
  });
  // Links like wear.html#reception open the matching tab.
  var start = location.hash.replace('#', '');
  if (start && show(start)) {
    var seg = document.querySelector('.o-seg');
    if (seg) setTimeout(function () { seg.scrollIntoView({ block: 'start' }); }, 50);
  }
})();
