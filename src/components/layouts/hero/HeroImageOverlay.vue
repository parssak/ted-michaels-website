<template>
  <main class="relative min-h-screen">
    <div class="absolute inset-0 w-full h-full">
      <img src="@/assets/images/mac.png" alt="" class="w-full h-full object-cover" />
    </div>
    <div class="absolute inset-0 grid items-center pb-12">
      <Container>
        <slot></slot>
      </Container>
    </div>
  </main>
</template>

<script>
import Container from "@/components/layouts/Container";

export default {
  components: {
    Container,
  },
};
</script>
