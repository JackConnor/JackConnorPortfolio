
$(
	function() { 

	function test() {
		$(this).on('mous', function() {
			console.log('testing')
		})
	}

	function collide() {
		$('#collider').animate({'margin-left':'600px'}, {
			duration: 800,
			step: 	function() {
					var $red = $('#collider').css('margin-left');
					var $blue = $('#stationary').css('margin-left');
					console.log($red);
					console.log($blue);
					if($red > $blue) {
					console.log('collision!!!');
					$('#stationary').css('color', 'green');

			}
		}})};







	$('#collider').on('click', collide);

	console.log("hi there")
	})