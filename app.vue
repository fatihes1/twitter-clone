<template>
  <div :class="{ 'dark': darkMode }">
    <div class="bg-white dark:bg-dim-900">

      <LoadingPage v-if="isAuthLoading"/>

      <!-- App-->
      <div v-else-if="user" class="min-h-full">
        <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">
          <!-- LEFT SIDEBAR -->
          <!--          add hidden above div later -->
          <div class="hidden md:block xs:col-span-1 xl:col-span-2">
            <div class="sticky top-0">
              <!--            <sidebar-left />-->
              <SidebarLeft/>
            </div>
          </div>

          <!-- MAIN CONTENT -->
          <main class="col-span-12 md:col-span-8 xl:col-span-6">
            <router-view/>
          </main>

          <!-- RIGHT SIDEBAR -->
          <!--          add hidden above div later -->
          <div class="hidden md:block xl:col-span-4 md:col-span-3">
            <div class="sticky top-0">
              <SidebarRight/>
            </div>
          </div>

        </div>

      </div>

      <AuthPage v-else-if="true"/>

    </div>
  </div>
</template>
<script setup>
// import Left from "~/components/Sidebar/Left/index.vue";
// import useAuth from "~/composables/useAuth";

import useAuth from "~/composables/useAuth";

const darkMode = ref(false);
const {useAuthUser, initAuth, useAuthLoading} = useAuth()
const isAuthLoading = useAuthLoading();
const user = useAuthUser()

onBeforeMount(() => {
  initAuth()
})


</script>