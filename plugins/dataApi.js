export default function ({ $axios }, inject) {
  const headers = {};
  inject("dataApi", {
    get,
    post
  });

  async function get(url) {
    try {
      return await $axios.$get(url);
    } catch ({response}) {
      return  response.data
    }
  }

  async function post(url,data = {}) {
    try {
      return await $axios.post(url,data);
    } catch ({response}) {
      return  response.data
    }
  }
}
