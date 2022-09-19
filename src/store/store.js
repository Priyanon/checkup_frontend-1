import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    students: []
  },

  mutations: {
    addStudent(state, { payload }) {
      state.students.push(payload);
    },
    deleteStudent(state, { index }){ 
      state.students.splice(index, 1 );
    },
    editStudent(state, { payload }){
      state.students[payload.index] = { 
        studentID: payload.studentID,
        name: payload.name,
        status: payload.status
      }
    }
  },

  actions: {
    addStudent({ commit }, payload) {
     commit("addStudent", { payload })
    },
    deleteStudent( {commit}, index){
     commit("deleteStudent", { index })
    },
    editStudent( {commit}, payload){
     commit("editStudent", { payload })
    },   
  },

  getters: {
    students: state => state.students
  }
});