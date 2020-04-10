<template>
  <div class="wrap">
    <div class="userBox">
      <el-link type="primary">退出</el-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Top'
}
</script>

<style scoped>
.wrap{
  display: flex;
  justify-content: flex-end;
  flex-basis: 50px;
  border-bottom:1px solid #e6e6e6;
  padding-right:25px;
}
.userBox{
  display: flex;
  height: 50px;
}
</style>
