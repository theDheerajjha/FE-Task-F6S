import { createStore } from 'vuex';

import { currentUser, conversation } from './data/mockApiData';

const state = {
  currentUser: JSON.parse(currentUser),
  conversation: JSON.parse(conversation),
};

const actions = {
  async fetchCurrentUser({ commit }) {
    try {
      const user = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(JSON.parse(currentUser));
        }, 1000); 
      });
      commit('SET_CURRENT_USER', user);
    } catch (error) {
      console.error('Error fetching current user:', error);
    }
  },

  async fetchConversation({ commit }) {
    try {
      const messages = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(JSON.parse(conversation));
        }, 1000); 
      });
      commit('SET_CONVERSATION', messages);
    } catch (error) {
      console.error('Error fetching conversation:', error);
    }
  },

  async sendReply({ commit }, newMessage) {
    try {
      const reply = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            id: state.conversation.length + 1,
            from: state.currentUser,
            message: newMessage,
            date: new Date().toISOString(),
          });
        }, 500); 
      });

      commit('ADD_REPLY', reply);
    } catch (error) {
      console.error('Error sending reply:', error);
    }
  },
};

const mutations = {
  SET_CURRENT_USER(state, user) {
    state.currentUser = user;
  },
  SET_CONVERSATION(state, conversation) {
    state.conversation = conversation;
  },
  ADD_REPLY(state, reply) {
    state.conversation.push(reply);
  },
};

const getters = {
  currentUser: (state) => state.currentUser,
  conversation: (state) => state.conversation,
};

const store = createStore({
  state,
  actions,
  mutations,
  getters,
});

export default store;
