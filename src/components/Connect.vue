<template>
  <div class="connect">
  	<h3>Get in Touch</h3>
  	<div class="connect-container">
  		<div>
		  	<p>Think I can help out on your next project? Great, shoot me an email with the link below. I am currently based out of San Diego but happy to work with remote teams.</p>
		  	<a href="mailto:colinwageman@gmail.com?subject=Hey Colin lets connect!" target="_blank">Email Me Here</a>
	  	</div>
	  	<div>
	  		<div id="funCanvas"></div>
	  	</div>
  	</div>
  </div>
</template>

<script>

export default {
  name: 'connect',
  data () {


    return {

    }
  },
  methods: {
  },
  mounted: function () {

  	/// --------------------------
  	///         p5.js Code
  	/// --------------------------
  	function startSketch() {
  	    var sketch = function(p) {

  	    		var fCParent = document.getElementById("funCanvas");

  	        var wide = fCParent.offsetWidth;
  	        var high = fCParent.offsetHeight - 4; // div border compensation

  	        var buffer = 0.2;
  	        var start = 0.1;
  	        var finish = 0.6;
  	        var speed = 1.5;
  	        var dotWidth = 10;

  	        var createPoint = function() {
  	            return { xPos: Math.random() * (wide-2*dotWidth) + dotWidth, yPos: -high * buffer + Math.random() * -50 };
  	        };

  	        var pointArray = [];

  	        p.setup = function() {
  	            var funCanvas = p.createCanvas(wide, high);
  	            funCanvas.parent(fCParent)

  	            pointArray.push( createPoint() );
  	        };

  	        p.draw = function() {
  	            p.clear();

  	            if (pointArray[0].yPos > high + 150) {
  	                pointArray.shift();
  	            }

  	            if (pointArray[pointArray.length - 1].yPos >= (-high * 0.1)) {
  	                pointArray.push( createPoint() );
  	            }

  	            pointArray.forEach(function(point, index) {

  	            	p.fill(255);
	  	            p.stroke(255);
	  	            p.strokeWeight(2);

	                if ((index + 1) != pointArray.length) {
	                    p.line(point.xPos, point.yPos, pointArray[index + 1].xPos, pointArray[index + 1].yPos);
	                }

	                if (pointArray[index + 2] != undefined) {
	                    // draw second line
	                    var percent = 0;
	                    if (point.yPos >= high * finish) {
	                        percent = 1;
	                    } else if (point.yPos >= high * start) {
	                        var pPos = point.yPos - high * start;
	                        var fPos = high * finish - high * start;
	                        percent = pPos / fPos;
	                    }

	                    var disX = (pointArray[index + 2].xPos - point.xPos) * percent;
	                    var disY = (pointArray[index + 2].yPos - point.yPos) * percent;

	                    p.line(point.xPos, point.yPos, point.xPos + disX, point.yPos + disY);
	                }

	                p.fill(150, 197, 88);
	            		p.stroke(150, 197, 88);
	                p.ellipse(point.xPos, point.yPos, dotWidth, dotWidth);

	                point.yPos += speed;

  	            });

  	        };
  	    };

  	    var myp5 = new p5(sketch);
  	}

  	// Start p5.js Sketch
    startSketch();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.connect-container {
	display: flex;
}

.connect-container div {
	flex: 1 1 50%;
}

#funCanvas {
	width: 250px;
	height: 400px;

	margin: 0 auto;
	border-top: 2px solid white;
  border-bottom: 2px solid white;
}

a {
	/*text-align: center;*/
	margin: 0 auto;
	text-decoration: underline;
}

@media only screen and (max-width: 768px) {
    /* For mobile phones: */

  h3 {
    padding: 1rem;
  }

  .connect-container {
    display: block;
  }

  .connect-container div {
    width: 100%;
  }

  a {
    text-align: center;
    font-size: 1.6rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    margin: 0 auto;
    text-decoration: underline;
    display: block;
  }

 /* #funCanvas {
    width: 25%;
    height: 400px;

    margin: 0 auto;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
  }*/
}

</style>