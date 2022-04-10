<template>
  <Header title="about ted" />

  <!-- Container -->
  <Container>
    <div class="grid gap-10 md:grid-cols-10">
      <div class="md:col-span-5 lg:col-span-6">
        <h2 class="mb-0">Ted’s History</h2>
        <div class="w-20 h-1 my-5 bg-accent-light"></div>
        <p>
          In October 2014, Ted created and hosted a four-week series dealing with mental health
          called #WellnessWednesday which was aired on AM900 CHML. The show included experts
          explaining the various forms of mental health, as well as special guests, who talked about
          what they were diagnosed with, how they were treated, and also offered advice to those who
          may be suffering in silence. The series won a National Champions of Mental Health Award,
          which was presented in Ottawa.
          <br /><br />
          In 2012, Ted also conceived and hosted a charity benefit concert with the legendary band,
          Chicago, at Carmen's in Hamilton which raised over 65-thousand dollars for a local
          charity.
          <br /><br />
          As well as in 2011, Ted initiated the "I'm In, Are You?" marketing campaign for the Around
          the Bay Road Race in support of St. Joseph's Healthcare Foundation. Ted also helped in the
          promotion and awareness of the campaign from the initial news conference, through an
          8-week series, plus a daily blog. The target goal of 200-thousand dollars was surpassed,
          with over 220-thousand dollars in donations and sponsorships obtained.
        </p>
      </div>
      <div class="md:col-span-5 lg:col-span-4">
        <img
          src="@/assets/images/smile.png"
          alt="Ted Michaels giving a presentation"
          class="w-full h-full object-cover rounded-xl lg:max-w-sm"
        />
      </div>
    </div>
    <div class="mt-10 grid gap-10 md:grid-cols-10">
      <div class="md:col-span-5 lg:col-span-6 order-1 md:order-none">
        <img
          src="@/assets/images/torch-2.png"
          alt="Ted Michaels running with olympic torch"
          class="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div class="md:col-span-5 lg:col-span-4">
        <p>Some of Ted’s other notable achievements in his community include:</p>
        <ul class="unstyled mt-2 space-y-4">
          <li v-for="(a, index) in achievements" :key="index" class="flex items-start">
            <ArrowCircleRightIcon class="w-6 h-6 mr-3 text-accent mt-0.5 flex-shrink-0" />
            <div>
              {{ a }}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </Container>

  <!-- SimpleBrandCTA -->
  <SimpleBrandCTA />
</template>

<script>
import Header from "@/components/base/Header";
import Container from "@/components/layouts/Container.vue";
import SimpleBrandCTA from "@/components/layouts/cta/SimpleBrandCTA.vue";
import { ArrowCircleRightIcon } from "@heroicons/vue/outline";

const achievements = [
  "Being selected as a celebrity torch bearer, when the 2015 Pan Am games torch came through Hamilton, on June 22, 2015 ",
  "A seven-year span as captain of Team CHML where the team raised over 77-thousand dollars for St. Joseph's Healthcare Foundation ",
  "Previously teaching a beginners 5K running class, building self-confidence and physical stamina ",
  "Play-by-play voice of the McMaster Marauders football games for 9 years ",
  "Inducted into the 2021 AM900 CHML Hall of Fame",
];

export default {
  components: {
    Header,
    Container,
    SimpleBrandCTA,
    ArrowCircleRightIcon,
  },
  data() {
    return {
      achievements,
    };
  },
};
</script>
