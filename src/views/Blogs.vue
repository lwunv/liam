<template>
  <div class="blogs container">
    <div class="blogs__side slide-left">
      <div class="blogs__side-block blogs__categories">
        <h3>Categories</h3>
        <button class="blogs__category" v-for="(item, index) in categories" :key="index"
          @click="filterByCategory(item.code)">
          {{ item.title }}
        </button>
      </div>
      <div class="blogs__side-block blogs__tags">
        <button class="blogs__tag" v-for="(item, index) in categories" :key="index">
          #{{ item.title }}
        </button>
      </div>
    </div>
    <div class="blogs__main">
      <blog v-for="(item, index) in data" :key="index" :item="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Blog from '../components/pages/blog/Blog.vue'
const categories = [
  {
    title: 'React',
    code: '1'
  },
  {
    title: 'Vue',
    code: '2'
  }
];
const blogs = [
  {
    avatar: "https://picsum.photos/100/100?random",
    image: "https://picsum.photos/600/400?random",
    datetime: "Dec 12, 2023",
    composer: "Liam Nguyen",
    link: "blogs/1",
    comments: 10,
    tags: "#javascript #react #redux",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate",
    title: "Blog lorem ipsum dolor sit amet consectetur"
  },
  {
    avatar: "https://picsum.photos/100/100?random",
    image: "https://picsum.photos/600/400?random",
    datetime: "Dec 12, 2023",
    composer: "Liam Nguyen",
    link: "blogs/1",
    comments: 10,
    tags: "#javascript #react #redux",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate",
    title: "Blog lorem ipsum dolor sit amet consectetur"
  },
  {
    avatar: "https://picsum.photos/100/100?random",
    image: "https://picsum.photos/600/400?random",
    datetime: "Dec 12, 2023",
    composer: "Liam Nguyen",
    link: "blogs/1",
    comments: 10,
    tags: "#javascript #react #redux",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate",
    title: "Blog lorem ipsum dolor sit amet consectetur"
  },
  {
    avatar: "https://picsum.photos/100/100?random",
    image: "https://picsum.photos/600/400?random",
    datetime: "Dec 12, 2023",
    composer: "Liam Nguyen",
    link: "blogs/1",
    comments: 10,
    tags: "#javascript #react #redux",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate",
    title: "Blog lorem ipsum dolor sit amet consectetur"
  },
  {
    avatar: "https://picsum.photos/100/100?random",
    image: "https://picsum.photos/600/400?random",
    datetime: "Dec 12, 2023",
    composer: "Liam Nguyen",
    link: "blogs/1",
    comments: 10,
    tags: "#javascript #react #redux",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate",
    title: "Blog lorem ipsum dolor sit amet consectetur"
  }
]

const data = ref(blogs)

const filterByCategory = (cat: string) => {
  if (cat) {
    data.value = []
    setTimeout(() => {
      data.value = blogs
    }, 500);
  }
}
</script>

<style lang="scss">
@use '../assets/scss/abstracts/_variables.scss';

.blogs {
  padding: 50px 0 20px;
  display: flex;
  flex-wrap: nowrap;
  position: relative;

  &__side {
    width: 320px;
    background: variables.$black;
    margin-right: 15px;
    height: fit-content;
    position: sticky;
    top: 0;
  }

  &__side-block {
    padding: 15px;
  }

  &__tags {
    display: flex;
    gap: 10px;
  }

  &__tag {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: 1px solid variables.$border-color;
    background: variables.$gray-700;
    height: 30px;
    padding: 0 10px;
    font-size: 14px;
  }

  &__category {
    display: flex;
    margin-top: 7px;
    color: #fff;
  }

  &__main {
    flex: 1;
  }

  .blog {
    margin-bottom: 45px;

    &:nth-child(n) {
      animation-delay: calc(100ms * (n - 1));
    }
  }

  $total-children: 10;

  @for $i from 1 through $total-children {
    .blog:nth-child(#{$i}) {
      opacity: 0;
      animation-delay: calc(0.1s * (#{$i} - 1));
    }
  }
}
</style>