$(function() {
    function getCounterData(obj) {
      var days = parseInt($('.e-m-days', obj).text());
      var hours = parseInt($('.e-m-hours', obj).text());
      var minutes = parseInt($('.e-m-minutes', obj).text());
      var seconds = parseInt($('.e-m-seconds', obj).text());
      return seconds + (minutes * 60) + (hours * 3600) + (days * 3600 * 24);
    }

    function setCounterData(s, obj) {
      var days = Math.floor(s / (3600 * 24));
      var hours = Math.floor((s % (60 * 60 * 24)) / (3600));
      var minutes = Math.floor((s % (60 * 60)) / 60);
      var seconds = Math.floor(s % 60);

      console.log(days, hours, minutes, seconds);

      $('.e-m-days', obj).html(days);
      $('.e-m-hours', obj).html(hours);
      $('.e-m-minutes', obj).html(minutes);
      $('.e-m-seconds', obj).html(seconds);
    }

    var count = getCounterData($(".counter"));

    var timer = setInterval(function() {
      count--;
      if (count == 0) {
        clearInterval(timer);
        return;
      }
      setCounterData(count, $(".counter"));
    }, 1000);
  });