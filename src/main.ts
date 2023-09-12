// main.ts
import { createApp } from 'vue';
import App from './components/ConversationArea/ConversationArea.vue';
import store from './store'; // Import your store

// Dispatch fetch actions when the app is instantiated
store.dispatch('fetchCurrentUser');
store.dispatch('fetchConversation');

createApp(App)
  .use(store) // Use the Vuex store
  .mount('#app');
