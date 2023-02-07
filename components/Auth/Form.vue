<template>
  <div>
    <div class="pt-5 space-y-6">
      <UIInput label="Username" placeholder="@username" v-model="data.username"></UIInput>
      <UIInput label="Password" placeholder="*********" type="password" v-model="data.password"></UIInput>
      <div>
        <button @click="handleLogin">Login</button>
      </div>
    </div>
  </div>
</template>

<script setup>

const data = reactive({
  username: '',
  password: '',
  loading: false
})

const handleLogin = async () =>{
  const { login } = useAuth();
  data.loading = true;
  try {
    await login({
      username: data.username,
      password: data.password
    });
  } catch (error) {
    console.log("ERROR:",error);
  } finally {
    data.loading = false;
  }
}

</script>
