import { defineStore } from 'pinia'
import { getDatabase, ref, onValue } from "firebase/database";

export const useReviewsStore = defineStore({
    id: 'counter',
    state: () => ({
        reviews: []
    }),
    // getters: {
    
    // },
    actions: {
        fetchReviews() {
            const db = getDatabase();
            const starCountRef = ref(db, 'reviews/');
            onValue(starCountRef, (snapshot) => {
                const data = snapshot.val();
                this.reviews = [...Object.values(data)]
            });
        }
    }
})

