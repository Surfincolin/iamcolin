<template>
  <div class="project">
  	<h3>{{ project.title }}</h3>
  	<div class="project-top-container">
	  	<div class="description">
		  	<p>{{ project.description }}</p>
	  	</div>
	  	<div class="role">
	  		<h4>Role:</h4>
		  	<p>{{ project.role }}</p>
	  	</div>
  	</div>
  	<div v-if="project.video != ''" class="video-container">
      <iframe :src="videoSrc()" width="854" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>
  	<div class="photo-grid">
	  	<div class="photo-container" v-for="photo in project.photos">
	  		<img :src="imageUrl(photo)">
	  	</div>
  	</div>
  	<!-- <div class="slide-container">
  		<img v-bind:src="currentImage(Math.abs(slideIndex) % project.photos.length)">
  	</div> -->
  	<!-- <button v-on:click="prevSlide">prev</button><button v-on:click="nextSlide">next</button> -->
  </div>
</template>

<script>
import projects from '../assets/projects-data.json'

export default {
  name: 'project',
  data () {
  	var pId = this.$route.params.projectId
  	

    return {
      project: projects.find((element) => { return element.projectId === pId }),
      slideIndex: 0
    }
  },
  methods: {
  	imageUrl: function(name) {
  		return "/static/images/projects/" + name + "@0,5x.jpg";
  		// return "/static/images/projects/" + name + "-full.jpg";
  	},
  	currentImage: function(index) {
  		var imgName = this.project.photos[index]
  		// return "/static/images/projects/" + imgName + "@0,5x.jpg";
  		return "/static/images/projects/" + imgName + "-full.jpg";
  	},
  	nextSlide: function() {
  		this.slideIndex += 1
  	},
  	prevSlide: function() {
  		this.slideIndex -= 1
  	},
  	videoSrc: function() {
  		return this.project.video + "?title=0&byline=0&portrait=0";
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.project-top-container {
	display: flex;
}

.description, .role {
	flex: 1 1 50%;
	padding-right: 120px;
}

.project-top-container div:last-of-type {
	padding-right: 0;
}

.slide-container, .photo-grid {
	/*position: relative;*/
	/*padding-top: 1rem;*/
	/*width: 90%;*/
	/*min-height: 480px;*/
	/*overflow: hidden;*/
	/*margin: 0 auto;*/
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
}

.photo-container {
	width: calc(50% - 8px);
	margin-bottom: 8px;
	line-height: 0;
	/*display: inline-block;*/
	/*padding-right: 1rem;*/
}

.slide-container img, .photo-container img {
	/*position: absolute;*/
	/*left: 50%;*/
	/*top: 50%;*/
	/*height: auto;*/
	width: 100%;
	/*padding-right: 1rem;*/
	/*padding-bottom: 1rem;*/
	/*-webkit-transform: translate(-50%,-50%);*/
      /*-ms-transform: translate(-50%,-50%);*/
          /*transform: translate(-50%,-50%);*/
  /*display: inline-block;*/
}

h3 {
	text-align: left;
}

.role h4 {
	text-align: left;
}

</style>