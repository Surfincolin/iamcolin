<template>
  <div class="work">
  	<div class="project-card" v-for="(project, index) in projects">
	  	<router-link :to="{ name: 'Project', params: { projectId: project.projectId }}" @mouseenter.native="makeActive(project)" @mouseleave.native="makeInactive(project)">
	  		<div class="project-card-img">
		  		<img :src="previewHoverUrl( project.thumbnail )">
		  		<!-- <img v-show="!project.active" :src="previewUrl( project.thumbnail )"> -->
		  		<!-- <img v-show="project.active" :src="previewHoverUrl( project.thumbnail )"> -->
		  		<!-- <div class="intro-tag effect7">{{ project.intro }}</div> -->
	  		</div>
	  		<div v-if="!(index % 2)" class="project-card-info-container almost-white-fg right">
	  			<div class="project-card-info">
		  			<h2>{{ project.title }}</h2>
		  			<div class="intro-tag">{{ project.intro }}</div>
		  			<!-- <div class="intro-tag">Client: {{ project.client }}</div> -->
	  			</div>
	  		</div>
	  		<div v-if="index % 2" class="project-card-info-container almost-white-fg left">
	  			<div class="project-card-info">
		  			<h2>{{ project.title }}</h2>
		  			<div class="intro-tag">{{ project.intro }}</div>
		  			<!-- <div class="intro-tag">Client: {{ project.client }}</div> -->
	  			</div>
	  		</div>

  		</router-link>
  	</div>
  </div>
</template>

<script>
import projects from '../assets/projects-data.json'
projects.forEach(function(p) { p.active = false })

export default {
  name: 'work',
  data () {
    return {
      projects: projects,
    }
  },
  methods: {
  	previewUrl: function(name) {
  		// return "/static/images/previews/" + name + "-preview@0,5x.jpg"
  		return "/static/images/previews/" + name + "-preview-full.jpg"
  	},
  	previewHoverUrl: function(name) {
  		// return "/static/images/previews/" + name + "-preview-active@0,5x.jpg"
  		return "/static/images/previews/" + name + "-preview-active-full.jpg"
  	},
  	makeActive: function(project) {
  		project.active = true;
  	},
  	makeInactive: function(project) {
  		project.active = false;
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.project-card {
    /*display: inline-block;*/
    /*padding: 1rem 2rem;*/
    padding: 1rem 0rem;
    /*width: 40%;*/
    /*width: 80%;*/
    /*height: 400px;*/
    /*background: green;*/
    /*text-align: left;*/
    position: relative;
    /*margin: 0 auto;*/
    /*overflow: hidden;*/
}

.project-card a {
  /*width: 100%;*/
  /*height: 100%;*/
  display: block;
  position: relative;
}

.project-card-img {
  /*position: absolute;*/
  /*height: 400px;*/
  /*width: 60%;*/
  /*height: 100%;*/
  line-height: 0;

}

.project-card-info-container {
	width: 40%;
  /*height: 100%;*/
  padding: 2rem;

}

.project-card-info {
  padding: 1.5rem;
  /*text-align: right;*/
  /*z-index: 1;*/
  background-color: rgb(74, 80, 87);
  -webkit-box-shadow: 1px 7px 20px 2px rgba(0,0,0,0.75);
  -moz-box-shadow: 1px 7px 20px 2px rgba(0,0,0,0.75);
  box-shadow: 1px 7px 20px 2px rgba(0,0,0,0.75);
}

.project-card h2 {
  /*position: absolute;*/
  /*top: 0;*/
  /*right: 0;*/
  /*width: 40%;*/
  /*height: 100%;*/
  /*text-align: right;*/
  /*padding: 1rem 4rem 1rem 4rem;*/
  /*width: 20rem;*/

/*  -moz-box-shadow: inset 4px -6px 15px -10px #000000;
    -webkit-box-shadow: inset 4px -6px 15px -10px #000000;
    box-shadow: inset 4px -6px 15px -10px #000000;*/
    padding-bottom: 2rem;
    font-weight: 500;
    letter-spacing: 0.4px;
}

.project-card h2:after {
     background: none repeat scroll 0 0 #ffffff;
     bottom: -1rem;
     /*margin-left: auto;*/
     content: "";
     display: block;
     height: 1px;
     position: relative;
     width: 120px;
 }

.project-card img {
  width: 100%;
  /*height: 100%;*/
}

.intro-tag {
  /*position: absolute;*/
  /*right: 0;*/
  /*bottom: 0;*/
  /*padding: 2rem 2rem;*/
  /*margin: 2rem;*/
  /*background: white;*/
  font-weight: 300;
}

.project-card-info-container.left {
	position: absolute;
	top: 0;
	left: 0;
	text-align: right;
}

.project-card-info-container.left h2 {
	text-align: right;
}

.project-card-info-container.left h2:after {
	margin-left: auto;
}

.project-card-info-container.right {
	position: absolute;
	top: 0;
	right: 0;
	text-align: left;
}

.project-card-info-container.right h2 {
	text-align: left;
}

.project-card-info-container.right h2:after {
	margin-right: auto;
}

@media only screen and (max-width: 768px) {
    /* For mobile phones: */
    .project-card-info-container {
      padding: 0.5rem;
      width: 60%;
    }

    .project-card-info {
      padding: 0.5rem;
    }

    .project-card h2 {
      font-size: 1.4rem;
      padding-bottom: 0.5rem;
      padding-top: 0;
    }

    .project-card h2:after {
         /*background: none repeat scroll 0 0 #ffffff;*/
         bottom: -0.25rem;
         /*margin-left: auto;*/
         /*content: "";*/
         /*display: block;*/
         /*height: 1px;*/
         /*position: relative;*/
         width: 80px;
     }

    .project-card-img {
      overflow: hidden;
    }

    .project-card img {
      width: 150%;
      margin: 0 -25%;
      display: block;
    }


}

</style>
