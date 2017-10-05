app.directive("article" ,["$timeout" ,function($timeout){
	
	return {
		scope:{
			key:'@',
			text:'@',
			heading:'@',
			collabs:'=',
			onSave:'&'
		},
		templateUrl : 'Templates/Directives/ArticleMarkup.html',
		link: function(scope , element , attr , controller){
			
			$timeout(function(){
				scope.collabText = scope.collabs.join(" , ")
				
			});
			
		}
	}
}])