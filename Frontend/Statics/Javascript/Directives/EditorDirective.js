app.directive("editor" ,["$timeout" ,function($timeout){
	
	return {
		scope:{
			key:'@',
			defaultText:'@',
			enabled:'@',
			onSave:'&'
		},
		templateUrl : 'Templates/Directives/EditorMarkup.html',
		link: function(scope , element , attr , controller){
			console.log(scope , element,attr,controller);
			
			scope.hideToolBar = function(){
				$(element).find(".note-toolbar").css("display" , "none");	    
			}
			scope.showToolBar = function(){
				$(element).find(".note-toolbar").css("display" , "block");	    
			}
			scope.disable = function(){
				
				$('#'+attr.key).summernote('disable');
				scope.hideToolBar();
				scope.enabled = false;
				scope.$apply();
			}

			scope.enable = function(){

				$('#'+attr.key).summernote('enable');
				scope.showToolBar();
				scope.enabled = true;
				scope.$apply();
			}

			$(element).find(".editor-holder").prop("id"  , attr.key);

			$(element).find(".editor-save").on("click"  , function(){

					scope.disable();
					scope.onSave({data:$('#'+attr.key).summernote('code')});

			});
			

			$(element).find(".editor-edit").on("click"  , function(){
					scope.enable();
			});


			$timeout(function(){
				scope.enabled = scope.enabled === "true";
				if(scope.enabled === false)
					scope.disable();
				$('#'+attr.key).summernote('code' , attr.defaultText);	

			});
			
		}
	}
}])