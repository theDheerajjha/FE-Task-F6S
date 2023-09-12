
import { defineComponent } from 'vue';
import MessageEntry from './message/MessageEntry.vue'; 
import Compose from './Compose/Compose.vue'; 
import { useStore } from 'vuex';

export default defineComponent({
  name: 'ConversationArea',
  components: {
    MessageEntry,
    Compose,
  },
  setup() {
    const store = useStore();

    const conversation = store.getters.conversation;
    const currentUser = store.getters.currentUser;
    let message = '';

    const sendReply = (newMessage) => {
      store.dispatch('sendReply', newMessage);
    };

    return {
      conversation,
      currentUser,
      message,
      sendReply,
    };
  },
});