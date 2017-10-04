app.directive("article" ,["$timeout" ,function($timeout){
	
	return {
		scope:{
			key:'@',
			text:'@',
			onSave:'&'
		},
		templateUrl : 'Templates/Directives/ArticleMarkup.html',
		link: function(scope , element , attr , controller){
			console.log(scope , element,attr,controller);

			$(element).find(".editor-holder").prop("id"  , attr.key);

			$(element).find(".editor-save").on("click"  , function(){

					scope.onSave({data:$('#'+attr.key).summernote('code')});

			});
			
			$timeout(function(){
				
				$('#'+attr.key).summernote('code' , attr.defaultText);	
				
			});
			
		}
	}
}])