<template>
  <Header title="videos" />
  <Container>
    <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
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
    <nav
      class="py-3 flex items-center justify-between border-t border-accent-darkest mt-6"
      aria-label="Pagination"
    >
      <div class="hidden sm:block">
        <p class="text-sm text-accent-darkest">
          Showing
          {{ " " }}
          <span class="font-medium">1</span>
          {{ " " }}
          to
          {{ " " }}
          <span class="font-medium">10</span>
          {{ " " }}
          of
          {{ " " }}
          <span class="font-medium">20</span>
          {{ " " }}
          results
        </p>
      </div>
      <div class="flex-1 flex justify-between sm:justify-end">
        <button class="btn btn-lg"> Previous </button>
        <button class="ml-3 btn btn-lg"> Next </button>
      </div>
    </nav>
  </Container>

  <SimpleBrandCTA />
</template>

<script>
import Container from "../../components/layouts/Container.vue";
import SimpleBrandCTA from "../../components/layouts/cta/SimpleBrandCTA.vue";
import Header from "@/components/base/Header";

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
  {
    title: "Video 7",
    topic: "Video Topic",
  },
  {
    title: "Video 8",
    topic: "Video Topic",
  },
  {
    title: "Video 9",
    topic: "Video Topic",
  },
];

export default {
  components: {
    Header,
    SimpleBrandCTA,
    Container,
  },
  data() {
    return {
      videos,
    };
  },
};
</script>
