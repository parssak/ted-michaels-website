<template>
  <Container>
    <div
      class="
        max-w-7xl
        mx-auto
        py-12
        px-4
        sm:px-8
        lg:py-20
        bg-accent-light
        rounded-xl
        flex flex-col
        items-center
        text-center
      "
    >
      <h2 class="mb-0">Connect with Ted</h2>
      <div class="w-24 h-1 my-4 bg-accent"></div>
      <p class="max-w-2xl text-lg text-accent-darkest">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales ac et, non cursus
        arcu. Dui euismod habitant ac at ut donec.
      </p>
      <div class="mt-3 flex space-x-3 items-center">
        <a href="#">
          <img src="@/assets/twitter.svg" alt="" />
        </a>
        <a href="#">
          <img src="@/assets/facebook.svg" alt="" />
        </a>
        <a href="#">
          <img src="@/assets/linkedin.svg" alt="" />
        </a>
        <a href="#">
          <img src="@/assets/instagram.svg" alt="" />
        </a>
      </div>
      <button class="btn btn-xl mt-12" path="/contact">Send an email</button>
    </div>
  </Container>
</template>

<script>
import Container from "../Container.vue";
import Button from "@/components/base/Button.vue";
export default {
  components: { Button, Container },
};
</script>
