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
  components:{
      'navBar': NavBar
  }
}
</script>

<style>

</style>
