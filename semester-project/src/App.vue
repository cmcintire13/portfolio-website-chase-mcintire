<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/Portfolio">Portfolio</router-link>
      
    </nav>
    <router-view />
  </div>
</template>

<style>
nav {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

nav a {
  text-decoration: none;
  color: #42b983;
}

nav a:hover {
  text-decoration: underline;
}
</style>