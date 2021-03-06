define(['baseTestSetup'], function(baseTestSetup) {
    'use strict';
    describe('trackr.administration.controllers.projects.edit', function () {
        var EditController, scope;
        baseTestSetup();
        beforeEach(inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            EditController = $controller('trackr.administration.controllers.projects.edit', {
                $scope: scope,
                'createOrUpdateModal.userdata': {}
            });
        }));

        it('must have a project in the scope', function() {
            expect(scope.project).toBeDefined();
        });
    });
});