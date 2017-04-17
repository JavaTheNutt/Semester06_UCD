<template>
	<div class="container-fluid"
		 v-bind:class="{noConstruction : !showUnderConstruction, construction: showUnderConstruction}">
		<div class="col-md-3">
			<navigation-sidebar></navigation-sidebar>
		</div>
		<div class="col-md-9">
			<router-view></router-view>
		</div>

	</div>
</template>
<script>
	import NavigationSidebar from './Sidebar.vue';
	import {mapGetters} from 'vuex';
	export default {
		name: 'main-container',
		components: {
			NavigationSidebar,
			'navigation-sidebar': NavigationSidebar
		},
		computed: mapGetters({
			showUnderConstruction: 'showConstruction'
		})
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
