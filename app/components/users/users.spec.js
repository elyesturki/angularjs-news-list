'use strict';

describe('UsersController', () => {
    let $controller;
    let UsersController;
    let UsersFactory;

    /**
     * Load ui.router and our components.users module which we'll
     * create next
     */
    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('components.users'));
    /**
     * Add the module for our Users service
     */
    beforeEach(angular.mock.module('api.users'));

    /**
     * Inject the $controller service to create instances of the
     * controller (UsersController) we want to test
     */
    beforeEach(inject((_$controller_, _Users_) => {
        $controller = _$controller_;
        UsersFactory = _Users_;

        // Spy and force the return value when UsersFactory.all() is called
        spyOn(UsersFactory, 'all').and.callThrough();

        // Add the factory as a controller dependency
        UsersController = $controller('UsersController', {Users: UsersFactory});
    }));

    /**
     * Verify our controller exists
     */
    it('should be defined', () => {
        expect(UsersController).toBeDefined();
    });

    // Add a new test for our expected controller behavior
    it('should initialize with a call to Users.all()', () => {
        expect(UsersFactory.all).toHaveBeenCalled();
    });
});
