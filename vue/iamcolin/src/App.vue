<template>
  <div id="app">
    <div class="master-container almost-white-fg">
      <div class="header-container">
        <div class="logo-container">
          <!-- <img src="./fullname-grey.png" alt="Colin Wageman"> -->
          <router-link :to="{ name: 'Home'}">
            <img class="logo" src="./assets/logo-white.svg" alt="Colin Wageman">
          </router-link>
        </div>
        <div class="menu almost-white-fg">
          <ul>
            <li><router-link :to="{ name: 'Home'}">About</router-link></li>
            <li><router-link :to="{ name: 'Work'}">Work</router-link></li>
            <li><router-link :to="{ name: 'Connect'}">Connect</router-link></li>
          </ul>
        </div>
      </div>
      <hr>
      <div class="content-container">
        <router-view></router-view>
      </div>
      <hr>
      <div class="footer-container">
        <div class="footer-menu almost-white-fg">
          <div class="fm-column">
            <ul>
              <li><router-link :to="{ name: 'About'}">About</router-link></li>
              <li><router-link :to="{ name: 'Work'}">Work</router-link></li>
              <li><router-link :to="{ name: 'Connect'}">Connect</router-link></li>
            </ul>
          </div>
          <div class="fm-column">
            <ul>
              <li><a href="https://www.linkedin.com/in/colin-wageman/" target="_blank">Linkedin</a></li>
              <li><a href="mailto:colinwageman@gmail.com?subject=Hey Colin lets connect!" target="_blank">Email</a></li>
            </ul>
          </div>
        </div>
        <h5 class="footnote">© 2017 Colin Wageman. All rights reserved.</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  created () {
    // console.log('created fired')
    // document.title = 'this is a test'
  }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/


/* RESET */

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
    color: inherit;
    text-decoration: none;
}

/* end RESET */


/* Master Colors */
.deep-grey-fg {
  color: #4A5057
}

.deep-grey-bg {
  background-color: #4A5057
}

.bright-green-fg {
  color: #96C558
}

.bright-green-bg {
  background-color: #96C558
}

.light-brown-fg {
  color: #A99489
}

.light-brown-bg {
  background-color: #A99489
}

.dark-brown-fg {
  color: #291919
}

.dark-brown-bg {
  background-color: #291919
}

.almost-white-fg {
  color: #F3F5F4
}

.almost-white-bg {
  background-color: #F3F5F4
}

.yellow-gold-fg {
  color: #e0a216;
}

.yellow-gold-bg {
  background-color: #e0a216;
}

.router-link-exact-active {
  color: #96C558
  /*color: #e0a216; */
}


/* SITE CSS */

body {
  /*padding: 2rem;*/

    /*font-family: 'Proza Libre', sans-serif;*/
    font-family: 'Source Sans Pro', sans-serif;
    /*background-color: #4A5057;*/
    background-color: #363B40;
}

h1, h2, h3, h4, h5 {
  font-family: 'Cormorant Garamond', serif;
  font-weight: bold;
  text-align: center;
}

h1 { font-size: 2.5rem; padding-bottom: 2rem; }
h2 { font-size: 2.2rem; padding-bottom: 1.5rem; }
h3 { font-size: 1.9rem; padding-bottom: 2rem; }
h4 { font-size: 1.4rem; padding-bottom: 0.5rem; }
h5 { font-size: 1.0rem; padding-bottom: 0.25rem; }

p {
    font-size: 1.1rem;
    line-height: 1.6rem;
    font-weight: lighter;
    padding-bottom: 2rem;
    letter-spacing: 0.4px;
}

.master-container {
  height: 100%;
  /*width: 80%;*/
  max-width: 80rem;
  /*color: black;*/
  margin: 0 auto;
}

.header-container {
  min-height: 6rem;
  /*background: #98FBFF;*/
  /*color: #32CCA6;*/
  display: flex;
  padding: 1rem 4rem 0;
  align-items: center;
  font-family: 'Cormorant Garamond', serif;
}

.logo-container {
  flex: 1 1 0;
}

.logo {
  height: 5rem;
}

.menu {
  flex: 1 1 0;
}

.menu ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
}

.menu li {
  padding: 20px;
  font-size: 1.3rem;
}

hr {
  border-left: none;
  border-right: none;
  /*border-top: 4px double #4A5057;*/
  border-top: 4px double #363B40;
}

.content-container {
  min-height: 30rem;
  /*background: #32CCA6;*/
  /*color: #998F72;*/
  padding: 1rem 4rem;
  /*padding: 2rem 0;*/
}

.footer-container {
  /*min-height: 12rem;*/
  /*background: #998F72;*/
  /*color: #32CCA6;*/
  padding: 1rem 4rem;
}

.video-container {
  padding-bottom: 2rem;
  text-align: center;
}

.footer-menu {
  display: flex;
  align-items: center;
  max-width: 40rem;
  text-align: center;
  margin: 0 auto;
  padding-bottom: 2rem;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.1rem;
}

.fm-column {
  flex: 1 1 auto;
}

.footer-menu li {
  padding: 0.2rem;
}

.footnote {
  font-weight: normal;
  text-align: center;
}

</style>
