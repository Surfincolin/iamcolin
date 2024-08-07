<script setup>
import GridGallery from './GridGallery.vue';

const images = [
  {
    imgFile: 'biomed-2',
    size: 100,
    transX: -5,
    transY: -18
  },
  {
    imgFile: 'converge-4',
    size: 100,
    transX: -28,
    transY: -23
  },
  {
    imgFile: 'qronicles-2',
    size: 60,
    transX: -35,
    transY: -32
  },
  {
    imgFile: 'Jabil-5',
    size: 100,
    transX: -25,
    transY: -25
  },
  {
    imgFile: 'Eventide-2',
    size: 100,
    transX: -15,
    transY: -0
  },
  {
    imgFile: 'WGN-4',
    size: 80,
    transX: -38,
    transY: -42
  },
  {
    imgFile: 'BHZ-2',
    size: 90,
    transX: -29,
    transY: -23
  }
]

</script>

<template>
    <div class="home">
        <h3>Welcome!</h3>
        <p>I'm Colin Wageman, a versatile software engineer with a robust background in interactive art, data science, and full-stack development. I specialize in developing sophisticated machine learning models and data-driven applications that enhance user experiences and solve complex problems in various domains, including healthcare and digital media. My journey through video production, webcasting, interactive design, and cognitive science has equipped me with a unique perspective and a diverse skill set that I bring to every project. Explore <a href="/work">my portfolio</a> to see the innovative solutions I've crafted.</p>

        <GridGallery :images="images"></GridGallery>

        <div class="standard-content">
            <h3>About Me</h3>
            <p>My career began in video production, where I embraced the early days of live streaming and webcasts. This experience led me to launch my own live streaming company, developing custom servers and content distribution networks using AWS for live broadcasts. My passion for coding and application development grew, steering me toward a more technical career path.</p>
            <p>I worked with Sosolimited and MJD Interactive, where I honed my skills as a creative coder and software developer, respectively. Seeking to deepen my knowledge, I pursued further education at UC San Diego, studying cognition, data science, machine learning, and brain-computer interfaces (BCI). My academic journey included hands-on BCI research and led me into my latest role as a data science software engineer, where I applied NLP techniques for cancer detection in medical notes.</p>
            <h3 class="">Professional Skills</h3>
            <ul class="skills">
            <li>
                <span class="bold">Programming Languages & Frameworks:</span> Python, JavaScript, C++, Java, Swift, React.js, Vue.js, Nuxt, Node.js, TypeScript, Cinder, OpenFrameworks, Go, HTML, CSS
            </li>
            <li>
                <span class="bold">Machine Learning & Data Science:</span> Data Analysis, NLP, Signal Processing, TensorFlow, PyTorch, Scikit-Learn, Numpy, Pandas
            </li>
            <li>
                <span class="bold">Web & App Development:</span> AWS, MongoDB, MariaDb(SQL), SQLite, Git
            </li>
            <li>
                <span class="bold">Media & Design:</span> After Effects, D3.js, OpenGL, Technical Production, tvOS/iOS
            </li>
            <li>
                <span class="bold">Other Skills:</span> Embedded Systems, EEG, BCI
            </li>
            </ul>
                
        </div>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.home {
  /* margin: auto; */
  /* width: var(--content-width); */
  /* background: lightblue; */
  /* position: relative; */
  container-type: inline-size;
}



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
    font-weight: 500;
    text-align: left;
}

.bold {
    font-weight: 500;
    /* font-weight: bold; */
}

.skills {
    list-style-type: disc;
    list-style-position: inside;

    font-size: 1.1rem;
    line-height: 1.6rem;
    font-weight: lighter;
    padding-bottom: 2rem;
    letter-spacing: 0.4px;
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
    color: #4BB6FF;
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
