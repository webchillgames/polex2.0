<template>
  <div class="c-reviews">
    <div
      v-for="item in reviewsStore.reviews"
      :key="item.name"
      class="c-reviews__item"
    >
      <p>{{ item.text }}</p>
      <h3>{{ item.name }}</h3>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useReviewsStore } from "@/stores/reviews";

export default defineComponent({
  name: "CReviews",
  setup() {
    const reviewsStore = useReviewsStore();
    reviewsStore.fetchReviews();

    return {
      reviewsStore,
    };
  },
});
</script>

<style lang="scss" scoped>
.c-reviews {
  width: 20%;
  display: flex;
  flex-wrap: wrap;
  position: relative;

  &::after,
  &::before {
    // content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 15%;
    background: linear-gradient(
      0deg,
      rgba(135, 142, 246, 1) 8%,
      rgba(135, 142, 246, 0.5751488095238095) 49%,
      rgba(135, 142, 246, 0.1577818627450981) 94%
    );
  }

  &::after {
    top: 0;
    transform: rotate(180deg);
  }

  &::before {
    bottom: 0;
  }

  &__item {
    margin: 4px;
    color: rgba(0, 0, 0, 0.5);

    p {
      margin: 0;
      font-size: 18px;
      line-height: 24px;
    }

    h3 {
      text-align: right;
      margin: 0;
      font-size: 12px;
      line-height: 14px;
    }
  }
}
</style>
