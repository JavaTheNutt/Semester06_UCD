import Vue from 'vue';

export default new Vue({
	watch: {
		'$mq.resize': 'screenResize'
	},
	methods: {
		screenResize(){
			'use strict';
			console.log('screen resize called from bus');
			this.$emit('screen-resized');
		}
	}
})
