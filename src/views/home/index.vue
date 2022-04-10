<template>
  <HeroImageOverlay class="-mt-16 -md:mt-20">
    <div class="p-10 md:p-16 bg-white rounded-lg md:w-max">
      <h1>Ted Michaels</h1>
      <div class="w-24 h-1 mt-10 bg-accent-light"></div>
      <p class="max-w-md mt-6">
        Ted Michaels is a semi-retired broadcaster who is a strong advocate for mental health and
        wellness in his community.
      </p>
      <router-link to="/contact" class="btn btn-xl mt-6">Get In Touch</router-link>
    </div>
  </HeroImageOverlay>

  <!-- About Ted -->
  <Split
    title="About Ted"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, nibh nulla vulputate vitae. Augue nulla tristique ac egestas mauris, vel, mattis. Sed tellus nulla at sem dui massa. Accumsan aliquet ultrices rhoncus, tortor. Dolor amet mauris consequat, dictum in non tincidunt ipsum. Sollicitudin elit rhoncus praesent leo vitae."
    :flip="true"
  >
    <template v-slot:extra-content>
      <router-link to="/about" class="btn btn-xl mt-8">Learn More</router-link>
    </template>
    <img
      src="@/assets/images/sit.png"
      alt="ted michaels sitting in the radio booth"
      class="w-full h-full object-cover"
    />
  </Split>

  <Carousel title="In The Community" class="bg-accent-lightest" />

  <!-- Services Offered -->
  <Container>
    <div class="text-center flex flex-col items-center mb-12">
      <h2 class="mb-0">Services Offered</h2>
      <div class="w-20 h-1 my-5 bg-accent-light"></div>
      <p class="max-w-2xl">
        Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc,
        ullamcorper malesuada. Eleifend condimentum id viverra nulla.
      </p>
    </div>
    <div class="grid gap-10 lg:grid-cols-3">
      <div
        v-for="s in services"
        :key="s.title"
        class="
          bg-accent-lightest
          flex flex-col
          items-center
          text-center
          pt-16
          p-8
          rounded-lg
          relative
        "
      >
        <div
          class="
            w-16
            h-16
            bg-accent-light
            shadow-lg
            grid
            place-items-center
            rounded-lg
            absolute
            -top-8
          "
        >
          <SpeakerphoneIcon class="w-10 h-10" />
        </div>
        <h3 class="">{{ s.title }}</h3>
        <p>{{ s.description }}</p>
      </div>
    </div>
    <div class="grid place-items-center mt-12">
      <router-link to="/services" class="btn btn-xl">View all services</router-link>
    </div>
  </Container>

  <!-- Container -->
  <Container class="bg-accent-lightest">
    <div class="flex justify-between items-center">
      <h2>Video Content</h2>
      <div class="hidden md:block">
        <router-link to="/videos" class="btn btn-xl">All Videos</router-link>
      </div>
    </div>
    <div class="w-24 h-1 bg-accent-light"></div>
    <p class="mt-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare scelerisque eleifend
      faucibus lacus pharetra, arcu libero.
    </p>
    <div class="mt-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      <div v-for="v in videos" :key="v.title" class="">
        <div class="rounded-lg object-cover relative overflow-hidden aspect-w-3 aspect-h-2">
          <img src="@/assets/images/torch.png" alt="holding a torch" />
          <div class="absolute inset-0 bg-black bg-opacity-50 grid place-items-center">
            <button>
              <img src="@/assets/play.svg" alt="play button" class="w-20 h-20" />
            </button>
          </div>
        </div>
        <h3 class="text-2xl mt-4">{{ v.title }} | {{ v.topic }}</h3>
      </div>
    </div>
  </Container>

  <!-- SimpleBrandCTA -->
  <SimpleBrandCTA />
</template>

<script>
import Carousel from "../../components/layouts/features/Carousel.vue";
import HeroImageOverlay from "../../components/layouts/hero/HeroImageOverlay.vue";
import Header from "@/components/base/Header";
import Split from "@/components/layouts/Split.vue";
import Container from "@/components/layouts/Container.vue";
import SimpleBrandCTA from "@/components/layouts/cta/SimpleBrandCTA.vue";
import { SpeakerphoneIcon } from "@heroicons/vue/outline";

const services = [
  {
    title: "Service 1",
    description:
      "Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. ",
  },
  {
    title: "Service 2",
    description:
      "Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. ",
  },
  {
    title: "Service 3",
    description:
      "Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. ",
  },
];

const videos = [
  {
    title: "Video 1",
    topic: "Video Topic",
  },
  {
    title: "Video 2",
    topic: "Video Topic",
  },
  {
    title: "Video 3",
    topic: "Video Topic",
  },
  {
    title: "Video 4",
    topic: "Video Topic",
  },
  {
    title: "Video 5",
    topic: "Video Topic",
  },
  {
    title: "Video 6",
    topic: "Video Topic",
  },
];

export default {
  components: {
    Header,
    Split,
    Container,
    SimpleBrandCTA,
    HeroImageOverlay,
    SpeakerphoneIcon,
    Carousel,
  },
  data() {
    return {
      services,
      videos,
    };
  },
};
</script>
