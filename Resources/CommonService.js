var commonService =  function ($http, $q) {
    var factory = {};

    factory.getData = function (uri, thenFn) {
        var result
        var deferredList = $q.defer();

        $http.get(uri)
            .success(function (response, status, headers, config) {
                deferredList.resolve(response);
            })
            .error(function (errResp) {
                console.log("error fetching url");
            });

        var listPromise = deferredList.promise;

        listPromise.then(
        thenFn,
        function (reason) {

        }, function (update) {

        });

        return listPromise;
    }

    factory.postData = function (uri, postData, thenFn) {
        var result
        var deferredList = $q.defer();

        $http.post(uri, postData)
            .success(function (response, status, headers, config) {
                deferredList.resolve(response);
            })
            .error(function (errResp) {
                console.log("error fetching url");
            });

        var listPromise = deferredList.promise;

        listPromise.then(
        thenFn,
        function (reason) {

        }, function (update) {

        });

        return listPromise;
    }

    factory.toNumber = function (exp) {
            return parseInt(exp);
    }


    return factory;
}