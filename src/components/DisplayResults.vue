<template>
	<div v-if="showArticles" style="margin-top: 100px">
		<carousel-3d>
			<slide v-for="(article, index) in articles" :key="article.title" :index="index" class="resultCard">
				<h3 class="text-center">{{article.title}}</h3>
				<p>{{article.snippet}}</p>
				<a v-bind:href="article.url" class="btn btn-primary btn-block" target="_blank">View on Wikipedia</a>

			</slide>
		</carousel-3d>
		<div class="container">
			<div class="col-sm-6 col-sm-offset-3">
				<button class="btn btn-danger btn-block" v-on:click="closeCarousel"><i class="fa fa-close"></i></button>
			</div>
		</div>
	</div>
</template>
<script>
    import {mapState} from 'vuex';
    import {Carousel3d, Slide} from 'vue-carousel-3d'
    export default{
        name: 'displayResults',
        computed: mapState([
                               'showArticles',
                               'articles'
                           ]),
        components: {
            Carousel3d,
            Slide
        },
        methods: {
            closeCarousel: function () {
                console.log('closing carousel');
                this.$store.dispatch('SHOW_ARTICLES', false);
            }
        }
    }

</script>
<style>
	.carousel-3d-slider .carousel-3d-slide.resultCard {
		overflow: visible;
		padding: 20px;
		border-radius: 25px;
		background-color: whitesmoke;
	}
</style>
