<template>
	<div class="container-fluid"
		 v-bind:class="{noConstruction : !showUnderConstruction, construction: showUnderConstruction}">
		<div class="col-md-3" v-bind:class="{hidden : (!showNav || !hasNavLinks)}">
			<navigation-sidebar></navigation-sidebar>
			<button class="btn btn-danger">Show nav links</button>
		</div>
		<div v-bind:class="{'col-md-9' : (showNav && hasNavLinks), 'col-md-12' : (!showNav || !hasNavLinks)}">
			<router-view></router-view>
		</div>

	</div>
</template>
<script>
	import NavigationSidebar from './Sidebar.vue';
	import {mapGetters} from 'vuex';
	import bus from '../service/Bus';
	import mediaWatch from '../service/MediaQuery';
	export default {
		name: 'main-container',
		components: {
			'navigation-sidebar': NavigationSidebar
		},
		computed: mapGetters({
			showUnderConstruction: 'showConstruction'
		}),
		data() {
			return {
				showNav: false,
				hasNavLinks: false
			}
		},
		created(){
			this.screenResize();
			this.$log.debug("showNav", this.showNav);
			bus.$on('set-nav-links', navLinks => {
				this.hasNavLinks = navLinks !== null;
			});
			mediaWatch.$on('screen-resized', () => this.screenResize())
		},
		methods: {
			screenResize(){
				this.$log.debug('resize listener called for main section');
				this.showNav = this.$mq.above(this.$mv.sm);
			}
		}

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
