<template>
<div class="title"><h1>Dashboard</h1></div>
  <el-row class="row-bg" justify="space-around" >
    <el-col :span="6"><div class="grid-content " />
      <div class="web-information">
      <div class="detail">
        <div class="user-icon purple-background"><el-icon><Avatar /></el-icon></div>
        <div class="user-amount">
          <div class="user-num">1000</div>
          <div class="text-gray">User</div>
        </div>
      </div>
      </div>
    </el-col>
    <el-col :span="6"><div class="grid-content " />
      <div class="web-information">
        <div class="detail">
          <div class="user-icon blue-background"><el-icon><Paperclip /></el-icon></div>
          <div class="user-amount">
            <div class="user-num">1000</div>
            <div class="text-gray">Categories</div>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="6"><div class="grid-content " />
      <div class="web-information">
        <div class="detail">
          <div class="user-icon pink-background"><el-icon><DocumentRemove /></el-icon></div>
          <div class="user-amount">
            <div class="user-num">1000</div>
            <div class="text-gray">Comics</div>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
  <div class="user-list">

    <el-row  justify="space-around" class="column">
      <el-col :span="6"><div class="grid-content " />Name</el-col>
      <el-col :span="4"><div class="grid-content " />User Detail</el-col>
      <el-col :span="4"><div class="grid-content " />Status</el-col>
      <el-col :span="4"><div class="grid-content " />Role</el-col>
      <el-col :span="4"><div class="grid-content " />Action</el-col>
    </el-row>
    <el-row  justify="space-around" class="row">
      <el-col :span="6"><div class="grid-content " />
        <div class="name">
          <div class="user-data">
            <el-row >
              <el-col >
                <div >
                  <div>
                    <el-avatar :size="50" :src="imgUrl" />
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="user-info">
            <div>Chu Thanh Lam</div>
            <div>lam.ct198310@sis.hust.edu.vn</div>
          </div>
        </div>
      </el-col>
      <el-col :span="4"><div class="grid-content " />User Detail</el-col>
      <el-col :span="4"><div class="grid-content " />Status</el-col>
      <el-col :span="4"><div class="grid-content " />Role</el-col>
      <el-col :span="4"><div class="grid-content " />Action</el-col>
    </el-row>





  </div>
</template>

<script lang="ts" setup>
const imgUrl = 'https://f5-zpcloud.zdn.vn/7702170006391086294/594ab303a5697c372578.jpg'
const fakeData = [

]

</script>

<style scoped>
.title {
  font-size: 20px;
}
.web-information {
  border: 1px solid white;
  width: 350px;
  height: 100px;
  border-radius: 0.375rem;
  background-color: white;
}
.user-icon {
  font-size: 30px;
  color: white;

  border-radius: 50%;
  display: flex;
  justify-content: center;
  width: 50px;
  height: 50px;

  align-items: center;
  margin-left: 10px;
}
.web-information {
  display: flex;
  align-items: center;
}
.detail {
  display: flex;
  align-items: center;

}
.user-amount {
  margin-left: 25px;
  font-size: 20px;
}
.text-gray {
  color: #6B7280
}
.purple-background {
  background-color: purple;

}
.blue-background {
  background-color: #2563ebbf;

}
.pink-background {
  background-color: #db2777bf;
}
.user-list{
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  border: 1px solid darkgrey;
  border-radius: 10px;
}
.row {
  display: flex;
  border-bottom: 1px solid darkgrey;
  border-radius: 10px;
  background-color: white;
  height: 60px;
  align-items: center;

}
.column {
  display: flex;
  background-color: #CBD5E0;
  border-bottom: 1px solid darkgrey;
  border-radius: 10px;
  height: 40px;
  align-items: center;
}
</style>