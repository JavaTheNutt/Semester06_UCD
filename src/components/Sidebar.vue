<template>
	<div class="mySidebar" v-if="sidebarShown">
		<ul>
			<li v-for="item in navLinks">{{item.title}}</li>
		</ul>
	</div>
</template>
<script>
	import {mapGetters, mapState} from 'vuex';
	export default{
		name: 'navigation-sidebar',
		computed: mapGetters({navLinks: 'navigationLinks', sidebarShown: 'sidebarShown'}),
		created(){
			this.$log.debug("sidebar created. number of navigation links: ", navLinks.length);
		},
		methods:{
			countLinks:function () {
				this.$log.debug('number of navigation links: ', navLinks.length);
			}
		}
	}
</script>
<style scoped>
	.mySidebar {
		border: solid black 1px;
		border-radius: 25px;
		background-color: aliceblue;
		height: 100px;
	}
</style>
