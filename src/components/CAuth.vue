<template>
  <div>
    <label>
      email
      <input v-model="userData.email" type="text" />
    </label>

    <label>
      password
      <input v-model="userData.password" type="text" />
    </label>

    <button type="button">SignIn</button>
    <button type="button" @click="signUpHandler">SignUp</button>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useAuthStore } from '@/stores/auth'

export default defineComponent({
  name: "CAuth",
  setup() {
    const authStore = useAuthStore();
    const userData = ref({
      email: "",
      password: "",
    });

    function signUpHandler() {
        if (userData.value.email && userData.value.password) {
            authStore.signUpUserByEmail(userData.value.email, userData.value.password)
        }
    }

    return {
      userData,
      signUpHandler
    };
  },
});
</script>
