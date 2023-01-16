<template>
    <div class="flex flex-col">
<!--      Preview Card : What's happening-->
        <SidebarRightPreviewCard title="What's happening?">
          <SidebarRightPreviewCardItem v-for="item in whatsHappening">
              <div>
                <h2 class="font-bold text-gray-800 text-md dark:text-white">{{ item.title }}</h2>
                <p class="text-xs text-gray-400">
                  {{ item.count }}
                </p>
              </div>
          </SidebarRightPreviewCardItem>
        </SidebarRightPreviewCard>

<!--      Preview Card: Who to follow-->
        <SidebarRightPreviewCard title="Who to follow">
          <SidebarRightPreviewCardItem v-for="item in whoToFollow">
            <div class="flex flex-row justify-between p-2 items-center">
              <div class="flex flex-row">
                <img class="w-10 h-10 rounded-full" :src="item.image" :alt="item.name"/>
                <div class="flex flex-col ml-2">
                  <h1 class="text-sm font-bold text-gray-900 dark:text-white">{{ item.name }}</h1>
                  <p class="text-xs text-gray-400">{{ item.handle }}</p>
                </div>
              </div>
              <div class="flex h-full">
                  <button class="px-4 py-2 font-bold text-xs text-white dark:text-black bg-black dark:bg-white rounded-full">
                    Follow
                  </button>
              </div>
            </div>
          </SidebarRightPreviewCardItem>
        </SidebarRightPreviewCard>
    </div>
</template>

<script setup>

const whatsHappening = ref([
  {
    title: "SpaceX",
    count: '1.2M Tweets',
  },
  {
    title: "#CodingIsFun",
    count: '80.8K Tweets',
  },
  {
    title: "#artforall",
    count: '54.5K Tweets',
  }
])

const whoToFollow = ref([
  {
    name: 'John Doe',
    handle: '@johndoe',
    image: 'https://picsum.photos/200/200',
  },
  {
    name: 'John Doe',
    handle: '@johndoe',
    image: 'https://picsum.photos/200/200',
  },
  {
    name: 'John Doe',
    handle: '@johndoe',
    image: 'https://picsum.photos/200/200',
  }
])

</script>
