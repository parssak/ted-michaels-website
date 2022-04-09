<template>
  <Container :class="dark && 'bg-accent-dark'">
    <div class="grid gap-x-12 gap-y-12 lg:grid-cols-2">
      <section :class="flip && `lg:order-1`" class="lg:py-12">
        <h2 :class="dark && 'text-white'" class="mb-0">{{ title }}</h2>
        <div class="w-20 h-1 my-5 bg-accent-light"></div>
        <p :class="dark && 'text-white'"><span v-html="description"></span></p>
        <slot name="extra-content"></slot>
      </section>
      <section>
        <div class="split-img-wrapper w-full h-full rounded-xl overflow-hidden">
          <slot></slot>
        </div>
      </section>
    </div>
  </Container>
</template>

<script>
import Container from "@/components/layouts/Container.vue";

export default {
  components: { Container },
  props: {
    title: {
      type: String,
      default: "Title",
    },
    description: {
      type: String,
      default: "Description",
    },
    flip: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.split-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
