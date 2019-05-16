<template>
  <div id="app" class="wgdesign">
    <div class="wgdesign-aside">
      <ul class="wgdesign-menu-main">
        <li>
           <router-link to="/button">按钮</router-link>
        </li>
        <li>
          <router-link to="/input">input</router-link>
        </li>
      </ul>

    </div>
    <div class="wgdesign-main">
      <div class="wgdesign-component">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
  @import "./assets/css/demoframe.css";

</style>
