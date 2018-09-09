<template>
  <div class="project">
  	<h3>{{ project.title }}</h3>
  	<div class="project-top-container">
	  	<div class="description">
        <!-- <h4 class="top">Summary:</h4> -->
		  	<p>{{ project.description }}</p>
	  	</div>
	  	<div class="role">
	  		<h4 class="top">Role:</h4>
		  	<p class="small-bottom-padding">{{ project.role }}</p>
        <div class="tools">
          <h4>Tools:</h4>
          <p>{{ project.tools.join(", ") }}</p>
        </div>
	  	</div>
  	</div>
  	<div v-if="project.video != ''" class="video-container">
      <div class="video-container-inner">
        <iframe :src="videoSrc()" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      </div>
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

.description p {
  font-size: 1.3rem;
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

.role h4, .role h5, .description h4 {
	text-align: left;
}

.top {
  padding-top: 0;
}

.role .bolder, .role h5 {
  font-size: 1.2rem;
  /*font-weight: bold;*/
  /*font-family: 'Cormorant Garamond', serif;*/
}

.small-bottom-padding {
  padding-bottom: 1rem;
}

.video-container {
  position: relative;
  max-width: 854px;
  margin: 0 auto;
}

.video-container-inner {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  width: 100%;
  height: auto;
}

.video-container-inner iframe,
.video-container-inner object,
.video-container-inner embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media only screen and (max-width: 768px) {
    /* For mobile phones: */

  .project-top-container {
    display: block;
  }

  .description, .role {
    flex: 1 1 100%;
    padding-right: 0;
    padding-bottom: 1rem;
  }

  .video-container {
    padding-bottom: 1rem;
  }

  .photo-container {
    width: 100%;
  }

}

</style>