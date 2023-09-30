<template>
  <div>logout</div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("logout").then(() => {
      this.$router.push({
        name: "login",
      });
    });
  },
};
</script>

<style lang="scss" scoped>
</style>