  (function($) {

    var c1 = $('.first.circle');

  c1.circleProgress({
    startAngle: -Math.PI / 4 * 3,
    value: 0.0,
    lineCap: 'round',
    fill: {gradient: ['#9D54ED', '#00dbde']}
  });

  // Let's emulate dynamic value update
  setTimeout(function() { c1.circleProgress('value', 0.5); }, 2100);

  /////

  var c2 = $('.second.circle');

  c2.circleProgress({
    startAngle: -Math.PI / 4 * 3,
    value: 0.0,
    lineCap: 'round',
    fill: {gradient: ['#4776E6', '#12D8FA']}
  });

  // Let's emulate dynamic value update
  setTimeout(function() { c2.circleProgress('value', 0.7); }, 2100);

  /////

  var c3 = $('.third.circle');

  c3.circleProgress({
    startAngle: -Math.PI / 4 * 3,
    value: 0.0,
    lineCap: 'round',
    fill: {gradient: ['#00C9FF', '#92FE9D']}
  });

  // Let's emulate dynamic value update
  setTimeout(function() { c3.circleProgress('value', 0.3); }, 2100);

  })(jQuery);