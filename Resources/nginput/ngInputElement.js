myApp.directive('ngInputElement', function (commonService) {
    var directive = {};
    directive.restrict = 'E';
    directive.replace = false;
    directive.templateUrl = "ngInputElement.html";
    directive.scope = {
        inputElementVar: "=inputconfig",
        data: "=configdata"
    }
    directive.require = ['^ngInputSection'];

    directive.controller = ['$scope', function ngInputElementController($scope) {
       
    }];

    directive.compile = function (element, attributes,cont) {
        var linkFunction = function ($scope, element, attributes, sectionController) {
            $scope.showUndoAction = false;

            $scope.showUndoActionFn = function (inputElementVar) {
                return $scope.showUndoAction && $scope.data[inputElementVar.modelName + '_inlineEdit'];
            }

            function checkValue(val){
                return val!=null && val!=undefined;
            }
            function checkCollection(col){
                return checkValue(col) && col.length > 0;
            }

            var options = undefined;
            if ($scope.inputElementVar != undefined) {
                if ($scope.inputElementVar.type == 9 || $scope.inputElementVar.type == 10) {
                    $scope.focusCounter = 0;
                    element.ready(function () {
                        if ($scope.inputElementVar.type == 9) {
                             var sliderContainer = angular.element(document.getElementsByName($scope.inputElementVar.modelName)[0]).children()[0];
                                sliderContainer.onblur = function () {
                                    console.log($scope.inputElementVar.modelName + ': blur');
                                    $scope.AfterEditOrLostFocus($scope.inputElementVar);
                                    $scope.$apply();
                                };
                        }

                        if ($scope.inputElementVar.type == 10) {
                            $scope.data[$scope.inputElementVar.modelName + '_inputTouched'] = false;
                            var chipElement = angular.element(document.getElementsByName($scope.inputElementVar.modelName)[0]);
                            var chipChildWr = angular.element(chipElement.children()[0]);
                            var chipChild = angular.element(chipChildWr.children()[0]);
                            var div = angular.element(chipChildWr.children()[0]);
                            var div1 = angular.element(div.children()[0]);
                            var autocomplete = angular.element(div1.children()[0]);
                            var autocompleteWrp = angular.element(autocomplete.children()[0]);
                            var autocompleteWrp2 = angular.element(autocompleteWrp.children()[0]);
                            var autocompleteInp = autocompleteWrp2.children()[0];
                            var autocompleteInpNg = angular.element(autocompleteInp);

                            autocompleteInp.onblur = function () {
                                console.log($scope.inputElementVar.modelName + ': blur');
                                $scope.AfterEditOrLostFocus($scope.inputElementVar);
                            };
                            autocompleteInp.onfocus = function () {
                                console.log($scope.inputElementVar.modelName + ': focus');
                                $scope.data[$scope.inputElementVar.modelName + '_inlineEdit'] = false; 
                            };
                        }
                    });
                }
                options = $scope.inputElementVar.options;
            }

            if (checkCollection(options)) {
                var optionCount = options.length;
                var optionMap = {};
                for (var i = 0; i < optionCount;i++){
                    optionMap[options[i].value] = options[i].key;
                }
                $scope.data[$scope.inputElementVar.modelName + '_optionMap'] = optionMap;
            }

            
            $scope.undo = function (inputElementVar) {
                $scope.data[$scope.inputElementVar.modelName] = $scope.data[$scope.inputElementVar.modelName + '_oldValue'];
                $scope.showUndoAction = false;
            }
            
            
            $scope.toNumber = function (exp) {
                return parseInt(exp);
            };
            $scope.ngChangeOfInput = function (inputElementVar) {
                sectionController[0].ngChangeOfInput(inputElementVar.modelName);
                if (inputElementVar.type == 3 || inputElementVar.type == 5) {
                    if (checkValue($scope.data[inputElementVar.modelName])) {
                        $scope.data[inputElementVar.modelName + '_displayValue'] = $scope.data[inputElementVar.modelName + '_optionMap'][$scope.data[inputElementVar.modelName]];
                    }
                }               
            }

            $scope.querySearch = function querySearch(query, fieldVar) {
                if ($scope.data[fieldVar.modelName + '_data'].length > 0) {
                    return (query ? $scope.data[fieldVar.modelName + '_data'].filter($scope.createFilterFor(query, fieldVar)) : $scope.data[fieldVar.modelName + '_data']);
                }

                var dataPromise = fieldVar.dataPromise;
                
                var getDataPromise;
                if(dataPromise!=undefined && dataPromise!=null){
                    getDataPromise = dataPromise;
                } else if (fieldVar.dataUrl != null && fieldVar.dataUrl != undefined) {
                    getDataPromise = commonService.getData(fieldVar.dataUrl, null);
                }
                else {
                    getDataPromise = $scope.getData(fieldVar);
                }

                getDataPromise.then(function (data) {
                    $scope.data[fieldVar.modelName + '_data'] = data;
                    return (query ? $scope.data[fieldVar.modelName + '_data'].filter($scope.createFilterFor(query, fieldVar)) : $scope.data[fieldVar.modelName + '_data']);
                }, function (reason) {

                }, function (update) {

                });

                return getDataPromise;
            }

            $scope.createFilterFor = function (query, fieldVar) {
                var lowercaseQuery = angular.lowercase(query);

                return function filterFn(item) {
                    return (item!=undefined && item[fieldVar.lookupDisplayName] != undefined ? angular.lowercase(item[fieldVar.lookupDisplayName]).indexOf(lowercaseQuery) != -1 : false);
                };
            }

            $scope.searchTextChange = function (text, fieldVar) {
                console.log('Text changed to ' + text);
                console.log('Text changed to ' + fieldVar);
                if (text == undefined || text == "") {
                    $scope.data[fieldVar.modelName] = undefined;
                    $scope.data[fieldVar.modelName + '_value'] = undefined;
                    $scope.data[fieldVar.modelName + '_displayValue'] = '';
                }
            }

            $scope.selectedItemChange = function (item, fieldVar) {
                if (item == null || item == undefined) return;
                console.log('Item changed to ' + JSON.stringify(item));
                console.log('Text changed to ' + fieldVar);
                $scope.data[fieldVar.modelName] = item[fieldVar.lookupValue];
                $scope.data[fieldVar.modelName + '_value'] = item[fieldVar.lookupValue];
                $scope.data[fieldVar.modelName + '_displayValue'] = item[fieldVar.lookupDisplayName];
            }

            $scope.transformChip = function (chip) {
                if (angular.isObject(chip)) {
                    return chip;
                }
                return { name: chip, type: 'new' }
            }
            $scope.onEditClick = function (inputElementVar) {
                $scope.toggleEditMode(inputElementVar);
            }

            $scope.onDoubleClick = function (inputElementVar) {
                $scope.toggleEditMode(inputElementVar);
            }

            $scope.toggleEditMode = function (inputElementVar) {
                $scope.data[inputElementVar.modelName + '_inlineEdit'] = !$scope.data[inputElementVar.modelName + '_inlineEdit'];
                angular.element(document.getElementsByName(inputElementVar.modelName)[0]).focus();
                document.getElementsByName(inputElementVar.modelName)[0].focus();
                angular.element(document.getElementsByName(inputElementVar.modelName)[0]).parent().addClass('md-input-focused');
                if(inputElementVar.type==3){
                    document.getElementsByName(inputElementVar.modelName)[0].click();
                }

                //Logic for Undo
                $scope.data[inputElementVar.modelName + '_oldValue'] = $scope.data[inputElementVar.modelName];
            }

            $scope.AfterEditOrLostFocus = function (inputElementVar) {
                if (inputElementVar.type == 9) {
                    $scope.data[$scope.inputElementVar.modelName + '_inlineEdit'] = true;
                    return;
                }
                else if (inputElementVar.type == 10) {
                    $scope.data[$scope.inputElementVar.modelName + '_inlineEdit'] = true;
                }
                else $scope.data[inputElementVar.modelName + '_inlineEdit'] = !$scope.data[inputElementVar.modelName + '_inlineEdit'];

                $scope.showUndoAction = ($scope.data[inputElementVar.modelName + '_oldValue'] != $scope.data[inputElementVar.modelName]);
            }

            $scope.onElementInit = function (inputElementVar) {

                $scope.data[inputElementVar.modelName] = inputElementVar.defaultValue;
                $scope.data[inputElementVar.modelName + '_inlineEdit'] = $scope.data.inlineMode;

                if (inputElementVar.type == 7 || inputElementVar.type == 10) {
                    $scope.data[inputElementVar.modelName + '_data'] = [];
                    if (inputElementVar.type == 10) {
                        $scope.data[inputElementVar.modelName] = [];
                    }
                }

                if (inputElementVar.type == 3 || inputElementVar.type == 5) {
                    if (checkValue(inputElementVar.defaultValue) && checkValue($scope.data[inputElementVar.modelName])) {
                        $scope.data[inputElementVar.modelName + '_displayValue'] = $scope.data[inputElementVar.modelName + '_optionMap'][inputElementVar.defaultValue];
                    }
                }
            }

            $scope.onBlurElement = function (inputElementVar) {
                $scope.AfterEditOrLostFocus(inputElementVar);
            }

            $scope.onKeyUp = function (event, modelName) {
                switch (event.keyCode) {
                    case 13: // ENTER
                        $scope.data[modelName + '_inlineEdit'] = !$scope.data[modelName + '_inlineEdit'];
                        break;
                    case 27: // ESC
                        $scope.data[modelName + '_inlineEdit'] = !$scope.data[modelName + '_inlineEdit'];
                        break;
                    default:
                        break;
                }
            }
        }
        return linkFunction;
    }
    return directive;
});