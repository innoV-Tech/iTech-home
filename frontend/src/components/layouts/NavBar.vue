<template>
    <div class='nav-core animated fadeIn' :style="{backgroundColor: $store.state.navBarBackGroundColor}">
       <v-layout class='nav-layout hidden-sm-and-down'>
            <v-flex xs12 sm12 md2 lg2 xl2 class='logo-flex'>
                 <router-link to="/" style="text-decoration: none;">
                     <div class='logo' @click="isServices=false, isContact=false,scrollTo('#landing-id')"><h1 style='color:#eca715'>!Tech</h1></div>
                </router-link>
            </v-flex>

            <v-flex xs12 sm12 md8 lg8 xl8 class='menu-items-container'>
                <router-link to="/about" style="text-decoration: none;">
                    <div class="menu-item">
                        <span>About</span>
                        <span class='indicator animated fadeInUp' v-if='$route.name == "About"'></span>
                        <!-- <v-icon style="font-size: 18px;" class>fas fa-cogs</v-icon> -->
                    </div>
                </router-link>
                <div @click="$router.push('/'), isContact=false, isServices=true, scrollTo('#services-id')" style="text-decoration: none;cursor:pointer;">
                    <div class="menu-item">
                        <span>Services</span>
                        <span class='indicator animated fadeInUp' v-if='$route.name=="Home" && isServices==true'></span>
                        <!-- <v-icon style="font-size: 18px;" class>fas fa-cogs</v-icon> -->
                    </div>
                </div>
                <!-- <router-link to="/career" style="text-decoration: none;">
                    <div class="menu-item">
                        <span>Career</span>
                    </div>
                </router-link>
                <router-link to="/testimonials" style="text-decoration: none;">
                    <div class="menu-item">
                        <span>Testimonials</span>
                    </div>
                </router-link>
                <router-link to="/partners" style="text-decoration: none;">
                    <div class="menu-item">
                        <span>Partners</span>
                    </div>
                </router-link> -->
                <div @click="$router.push('/'), isServices=false, isContact=true, scrollTo('#contact-id')" style="text-decoration: none;cursor:pointer;">
                    <div class="menu-item">
                        <span>Contact</span>
                        <span class='indicator animated fadeInUp' v-if='$route.name=="Home" && isContact==true'></span>
                        <!-- <v-icon style="font-size: 18px;" class>fas fa-cogs</v-icon> -->
                    </div>
                </div>
                <!-- <router-link to="/request_project" style="text-decoration: none;">
                    <v-btn large rounded class='ml-3' style='text-transform: capitalize' color='#eca715'><span style='color:white;'>Request project</span></v-btn>
                </router-link> -->
            </v-flex>

            <!-- <v-flex xs12 sm12 md2 lg2 xl2 class='actions-item'>
                <v-btn medium rounded color='#c10fa3' class='pt-3 pb-3'>Request project</v-btn>
            </v-flex> -->
        </v-layout>
        <div class='mobile-bar hidden-md-and-up'>
            <v-icon large color='white' class='ml-5' @click='sidebarDrawer=true'>fas fa-bars</v-icon>
        </div>
        <v-navigation-drawer 
            v-model="sidebarDrawer" 
            color='#15141c' 
            fixed 
            top 
            width="65%" 
            
            temporary 
            hide-overlay
            class="nav-drawer hidden-md-and-up pt-5"
        >
            <v-flex xs12 sm12 md2 lg2 xl2 class='logo-flex'>
                 <router-link to="/" style="text-decoration: none;">
                     <div class='logo' @click="isServices=false, isContact=false,scrollTo('#landing-id'), sidebarDrawer=false"><h1 style='color:#eca715'>!Tech</h1></div>
                </router-link>
            </v-flex>

            <v-flex xs12 sm12 md8 lg8 xl8 class='menu-items-container'>
                <router-link to="/about" style="text-decoration: none;">
                    <div class="menu-item">
                        <span>About</span>
                        <span class='indicator animated fadeInUp' v-if='$route.name == "About"'></span>
                        <!-- <v-icon style="font-size: 18px;" class>fas fa-cogs</v-icon> -->
                    </div>
                </router-link>
                <div @click="$router.push('/'), isContact=false, isServices=true, scrollTo('#services-id'), sidebarDrawer=false" style="text-decoration: none;cursor:pointer;">
                    <div class="menu-item">
                        <span>Services</span>
                        <span class='indicator animated fadeInUp' v-if='$route.name=="Home" && isServices==true'></span>
                        <!-- <v-icon style="font-size: 18px;" class>fas fa-cogs</v-icon> -->
                    </div>
                </div>
                <div @click="$router.push('/'), isServices=false, isContact=true, scrollTo('#contact-id'), sidebarDrawer=false" style="text-decoration: none;cursor:pointer;">
                    <div class="menu-item">
                        <span>Contact</span>
                        <span class='indicator animated fadeInUp' v-if='$route.name=="Home" && isContact==true'></span>
                        <!-- <v-icon style="font-size: 18px;" class>fas fa-cogs</v-icon> -->
                    </div>
                </div>
            </v-flex>
       </v-navigation-drawer>
    </div>
