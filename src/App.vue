<template>
  <div id="app" class="wgdesign">
    <div class="wgdesign-header">
      <h1>MyUI</h1>
      <ul class="wgdesign-nav">
        <li></li>

      </ul>
    </div>
    <div class="wgdesign-aside">
      <ul class="wgdesign-menu-main">
        <li>
          <a href="#">基础组件</a>
          <ul class="wgdesign-menu-sub">
            <li><router-link to="/button">button-按钮</router-link></li>
            <li>
              <router-link to="/input">input-输入框</router-link>
            </li>
            <li>
              <router-link to="/grid">grid-栅格布局</router-link>
            </li>
            <li>
              <router-link to="/toast">Toast-系统提示</router-link>
            </li>
          </ul>

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
