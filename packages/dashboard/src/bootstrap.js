import { createApp } from 'vue';
import Dashboad from './components/Dashboard.vue'

const mount = (el) => {
  const app = createApp(Dashboad);
  app.mount(el);
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_dashboard-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };

