<template>
  <div :class="['message', isSentByCurrentUser ? 'sent' : 'received']">
    <div class="thumbnail">
      <img :src="message.from.thumbnail" alt="User Thumbnail" />
    </div>
    <div class="message-bubble">
      {{ message.message }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "MessageEntry",
  props: {
    message: {
      type: Object as PropType<any>,
      required: true,
    },
    isSentByCurrentUser: {
      type: Boolean,
      required: true,
    },
  },
});
</script>

<style scoped>
.message {
  display: flex;
  margin-bottom: 12px;
}

.thumbnail {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 12px;
  align-self: flex-end;
}

.message-bubble {
  background-color: #f0f0f0;
  padding: 8px;
  border-radius: 8px;
  max-width: 60%;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.sent .message-bubble {
  background-color: #007bff;
  align-self: flex-end;
}
</style>
