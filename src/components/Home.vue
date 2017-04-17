<template>
	<div class="container bodyContainer">
		<h1 class="text-center">Welcome to my Website!</h1>
		<p>
			I created this website as part of my Year Three college project for my User Centred Design module. The
			purpose of the assignment is to create an educational website that has a user-friendly feel. Please note
			that this project is still under construction, if you find any bugs, <a href="mailto:javathenutt@gmail.com"
																					target="_blank">please feel free to
			submit them to me</a>. If you are a developer and you see issues, feel free to submit a <a
				href="https://github.com/JavaTheNutt/Semester06_UCD/issues" target="_blank">GitHub Issue</a>, or
			send me a <a href="https://github.com/JavaTheNutt/Semester06_UCD/pulls" target="_blank">Pull Request</a>.
		</p>
		<p>It is also very important to mention the other developers who contributed to this website, through the use of
			Open Source Software. The ethos that drives the Open Source movement is that software should be freely
			available and modifiable by all. This means that there are an abundance of resources available for
			developers like myself to use for our projects. Check out the
			<router-link to="/references">references</router-link>
			page for more info.
		</p>
		<p>
			In the navigation bar, you will see a field that you can use to search wikipedia. Wikipedia can be a great
			tool to gain a basic understanding of almost anything, which is why I included the search bar in this
			application. If there are any terms that you don't understand, feel free to use this to further your
			knowledge!
		</p>
		<h3>Using the Search Bar</h3>
		<p>
			When you search for something, a list of 10 matching wikipedia articles will be returned. These can be seen
			in a 'Carousel' fashion below the Navigation Bar. These articles will appear as cards with the title of the
			article and a short snippet of text from the article. Please bear in mind that this website is still a work
			in progress, and that the Wikipedia API (API stands for <strong>A</strong>pplication <strong>P</strong>rogramming
			<strong>I</strong>nterface, and that could be a good term to search) is somewhat old. This means that some
			of the search results may not display correctly. I apologise for that.
		</p>
		<p>
			Below the text snippet on the card, there is a link that can be used to view the article on Wikipedia. This
			will open the page in a separate tab, which means that when you are done reading the wiki article, what you
			were reading will still be here waiting for you.
		</p>

	</div>

</template>
<script>
    import {mapState} from 'vuex';

    export default{
        name: 'home',
        computed: mapState(['showUnderConstruction'])
    }
</script>
