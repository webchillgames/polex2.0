import { defineStore } from "pinia";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        currentUser: {
            id: '',
            email: '',
            name: ''
        }
    }),
    getters: {},
    actions: {
        signUpUserByEmail(email, password) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    currentUser.email = userCredential.user.email
                    currentUser.id = userCredential.user.uid
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        // signUpUser() { }
    },
  
})
