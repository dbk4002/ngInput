myApp.directive('ngInputSection', function (commonService) {
    var directive = {};
    directive.restrict = 'E';
    directive.replace = false;
    directive.templateUrl = "ngInputSection.html";
    directive.scope = {
        title: "@",
        inputElements: "=elements",
        columns: "@",
        data: "=configdata",
        formName : "@"
    }
    directive.controller = ['$scope', function ngInputSectionController($scope) {

        $scope.validateSection = function () {
            var totalInputElements = $scope.inputElements.length;
            $scope.isError = false;
            $scope.isValid = true;
            $scope.valid = true;
            for (var count = 1; count <= totalInputElements; count++) {
                $scope.isValid = $scope.isValid && ($scope.$parent[$scope.formName][$scope.inputElements[count - 1].modelName].$valid);
            }
            $scope.isError = !$scope.isValid;
        }
        this.ngChangeOfInput = function (elementName) {
            $scope.validateSection();
        }

        $scope.afterInit = function () {
            $scope.validateSection();
        }
    }];

    

    directive.compile = function (element, attributes) {

        var linkFunction = function ($scope, element, attributes) {
            element.on('load', $scope.afterInit);
            $scope.rowArr;
            $scope.columnArr;
            $scope.rows=0;  

            var totalInputElements = $scope.inputElements.length;
            $scope.inputElementsMap = {};
            $scope.isError = false;
            for (var count = 1;count<=totalInputElements;count++){
                $scope.inputElementsMap[$scope.inputElements[count-1].rowNo + '~' + $scope.inputElements[count-1].columnNo] = $scope.inputElements[count-1];
                $scope.rows = Math.max($scope.rows, $scope.inputElements[count - 1].rowNo);
              //  $scope.isError = $scope.$parent.myform[$scope.inputElements[count - 1].modelName].$error;
            }

            $scope.getCount = function(num){
                var arr = [];
                for (var i = 0; i < num; i++) {
                    arr.push(i+1);
                }
                return arr;
            }
            
            
        }


        return linkFunction;
    }

    return directive;
});


myApp.directive('ngInputForm', function (commonService) {
    var directive = {};
    directive.restrict = 'E';
    directive.replace = false;
    directive.templateUrl = "ngInputForm.html";
    directive.scope = {
        sections: "=sections",
        name : "@",
        data: "=configdata"
    }
    directive.controller = ['$scope', function ngInputFormController($scope) {

    }];



    directive.compile = function (element, attributes) {

        var linkFunction = function ($scope, element, attributes) {

        }


        return linkFunction;
    }

    return directive;
});