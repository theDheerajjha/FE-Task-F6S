
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Compose',
  setup(props, { emit }) {
    const message = ref('');

    const handleSubmit = () => {
      if (message.value.trim() === '') return;

      emit('send-message', message.value);

      message.value = '';
    };

    return {
      message,
      handleSubmit,
    };
  },
});
