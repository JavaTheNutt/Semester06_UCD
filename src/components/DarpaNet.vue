<template>
	<div class="bodyContainer">
		<h1>DARPA Net</h1>
	</div>
</template>
<script>
	import {internetLinks} from '../service/SidebarLinks';
	import bus from '../service/Bus';
	export default{
		name: 'darpa_net',
		created(){
			bus.$emit('set-nav-links', internetLinks);
		}
	}
</script>
