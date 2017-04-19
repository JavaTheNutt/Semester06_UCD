<template>
	<div class="bodyContainer">
		<h1 class="centerHeader">References</h1>
		<p class="text-center">
			The purpose of this page is to display the references for resources that were used in the building of this
			website. Of course it is not possible to mention every package, plugin and library used in building this
			site. The list below contains the most central technologies that are used. For a full list of all
			dependencies used in this project, see the projects <a
				href="https://github.com/JavaTheNutt/Semester06_UCD/blob/master/package.json" target="_blank">package.json</a>
			file.
		</p>
		<div class="headerContainer">
			<h3 class="centerHeader">Technologies
				<button class="btn-default toggleShowIcon" @click="showTech = !showTech">
					<i class="fa fa-minus" v-bind:class="{hidden : !showTech}"></i>
					<i class="fa fa-plus" v-bind:class="{hidden: showTech}"></i>
				</button>
			</h3>
		</div>

		<transition
				name="toggleTechTransition"
				enter-active-class="animated slideInRight"
				leave-active-class="animated slideOutRight"
		>
			<div class="techUsedSection" v-if="showTech">
				<h4>Vue.js</h4>
				<p>
					For this project, I used <a href="https://vuejs.org/" target="_blank">Vue.js</a> as the Web
					Framework.
					Vue.js is a lightweight JavaScript Framework that is used for building <em>components</em> that fit
					together
					to form a website.
					This piece of Software is released under the <a href="https://opensource.org/licenses/MIT"
																	target="_blank">MIT
					Licence</a>.
					The copyright for this piece of Software is held by <a href="http://evanyou.me/" target="_blank">Evan
					You</a>. I also made use of <a href="https://router.vuejs.org/en/" target="_blank">Vue Router</a>,
					which
					is
					a separate package to Vue, but released under the same licence. I also used <a
						href="https://github.com/vuejs/vuex" target="_blank">Vuex</a>. Vuex is another plugin for Vue.
					This
					one
					allows me to manage application state. It is again released as a separate package from Vue, but is
					released
					under the same licence.
				</p>
				<h4>Webpack</h4>
				<p>
					To build this project, I used <a href="https://webpack.github.io/" target="_blank">Webpack</a>.
					Webpack is a JavaScript module bundler that will take all of the assets I use in this website and
					bundle them into a single JavaScript file, to reduce on network traffic and improve performance.
					This tool also allows me to prepare my production files for deployment. The entire config for this
					tool is located in <a
						href="https://github.com/JavaTheNutt/Semester06_UCD/blob/master/webpack.config.js"
						target="_blank">webpack.config.js</a>
				</p>
				<h4>Vue Carousel 3D</h4>
				<p>
					For the Wikipedia Viewer I used <a href="https://wlada.github.io/vue-carousel-3d/" target="_blank">Vue
					Carousel 3D</a>. This is another Vue plugin. This one allows me to create the Carousel used for
					displaying the wiki search results. This plugin is also released under the MIT licence. I found this
					plugin on <a href="http://vuejsexamples.com/beautiful-and-touch-supported-3d-carousel-for-vue-js/"
								 target="_blank">Vie.js Examples</a>,
					a website dedicated to providing high quality Vue UI components.
				</p>
				<h4>Twitter Bootstrap</h4>
				<p>
					I used <a href="http://getbootstrap.com/" target="_blank">Twitter Bootstrap</a> as the CSS Framework
					for
					this project. This framework is used for styling the page. It greatly reduces the amount of CSS that
					has
					to
					be written, and also allows websites to be responsive, which means that they will work on smaller
					screens,
					such as mobile phones and tablets, as well as laptops and desktops. This software is also released
					under
					the
					<a href="https://opensource.org/licenses/MIT" target="_blank">MIT Licence</a>.
				</p>
				<h4>Animate.css</h4>
				<p>
					I made use of <a href="https://daneden.github.io/animate.css/" target="_blank">animate.css</a> for
					certain transitions. This library allows the use of CSS transitions.
					These transitions are performed using CSS only for better performance. It is built and maintained by
					<a href="https://daneden.me/" target="_blank">Daniel Eden</a>.
				</p>
				<h4>Font Awesome</h4>
				<p>
					I used <a href="http://fontawesome.io/" target="_blank">Font Awesome</a> as for their icon set. Font
					Awsoeme provides icons in Scalable Vector Graphic (SVG) format, so they are images rather than text
					icons. This makes them compatible with almost all browsers, and because they are scalable, the size
					can be adjusted with no loss of quality.
				</p>
				<h4>Wikipedia API</h4>
				<p>
					I made use of the Wikipedia Search API to use as a glossary of sorts with this site. This API allows
					me
					to
					send a search term to Wikipedia and get back a list of results. These results can then be presented
					to
					the
					user to facilitate learning for topics which are not covered here.
				</p>

			</div>
		</transition>
		<div class="headerContainer">
			<h3 class="centerHeader">Resources
				<button class="btn-default toggleShowIcon" @click="showResources = !showResources">
					<i class="fa fa-minus" v-bind:class="{hidden : !showResources}"></i>
					<i class="fa fa-plus" v-bind:class="{hidden: showResources}"></i>
				</button>
			</h3>
		</div>
		<transition
				name="toggleResourceTransition"
				enter-active-class="animated slideInRight"
				leave-active-class="animated slideOutRight">
			<div v-if="showResources">
				<h3>Under Construction Image</h3>
				<p>
					I used this image as a banner at the top of the page to let users know that this site is a work in
					progress. I got this image from <a href="http://www.freepik.com" target="_blank">Freepik</a>. The
					image can be found <a
						href="http://www.freepik.com/free-vector/under-construction-sign_819415.htm#term=under construction&page=4&position=36"
						target="_blank">here</a>. I am also including the suggested reference below.
					<a href="http://www.freepik.com/free-photos-vectors/construction">Construction vector created by
						Microvector - Freepik.com</a>
				</p>
				<h3>Favicon</h3>
				<p>
					For the favicon, I am using an icon image that I got from <a href="https://www.freefavicon.com"
																				 target="_blank">Free
					Favicon</a>. A favicon is the icon beside the title of the webpage, on the tab of the page. The icon
					that I used can be found <a
						href="https://www.freefavicon.com/freefavicons/objects/iconinfo/warning-sign-152-172013.html"
						target="_blank">here</a>. This icon is created using an image downloaded from <a
						href="https://openclipart.org" target="_blank">Open Clipart</a>. Both resources are distributed
					freely for use.
				</p>
			</div>
		</transition>
	</div>

</template>
<script>
	import {mapState} from 'vuex';
	import bus from '../service/Bus';
	const navLinks = [{
		title: 'Technologies',
		id: 'techHeader',
		sublinks: [{
			title: 'Vue.js',
			id: 'vueHeader'
		}]
	}];
	export default{
		name: 'references',
		data() {
			return {
				showTech: false,
				showResources: false,
				showTechClasses: {
					slideInDown: this.showTech,
					slideOutUp: !this.showTech
				}
			}

		},
		methods: {
			toggleShowTech: function () {
				this.showTech = !this.showTech;
			}
		},
		computed: mapState(['showUnderConstruction']),
		created(){
			bus.$emit('set-nav-links', null);
		}
	}
</script>
<style>
	.toggleShowIcon {
		border-radius: 50%;
		background-color: #9f9f9f;
		padding: 3px;
		font-size: 0.6em;
	}

	.toggleShowIcon.active {
		border-radius: 50%;
	}

	.techUsedSection {
		-webkit-transition: height 1s;
		transition: height 1s;
	}

	.collapsedSection {
		height: 0;
		overflow: hidden;

	}

	.shownSection {
		height: auto;
	}

	.headerContainer {
		display: inline;
	}

</style>

