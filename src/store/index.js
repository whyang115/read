import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

import bookList from "../data/index.js";

Vue.use(Vuex);

const localStorage = window.localStorage;
const store = new Vuex.Store({
  state: {
    bookList: bookList,
    follow: false,
    searchKeyword: "",
    book: [],
    searchResult: { list: [] },
    history: JSON.parse(localStorage.getItem("history")) || { historyList: [] },
    cate: ""
  },
  mutations: {
    addHistory(state, payload) {
      if (state.history.historyList.indexOf(payload.item) === -1) {
        state.history.historyList.push(payload.item);
        localStorage.setItem("history", JSON.stringify(state.history));
      }
    },
    clearHistory(state) {
      state.history.historyList = [];
      localStorage.removeItem("history");
    },
    showResult(state, payload) {
      state.searchResult.list = payload.resBody;
    },
    readBook(state, payload) {
      state.follow = payload.follow || false;
      axios
        .get(
          `https://bird.ioliu.cn/v1/?url=http://novel.juhe.im/book-info/${
            payload.content._id
          }`
        )
        .then(res => {
          state.book = res.data.data;
        })
        .catch(err => console.error(err));
    },
    addBook(state, payload) {
      axios
        .get(
          `https://bird.ioliu.cn/v1/?url=http://novel.juhe.im/book-info/${
            payload.id
          }`
        )
        .then(res => {
          if (state.bookList.indexOf(res.data.data) === -1) {
            state.bookList.push(res.data.data);
          }
        })
        .catch(err => console.error(err));
    },
    searchResouce(state, payload) {
      state.searchKeyword = payload.content;
    },
    removeBook(state, payload) {
      let index = state.bookList.indexOf(payload.book);
      state.bookList.splice(index, 1);
    },
    toSubCategories(state, payload) {
      state.cate = payload.cate;
    }
  },
  getters: {
    getHistory: state => state.history.historyList,
    getSearchResult: state => state.searchResult.list
  }
});

export { store };
