import Vue from "vue";
import Router from "vue-router";
import Question1 from "./views/Question1.vue";
import Question2 from "./views/Question2.vue";
import Question3 from "./views/Question3.vue";
import Question4 from "./views/Question4.vue";
import Question5 from "./views/Question5.vue";
import Question6 from "./views/Question6.vue";
import Question7 from "./views/Question7.vue";
import Question8 from "./views/Question8.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/question1",
      name: "question1",
      component: Question1
    },
    {
      path: "/question2",
      name: "question2",
      component: Question2
    },
    {
      path: "/question3",
      name: "question3",
      component: Question3
    },
    {
      path: "/question4",
      name: "question4",
      component: Question4
    },
    {
      path: "/question5",
      name: "question5",
      component: Question5
    },
    {
      path: "/question6",
      name: "question6",
      component: Question6
    },
    {
      path: "/question7",
      name: "question7",
      component: Question7
    },
    {
      path: "/question8",
      name: "question8",
      component: Question8
    }
  ]
});
