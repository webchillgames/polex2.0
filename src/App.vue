<template>
  <header>
    <h1>Polex</h1>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    </div>
  </header>
  <CAuth />

  <CReviews />

  <!-- <RouterView /> -->
</template>

<script>
import { defineComponent } from 'vue'
// import { RouterLink, RouterView } from 'vue-router'
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
import CReviews from '@/components/CReviews.vue'
import CAuth from '@/components/CAuth.vue'
import '@/styles/styles.scss'

// HIDE API KEY LATER
const firebaseConfig = {
  apiKey: "AIzaSyAVZjOX6LbhIqNLVIsHOmvejFp3ERPBpog",
  authDomain: "polex-2-0.firebaseapp.com",
  databaseURL: "https://polex-2-0-default-rtdb.firebaseio.com",
  projectId: "polex-2-0",
  storageBucket: "polex-2-0.appspot.com",
  messagingSenderId: "517246412973",
  appId: "1:517246412973:web:afea80870f44aaa463be24"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default defineComponent({
  components: { CReviews, CAuth},

  setup() {
    return {
      CReviews,
      CAuth
    }
    
  },
})
</script>
