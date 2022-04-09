<template>
  <Header title="services" />

  <Container>
    <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
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
  </Container>

  <SimpleBrandCTA />
</template>

<script>
import SimpleBrandCTA from "../../components/layouts/cta/SimpleBrandCTA.vue";
import Container from "../../components/layouts/Container.vue";
import Header from "@/components/base/Header";
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
  {
    title: "Service 4",
    description:
      "Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. ",
  },
  {
    title: "Service 5",
    description:
      "Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. ",
  },
  {
    title: "Service 6",
    description:
      "Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. ",
  },
];

export default {
  components: {
    Header,
    Container,
    SimpleBrandCTA,
    SpeakerphoneIcon,
  },
  data() {
    return {
      services,
    };
  },
};
</script>
