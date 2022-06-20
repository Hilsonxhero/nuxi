<template>
  <div>
    <div
      class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div class="max-w-md w-full z-30">
        <div
          class="rounded bg-white max-w-md overflow-hidden shadow-xl py-5 px-10"
        >
          <div class="flex items-center justify-between mb-5">
            <h4 class="font-bold text-2xl">oddo</h4>
            <div class="flex items-center space-x-2">
              <nuxt-link
                :to="{ name: 'auth-login' }"
                class="px-6 py-2 bg-white shadow-md font-semibold rounded text-center text-sm"
                >Login</nuxt-link
              >
              <nuxt-link
                :to="{ name: 'auth-register' }"
                class="px-6 py-2 0 bg-white shadow-md font-semibold rounded text-center text-sm"
                >Register</nuxt-link
              >
            </div>
          </div>
          <div class="mb-1 text-green-400 font-bold text-xl">Welcome!</div>
          <h4 class="font-semibold text-gray-600">Recover Your Password</h4>

          <div class="rounded-md shadow-sm -space-y-px mt-7">
            <div class="grid gap-6">
              <div class="col-span-12">
                <label
                  for="email_address"
                  class="block text-sm font-medium text-gray-600"
                  >Email address</label
                >
                <input
                  type="text"
                  id="email_address"
                  placeholder="Email address"
                  autocomplete="email"
                  class="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>

          <div class="mt-6">
            <base-button class="bg-teal-500 text-white block w-full" size="md">
              Send Email
            </base-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "auth",
};
</script>

