<template>
  <div class="login_container">
    <div class="login_box">
      <!-- logo -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <!-- 登录表单 -->
      <el-form
        class="login_form"
        :model="loginFrom"
        :rules="loginFromRules"
        ref="loginFromref"
      >
        <el-form-item prop="username">
          <el-input
            prefix-icon="el-icon-user"
            placeholder="请输入账号"
            v-model="loginFrom.username"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            prefix-icon="el-icon-lock"
            placeholder="请输入密码"
            v-model="loginFrom.password"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 登录表单的数据绑定对象
      loginFrom: {
        username: "",
        password: "",
      },
      // 表单的验证规则对象
      loginFromRules: {
        // 用户名是否合法
        username: [
          { required: true, message: "请输入登录名称", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    login() {
      this.$refs.loginFromref.validate(async (value) => {
        if (value) {
          const { data: res } = await this.$http.post("login", this.loginFrom);
          if (res.meta.status != 200)
            return this.$message({
              message: "登录失败",
              type: "error",
            });
          this.$message.success("恭喜你，登录成功");
          // 将登录成功后的token保存在sessionStorage中
          window.sessionStorage.setItem("token", res.data.token);
          // 跳转首页
          this.$router.push("/home");
        } else {
          console.log("报错");
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.loginFromref.resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.login_container {
  background: #2b4b6b;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background: #fff;
  border-radius: 3px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.avatar_box {
  width: 130px;
  height: 130px;
  border: 1px solid #eee;
  padding: 10px;
  border-radius: 50%;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 0;
  right: 0;
  top: -75px;
  background: #fff;
  margin: auto;
  img {
    width: 100%;
    height: 100%;
    background: #eee;
    border-radius: 50%;
  }
}
.btns {
  display: flex;
  justify-content: flex-end;
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
}
</style>