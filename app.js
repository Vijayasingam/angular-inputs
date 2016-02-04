// JavaScript File
var AngularInputsApp = angular.module('AngularInputsApp',['AngularInput'])
.service('AngularInputDefaults',function(){
    var directiveDefaults = {
        "config" : "configData",
        "object" : "data"
    }
    var configDefaults = {
        "type" : "text",
         "labelStyleClass" : "",
         "inputStyleClass" : "",
         "validations" : {
             "required" : true,
             "errorMsgs" : {
                 "required" : "This is a required field",
             }
         }
     }
    getDefaultConfig = function(){
        return configDefaults;
    },
    getDirectiveDefaults = function(){
            return directiveDefaults;
        }
    return {
        getDefaultConfig : getDefaultConfig,
        getDirectiveDefaults : getDirectiveDefaults
    }
})