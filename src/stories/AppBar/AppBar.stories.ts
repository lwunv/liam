import JAppBar from '.'
import StoryBlock from '../../components/StoryBlock/StoryBlock.vue'

export default {
  title: 'Components/AppBar',
  component: JAppBar,
  tags: ['autodocs'],
};

// Default Story
export const Default = () => ({
  components: { JAppBar, StoryBlock },
  template: `
  <story-block template="
    <j-app-bar
      color='rgb(0, 189, 126)'
      title='Application Bar'
      image='https://picsum.photos/1920/1080?random'
      boxShadow
    >
      <template v-slot:append>
        <i class='icon'><3</i>
        <i class='icon'>icon</i>
      </template>
      <template v-slot:navigation>
        <a href='#'>Menu 1</a>
        <a href='#'>Menu 2</a>
        <a href='#'>Menu 3</a>
        <a href='#'>Menu 4</a>
      </template>
    </j-app-bar>
  ">
    <j-app-bar
      color="rgb(0, 189, 126)"
      title="Application Bar"
      image="https://picsum.photos/1920/1080?random"
      boxShadow
    >
      <template v-slot:append>
        <i class="icon"><3</i>
        <i class="icon">icon</i>
      </template>
      <template v-slot:navigation>
        <a href="#">Menu 1</a>
        <a href="#">Menu 2</a>
        <a href="#">Menu 3</a>
        <a href="#">Menu 4</a>
      </template>
    </j-app-bar>
  </story-block>
  `,
});