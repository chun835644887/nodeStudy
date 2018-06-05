$("#reg-submit").click(function() {
	var username = $("#username").val();
	var passworld1 = $("#passworld1").val();
	var passworld2 = $("#passworld2").val();
	$.ajax({
		type: "post",
		url : "/reg",
		data: {
			username: username,
			passworld1: passworld1,
			passworld2: passworld2
		},
		success: function(data) {
			console.log(data);
		}
	});
});