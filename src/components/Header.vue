<script setup>
import logoWhite from "../assets/cw-logo-white.svg";

const { activeLink } = defineProps(['activeLink'])
</script>

<template>
    <div class="header-container">
        <div class="logo-container">
          <a href="/">
            <img class="logo" :src="logoWhite.src" alt="Colin Wageman" />
          </a>
        </div>
        <div class="menu almost-white-fg">
          <ul>
            <li><a href="/" :class="{ 'active-link': activeLink === '/'}">About</a></li>
            <li><a href="/work" :class="{ 'active-link': activeLink === '/work'}">Work</a></li>
            <li><a href="/connect" :class="{ 'active-link': activeLink === '/connect'}">Connect</a></li>
          </ul>
        </div>
      </div>
      <hr>
</template>