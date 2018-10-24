describe('Capitalize filter', function() {
    let capitalizeFilter;

    /**
     * Load our filters.capitalize module
     * which we'll create next
     */
    beforeEach(angular.mock.module('filters.capitalize'));

    /**
     * Inject the $filter service and create an instance
     * of our capitalize filter
     */
    beforeEach(inject((_$filter_) => {
        capitalizeFilter = _$filter_('capitalize');
    }));

    it('should capitalize the first letter of a string', () => {
        expect(capitalizeFilter('lorem')).toEqual('Lorem');
    });

    it('should capitalize the first letter of a phrase', () => {
        expect(capitalizeFilter('lorem impsum')).toEqual('Lorem impsum');
    });
});
