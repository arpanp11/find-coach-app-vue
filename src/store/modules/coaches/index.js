import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: 'c1',
          firstName: 'Dizy',
          lastName: 'Patel',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Dizy and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30
        },
        {
          id: 'c2',
          firstName: 'Abhi',
          lastName: 'Bhagat',
          areas: ['frontend', 'career'],
          description:
            'I am Abhi and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 30
        }
      ]
    };
  },
  mutations,
  actions,
  getters
};
