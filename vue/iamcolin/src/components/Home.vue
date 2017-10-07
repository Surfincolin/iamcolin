<template>
  <div class="home">
    <h2>Welcome, My name is Colin Wageman. I'm a creative developer who likes making interactive experiences. With a diverse background, I excel in looking at the bigger picture and determining the most efficient approach to situations.</h2>
    <div class="video-container">
      <!-- <a href="http://placeholder.com"><img src="http://via.placeholder.com/854x480?text=Video+Reel"></a> -->
      <iframe src="https://player.vimeo.com/video/225743129" width="854" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      <!-- <video width="854" height="480" controls>
        <source src="static/code-reel-v1.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video> -->
    </div>
    <div class="standard-content">
      <h3>A Brief History</h3>
      <p>After deciding traditional engineering wasn't for me I got into video production. As live streaming and webcasts became popular I started a live stream company. Over time I began developing custom servers and CDNs through AWS for productions. I ended up really enjoying the development and coding side of things, so I decided to pursue a career in software development. From there I worked with Sosolimited as a creative coder, until recently. Now I am freelancing and looking for opportunities to develop interactive applications and experiences.</p> 
      <h3 class="">Capabilities</h3>
      <ul class="capabilities">
        <li>C++</li>
        <li>Cinder</li>
        <li>Scope/Time Understanding</li>
        <li>Swift</li>
        <li>tvOS/iOS</li>
        <li>Javascript</li>
        <li>Node.js</li>
        <li>Object Oriented Programming</li>
        <li>Vue.js</li>
        <li>D3.js</li>
        <li>AWS</li>
        <li>Linux</li>
        <li>Technical Production</li>
        <li>DMX Lighting Protocols</li>
        <li>After Effects</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: 300;
  line-height: 2.5rem;
  padding-top: 1rem;
  padding-bottom: 3.5rem;
  font-family: 'Source Sans Pro', sans-serif;
  letter-spacing: 0.4px;
  font-size: 1.9rem;
}

.capabilities {
  /*list-style-type: circle;*/
  /*list-style-position: inside;*/
  -webkit-columns: 100px 3; /* Chrome, Safari, Opera */
  -moz-columns: 100px 3; /* Firefox */
  columns: 100px 3;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 1rem;
  line-height: 2rem;
  font-weight: lighter;
  letter-spacing: 0.8px;
}

.top-padding {
  padding-top: 2rem;
}

/*ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}*/

a {
  color: #42b983;
}
</style>
