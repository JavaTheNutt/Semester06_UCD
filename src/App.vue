<template>
	<div id="app">
		<component is="navBar"></component>

		<router-view></router-view>
		<component is="stickyFooter"></component>
	</div>
</template>

<script>
    import NavBar from './components/Nav.vue';
    import StickyFooter from './components/Footer.vue';
    export default {
        name: 'app',
        components: {
            'navBar': NavBar,
			'stickyFooter': StickyFooter
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
		margin-top: 100px;
	}

	.centerHeader {
		text-align: center;
	}

</style>
