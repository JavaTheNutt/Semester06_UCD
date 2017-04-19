<template>
	<div class="container-fluid" id="wrapper"
		 v-bind:class="{noConstruction : !showUnderConstruction, construction: showUnderConstruction, toggled: navLinksManuallyShown}">
		<div id="sidebar-wrapper">
			<navigation-sidebar></navigation-sidebar>
		</div>
		<div class="mainBodyHolder" id="page-content-wrapper">
			<div class="col-xs-1">
				<button class="btn btn-danger affix" v-bind:class="{hidden : !hasNavLinks}"
						@click="navLinksManuallyShown = !navLinksManuallyShown"><i class="fa"
																				   v-bind:class="{'fa-arrow-left' : navLinksManuallyShown, 'fa-arrow-right': !navLinksManuallyShown}"></i>
				</button>
			</div>
			<div v-bind:class="{'col-xs-11' : hasNavLinks, 'col-xs-12': !hasNavLinks}">
				<router-view></router-view>
			</div>
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
				hasNavLinks: false,
				navLinksManuallyShown: true,
				toggleNavLabel: 'Show'
			}
		},
		created(){
			this.screenResize(true);
			this.$log.debug("showNav", this.showNav);
			bus.$on('set-nav-links', navLinks => this.hasNavLinks = this.navLinksManuallyShown = navLinks !== null);
			mediaWatch.$on('screen-resized', () => this.screenResize())
		},
		methods: {
			screenResize(isInitial){
				let showNav = this.$mq.above(this.$mv.sm);
				if (isInitial) {
					this.navLinksManuallyShown = showNav;
				}
				this.$log.debug('resize listener called for main section');
				this.showNav = showNav;
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

	.navHidden {
		padding: 20px;
	}

	.sideNavHolder {
		position: fixed;
		float: left;
	}

	.mainBodyHolder {
		overflow: hidden;
	}

	#wrapper {
		padding-left: 0;
		-webkit-transition: all 0.5s ease;
		-moz-transition: all 0.5s ease;
		-o-transition: all 0.5s ease;
		transition: all 0.5s ease;
	}

	#wrapper.toggled {
		padding-left: 250px;
	}

	#sidebar-wrapper {
		z-index: 1000;
		position: fixed;
		left: 250px;
		width: 0;
		height: 100%;
		margin-left: -250px;
		overflow-y: auto;
		background: #000;
		-webkit-transition: all 0.5s ease;
		-moz-transition: all 0.5s ease;
		-o-transition: all 0.5s ease;
		transition: all 0.5s ease;
	}

	#wrapper.toggled #sidebar-wrapper {
		width: 250px;
	}

	#page-content-wrapper {
		width: 100%;
		position: absolute;
		padding: 15px;
	}

	#wrapper.toggled #page-content-wrapper {
		position: absolute;
		margin-right: -250px;
	}

	@media (min-width: 768px) {
		#wrapper {
			padding-left: 0;
		}

		#wrapper.toggled {
			padding-left: 250px;
		}

		#sidebar-wrapper {
			width: 0;
		}

		#wrapper.toggled #sidebar-wrapper {
			width: 250px;
		}

		#page-content-wrapper {
			padding: 20px;
			position: relative;
		}

		#wrapper.toggled #page-content-wrapper {
			position: relative;
			margin-right: 0;
		}
	}
</style>
