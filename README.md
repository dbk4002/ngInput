# NgInput Library

This project was built with AngularJS

## How To Use

1. Include NgInput Js File 

`<script src="Resources/nginput/ngInputElement.js"></script>`

`<script src="Resources/nginput/ngInputForm.js"></script>`

2. Define the configuration in JS File
```javascript
$scope.formdata = {
        name: "testForm",
        sections: [
            { 
                title: "My Section", 
                id: "section1", 
                columns: "2", 
                elements: [
                      $scope.textField =  {
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
                    }
                ] 
            }
        ]

    };
```

3. Add to HTML
`<ng-input-form name="{{formdata.name}}" ng-if="isInline" sections="formdata.sections" configdata="dataEdit"></ng-input-form>`


## Options

##ngForm Options

- `name` - Form Name 

- `configdata` - Configuration with Property inlineMode : Boolean to specify form will support inline Edit or Not

- `sections` - List of Section with elements


##elements Options

- `type` - 0 -  9 depend on type
- `id` -Id of input Element
- `name` - Name Of Element
- `modelName` - Name of Model to Bind
- `displayName` - Label
- `Options` - List Of Options for Picklist and AutoComplete
- `isSearchable` - For Picklist
- `isRequired` - Required Flag
- `hideCondition` - Dynamic Hide Condition
- `showCondition` - Dynamic Show Condition
- `requiredCondition` - Dynamic Required Condition
- `disableCondition` - Dynamic Disabled Condition
- `validationRule` - Validation Rule
- `defaultValue` - Dafaut Value
- `minLength` - Min Length
- `maxLength` - Max Length
- `validationMsg` - Validation Message


##Type List
0 - Text
1 - Number
2 - Date
3 - Picklist(Select)
4 - Checkbox
5 - Radio
6 - None
7 - AutoComplete
8 - Swicth
9 - Slider
10 - Chips
