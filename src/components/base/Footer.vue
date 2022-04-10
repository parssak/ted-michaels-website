<template>
  <footer class="bg-accent" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="max-w-7xl mx-auto py-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center justify-between pb-4">
        <div class="flex items-center space-x-4">
          <router-link
            v-for="route in navigation"
            :key="route.label"
            class="block w-max transition hover:underline text-white hover:text-white capitalize"
            :to="route.path"
            >{{ route.label }}</router-link
          >
        </div>
        <div class="flex space-x-4 items-center mt-4 md:mt-0">
          <a href="#">
            <img src="@/assets/twitter-white.svg" alt="" />
          </a>
          <a href="#">
            <img src="@/assets/facebook-white.svg" alt="" />
          </a>
          <a href="#">
            <img src="@/assets/linkedin-white.svg" alt="" />
          </a>
          <a href="#">
            <img src="@/assets/instagram-white.svg" alt="" />
          </a>
        </div>
      </div>

      <div class="mt-8 pt-8 border-t border-gray-200">
        <div class="flex md:items-center flex-col md:justify-between md:flex-row">
          <div>
            <h3 class="text-white mb-2 text-2xl">Sign up for Ted’s Newsletter</h3>
            <p class="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ultrices cras velit.
            </p>
          </div>
          <div class="md:ml-4 md:w-1/3 md:min-w-max mt-4 md:mt-0 flex">
            <input type="email" name="" id="" placeholder="Enter your email" />
            <button class="btn btn-xl btn-light flex-shrink-0 ml-4">sign up</button>
          </div>
        </div>
      </div>

      <div class="flex flex-col md:flex-row items-center justify-between mt-8">
        <div class="text-white">Ted Michaels &copy; 2022 | All rights reserved.</div>
        <div class="flex items-center mt-4 md:mt-0 text-white">
          <a class="cursor-pointer underline" href="#"> Privacy Policy </a>
          <div class="mx-2">|</div>
          <a class="cursor-pointer underline" href="#"> Terms & Conditions </a>
          <a href="https://airwhistle.com/" target="_blank" class="ml-2">
            <img src="@/assets/awm.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { navigation } from "@/data";

export default {
  setup() {
    return { navigation };
  },
};
</script>
