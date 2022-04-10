<template>
  <Container class="overflow-hidden">
    <div class="text-center flex flex-col items-center">
      <h2 class="mb-0">{{ title }}</h2>
      <div class="w-20 h-1 my-5 bg-accent-light"></div>
      <p class="max-w-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare scelerisque eleifend
        faucibus lacus pharetra, arcu libero.
      </p>
    </div>

    <div class="mt-12 relative">
      <button
        class="
          w-12
          h-12
          bg-accent
          absolute
          left-4
          md:-left-6
          top-1/2
          transform
          -translate-y-1/2
          grid
          place-items-center
          rounded-lg
        "
        @click="onPrev"
      >
        <ChevronLeftIcon class="w-8 h-8 text-white" />
      </button>
      <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div
          v-for="(v, index) in visible"
          :key="v"
          class="h-80"
          :class="`
            ${(index === 1 || index === 2) && 'hidden md:block'}
            ${index === 3 && 'hidden lg:block'}
              `"
        >
          <img :src="images[v]" alt="" class="w-full h-full object-cover" />
        </div>
      </div>
      <button
        class="
          w-12
          h-12
          bg-accent
          absolute
          right-4
          md:-right-6
          top-1/2
          transform
          -translate-y-1/2
          grid
          place-items-center
          rounded-lg
        "
        @click="onNext"
      >
        <ChevronRightIcon class="w-8 h-8 text-white" />
      </button>
    </div>

    <div class="grid place-items-center mt-8">
      <div class="flex space-x-2 items-center">
        <button
          v-for="(img, idx) in images"
          :key="img"
          :class="`w-3 h-3 rounded-full transition-all ${
            idx === visible[0] ? 'bg-accent' : 'bg-gray-500'
          }`"
          @click="jumpTo(idx)"
        />
      </div>
    </div>
  </Container>
</template>

<script>
import Container from "../Container.vue";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/outline";
export default {
  components: { Container, ChevronLeftIcon, ChevronRightIcon },
  data() {
    return {
      images: [
        "/ted-michaels-website/carousel/carousel-1.png",
        "/ted-michaels-website/carousel/carousel-2.png",
        "/ted-michaels-website/carousel/carousel-3.png",
        "/ted-michaels-website/carousel/carousel-4.png",
        "/ted-michaels-website/carousel/carousel-1.png",
        "/ted-michaels-website/carousel/carousel-2.png",
        "/ted-michaels-website/carousel/carousel-3.png",
        "/ted-michaels-website/carousel/carousel-4.png",
      ],

      visible: [0, 1, 2, 3],
    };
  },
  props: {
    title: {
      type: String,
      default: "View our work",
    },
    description: {
      type: String,
      default: "",
    },
  },
  methods: {
    onNext() {
      const newVisible = [];
      for (let i = 0; i < this.visible.length; i++) {
        const idx = this.visible[i];
        newVisible.push((idx + 1) % this.images.length);
      }
      this.visible = newVisible;
    },
    onPrev() {
      const newVisible = [];
      for (let i = 0; i < this.visible.length; i++) {
        const idx = this.visible[i];
        const prev = idx - 1;
        if (prev < 0) {
          newVisible.push(this.images.length - 1);
        } else {
          newVisible.push(prev);
        }
      }
      this.visible = newVisible;
    },
    jumpTo(idx) {
      this.visible = [
        idx % this.images.length,
        (idx + 1) % this.images.length,
        (idx + 2) % this.images.length,
        (idx + 3) % this.images.length,
      ];
    },
  },
};
</script>
