<template>
  <div>
    <transition name="scroll-x-transition" mode="out-in">
      <img
        class="image-mask"
        :class="darkMode ? 'image-mask-dark' : ''"
        src="https://bing.ioliu.cn/v1"
        v-show="isRootPath"
      />
    </transition>
    <v-app :dark="darkMode" style="background-color: black">
      <v-dialog :dark="darkMode" v-model="bookMark" width="400">
        <v-card :dark="darkMode">
          <v-card-title>
            添加本页到浏览器书签
          </v-card-title>
          <v-card-subtitle>
            请按键盘上的 Ctrl+D 添加
          </v-card-subtitle>
        </v-card>
      </v-dialog>
      <v-dialog :dark="darkMode" v-model="setNameDialog" width="400">
        <v-card :dark="darkMode">
          <v-card-title>
            设置用户名
          </v-card-title>
          <v-text-field filled v-model="username"></v-text-field>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="saveUserName">保存</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-speed-dial v-model="fabOpen" bottom right fixed open-on-hover>
        <template #activator>
          <v-btn v-model="fabOpen" fab :dark="darkMode">
            <v-icon v-if="fabOpen">
              mdi-close
            </v-icon>
            <v-icon v-else>
              mdi-plus
            </v-icon>
          </v-btn>
        </template>
        <v-btn fab @click="addBookMark" :dark="darkMode">
          <v-icon>
            mdi-bookmark-multiple-outline
          </v-icon>
        </v-btn>
        <v-btn fab @click="drawer = true" :dark="darkMode">
          <v-icon>
            mdi-cog-outline
          </v-icon>
        </v-btn>
      </v-speed-dial>
      <v-navigation-drawer
        v-model="drawer"
        temporary
        absolute
        right
        :dark="darkMode"
      >
        <template #append>
          <v-divider :dark="darkMode"></v-divider>
          <v-list-item :dark="darkMode">
            <v-list-item-content>
              <v-list-item-title>黑色模式</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-switch v-model="darkMode" :dark="darkMode"></v-switch>
            </v-list-item-action>
          </v-list-item>
        </template>
        <v-list-item :dark="darkMode">
          <v-list-item-avatar color="black"> </v-list-item-avatar>
          <v-list-item-content class="username-style">
            <v-list-item-title @click="setUserName">
              {{ username }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider :dark="darkMode"></v-divider>
        <v-list shaped>
          <v-list-item>
            <v-list-item-title>搜索引擎</v-list-item-title>
            <v-list-item-action>
              <v-select
                filled
                :items="engines"
                item-text="name"
                v-model="nowEngine"
                dense
              ></v-select>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-snackbar v-model="updateSuccess" bottom left color="success"
        >修改成功</v-snackbar
      >
      <v-app-bar
        app
        :color="isRootPath ? 'rgba(0,0,0,0.4)' : 'primary'"
        :shrink-on-scroll="!isRootPath"
        :prominent="!isRootPath"
        class="app-bar-blur"
        dark
      >
        <v-spacer></v-spacer>
        <v-btn
          href="https://github.com/laiiihz"
          target="_blank"
          text
          :dark="darkMode"
        >
          <span class="mr-2">Github</span>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
        <template v-slot:extension>
          <v-tabs align-with-title :dark="darkMode">
            <v-tab to="/">搜索</v-tab>
            <v-tab to="/navigation">导航</v-tab>
            <v-tab to="/about">关于</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>

      <v-content>
        <transition name="scroll-x-transition" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import engines from "./static/Engines";
export default {
  name: "App",
  mounted() {
    this.engines = engines;
    this.darkMode = window.localStorage.getItem("darkMode") === "true";
    let engine = window.localStorage.getItem("engine");
    if (engine == null) this.nowEngine = "baidu";
    else this.nowEngine = engine;
  },
  data: () => ({
    fabOpen: false,
    bookMark: false,
    drawer: true,
    setNameDialog: false,
    username: "Chrome",
    darkMode: false,
    nowEngine: "",
    nowPrefix: "",
    engines: [],
    updateSuccess: false
  }),
  computed: {
    isRootPath: function() {
      return this.$route.path === "/";
    }
  },
  watch: {
    darkMode: function(newValue) {
      this.commitToStore(newValue);
      window.localStorage.setItem("darkMode", newValue);
      this.updateSuccessFunction();
    },
    nowEngine: function(newValue) {
      window.localStorage.setItem("engine", newValue);
      this.$store.commit("changeEngine", newValue);
      this.updateSuccessFunction();
    }
  },
  methods: {
    addBookMark() {
      this.bookMark = true;
    },
    setUserName() {
      this.drawer = false;
      this.setNameDialog = true;
    },
    saveUserName() {
      window.localStorage.setItem("name", this.username);
      this.setNameDialog = false;
    },
    commitToStore(value) {
      this.$store.commit("changeDarkMode", value);
    },
    updateSuccessFunction() {
      this.updateSuccess = false;
      setTimeout(() => {
        this.updateSuccess = true;
      }, 500);
    }
  }
};
</script>

<style lang="scss">
.image-mask {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 0;
  object-fit: cover;
  transition: all 0.3s;
}
.image-mask-dark {
  opacity: 0.5;
}

.app-bar-blur {
  backdrop-filter: blur(5px);
}

.username-style {
  cursor: pointer;
}
</style>
