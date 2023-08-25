<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- App bar -->
  <j-app-bar color="rgb(0, 189, 126)" title="Application Bar" image="https://picsum.photos/1920/1080?random" shadow>
    <template v-slot:append>
      <i class="icon">{{ `<3` }}</i>
          <i class="icon">{{ `in` }}</i>
    </template>
    <template v-slot:navigation>
      <a href="#">Menu 1</a>
      <a href="#">Menu 2</a>
      <a href="#">Menu 3</a>
      <a href="#">Menu 4</a>
    </template>
  </j-app-bar>
  <!-- App bar END-->

  <j-app class="components" style="color: #222">
    <h1 style="margin: 30px 0">Components</h1>

    <j-accordion radius="10px" :gap="15" :items="[
      { title: 'Title 1', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum' },
      { title: 'Title 2', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum' },
      { title: 'Title 3', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum' },
    ]">
      <template #separator>//</template>
    </j-accordion>

    <!-- autocomplete -->
    <j-autocomplete :width="600" placeholder="Enter keyword" label="Search"
      :items="[{ value: 'tb', text: 'Thái Bình' }, { value: 'hn', text: 'Hà Nội' }, { value: 'sg', text: 'Hồ Chí Minh' }]"
      style="margin-top: 30px; margin-bottom: 25px">
    </j-autocomplete>
    
    <!-- bottom-navigation -->
    <j-bottom-navigation
      :items="[{ link: 'tb', text: 'Thái Bình' }, { link: 'hn', text: 'Hà Nội' }, { link: 'sg', text: 'Hồ Chí Minh' }]"
      style="margin-top: 30px; margin-bottom: 25px">
    </j-bottom-navigation>

    <!-- banner -->
    <j-banner :width="600" stacked avatar="https://picsum.photos/100/100?random" link="home"
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus."
      title="title">
      <template #actions><button>Actions</button></template>
    </j-banner>

    <!-- Badge -->
    <div>
      <j-badge content="90" color="danger" style="margin-right: 50px;">
        <span>Alert</span>
      </j-badge>
      <j-badge content="90" color="success" dot style="margin-right: 50px;">
        <span>Home</span>
      </j-badge>
      <j-badge content="100" inline color="#03fc5e" style="margin-right: 50px;">
        Cart
      </j-badge>
      <j-badge content="1000" floating color="#000" background="#03fc5e" style="margin-right: 50px;">
        Message
      </j-badge>
    </div>

    <!-- Avatar -->
    <j-avatar image="https://picsum.photos/100/100?random" :size="90" shadow>
    </j-avatar>

    <j-avatar image="https://picsum.photos/100/100?random" label="Hello Lia">
    </j-avatar>
    <!-- Alert -->
    <j-alert color="#654892"
      text="Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Suspendisse non nisl sit amet velit hendrerit rutrum. Nullam vel sem. Pellentesque dapibus hendrerit tortor."
      shadow>
    </j-alert>

    <j-alert style="margin-top: 15px" color="success"
      text="Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Suspendisse non nisl sit amet velit hendrerit rutrum. Nullam vel sem. Pellentesque dapibus hendrerit tortor." />

    <j-alert style="margin-top: 15px" color="info"
      text="Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Suspendisse non nisl sit amet velit hendrerit rutrum. Nullam vel sem. Pellentesque dapibus hendrerit tortor." />

    <j-alert style="margin-top: 15px" color="warning"
      text="Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Suspendisse non nisl sit amet velit hendrerit rutrum. Nullam vel sem. Pellentesque dapibus hendrerit tortor." />

    <j-alert style="margin-top: 15px" color="danger" :duration="0"
      text="Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Suspendisse non nisl sit amet velit hendrerit rutrum. Nullam vel sem. Pellentesque dapibus hendrerit tortor.">
    </j-alert>
    <!-- Alert END-->

    <!-- Breadcrumb -->
    <story-block template="
    <j-breadcrumb :items='[
      { link: '/', labl: 'Home', separator: '>>' },
      { link: 'about', label: 'About', separator: '=>', router: true },
      { link: 'components', label: 'Components' }
    ]'/>
    ">
      <j-breadcrumb separator="///" :items="[
        { link: '/', label: 'Home', separator: '>>' },
        { link: 'about', label: 'About', separator: '=>', router: true },
        { link: 'about', label: 'About2' },
        { link: 'components', label: 'Components' }
      ]" />
    </story-block>

    <story-block template="
    <j-breadcrumb :items='[
      { link: '/', label: 'Home' },
      { link: 'about', label: 'About', separator: '=>' },
      { link: 'components', label: 'Components' }
    ]'>
      <template #separator>//</template>
    </j-breadcrumb>
    ">
      <j-breadcrumb :items="[
        { link: '/', label: 'Home' },
        { link: 'about', label: 'About', separator: '=>' },
        { link: 'components', label: 'Components' }
      ]">
        <template #separator>//</template>
      </j-breadcrumb>
    </story-block>

    <story-block template="
    <j-breadcrumb>
      <j-breadcrumb-item>
        <a>Home</a>
      </j-breadcrumb-item>
      <j-breadcrumb-item>
        <a>About</a>
      </j-breadcrumb-item>
      <j-breadcrumb-item isCurrent>
        <span>Components</span>
      </j-breadcrumb-item>
    </j-breadcrumb>
    ">
      <j-breadcrumb>
        <j-breadcrumb-item>
          <a>Home</a>
        </j-breadcrumb-item>
        <j-breadcrumb-item>
          <a>About</a>
        </j-breadcrumb-item>
        <j-breadcrumb-item isCurrent>
          <span>Components</span>
        </j-breadcrumb-item>
      </j-breadcrumb>
    </story-block>

    <story-block template="
    <j-breadcrumb>
      <j-breadcrumb-item>
        <a>Home</a>
        <template #separator>//</template>
      </j-breadcrumb-item>
      <j-breadcrumb-item :item='{ link: 'about', label: 'About', separator: '=>' }' />
      <j-breadcrumb-item isCurrent>
        <span>Components</span>
      </j-breadcrumb-item>
    </j-breadcrumb>
    ">
      <j-breadcrumb>
        <j-breadcrumb-item>
          <a>Home</a>
          <template #separator>//</template>
        </j-breadcrumb-item>
        <j-breadcrumb-item :item="{ link: 'about', label: 'About', separator: '=>' }" />
        <j-breadcrumb-item isCurrent>
          <span>Components</span>
        </j-breadcrumb-item>
      </j-breadcrumb>
    </story-block>

    <story-block template="
    <j-breadcrumb :items='[
      { link: '/', label: 'Home' },
      { link: 'about', label: 'About' },
      { link: 'components', label: 'Components' }
    ]'>
      <template #separator>//</template>
      <template #item='{ item, isCurrent }'>
        <j-breadcrumb-link :item='item' :isCurrent='isCurrent' isRouter />
      </template>
    </j-breadcrumb>
    ">
      <j-breadcrumb :items="[
        { link: '/', label: 'Home' },
        { link: 'about', label: 'About' },
        { link: 'components', label: 'Components' }
      ]">
        <template #separator>//</template>
        <template #item="{ item, isCurrent }">
          <j-breadcrumb-link :item="item" :isCurrent="isCurrent" isRouter />
        </template>
      </j-breadcrumb>
    </story-block>
    <!-- Breadcrumb END-->
  </j-app>
</template>

<script setup lang="ts">
import JApp from '../stories/App'
import JAutocomplete from '../stories/Autocomplete'
import JAccordion from '../stories/Accordion'
import JBanner from '../stories/Banner'
import JBadge from '../stories/Badge'
import JAlert from '../stories/Alert'
import JAvatar from '../stories/Avatar'
import JAppBar from '../stories/AppBar'
import JBottomNavigation from '../stories/BottomNavigation'
import { JBreadcrumb, JBreadcrumbItem, JBreadcrumbLink } from '../stories/Breadcrumb'
import StoryBlock from '../components/StoryBlock/StoryBlock.vue'
</script>