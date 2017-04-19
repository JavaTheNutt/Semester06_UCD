<template>
	<div class="mySidebar" v-if="sidebarShown">
		<ul>
			<router-link :to="{path: '/'+ navLink.refPath}" v-for="navLink in navLinks" :key="navLink.refPath" tag="li">
				<a>{{navLink.title}}</a></router-link>
		</ul>
	</div>
</template>
<script>
	import {mapGetters, mapState} from 'vuex';
	import bus from '../service/Bus';
	export default{
		name: 'navigation-sidebar',
		data: function () {
			return {
				sidebarShown: false,
				navLinks: [],
				scrollPos: 0
			}
		},
		created(){
			bus.$on('set-nav-links', (links) => {
				this.$log.debug('setting navigation links', links);
				this.navLinks     = links;
				this.sidebarShown = links !== null;
			});
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
