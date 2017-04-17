<template>
	<div class="sidebar mySidebar">
		<ul class="nav nav-stacked" id="navSidebar">
			<li v-for="navItem in navLinks">{{navItem.title}}</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name: 'navigation-sidebar',
		data: function () {
			return {
				navLinks: [{
					title: 'link one',
					pos: 'test'
				}, {
					title: 'link two',
					pos: 'test'
				}, {
					title: 'link three',
					pos: 'test'
				}, {
					title: 'link four',
					pos: 'test'
				}, {
					title: 'link five',
					pos: 'test'
				}]
			}
		}
	}
</script>
<style scoped>
	.mySidebar {
		border: solid black 1px;
		border-radius: 25%;
		background-color: aliceblue;
	}
</style>
