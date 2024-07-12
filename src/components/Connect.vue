<template>
  <div class="connect">
  	<h3>Get in Touch</h3>
  	<div class="connect-container">
  		<div>
		  	<p>Think I can help out on your next project? Great, shoot me an email with the link below. I am currently based out of San Diego but happy to work with remote teams.</p>
		  	<a href="mailto:colinwageman@gmail.com?subject=Looking for help" target="_blank">colinwageman@gmail.com</a>
	  	</div>
	  	<div>
	  		<div id="funCanvas"></div>
	  	</div>
  	</div>
  </div>
</template>

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
}

</style>