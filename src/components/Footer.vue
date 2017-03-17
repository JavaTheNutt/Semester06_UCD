<template>
	<nav class="navbar navbar-inverse navbar-fixed-bottom">
		<div class="container">
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#footerBar"
					aria-expanded="false" aria-controls="navbar">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<div id="footerBar" class="navbar-collapse collapse">
				<a class="btn btn-primary navbar-btn pull-left" href="https://github.com/JavaTheNutt/Semester06_UCD"
				   target="_blank"><i class="fa fa-github"></i> Github</a>

				<p class="pull-right" id="footerText">Site designed by Joe Wemyss. Released under the <a
						href="https://opensource.org/licenses/MIT" target="_blank">MIT Licence</a></p>
			</div>
		</div>
	</nav>
</template>
<script>
    export default{
        name: 'footer'
    }
</script>
<style>
	#footerText {
		color: white;
		margin-top: 10px;
	}
	nav.navbar-fixed-bottom{
		margin-top: 30px;
	}

</style>
