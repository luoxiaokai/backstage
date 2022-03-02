<template>
    <el-container style="height:100%">
      <el-aside width="auto">
        <CommonAside></CommonAside>
      </el-aside>
      <el-container>
        <el-header>
          <CommonHeader></CommonHeader>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
import CommonAside from "../components/CommonAside.vue";
import CommonHeader from "../components/CommonHeader.vue"
export default {
  name:'Main',
  data () {
    return {
    };
  },

  components: {
    CommonAside,
    CommonHeader
  },

  created() {},

  methods: {}
}

</script>
<style lang='less' scoped>
.el-header{
  background-color: #333;
}
.el-main{
  padding: 0;
}
</style>