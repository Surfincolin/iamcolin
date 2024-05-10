<script setup>
import logoWhite from "../assets/logo-white.svg";

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
            <li><a href="/Work" :class="{ 'active-link': activeLink === '/Work'}">Work</a></li>
            <li><a href="/Connect" :class="{ 'active-link': activeLink === '/Connect'}">Connect</a></li>
          </ul>
        </div>
      </div>
      <hr>
</template>