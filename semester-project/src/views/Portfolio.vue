<template>
  <div class="portfolio">
    <h1>My GitHub Repositories</h1>
    <div v-if="loading" class="loading">Loading repositories...</div>
    <div v-if="error" class="error">{{ error }}</div>
    <ul v-if="repositories.length" class="repo-list">
      <li v-for="repo in repositories" :key="repo.id" class="repo-item">
        <a :href="repo.html_url" target="_blank" rel="noopener noreferrer">
          <h2>{{ repo.name }}</h2>
        </a>
        <p>{{ repo.description || "No description provided." }}</p>
        <div class="repo-meta">
          <span><strong>Language:</strong> {{ repo.language || "N/A" }}</span>
          <span><strong>Last Updated:</strong> {{ formatDate(repo.updated_at) }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Portfolio-page",
  data() {
    return {
      repositories: [],
      loading: true,
      error: null,
    };
  },
  methods: {
    async fetchRepositories() {
      const apiUrl = `https://api.github.com/users/cmcintire13/repos`;
      try {
        const response = await axios.get(apiUrl);
        this.repositories = response.data;
      } catch (err) {
        this.error = "Failed to load repositories. Please try again later.";
      } finally {
        this.loading = false;
      }
    },
    formatDate(dateString) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
  },
  mounted() {
    this.fetchRepositories();
  },
};
</script>

<style scoped>
.portfolio {
  font-family: Arial, sans-serif;
}

.loading,
.error {
  color: #ff0000;
  font-weight: bold;
}

.repo-list {
  list-style: none;
  padding: 0;
}

.repo-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 16px 0;
  padding: 16px;
  background-color: #f9f9f9;
}

.repo-item a {
  text-decoration: none;
  color: #0073e6;
}

.repo-item a:hover {
  text-decoration: underline;
}

.repo-meta {
  margin-top: 8px;
  font-size: 0.9em;
  color: #555;
}

.repo-meta span {
  display: inline-block;
  margin-right: 16px;
}
</style>