<template>
  <Header title="contact" />
  <ContactCard />
</template>

<script>
import ContactCard from "../../components/layouts/contact/ContactCard.vue";
import Header from "@/components/base/Header";

export default {
  components: {
    Header,
    ContactCard,
  },
};
</script>
