<template>
	<div id="app">
		<component is="navBar"></component>

		<router-view></router-view>

	</div>
</template>

<script>
    import NavBar from './components/Nav.vue';
    export default {
        name: 'app',
        components: {
            'navBar': NavBar
        }
    }
</script>

<style>
	body {
		background-color: gainsboro;
		padding: 0;
		margin: 0;
	}

	.container.mainContainer {
		border: solid black 1px;
		border-radius: 15px;
		background-color: white;
	}

	.centerHeader {
		text-align: center;
	}

</style>
