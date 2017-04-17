<template>
	<transition
			name="hideUnderConstruction"
			leave-active-class="animated fade">
		<div class="text-center" v-if="showUnderConstruction">
			<div id="outerContainer">
				<button class="btn btn-sm btn-default close" @click="hideConstruction"><i class="fa fa-close"></i>
				</button>
				<img src="/assets/under-construction-sign.jpg" alt="under construction" id="warningImage">
			</div>
		</div>
	</transition>
</template>
<script>
	import {mapGetters, mapActions} from 'vuex';
	export default{
		name: 'underConstruction',
		methods: mapActions(['hideConstruction']),
		computed: mapGetters({
			                     showUnderConstruction: 'showConstruction'
		                     }),
		created(){
			this.$log.debug("under construction component created. ", this.showUnderConstruction);
		}
	}
</script>
<style>
	#outerContainer {
		margin-top: 80px;
		margin-bottom: 0;
		display: inline-block;
	}

	#warningImage {
		height: 200px;
		width: auto;
	}

	.outerContainer .close {
		position: absolute;
		top: 0;
		right: 0;
		z-index: 51;
	}

	.outerContainer img {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 50;
	}
</style>
