<template>
    <div class='nav-core' :style="{backgroundColor: navBarBackGroundColor}">
       <v-layout class='nav-layout hidden-sm-and-down'>
            <v-flex xs12 sm12 md2 lg2 xl2 class='logo-flex'>
                <div class='logo'><h1 style='color:#eca715'>!Tech</h1></div>
            </v-flex>

            <v-flex xs12 sm12 md8 lg8 xl8 class='menu-items-container'>
                <router-link to="/about" style="text-decoration: none;">
                    <div class="menu-item">
                        <span>About</span>
                        <!-- <v-icon style="font-size: 18px;" class>fas fa-cogs</v-icon> -->
                    </div>
                </router-link>
                <router-link to="/services" style="text-decoration: none;">
                    <div class="menu-item">
                        <span>Services</span>
                        <!-- <v-icon style="font-size: 18px;" class>fas fa-cogs</v-icon> -->
                    </div>
                </router-link>
                <router-link to="/career" style="text-decoration: none;">
                    <div class="menu-item">
                        <span>Career</span>
                        <!-- <v-icon style="font-size: 18px;" class>fas fa-cogs</v-icon> -->
                    </div>
                </router-link>
                <router-link to="/testimonials" style="text-decoration: none;">
                    <div class="menu-item">
                        <span>Testimonials</span>
                        <!-- <v-icon style="font-size: 18px;" class>fas fa-cogs</v-icon> -->
                    </div>
                </router-link>
                <router-link to="/partners" style="text-decoration: none;">
                    <div class="menu-item">
                        <span>Partners</span>
                        <!-- <v-icon style="font-size: 18px;" class>fas fa-cogs</v-icon> -->
                    </div>
                </router-link>
                <router-link to="/contact" style="text-decoration: none;">
                    <div class="menu-item">
                        <span>Contact</span>
                        <!-- <v-icon style="font-size: 18px;" class>fas fa-cogs</v-icon> -->
                    </div>
                </router-link>
            </v-flex>

            <v-flex xs12 sm12 md2 lg2 xl2 class='actions-item'>
                <v-btn medium rounded color='#eca715' class='pt-3 pb-3'>Request project</v-btn>
            </v-flex>
       </v-layout>
    </div>
</template>

<script>
export default {
    name: 'NavBar',

    data(){
        return{
            navBarBackGroundColor: '#2d2d41',
            scrollColor: '#ffffff'
        }
    },

    created(){},

    methods: {
        menuScrollAnimation() {
            let scrollValue = document.documentElement.scrollTop;
            let scrollNavLayout = document.querySelector(".scroll-nav-layout");
            if (scrollValue >= 100) {
                scrollNavLayout.style.display = "flex";
                scrollNavLayout.style.transition = "opacity 0.5s linear 0.1s";
                scrollNavLayout.style.opacity = scrollValue / 150;
                scrollNavLayout.classList.add("slideInDown");
            } else if (scrollValue < 100) {
                scrollNavLayout.style.display = "none";
                scrollNavLayout.style.opacity = "0";
            }
        },
    }
}
</script>

<style scoped>
.nav-core {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  margin-top: 0px;
  /* border: 1px solid #16032c; */
  z-index: 5;
}
.nav-layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.logo-flex {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /*position: relative;*/
}
.logo-flex .logo{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /*background-image: url("../../../public/img/icons/android-chrome-192x192.png");*/
  /*background-repeat: no-repeat;*/
  /*background-position: center;*/
  /*background-size: contain;*/
}
.menu-items-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
}
.menu-items-container .menu-item{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  margin-left: 30px;
  margin-right: 20px;
}
.menu-items-container .menu-item span{
    font-size: 15px;
    font-weight: bold;
    padding: 0px;
    color: white;
}
.actions-item{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
}
.actions-item .v-btn{
    text-transform: capitalize;
    font-size: 15px;
    color: #2d2d41;
    font-weight: bold;
}
@media only screen and (max-width: 500px) {
  
}
</style>