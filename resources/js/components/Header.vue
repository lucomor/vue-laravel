<template>
    <div class="header">
      <div class="logo">portfolio</div>
      <ul>
        <li v-for="link in links">
          <router-link :to="link.href">{{ link.title }}</router-link>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          links: [
            {
              title: 'Главная',
              href: '/'
            },
            {
              title: 'Проекты',
              href: '/projects'
            }
          ]
        }
      }
    }
</script>
