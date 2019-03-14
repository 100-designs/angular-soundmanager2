ngSoundManager.directive('movePosition', ['angularPlayer', function (angularPlayer) {
    return {
        restrict: "EA",
        link: function (scope, element, attrs) {
            element.bind('click', function (event) {
                if (angularPlayer.getCurrentTrack() === null) {
                    return;
                }
                var sound = soundManager.getSoundById(angularPlayer.getCurrentTrack());
                var newPos = sound.position + parseFloat(attrs.movePosition) * 1000;

                sound.setPosition(newPos);
            });
        }
    };
}]);