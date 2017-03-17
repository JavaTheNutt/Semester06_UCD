<template>
	<transition
	name="hideUnderConstruction"
	leave-active-class="animated fade">
		<div class="text-center" v-if="showUnderConstruction">
			<div id="outerContainer">
				<button class="btn btn-sm btn-default close" @click="hideImg()"><i class="fa fa-close"></i>
				</button>
				<img src="/src/assets/under-construction-sign.jpg" alt="under construction" id="warningImage">
			</div>
		</div>
	</transition>
</template>
<script>
	import {mapState} from 'vuex';
    export default{
        name: 'underConstruction',
		methods:{
            hideImg: function(){
				this.$store.dispatch('HIDE_CONSTRUCTION');
			}
		},
		computed: mapState(['showUnderConstruction'])

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
