'use strict';

ibdApp.directive('ibdTopBar', function () {
  'use strict';

  return {
    replace: true,
    retrict: 'E',
    templateUrl: 'static/partials/top-bar.html',
    link: function (scope, elm) {
      $(document).foundation();
    }
  };
});

ibdApp.directive('ibdTicker', function ($rootScope, $timeout) {
  'use strict';

  return {
    replace: false,
    restrict: 'E',
    templateUrl: 'static/partials/ticker.html',
    scope: {
      message: '=',
      type: '=',
      show: '='
    },
    link: function (scope, elm) {
      var $ticker = $(elm).children('.ticker');

      scope.esconderTicker = $rootScope.esconderTicker;

      scope.$watch('show', function (newVal, oldVal) {
        if(oldVal === true) {
          $ticker.hide();
        }

        if(newVal === true) {
          $ticker.fadeIn();
        } else {
          $ticker.fadeOut();
        }

        if(scope.type === 'success') {
          $ticker.removeClass('error');
          $ticker.addClass('success');
        } else if(scope.type === 'error') {
          $ticker.removeClass('success');
          $ticker.addClass('error');
        }

        $timeout(function () { scope.esconderTicker(); }, 3000);
      });
    }
  };
});
