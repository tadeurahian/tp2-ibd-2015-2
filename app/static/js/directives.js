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
