angular.module("app").factory('api', ['$http', function($http) {
    var api = {},
        url;

    // url = '127.0.0.1:2095/v1/';
    url='api.bitsharesblocks.com/v1/';

    var cb = '?callback=JSON_CALLBACK';

    api.getInfo = function() {
        return $http({
            method: 'JSONP',
            url: 'http://' + url + 'info' + cb,
            cache: true
        });
    };

    api.getOperations = function(operation) {
        return $http({
            method: 'JSONP',
            url: 'http://' + url + 'operations/' + type + cb,
            cache: true
        });
    };

    api.getDelegateNames = function() {
        return $http({
            method: 'JSONP',
            url: 'http://' + url + 'delegateNames' + cb,
            cache: false
        });
    };

    api.getGenesis = function() {
        return $http({
            method: 'JSONP',
            url: 'http://' + url + 'genesis' + cb,
            cache: true
        });
    };

    api.getGenesisBTSX = function() {
        return $http({
            method: 'JSONP',
            url: 'http://' + url + 'genesisbtsx' + cb,
            cache: true
        });
    };

    api.getInflation = function() {
        return $http({
            method: 'JSONP',
            url: 'http://' + url + 'inflation' + cb,
            cache: false
        });
    };

    api.getFees = function() {
        return $http({
            method: 'JSONP',
            url: 'http://' + url + 'fees' + cb,
            cache: false
        });
    };

    api.getPrecision = function(id) {
        return $http({
            method: 'JSONP',
            url: 'http://' + url + 'getprecision/' + id + cb,
            cache: false
        });
    };

    api.getAssetDetail = function() {
        return $http({
            method: 'JSONP',
            url: 'http://' + url + 'assetdetail/' + cb,
            cache: true
        });
    };

    api.getHome = function(cacheBoolean) {
        return $http({
            method: 'JSONP',
            url: 'http://' + url + 'home' + cb,
            cache: cacheBoolean
        });
    };

    api.getAssets = function() {
        return $http({
            method: 'JSONP',
            url: 'http://' + url + 'assets' + cb,
            cache: false
        });
    };

    api.getUserAssets = function() {
        return $http({
            method: 'JSONP',
            url: 'http://' + url + 'userassets' + cb,
            cache: false
        });
    };

    api.getRecentBlocks = function() {
        return $http({
            method: 'JSONP',
            url: 'http://' + url + 'blocks/new' + cb,
            cache: false
        });
    };

    api.getHomeBlocks = function() {
        return $http({
            method: 'JSONP',
            url: 'http://' + url + 'homeblocks' + cb,
            cache: false
        });
    };

    api.getCurrentBlock = function() {
        return $http({
            method: 'JSONP',
            url: 'http://' + url + 'currentblock' + cb,
            cache: false
        });
    };

    api.getDelegates = function(cacheBoolean) {
        return $http({
            method: 'JSONP',
            url: 'http://' + url + 'delegates' + cb,
            cache: cacheBoolean
        });
    };

    api.getActiveDelegates = function(cacheBoolean) {
        return $http({
            method: 'JSONP',
            url: 'http://' + url + 'activedelegates' + cb,
            cache: false
        });
    };

    api.getNewBlocks = function(lastBlock) {
        return $http.jsonp('http://' + url + 'blocks/new/' + lastBlock + cb);
    };

    api.getBlock = function(blockNum) {
        return $http.jsonp('http://' + url + 'blocks/' + blockNum + cb);

    };

    api.getBlocksPage = function(blockNum) {
        return $http.jsonp('http://' + url + 'blocks/page/' + blockNum + cb);
    };

    api.getTrxBlocksPage = function(blockNum) {
        return $http.jsonp('http://' + url + 'blockstrx/page/' + blockNum + cb);
    };

    api.getTrxBlocksPageInverse = function(blockNum) {
        return $http.jsonp('http://' + url + 'blockstrx/pageinverse/' + blockNum + cb);
    };

    api.getAsset = function(assetId) {
        return $http.jsonp('http://' + url + 'assets/' + assetId + cb);
    };

    api.getPriceHistory = function(assetId) {
        return $http.jsonp('http://' + url + 'pricehistory/' + assetId + cb);
    };

    api.getPrice = function(unit) {
        return $http.jsonp('http://' + url + 'price/' + unit + cb);
    };

    api.getHomePrice = function(unit) {
        return $http.jsonp('http://' + url + 'homeprice/' + unit + cb);
    };

    api.getBlockByTrx = function(trxid) {
        return $http.jsonp('http://' + url + 'blocksbytrx/' + trxid + cb);
    };

    api.getDelegate = function(name) {
        return $http.jsonp('http://' + url + 'delegates/' + name + cb);
    };

    api.getDelegateVotes = function(name) {
        return $http.jsonp('http://' + url + 'delegatevotes/' + name + cb);
    };

    api.getDelegateByRank = function(rank) {
        return $http.jsonp('http://' + url + 'delegatesbyrank/' + rank + cb);
    };

    api.getRecentBlocksTrx = function() {
        return $http.jsonp('http://' + url + 'blockstrx/new' + cb);
    };

    api.getNewBlocksTrx = function(lastBlock) {
        return $http.jsonp('http://' + url + 'blockstrx/new/' + lastBlock + cb);
    };

    api.getVolume = function(cacheBoolean) {
        return $http({
            method: 'JSONP',
            url: 'http://' + url + 'volume' + cb,
            cache: cacheBoolean
        });
    };

    api.getAssetVolume = function(cacheBoolean) {
        return $http({
            method: 'JSONP',
            url: 'http://' + url + 'assetvolume' + cb,
            cache: cacheBoolean
        });
    };

    api.getAssetVolume2 = function(days) {
        return $http({
            method: 'JSONP',
            url: 'http://' + url + 'assetvolume2/' + days + cb
        });
    };

    api.getAccountByNr = function(nr) {
        return $http.jsonp('http://' + url + 'accountsbynr/' + nr + cb);
    };

    api.getAccount = function(name) {
        return $http.jsonp('http://' + url + 'accounts/' + name + cb);
    };

    api.getAccounts = function() {
        return $http.jsonp('http://' + url + 'accounts' + cb);
    };

    api.getAccountsCount = function() {
        return $http.jsonp('http://' + url + 'accountscount' + cb);
    };

    api.getAccountsPage = function(topId) {
        return $http.jsonp('http://' + url + 'accountspage/' + topId + cb);
    };

    api.searchAccounts = function(query) {
        return $http.jsonp('http://' + url + 'accountssearch/' + query + cb);
    };

    return api;

}]);