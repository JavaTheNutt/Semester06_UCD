<template>
	<div id="app">
		<component is="navBar"></component>
		<component is="displayResults"></component>
		<component is="underConstruction"></component>

		<router-view></router-view>
		<component is="stickyFooter"></component>
	</div>
</template>

<script>
    import NavBar from './components/Nav.vue';
    import StickyFooter from './components/Footer.vue';
    import DisplayResults from './components/DisplayResults.vue';
	import UnderConstruction from './components/UnderConstruction.vue';
	const img = document.createElement('img');
	img.src = require('./assets/under-construction-sign.jpg');

    export default {
        name: 'app',
        components: {
            'navBar': NavBar,
			'stickyFooter': StickyFooter,
			'displayResults': DisplayResults,
			'underConstruction': UnderConstruction
        },
		data:function () {
			return {
                showModal: false
            }
        }
    }
</script>

<style>
	body {
		background-color: gainsboro;
		padding: 0;
		margin: 0;
	}

	.bodyContainer {
		border: solid black 1px;
		border-radius: 15px;
		background-color: white;
		margin-bottom: 70px;
		margin-top: 0;
	}
	.construction{
		margin-top: 20px;
	}
	.noConstruction{
		margin-top: 100px;
	}
	.centerHeader {
		text-align: center;
	}

</style>
