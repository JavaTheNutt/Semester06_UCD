<template>
  <div id="app">
	<component is="navBar"></component>
	  <div class="container">
		  <router-view></router-view>
	  </div>
  </div>
</template>

<script>
import NavBar from './components/Nav.vue';
export default {
  name: 'app',
  components:{
      'navBar': NavBar
  }
}
</script>

<style>

</style>
