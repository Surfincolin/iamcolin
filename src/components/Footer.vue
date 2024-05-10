<script setup>
const { activeLink } = defineProps(['activeLink'])
</script>

<template>
    <hr>
      <div class="footer-container">
        <div class="footer-menu almost-white-fg">
          <div class="fm-column">
            <ul>
              <li><a href="/" :class="{ 'active-link': activeLink === '/'}">About</a></li>
              <li><a href="/Work" :class="{ 'active-link': activeLink === '/Work'}">Work</a></li>
              <li><a href="/Connect" :class="{ 'active-link': activeLink === '/Connect'}">Connect</a></li>
            </ul>
          </div>
          <div class="fm-column">
            <ul>
              <li><a href="https://www.linkedin.com/in/colin-wageman/" target="_blank">Linkedin</a></li>
              <li><a href="mailto:colinwageman@gmail.com?subject=Hey Colin lets connect!" target="_blank">Email</a></li>
            </ul>
          </div>
        </div>
      </div>
</template>