<!--  
	@Program name: Print Helloworld with today date
	@Date: 05/12/2020
	@Author: Shailesh Fefar
	@Licence Type: MIT License
-->
<!DOCTYPE html>
<html>
	<head>
		<title>Helloworld</title>
	</head>
	<body>
		<!-- Print Helloworld message with today date -->
		<?php echo "Helloworld, How are you!<br/>";?>
		<!-- Before print today date include todaydate.php located in extra folder-->
		<?php include_once "extra/todaydate.php"; ?>
	</body>
</html>