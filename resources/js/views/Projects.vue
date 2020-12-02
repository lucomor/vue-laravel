<template>
  <div>
    <h1>проекты</h1>
    <div class="content">
      <loader v-if="loading"></loader>
      <div v-else class="">
            <project
              v-for="project in projects"
              :name="project.name"
              :description="project.description"
            />
      </div>
    </div>
  </div>
</template>

<script>
    import Loader from "../components/Loader";
    import Project from "../components/Project";
    import axios from 'axios';

    export default {
      components: {
        Loader,
        Project
      },
      data: () => ({
        loading: true,
        projects: []
      }),
      mounted() {
        this.loadProjects();
      },
      methods: {
        loadProjects() {
          axios.get('/api/projects')
          .then(response => {
          this.projects = response.data;
          this.loading = false;
          })
        }
      }
    }
</script>
