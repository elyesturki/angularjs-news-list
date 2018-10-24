describe('Users factory', () => {
    let Users;
    let $q;
    let $httpBackend;
    // Add JSON endpoint
    let API = 'https://jsonplaceholder.typicode.com/users';
    // Add mocked JSON response
    let RESPONSE_SUCCESS = {
        'id': 1,
        'name': 'Leanne Graham',
        'username': 'Bret',
        'email': 'Sincere@april.biz',
        'address': {
            'street': 'Kulas Light',
            'suite': 'Apt. 556',
            'city': 'Gwenborough',
            'zipcode': '92998-3874',
            'geo': {
                'lat': '-37.3159',
                'lng': '81.1496',
            },
        },
        'phone': '1-770-736-8031 x56442',
        'website': 'hildegard.org',
        'company': {
            'name': 'Romaguera-Crona',
            'catchPhrase': 'Multi-layered client-server neural-net',
            'bs': 'harness real-time e-markets',
        },
    };
    /**
     * Before each test load our api.users module
     */
    beforeEach(angular.mock.module('api.users'));

    /**
     * Before each test set our injected Users factory (_Users_)
     * to our local Users variable
     */
    beforeEach(inject((_Users_, _$q_, _$httpBackend_) => {
        Users = _Users_;
        $q = _$q_;
        $httpBackend = _$httpBackend_;
    }));

    /**
     * A simple test to verify the Users factory exists
     */
    it('should exist', () => {
        expect(Users).toBeDefined();
    });

    /**
     * A set of tests for our Users.all() method
     */
    describe('.all()', () => {
        let result;

        beforeEach(() => {
            /**
             * Initialize our local result object to an empty object
             * before each test
             */
            result = {};

            /**
             * Spy on our service call but allow it to continue to its
             * implementation
             */
            spyOn(Users, 'all').and.callThrough();
        });

        // A simple test to verify the method all exists
        it('should exist', () => {
            expect(Users.all).toBeDefined();
        });

        /**
         * A test to verify that calling all() returns the array
         * of ten users
         */
        it('should return a single user', () => {
            $httpBackend.whenGET(API).respond(200,
                $q.when(RESPONSE_SUCCESS));

            expect(Users.all).not.toHaveBeenCalled();
            expect(result).toEqual({});

            Users.all()
                .then(function(res) {
                    result = res;
                });

            // Flush pending HTTP requests
            $httpBackend.flush();

            expect(Users.all).toHaveBeenCalledWith();
            expect(Object.keys(result).length).toEqual(8);
        });
    });
    describe('.findById(id)', () => {
        let result;

        beforeEach(() => {
            /**
             * Initialize our local result object to an empty object
             * before each test
             */
            result = {};

            /**
             * Spy on our service call but allow it to continue to its
             * implementation
             */
            spyOn(Users, 'findById').and.callThrough();
        });
        // A simple test to verify the method findById exists
        it('should exist', () => {
            expect(Users.findById).toBeDefined();
        });
        it('Returns a single user', () => {
            let search = 1;
            $httpBackend.whenGET(API + '/' + search).respond(200,
                $q.when(RESPONSE_SUCCESS));

            expect(Users.findById).not.toHaveBeenCalled();
            expect(result).toEqual({});

            Users.findById(search)
                .then(function(res) {
                    result = res;
                });

            // Flush pending HTTP requests
            $httpBackend.flush();

            expect(Users.findById).toHaveBeenCalledWith(search);
            expect(result.id).toEqual(search);
        });
    });
});
