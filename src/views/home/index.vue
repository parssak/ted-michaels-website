<template>
  <Header title="home" />

  <!-- Split -->
  <Split
    title="About Ted"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, nibh nulla vulputate vitae. Augue nulla tristique ac egestas mauris, vel, mattis. Sed tellus nulla at sem dui massa. Accumsan aliquet ultrices rhoncus, tortor. Dolor amet mauris consequat, dictum in non tincidunt ipsum. Sollicitudin elit rhoncus praesent leo vitae."
    :flip="true"
  >
    <template v-slot:extra-content>
      <router-link to="/about" class="btn btn-xl mt-8">Learn More</router-link>
    </template>
  </Split>

  <!-- Container -->
  <Container>
    <h2>In The Community</h2>
  </Container>

  <!-- Container -->
  <Container>
    <h2>Services Offered</h2>
  </Container>

  <!-- Container -->
  <Container>
    <h2>Video Content</h2>
  </Container>

  <!-- SimpleBrandCTA -->
  <SimpleBrandCTA />
</template>

<script>
import Header from "@/components/base/Header";
import Split from "@/components/layouts/Split.vue";
import Container from "@/components/layouts/Container.vue";
import SimpleBrandCTA from "@/components/layouts/cta/SimpleBrandCTA.vue";

export default {
  components: {
    Header,
    Split,
    Container,
    SimpleBrandCTA,
  },
};
</script>
