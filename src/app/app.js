angular.module( 'ngLoraBlock', [
    'templates-app',
    'ngLoraBlock.home',
    'ngLoraBlock.players',
    'ngLoraBlock.scores',
    'ngLoraBlock.games',
    'ngLoraBlock.animations',
    'ui.bootstrap',
    'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location, $transitions ) {
      $transitions.onSuccess({}, function($transition) {
          if ($transition.to().name !== 'home') {
              $scope.pageTitle = $transition.to().data.pageTitle + ' | lora-block';
          } else {
              $scope.pageTitle = 'lora-block';
          }
      });
});
