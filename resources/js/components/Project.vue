<template>
  <div>
    {{ name }}<br>
    {{ description }}<hr>
  </div>
</template>

<script>
    export default {
      props: {
        name: {
          type: String,
          default: "NULL"
        },
        description: {
          type: String,
          default: "NULL"
        }
      }
    }
</script>
