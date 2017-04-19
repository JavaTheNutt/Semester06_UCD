<template>
	<div class="bodyContainer">
		<h1>The beginning of the internet</h1>
	</div>
</template>
<script>
	import {internetLinks} from '../service/SidebarLinks'
	import bus from '../service/Bus';
	export default{
		name: 'internetBeginning',
		created(){
			bus.$emit('set-nav-links', internetLinks);
		}
	}
</script>
