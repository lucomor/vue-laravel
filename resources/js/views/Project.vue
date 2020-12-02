<template>
  <div>
    <loader v-if="loading"></loader>
    <div v-else class="">
    <h1>{{ project.name }}</h1>
    <div class="content">
            {{ project.description }}
      </div>
    </div>
    <div v-if="not_found">
      404 not found
    </div>
  </div>
</template>

<script>
    import Loader from "../components/Loader";
    import axios from "axios";

    export default {
      component: {
        Loader
      },
      data: () => ({
        loading: true,
        not_found: false,
        project: []
      }),
      mounted() {

        this.loadProject(this.$route.params.id);
      },
      methods: {
        loadProject(id) {
          axios.get('/api/projects/' + id)
            .then(response => {
              this.project = response.data;
              this.loading = false;
            })
            .catch(err => {
              this.not_found = true;
            });
        }
      }
    }
</script>
