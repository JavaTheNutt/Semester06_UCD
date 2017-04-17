<template>
	<nav class="navbar navbar-inverse navbar-fixed-top">
		<div class="container-fluid">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
						aria-expanded="false" aria-controls="navbar">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<router-link to="/" class="navbar-brand"><i class="fa fa-home"></i><span class="sr-only">home</span></router-link>
			</div>
			<div id="navbar" class="navbar-collapse collapse">
				<ul class="nav navbar-nav">
					<router-link tag="li" to="/references"><a>References</a></router-link>
				</ul>
				<div class="navbar-right navbarForm">
					<form class="form-inline" @submit.prevent="validateForm">
						<input class="form-control" type="text" placeholder="Search Wikipedia" v-model="searchTerm">
						<button class="btn btn-primary" type="submit" id="submitToWiki"><i class="fa fa-search"
																						   aria-hidden="true"></i>
							Search
						</button>
					</form>
				</div>
			</div><!--/.nav-collapse -->
		</div><!--/.container-fluid -->
	</nav>
</template>
<script>
    export default{
        name: 'navBar',

        methods: {
            validateForm: function (e) {
                if (this.searchTerm.length > 0) {
                    this.$log.debug('search term exists:', this.searchTerm);
                    this.$store.dispatch('retrieveArticles', this.searchTerm).then(() => {
                        this.$log.success('fetch articles promise resolved');
                        this.$store.dispatch('showArticles', true);
                    }).catch((err) => {
                        this.$log.error("fetch articles promise rejected. Error:", err);
                    })
                }
            }
        },
        data: function () {
            return {
                searchTerm: ''
            }
        }
    }
</script>
<style scoped>
	.navbar {
		margin-bottom: 30px;
	}

	nav {
		margin-bottom: 30px;
	}

	.navbarForm {
		padding: 15px;
	}

	.navbar-header {
		font-size: 1em;
	}

	.nav {
		font-size: 1em;
	}

	@media (max-width: 768px) {
		#submitToWiki {
			margin-top: 5px;
			text-align: center;
		}
	}
</style>
