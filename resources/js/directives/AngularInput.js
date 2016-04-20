'Use Strict'
//TODO : Add Formatting code to directive
var AngularInput = angular.module('AngularInput',[]);
AngularInput.directive('dynamicForm',function($compile){
    var templates = {};
    templates.textTemplate = '<dyna-text class="ng-dyn-input" data-model-object = "{{modelObject}}" data-object = "data" data-meta="{{config.id}}" data-config="configData"></dyna-text>';
    templates.radioTemplate = '<dyna-radio class="ng-dyn-input" data-model-object = "{{modelObject}}" data-object = "data" data-meta="{{config.id}}" data-config="configData"></dyna-radio>';
    templates.checkboxTemplate = '<dyna-check class="ng-dyn-input" data-model-object = "{{modelObject}}" data-object = "data" data-meta="{{config.id}}" data-config="configData"></dyna-check>';
    templates.numberTemplate = '<dyna-number class="ng-dyn-input" data-model-object = "{{modelObject}}" data-object = "data" data-meta="{{config.id}}" data-config="configData"></dyna-number>';
    templates.selectTemplate = '<dyna-select class="ng-dyn-input" data-model-object = "{{modelObject}}" data-object = "data" data-meta="{{config.id}}" data-config="configData"></dyna-select>';
    templates.textareaTemplate = '<dyna-textarea class="ng-dyn-input" data-model-object = "{{modelObject}}" data-object = "data" data-meta="{{config.id}}" data-config="configData"></dyna-textarea>';
    templates.labelTemplate = '<dyna-label class="ng-dyn-input" data-model-object = "{{modelObject}}" data-object = "data" data-meta="{{config.id}}" data-config="configData"></dyna-label>';
    return{
        template : "<div></div>",
        restrict : 'EA',
        scope : true,
        link: function(scope, element, attr) {
            scope.config = $.extend({},scope['configData'][attr.meta]);
            scope.modelObject = attr.modelObject;
            var temp = templates[scope.config.type + 'Template'];
            temp = angular.element($compile(temp)(scope));
            element.replaceWith(temp);
     }
 }
}).directive('dynaText',function(){
    return{
        template : "<label ng-class='config.labelStyleClass' for='{{config.id}}'>{{config.labelText}}<span class='mandatory' ng-if='config.validations.required'>*</span></label>"+
                   "<input id='{{config.id}}' ng-model='model[config.id]' ng-required='config.validations.required' ng-readonly = 'config.validations.readonly' ng-disabled = 'config.validations.disabled' "+
                   "ng-minlength='config.validations.minLength' ng-maxlength='config.validations.maxLength' type='text' ng-class='config.inputStyleClass' >"+
                   "<p class='err-msgs ng-required-error'>{{config.validations.errorMsgs.required}}</p>" +
                   "<p class='err-msgs ng-minLength-error'>{{config.validations.errorMsgs.minLength}}</p>" +
                   "<p class='err-msgs ng-maxLength-error'>{{config.validations.errorMsgs.maxLength}}</p>" +
                   "<p class='err-msgs ng-parse-error'>{{config.validations.errorMsgs.pattern}}</p>",
        restrict : 'EA',
        link: function(scope, element, attr) {
            scope.config = scope[attr.config][attr.meta];
            scope.model = (attr.modelObject) ? scope[attr.modelObject] : scope[attr.object];
        }
    }
}).directive('dynaTextarea',function(){
      return{
          template : "<label ng-class='config.labelStyleClass' for='{{config.id}}'>{{config.labelText}}<span class='mandatory' ng-if='config.validations.required'>*</span></label>"+
                     "<textarea id='{{config.id}}' ng-model='model[config.id]' ng-required='config.validations.required' ng-readonly = 'config.validations.readonly' ng-disabled = 'config.validations.disabled'"+
                     "ng-minlength='config.validations.minLength' ng-maxlength='config.validations.maxLength' ng-class='config.inputStyleClass' ></textarea>"+
                     "<p class='err-msgs ng-required-error'>{{config.validations.errorMsgs.required}}</p>" +
                     "<p class='err-msgs ng-minLength-error'>{{config.validations.errorMsgs.minLength}}</p>" +
                     "<p class='err-msgs ng-maxLength-error'>{{config.validations.errorMsgs.maxLength}}</p>" +
                     "<p class='err-msgs ng-parse-error'>{{config.validations.errorMsgs.pattern}}</p>",
          restrict : 'EA',
          link: function(scope, element, attr) {
              scope.config = scope[attr.config][attr.meta];
              scope.model = (attr.modelObject) ? scope[attr.modelObject] : scope[attr.object];
          }
      }
}).directive('dynaNumber',function(){
    return{
        template : "<label ng-class='config.labelStyleClass' for='{{config.id}}'>{{config.labelText}}<span class='mandatory' ng-if='config.validations.required'>*</span></label>"+
                 "<input id='{{config.id}}' ng-model='model[config.id]' ng-required='config.validations.required' ng-readonly = 'config.validations.readonly' ng-disabled = 'config.validations.disabled'"+
                 "ng-minlength='config.validations.minLength' ng-maxlength='config.validations.maxLength' type='number' ng-class='config.inputStyleClass' >"+
                 "<p class='err-msgs ng-required-error'>{{config.validations.errorMsgs.required}}</p>" +
                 "<p class='err-msgs ng-minLength-error'>{{config.validations.errorMsgs.minLength}}</p>" +
                 "<p class='err-msgs ng-maxLength-error'>{{config.validations.errorMsgs.maxLength}}</p>" ,
        restrict : 'EA',
        link: function(scope, element, attr) {
            scope.config = scope[attr.config][attr.meta];
            scope.model = (attr.modelObject) ? scope[attr.modelObject] : scope[attr.object];
        }
    }
}).directive('dynaSelect',function(){
    return{
        template : "<label ng-class='config.labelStyleClass' for='{{config.id}}'>{{config.labelText}}<span class='mandatory' ng-if='config.validations.required'>*</span></label>"+
                   "<select id='{{config.id}}' ng-options = 'el as el.label for el in list track by el.value' ng-model='model[config.id]' ng-readonly = 'config.validations.readonly' ng-disabled = 'config.validations.disabled' ng-required='config.validations.required' "+
                   "ng-class='config.inputStyleClass' />"+
                   "<p class='err-msgs ng-required-error'>{{config.validations.errorMsgs.required}}</p>",
        restrict : 'EA',
        link: function(scope, element, attr) {
              scope.config = scope[attr.config][attr.meta];
              scope.list = scope[scope.config.options];
              scope.model = (attr.modelObject) ? scope[attr.modelObject] : scope[attr.object];
        }
    }
}).directive('dynaLabel',function(){
    return{
        template : "<label ng-class='config.labelStyleClass' for='{{config.id}}'>{{config.labelText}}<span class='mandatory' ng-if='config.validations.required'>*</span></label>"+
                   "<label ng-class='config.inputStyleClass' ng-bind='model[config.id]'></label>",
        restrict : 'EA',
        link: function(scope, element, attr) {
            scope.config = scope[attr.config][attr.meta];
            scope.model = (attr.modelObject) ? scope[attr.modelObject] : scope[attr.object];
        }
    }
}).directive('dynaRadio',function(){
    return{
        template : "<label ng-class='config.labelStyleClass' for='{{config.id}}'>{{config.labelText}}<span class='mandatory' ng-if='config.validations.required'>*</span></label>"+
                 "<label for='{{config.id}}-{{el.value}}' class='disp-inline-block marg-right-15' ng-repeat = 'el in list track by el.value'>"+
                 "<input type='radio' ng-model='$parent.model[config.id]' ng-readonly = 'config.validations.readonly' ng-disabled = 'config.validations.disabled' name='config.id' ng-value='el.value' ng-required='config.validations.required' id='{{config.id}}-{{el.value}}' />"+
                 "{{el.label}}</label>"+
                 "<p class='err-msgs ng-required-error'>{{config.validations.errorMsgs.required}}</p>" +
                 "<p class='err-msgs ng-minLength-error'>{{config.validations.errorMsgs.minLength}}</p>" +
                 "<p class='err-msgs ng-maxLength-error'>{{config.validations.errorMsgs.maxLength}}</p>" +
                 "<p class='err-msgs ng-parse-error'>{{config.validations.errorMsgs.pattern}}</p>",
        restrict : 'EA',
        link: function(scope, element, attr) {
            scope.config = scope[attr.config][attr.meta];
            scope.list = scope[scope.config.options];
            scope.model = (attr.modelObject) ? scope[attr.modelObject] : scope[attr.object];
        }
    }
}).directive('dynaCheck',function(){
      return{
          template : "<label ng-class='config.labelStyleClass' for='{{config.id}}'>{{config.labelText}}<span class='mandatory' ng-if='config.validations.required'>*</span></label>"+
                     "<input id='{{config.id}}' ng-model='model[config.id]' ng-required='config.validations.required' ng-readonly = 'config.validations.readonly' ng-disabled = 'config.validations.disabled' "+
                     "type='checkbox' ng-class='config.inputStyleClass' >"+
                     "<p class='err-msgs ng-required-error'>{{config.validations.errorMsgs.required}}</p>" +
                     "<p class='err-msgs ng-minLength-error'>{{config.validations.errorMsgs.minLength}}</p>" +
                     "<p class='err-msgs ng-maxLength-error'>{{config.validations.errorMsgs.maxLength}}</p>" +
                     "<p class='err-msgs ng-parse-error'>{{config.validations.errorMsgs.pattern}}</p>",
          restrict : 'EA',
          link: function(scope, element, attr) {
              scope.config = scope[attr.config][attr.meta];
              scope.model = (attr.modelObject) ? scope[attr.modelObject] : scope[attr.object];
          }
      }
});