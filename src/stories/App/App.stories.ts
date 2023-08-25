import JApp from '.'
import TheWelcome from '../../components/TheWelcome.vue'
import HelloWorld from '../../components/HelloWorld.vue'

export default {
  title: 'Components/App',
  component: JApp,
  tags: ['autodocs'],
};

// Default Story
export const Default = () => ({
  components: { JApp, TheWelcome, HelloWorld },
  template: `
  <j-app fullWidth fullHeight directionRow alignCenter class="home">
    <header>
      <div class="wrapper">
        <HelloWorld msg="You did it!" />

        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/components">Components</RouterLink>
        </nav>
      </div>
    </header>
    <main>
      <TheWelcome />
    </main>
  </j-app>
  `,
});