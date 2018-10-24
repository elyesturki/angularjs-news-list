describe('Posts factory', () => {
  let Posts;
  let $q;
  let $httpBackend;

  // Add JSON endpoint
  let API = 'https://jsonplaceholder.typicode.com/posts';

  // Add mocked JSON response
  let RESPONSE_SUCCESS = {
    'userId': 1,
    'id': 1,
    'title': 'sunt aut facere repellat provident '
        + 'occaecati excepturi optio reprehenderit',
    'body': 'quia et suscipit\nsuscipit recusandae '
        + 'consequuntur expedita et cum\nreprehenderit '
        + 'molestiae ut ut quas totam\nnostrum rerum est '
        + 'autem sunt rem eveniet architecto',
  };
  let RESPONSE_EMPTY = {};

  // Load the api.posts module which we'll create next
  beforeEach(angular.mock.module('api.posts'));

  // Inject the Posts service
  beforeEach(inject((_Posts_, _$q_, _$httpBackend_) => {
    Posts = _Posts_;
    $q = _$q_;
    $httpBackend = _$httpBackend_;
  }));

  // Verify our controller exists
  it('should exist', () => {
    expect(Posts).toBeDefined();
  });
describe('findByName()', () => {
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
        spyOn(Posts, 'findByName').and.callThrough();
    });

    it('should return a Posts when called with a valid name', () => {
      let search = '1';

        /**
         * Declare the endpoint we expect our service to hit
         * and provide it with our mocked return values
         */
      $httpBackend.whenGET(API + '/' + search).respond(200,
        $q.when(RESPONSE_SUCCESS));

      expect(Posts.findByName).not.toHaveBeenCalled();
      expect(result).toEqual({});

      Posts.findByName(search)
      .then(function(res) {
        result = res;
      });

      // Flush pending HTTP requests
      $httpBackend.flush();

      expect(Posts.findByName).toHaveBeenCalledWith(search);
      expect(result.id).toEqual(RESPONSE_SUCCESS.id);
      expect(result.userId).toEqual(RESPONSE_SUCCESS.userId);
      expect(result.title).toEqual(RESPONSE_SUCCESS.title);
      expect(result.body).toEqual(RESPONSE_SUCCESS.body);
    });
    it('should return an empty Object when ' +
        'called with an invalid name', function() {
      // Update search term
      let search = '10101';

      // Update status code and response object 
      // (reject instead of when/resolve)
      $httpBackend.whenGET(API + '/' + search).respond(404,
        $q.reject(RESPONSE_EMPTY));

      expect(Posts.findByName).not.toHaveBeenCalled();
      expect(result).toEqual(RESPONSE_EMPTY);

      // Update chained method to catch
      Posts.findByName(search)
      .catch(function(res) {
        result = res;
      });
      $httpBackend.flush();

      expect(Posts.findByName).toHaveBeenCalledWith(search);
      expect(result).toEqual({});
    });
  });
});
