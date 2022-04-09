<template>
  <section :class="additionalClasses" class="py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-full lg:max-w-7xl lg:mx-auto">
      <div class="md:p-6 w-full h-full relative">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Container",
  data() {
    return {
      additionalClasses: this.full && "min-h-screen",
    };
  },
  props: {
    full: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
