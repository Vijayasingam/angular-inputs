/*
*   Test Controller to provide the config data.
*/
AngularInputsApp.controller('AngularInputCtrl',function($scope){
    $scope.data = {"name" : "Abc","amount":1000,"color" : {value:'red', label:'Red'}};
    $scope.list = [{"name" : "Abc","amount":1000,"color" : {value:'red', label:'Red'}},{"name" : "Def","amount":1500,"color" : {value:'blue', label:'Blue'}}];
    $scope.colors = [
          {value:'black', label:'Black'},
          {value:'white', label:'White'},
          {value:'red', label:'Red'},
          {value:'blue', label:'Blue'},
          {value:'yellow', label:'Yellow'}
    ];
    $scope.radioOptions = [
        {value:'Y', label:'Yes'},
        {value:'N', label:'No'}
    ]
    $scope.addColor = function(){
        $scope.colors.push({value:'black', label:'Black'});
    }
    $scope.removeColor = function(){
        $scope.colors.splice(0,1);
    }
    $scope.configData = {
        "name" : {
            "id" : "name",
            "type" : "text",
            "labelText" : "Name",
            "value" : "data",
            "labelStyleClass" : "",
            "inputStyleClass" : "",
            "validations" : {
                "maxLength" : 10,
                "minLength" : 2,
                "required" : true,
                "errorMsgs" : {
                    "required" : "This is a required field",
                    "maxLength" : "Max length 10 Chars",
                    "minLength" : "Min length 2 Chars",
                }
            }
        },
        "comment" : {
            "id" : "comment",
            "type" : "textarea",
            "labelText" : "Comment",
            "value" : "data",
            "labelStyleClass" : "",
            "inputStyleClass" : "",
            "validations" : {
                "maxLength" : 10,
                "minLength" : 2,
                "required" : true,
                "errorMsgs" : {
                    "required" : "This is a required field",
                    "maxLength" : "Max length 10 Chars",
                    "minLength" : "Min length 2 Chars",
                }
            }
        },
        "amount" : {
            "id" : "amount",
            "type" : "number",
            "labelText" : "Amount",
            "value" : "data",
            "labelStyleClass" : "",
            "inputStyleClass" : "",
            "validations" : {
                "maxLength" : 10,
                "minLength" : 2,
                "required" : true,
                "errorMsgs" : {
                    "required" : "This is a required field",
                    "maxLength" : "Max length 10 Chars",
                    "minLength" : "Min length 2 Chars",
                }
            }
        },
        "color" : {
            "id" : "color",
            "type" : "select",
            "labelText" : "Color",
            "value" : "data",
            "labelStyleClass" : "",
            "inputStyleClass" : "",
            "options" : "colors",
            "validations" : {
                "required" : true,
                "errorMsgs" : {
                    "required" : "This is a required field"
                }
            }
        },
        "radioBtn" : {
            "id" : "radioBtn",
            "type" : "radio",
            "labelText" : "Radio",
            "value" : "data",
            "labelStyleClass" : "",
            "inputStyleClass" : "",
            "options" : "radioOptions",
            "validations" : {
                "required" : true,
                "errorMsgs" : {
                    "required" : "This is a required field"
                }
            }
        },
        "amtLabel" : {
            "id" : "amount",
            "type" : "label",
            "labelText" : "Amount",
            "labelStyleClass" : "",
            "inputStyleClass" : "",
            "objName" : "data",
            "dispValue" : "amount"
        }
    }
});