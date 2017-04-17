<template>
	<div class="container-fluid"
		 v-bind:class="{noConstruction : !showUnderConstruction, construction: showUnderConstruction}">
		<router-view></router-view>
	</div>
</template>
<script>
	export default {
		name: 'main-container'
	}
</script>
<style scoped>
	.construction {
		margin-top: 20px;
	}

	.noConstruction {
		margin-top: 100px;
	}
</style>
