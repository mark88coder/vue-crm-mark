<template>
  <ul class="sidenav app-sidenav" :class="{ open: value }">
    <!-- Динамическая генерация ссылок (перход при клике) при помощи компонента router-link + Подсвечивание активных ссылок -->
    <router-link v-for="link in links" :key="link.url" tag="li" active-class="active" :to="link.url" :exact="link.exact">
      <a href="#" class="waves-effect waves-orange pointer">{{ link.title }}</a>
    </router-link>
  </ul>
</template>

<script>
export default {
  props: ['value'],
  data: () => ({
    links: [
      { title: 'Счет', url: '/', exact: true },
      { title: 'История', url: '/history' },
      { title: 'Планирование', url: '/planning' },
      { title: 'Новая запись', url: '/record' },
      { title: 'Категории', url: '/categories' }
    ]
  })
}
</script>