</template>

<script>
import * as easings from "vuetify/es5/services/goto/easing-patterns";
export default {
    name: 'NavBar',

    data(){
        return{
            // navBarBackGroundColor: '#2d2d41',
            scrollColor: '#ffffff',
            easing: "easeInOutCubic",
            easings: Object.keys(easings),
            duration: 400,
            offset: 25,
            // # pages indicators
            isServices: false,
            isContact: false,
            sidebarDrawer: false,
        }
    },
    
    computed: {
        target() {
            const value = this[this.type];
            if (!isNaN(value)) return Number(value);
            else return value;
        },
        options() {
            return {
                duration: this.duration,
                offset: this.offset,
                easing: this.easing
            };
        }
    },
    created(){
        
        this.diseableIndicator()
        window.addEventListener('scroll', this.diseableIndicator)
    },

    methods: {
        menuScrollAnimation() {
            let scrollValue = document.documentElement.scrollTop;
            let scrollNavLayout = document.querySelector(".scroll-nav-layout");
            if (scrollValue >= 100) {
                console.log(self.navBarBackGroundColor);
                scrollNavLayout.style.display = "flex";
                scrollNavLayout.style.transition = "opacity 0.5s linear 0.1s";
                scrollNavLayout.style.opacity = scrollValue / 150;
                scrollNavLayout.classList.add("slideInDown");
            } else if (scrollValue < 100) {
                scrollNavLayout.style.display = "none";
                scrollNavLayout.style.opacity = "0";
            }
        },

        diseableIndicator(){
            // hide indicator when scrool top offset=0
            let self = this
            // window.addEventListener('scroll', function(){
                let scrollValue = document.documentElement.scrollTop;
                // console.log(scrollValue);
                if (scrollValue == 0){
                    self.isServices = false;
                    self.isContact = false;
                }else if(scrollValue < 4000 && scrollValue > 600){
                    self.isServices = true;
                    self.isContact = false;
                }else if(scrollValue > 5000){
                    self.isServices = false;
                    self.isContact = true;
                }
            // })
        },

        scrollTo(ancre) {
            let self = this;
            setTimeout(() => {
                this.$vuetify.goTo(ancre, self.options);
            }, 20);
        }
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
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
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
.indicator{
    border: 2px solid #eca715;
    width: 30px;
}
.mobile-bar{
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: #2d2d41;
}
.nav-drawer {
    /* width: 100%; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 5px;
    /* top: 0px; */
   /*z-index: 3; */
    }
    /* .v-navigation-drawer .v-navigation-drawer__content {
        width: 90%;
    } */
@media only screen and (max-width: 500px) {
  .menu-items-container{
    flex-direction: column;
    width: auto;
    height: auto;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .menu-items-container .menu-item{
      margin-top: 20px;
  }
  .menu-items-container .menu-item span{
      font-size: 17px;

  }
}
</style>