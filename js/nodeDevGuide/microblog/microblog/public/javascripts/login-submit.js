$("#login-submit").click(function(){
	var username = $("#username").val();
	var passworld = $("#passworld").val();
	if(username && passworld){
		$.ajax({
			url : "/login",
			type : "post",
			data : {
				username : username,
				passworld : passworld
			},
			success : function(res){
				console.log(res)
			},
			error : function(err){
				console.log(err);
			}
		})
	}
});