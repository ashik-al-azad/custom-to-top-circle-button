$(document).ready(function () {
  var progressPath = document.querySelector('.progress-wrap path');
  var pathLength = progressPath.getTotalLength();

  progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;

  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - scroll * pathLength / height;
    progressPath.style.strokeDashoffset = progress;
  };

  updateProgress();

  $(window).scroll(updateProgress);

  var offset = 50;
  var duration = 500;

  jQuery(window).on('scroll', function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery('.progress-wrap').addClass('active-progress');
    } else {
      jQuery('.progress-wrap').removeClass('active-progress');
    }
  });

  jQuery('.progress-wrap').on('click', function (event) {
    jQuery('html, body').animate({
      scrollTop: 0
    }, duration);
  });
});