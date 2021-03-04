const bbs = {
    path: "/",
    name: "Index",
    component: () =>
      import(/* webpackChunkName: "bbs" */ "@/views/PageNotFound.vue"),
    redirect: "/view",
    children: [
      {
        path: "/view",
        name: "View",
        component: () =>
          import(/* webpackChunkName: "bbs" */ "@/views/PageNotFound.vue")
      }
    ]
  };
  
  export default home;
  