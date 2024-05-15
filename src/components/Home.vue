<script setup>
const imgBase = '../../static/images/gallery/'
const suffix = '@0.5x.jpg'
const gallery = [
        {imgFile: 'BHZ-2', projectId: 'behavioral-health-visualization'}, 
        {imgFile: 'bci-1', projectId: 'bci'}, 
        {imgFile: 'converge-1', projectId: 'convergence'}, 
        {imgFile: 'biomed-2', projectId: 'biomed-reality'}, 
        {imgFile: 'toaster-3', projectId: 'toaster'}, 
        {imgFile: 'bci-2', projectId: 'bci'}, 
        {imgFile: 'Eventide-2', projectId: 'eventide'}, 
        {imgFile: 'converge-4', projectId: 'convergence'}, 
        {imgFile: 'bci-3', projectId: 'bci'}, 
        {imgFile: 'toaster-1', projectId: 'toaster'}, 
        {imgFile: 'life-1', projectId: 'life'}, 
        {imgFile: 'IC-1',  projectId: 'inflorescent-crescendo'}, 
        {imgFile: 'Jabil-5', projectId: 'jabil-bluesky-center'}, 
        {imgFile: 'life-2', projectId: 'life'}, 
        {imgFile: 'Miraj-5', projectId: 'miraj'}, 
        {imgFile: 'life-3', projectId: 'life'}, 
        {imgFile: 'toaster-2', projectId: 'toaster'}, 
        {imgFile: 'qronicles-2', projectId: 'qronicles'}, 
        {imgFile: 'bci-4', projectId: 'bci'}, 
        {imgFile: 'WGN-4', projectId: 'whos-got-next'}, 
      ]

const getFullFileName = (picture) => `${imgBase}${picture.imgFile}${suffix}`

const importGlob = import.meta.glob("../../static/images/gallery/*");
for (const picture of gallery) {
  picture.imgMeta = await importGlob[getFullFileName(picture)]()
}

</script>

<template>
  <div class="home">
    <h3>Welcome!</h3>
    <p>I'm Colin Wageman and I am a software developer specializing in interactive experiences, embedded systems, signal processing, and data usage for applications beyond marketing. With my diverse background, I can look at the big picture and determine the most efficient approach to projects and problems. With my skill set, I can also focus on minute details down to the circuit level. This site is built to showcase some of the projects I have worked on. Take a look around!</p>

    <div id='gallery'>
      <div id='gallery-scroller'>
        <a v-for="photo in gallery" :key="photo.imgFile" :href="`/work/${photo.projectId}`" >
          <img :src="photo.imgMeta.default.src" :alt="photo.imgFile">
        </a>
      </div>
    </div>
    <div class="standard-content">
      <h3>A Brief History</h3>
      <p>I started my career in video production. As live streaming and webcasts became popular, I started a live streaming company. Over time, I began developing custom servers and content distribution networks through AWS for live broadcasts. I really enjoyed coding and application development, so I decided to pursue a career in software development. From there I worked with Sosolimited, a design and technology firm, as a creative coder. I also worked as a software developer for the agency MJD Interactive. I wanted to expand my knowledge further so I went back to school at UC San Diego and studied cognition, data science, machine learning, and brain computer interfaces.</p>
      <h3 class="">Capabilities</h3>
      <ul class="capabilities">
        <li>After Effects</li>
        <li>AWS</li>
        <li>C++</li>
        <li>Cinder</li>
        <li>CSS3</li>
        <li>D3.js</li>
        <li>Data Analysis</li>
        <li>Git</li>
        <li>HTML5</li>
        <li>Java</li>
        <li>Javascript</li>
        <li>Linux</li>
        <li>Machine Learning</li>
        <li>OpenGl</li>
        <li>MongoDB</li>
        <li>Node.js</li>
        <li>Object Oriented Programming</li>
        <li>Openframeworks</li>
        <li>Python</li>
        <li>React.js</li>
        <li>Signal Processing</li>
        <li>SQLite</li>
        <li>Swift</li>
        <li>Technical Production</li>
        <li>tvOS/iOS</li>
        <li>Vue.js</li>
        <li>XCode/Visual Studio/Code::Blocks</li>

      </ul>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#gallery {
  max-width: 100%;
  max-height: 300px;
  overflow-x: auto;
  overflow-y: hidden;
  
}

#gallery-scroller {
  width: 6000px;
}

#gallery-scroller img {
  /* display: inline-block;  */
  float: left;
  width: 300px;
}

h1, h2 {
  font-weight: 300;
  line-height: 2.5rem;
  padding: 1rem 0 3.5rem;
  font-family: 'Source Sans Pro', sans-serif;
  letter-spacing: 0.4px;
  font-size: 1.9rem;
  text-align: left;
}

h3 {
  text-align: left;
}

.capabilities {
  /*list-style-type: circle;*/
  /*list-style-position: inside;*/
  -webkit-columns: 100px 3; /* Chrome, Safari, Opera */
  -moz-columns: 100px 3; /* Firefox */
  columns: 100px 3;
  margin: 0 auto;
  text-align: left;
  padding-bottom: 1rem;
  line-height: 2rem;
  font-weight: lighter;
  letter-spacing: 0.8px;
}

.top-padding {
  padding-top: 2rem;
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

a {
  color: #42b983;
}

@media only screen and (max-width: 768px) {
    /* For mobile phones: */
    h1, h2 {
      letter-spacing: 0.2px;
      font-size: 1.5rem;
      line-height: 1.9rem;
      padding: 2rem 0;
    }

    .capabilities {
      -webkit-columns: 100px 2; /* Chrome, Safari, Opera */
      -moz-columns: 100px 2; /* Firefox */
      columns: 100px 2;
      line-height: 1.2rem;
    }

    .capabilities li {
      padding-bottom: 0.6rem;
    }

    .video-container {
      padding-bottom: 1rem;
    }

}

</style>
