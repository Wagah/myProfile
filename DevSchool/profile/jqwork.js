$('#contact-form').on('submit', function(e){
					url = '/';
					
					data = $(this).serialize();
					
					console.log(data);

					$.post(url,data)
					.done(function(){
						alert("You are logged in");

					}).fail(function(){
						alert("Oooops. Something went wrong");
					
					});

			//Prevents the default behaviour of the form
						e.preventDefault();
					});	



$("#contact-form").validate({
  rules: {
    fullname: "required",
    email: {
      required: true,
      email: true
    }
  },
  messages: {
    fullname: "Please specify your name",
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com"
    }
  }


});

$("#").click(function(){
    $("#Home").slideDown();
});

githubReposUrl = "https://api.github.com/users/wagah/repos"
$.get(githubReposUrl, function(repositories){
// pass data objects
projectListTemplate = '';
projectListTemplate += '<ul>';

repositories.forEach(function(repository){
	projectListTemplate += '<li>';
		projectListTemplate += '<h2><a href="'+repository.html_url +'">' + repository.name +'<a/></h2>';
		projectListTemplate += '<p>' + repository.descripion +'</p>';
		projectListTemplate += '<a href="#">Teams working on project</a>'; 
		projectListTemplate += '</li>';
	});

projectListTemplate += '</ul>';