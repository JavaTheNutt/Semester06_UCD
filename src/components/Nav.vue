<template>
	<nav class="navbar navbar-inverse navbar-fixed-top">
		<div class="container-fluid">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<router-link to="/" class="navbar-brand"><i class="fa fa-home"></i></router-link>
			</div>
			<div id="navbar" class="navbar-collapse collapse">
				<ul class="nav navbar-nav">
					<router-link tag="li" to="/references"><a>References</a></router-link>
					<router-link tag="li" to="/bar"><a>Bar</a></router-link>
				</ul>
			</div><!--/.nav-collapse -->
		</div><!--/.container-fluid -->
	</nav>
</template>
<script>
	export default{
	    name: 'navBar'
	}
</script>
<style scoped>
	.navbar{
		margin-bottom: 30px;
	}
</style>
