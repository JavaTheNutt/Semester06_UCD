<template>
	<div class="container-fluid"
		 v-bind:class="{noConstruction : !showUnderConstruction, construction: showUnderConstruction}">
		<div v-bind:class="{'col-xs-1': isHideNav(), 'col-xs-3': isShowNav()}" class="affix mainBodyHolder">
			<div class="col-xs-9" v-bind:class="{hidden : isHideNav()}">
				<navigation-sidebar></navigation-sidebar>
			</div>
			<div v-bind:class="{'col-xs-3': isShowNav()}">
				<button class="btn btn-danger" v-bind:class="{hidden : !hasNavLinks}" @click="toggleNav">{{toggleNavLabel}} navigation</button>
			</div>
		</div>
		<div class="mainBodyHolder" v-bind:class="{'col-xs-8' : isShowNav(), 'col-xs-10' : isHideNav(), 'col-xs-offset-1': hasNavLinks}">
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
				hasNavLinks: false,
				navLinksManuallyShown: true,
				toggleNavLabel: 'Show'
			}
		},
		created(){
			this.screenResize(true);
			this.$log.debug("showNav", this.showNav);
			bus.$on('set-nav-links', navLinks => this.hasNavLinks = navLinks !== null);
			mediaWatch.$on('screen-resized', () => this.screenResize())
		},
		methods: {
			screenResize(isInitial){
				let showNav = this.$mq.above(this.$mv.sm);
				if(isInitial){
					this.navLinksManuallyShown = showNav;
				}
				this.$log.debug('resize listener called for main section');
				this.showNav = showNav;
				this.setNavLabel();
			},
			isShowNav(){
				return (this.showNav && this.hasNavLinks && this.navLinksManuallyShown);
			},
			isHideNav(){
				return (!this.hasNavLinks || !this.navLinksManuallyShown);
			},
			toggleNav(){
				this.navLinksManuallyShown = !this.navLinksManuallyShown;
				this.setNavLabel();
			},
			setNavLabel(){
				this.toggleNavLabel = this.isShowNav() ? 'Hide': "Show";
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
	.navHidden{
		padding: 20px;
	}
	.sideNavHolder{
		position: fixed;
		float: left;
	}
	.mainBodyHolder{
		overflow: hidden;
	}
</style>
