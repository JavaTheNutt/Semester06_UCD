<template>
	<div class="mySidebar" v-if="sidebarShown" id="sidebar-wrapper">
		<ul class="sidebar-nav">
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
	/*.mySidebar {
		border: solid black 1px;
		border-radius: 25px;
		background-color: aliceblue;
		height: 100px;
	}*/

	.sidebar-nav {
		position: absolute;
		top: 0;
		width: 250px;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.sidebar-nav li {
		text-indent: 20px;
		line-height: 40px;
	}

	.sidebar-nav li a {
		display: block;
		text-decoration: none;
		color: #999999;
	}

	.sidebar-nav li a:hover {
		text-decoration: none;
		color: #fff;
		background: rgba(255,255,255,0.2);
	}

	.sidebar-nav li a:active,
	.sidebar-nav li a:focus {
		text-decoration: none;
	}

	.sidebar-nav > .sidebar-brand {
		height: 65px;
		font-size: 18px;
		line-height: 60px;
	}

	.sidebar-nav > .sidebar-brand a {
		color: #999999;
	}

	.sidebar-nav > .sidebar-brand a:hover {
		color: #fff;
		background: none;
	}

</style>
