<template>
  <div class="home">
    <h2>Welcome, My name is Colin Wageman. I'm a software developer who likes making interactive experiences. With a diverse background, I excel in looking at the bigger picture and determining the most efficient approach to situations.</h2>
    <div class="video-container">
      <div class="video-container-inner">

      <iframe src="https://player.vimeo.com/video/225743129" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

      </div>
    </div>
    <div class="standard-content">
      <h3>A Brief History</h3>
      <p>After deciding traditional engineering wasn't for me I got into video production. As live streaming and webcasts became popular I started a live stream company. Over time I began developing custom servers and CDNs through AWS for productions. I ended up really enjoying the development and coding side of things, so I decided to pursue a career in software development. From there I worked with Sosolimited as a creative coder, until recently. Currently, I am looking for opportunities to apply my skills and grow further in software development. Specifically, I have an interest in interactive and control applications.</p>
      <h3 class="">Capabilities</h3>
      <ul class="capabilities">
        <li>After Effects</li>
        <li>Agile</li>
        <li>Assembly</li>
        <li>AWS</li>
        <li>C++</li>
        <li>Cinder</li>
        <li>CSS3</li>
        <li>D3.js</li>
        <li>DMX Lighting Protocols</li>
        <li>Firebase</li>
        <li>Git</li>
        <li>HTML5</li>
        <li>Java</li>
        <li>Javascript ES6</li>
        <li>Linux</li>
        <li>MongoDB</li>
        <li>Node.js</li>
        <li>Object Oriented Programming</li>
        <li>Openframeworks</li>
        <li>PHP</li>
        <li>React.js</li>
        <li>Scope/Time Understanding</li>
        <li>Scrum</li>
        <li>SQLite</li>
        <li>Swift</li>
        <li>Technical Production</li>
        <li>tvOS/iOS</li>
        <li>Vue.js</li>
        <li>XCode/Visual Studio/Code::Blocks</li>

        <!-- <li>After Effects</li>
        <li>AWS</li>
        <li>CSS3</li>
        <li>Firebase</li>
        <li>Java</li>
        <li>MongoDB</li>
        <li>Openframeworks</li>
        <li>Scope/Time Understanding</li>
        <li>Swift</li>
        <li>Vue.js</li>

        <li>Agile</li>
        <li>C++</li>
        <li>D3.js</li>
        <li>Git</li>
        <li>Javascript ES6</li>
        <li>Node.js</li>
        <li>PHP</li>
        <li>Scrum</li>
        <li>Technical Production</li>
        <li>XCode/Visual Studio/Code::Blocks</li>

        <li>Assembly</li>
        <li>Cinder</li>
        <li>DMX Lighting Protocols</li>
        <li>HTML5</li>
        <li>Linux</li>
        <li>Object Oriented Programming</li>
        <li>React.js</li>
        <li>SQLite</li>
        <li>tvOS/iOS</li> -->
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
  padding: 1rem 0 3.5rem;
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

.video-container iframe {
    /*position: absolute;*/
    /*top:0;*/
    /*left: 0;*/
    /*width: 100%;*/
    /*height: 100%;*/
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

@media only screen and (max-width: 768px) {
    /* For mobile phones: */
    h1, h2 {
      letter-spacing: 0.2px;
      font-size: 1.5rem;
      line-height: 1.9rem;
      padding: 2rem 0;
    }

    .capabilities {
      /*list-style-type: circle;*/
      /*list-style-position: inside;*/
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
