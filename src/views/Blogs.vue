<template>
  <div class="blogs container">
    <blog v-for="(item, index) in blogs" :key="index" :item="item" />
  </div>
</template>

<script setup lang="ts">
import Blog from '../components/pages/blog/Blog.vue'

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
</script>

<style lang="scss">
.blogs {
  padding: 50px 0 20px;

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