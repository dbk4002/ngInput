var appName = 'myApp';
function mdSelectOnKeyDownOverride(event) { event.stopPropagation(); };

var myApp = angular.module(appName, ['ngMaterial', 'ngMessages', 'ngAnimate', 'ngRoute']);
myApp.factory('commonService', commonService);

myApp.config(function ($mdIconProvider) {
    $mdIconProvider
      .iconSet('communication', 'Resources/icons/iconsets/communication-icons.svg', 24)
      .iconSet('editor', 'Resources/icons/iconsets/editor-icons.svg', 24)
      .iconSet('action', 'Resources/icons/iconsets/action-icons.svg', 24)
      .iconSet('navigation', 'Resources/icons/iconsets/navigation-icons.svg', 24)
     .iconSet('content', 'Resources/icons/iconsets/content-icons.svg', 24)
    .iconSet('image', 'Resources/icons/iconsets/image-icons.svg', 24)
    .iconSet('av', 'Resources/icons/iconsets/av-icons.svg', 24)
});


myApp.value("testObj", {name:'TEST2'});
myApp.run(
    function (testObj) {
        testObj.name2 = 'TEST';
    }
);



function MyController($scope, testObj, commonService) {
    console.log(testObj);
    $scope.layoutData = {
        name: 'My Layout',
        orientation: 'horizonatal',
        isLinear: false,
        isAlternative: true,
        isMobileStepText: true,
        steps: [
            {
                stepName: 'Step1',
                pageLayout: {
                    sections: [
                        {
                            rowArr: [1, 2],
                            rowCount: 2,
                            columnArr: [1],
                            columnCount: 1,
                            name: 'Basic Details',
                            inputElementsMap: {
                                "1~1": {

                                    "id": "name",
                                    "name": "name",
                                    "displayName": "What is name of Agreement?",
                                    "options": [],
                                    "type": 0,
                                    "inputFieldType": 0,
                                    "modelName": "name",
                                    "isSearchable": false,
                                    "lookupEntityName": null,
                                    "lookupDisplayName": null,
                                    "lookupDiscName": null,
                                    "orderNo": 0,
                                    "rowNo": 1,
                                    "columnNo": 1,
                                    "isRequired": false,
                                    "hideCondition": "false",
                                    "showCondition": "true",
                                    "requiredCondition": "false",
                                    "disableCondition": "false",
                                    "validationRule": null,
                                    "defaultValue": null,
                                    "minLength": null,
                                    "maxLength": null,
                                    "validationMsg": null
                                },

                                "2~1": {
                                    "id": "parentaccountid",
                                    "name": "parentaccountid",
                                    "displayName": "For which account you want to create agreement?",
                                    "options": [],
                                    "type": 7,
                                    "inputFieldType": 7,
                                    "modelName": "parentaccountid",
                                    "isSearchable": false,
                                    "placeholder": "Account",
                                    "lookupEntityName": "account",
                                    "lookupDisplayName": "name",
                                    "lookupDiscName": "description",
                                    "orderNo": 0,
                                    "rowNo": 2,
                                    "columnNo": 1,
                                    "isRequired": false,
                                    "hideCondition": "false",
                                    "showCondition": "true",
                                    "requiredCondition": "false",
                                    "disableCondition": "false",
                                    "validationRule": null,
                                    "defaultValue": null,
                                    "minLength": null,
                                    "maxLength": null,
                                    "validationMsg": null
                                }
                            }



                        }
                    ]
                }
            },
            {
                stepName: 'Step2',
                pageLayout: {
                    sections: [
                        {
                            rowArr: [1, 2],
                            rowCount: 2,
                            columnArr: [1],
                            columnCount: 1,
                            name: 'Basic Details',
                            inputElementsMap: {
                                "1~1": {

                                    "id": "name",
                                    "name": "name",
                                    "displayName": "What is name of Agreement2?",
                                    "options": [],
                                    "type": 0,
                                    "inputFieldType": 0,
                                    "modelName": "name",
                                    "isSearchable": false,
                                    "lookupEntityName": null,
                                    "lookupDisplayName": null,
                                    "lookupDiscName": null,
                                    "orderNo": 0,
                                    "rowNo": 1,
                                    "columnNo": 1,
                                    "isRequired": false,
                                    "hideCondition": "false",
                                    "showCondition": "true",
                                    "requiredCondition": "false",
                                    "disableCondition": "false",
                                    "validationRule": null,
                                    "defaultValue": null,
                                    "minLength": null,
                                    "maxLength": null,
                                    "validationMsg": null
                                },

                                "2~1": {
                                    "id": "parentaccountid",
                                    "name": "parentaccountid",
                                    "displayName": "For which account you want to create agreement2?",
                                    "options": [],
                                    "type": 7,
                                    "inputFieldType": 7,
                                    "modelName": "parentaccountid",
                                    "isSearchable": false,
                                    "placeholder": "Account",
                                    "lookupEntityName": "account",
                                    "lookupDisplayName": "name",
                                    "lookupDiscName": "description",
                                    "orderNo": 0,
                                    "rowNo": 2,
                                    "columnNo": 1,
                                    "isRequired": false,
                                    "hideCondition": "false",
                                    "showCondition": "true",
                                    "requiredCondition": "false",
                                    "disableCondition": "false",
                                    "validationRule": null,
                                    "defaultValue": null,
                                    "minLength": null,
                                    "maxLength": null,
                                    "validationMsg": null
                                }
                            }



                        }
                    ]
                }
            }
        ]




    };

    //$scope.autocomplepromise = commonService.getData('https://jsonplaceholder.typicode.com/todos',null);
    $scope.autocomplepromise = commonService.getData('https://jsonplaceholder.typicode.com/photos', null);

    $scope.base = {
        "type": 0,
        "inputFieldType": 0,
        "id": "name",
        "name": "name",
        "modelName": "name",
        "displayName": "What is name of Agreement?",
        "value": null,
        requiredCondition : true
           
    };
    $scope.inputconfig1 =  {
        "name": "name",
        "displayName": "What is name of Agreement?",
        "options": [],
        "type": 0,
        "modelName": "name",
        "isSearchable": false,
        "lookupEntityName": null,
        "lookupDisplayName": null,
        "lookupDiscName": null,
        "isRequired": false,
        "hideCondition": "false",
        "showCondition": "true",
        "requiredCondition": "true",
        "disableCondition": "false",
        "validationRule": null,
        "defaultValue": "Hello",
        "minLength": null,
        "maxLength": null,
        "validationMsg": null,
        "value": null,
        multiple: true,
        "rowNo": 1,
        "columnNo":1
    };
    $scope.amount = {
        "type": 1,
        "inputFieldType": 1,
        "id": "amount",
        "name": "amount",
        "modelName": "amount",
        "displayName": "Amount",
        defaultValue : 100,
        "value": null,
        "rowNo": 1,
        "columnNo": 2,
        "requiredCondition" : "true"
    };
    $scope.date = {
        "type": 2,
        "name": "date",
        "modelName": "date",
        "displayName": "Date",
        "defaultValue": new Date(2016,11,20),
        "value": null,
        "rowNo": 2,
        "columnNo": 1
    };
    $scope.picklist = {
        "type": 3,
        "name": "picklist",
        "modelName": "picklist",
        "displayName": "Hobby",
        "options": [{ key: "Cricket", value: 1 }, { key: "Reading", value: 2 }, { key: "Traveling", value: 3 }],
        "defaultValue": 2,
        "value": null,
        isSearchable: true,
        multiple: false,
        "rowNo": 2,
        "columnNo": 2
    };
    $scope.checkbox = {
        "type": 4,
        "name": "checkbox",
        "modelName": "checkbox",
        "displayName": "Enable",
        "value": null,
        "rowNo": 3,
        "columnNo": 1
    };
    $scope.radio = {
        "type": 5,
        "name": "hobby",
        "modelName": "hobby",
        "displayName": "Hobby",
        "options": [{ key: "Cricket", value: 1 }, { key: "Reading", value: 2 }],
        "defaultValue": 2,
        "value": null,
        "rowNo": 3,
        "columnNo": 2
    };
    $scope.switch = {
        "type": 8,
        "name": "switch",
        "modelName": "switch",
        "displayName": "Switch",
        "value": null,
         "rowNo": 4,
        "columnNo": 1
    };
    $scope.slider = {
        "type": 9,
        "name": "slider",
        "modelName": "slider",
        "displayName": "Slider",
        step: 1,
        minLength: 1,
        maxLength: 10,
        defaultValue : 5,
        "value": null,
        "rowNo": 4,
        "columnNo": 2
    };
    $scope.chip = {
        "type": 10,
        "name": "chip",
        "modelName": "chip",
        "displayName": "Chip",
        placeholder : "Enter Chip",
        defaultValue : null,
        "value": null,
        "lookupEntityName": "opportunity",
        "lookupDisplayName": "title",
        "lookupDiscName": "url",
        "lookupValue": "id",
        "lookupImage": "thumbnailUrl",
       
        "dataUrl": "https://jsonplaceholder.typicode.com/photos",
        "rowNo": 5,
        "columnNo": 1
    };
    $scope.autocomplete = {
        "name": "autocomplete",
        "displayName": "Account",
        "options": [],
        "type": 7,
        "modelName": "autocomplete",
        "lookupEntityName": "opportunity",
        "lookupDisplayName": "title",
        "lookupDiscName": "url",
        "lookupValue": "id",
        "lookupImage": "thumbnailUrl",
        "rowNo": 5,
        "columnNo": 2,
        "dataUrl": "https://jsonplaceholder.typicode.com/photos"
    };
    $scope.agreementname;


    $scope.inputElementsVar = [$scope.inputconfig1, $scope.amount, $scope.date, $scope.picklist, $scope.checkbox, $scope.radio, $scope.switch, $scope.slider, $scope.chip, $scope.autocomplete];
    $scope.inputElementsVar2 = [];
    $scope.clickMe = function () {
        console.log('in click me');
       
        console.log($scope.data);

    }

   
	$scope.isInline = false;
    $scope.data = {
		inlineMode : false
	};
	$scope.dataEdit = {
		inlineMode : true
	};
    $scope.formdata = {
        name: "testForm",
        sections: [
            { title: "My Section", id: "section1", columns: "2", elements: $scope.inputElementsVar }
        ]

    };
}

myApp.controller('MyController', MyController);