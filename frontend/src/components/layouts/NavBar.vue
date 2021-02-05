<template>
    <div class='nav-core' :style="{backgroundColor: navBarBackGroundColor}">
       <v-layout class='nav-layout hidden-sm-and-down'>
            <v-flex xs12 sm12 md2 lg2 xl2 class='logo'>
                <div class='logo'></div>
            </v-flex>

            <v-flex xs12 sm12 md7 lg7 xl7 class='menu-items-container'>
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
                <router-link to="/about" style="text-decoration: none;">
                    <div class="menu-item">
                        <span>Career</span>
                        <!-- <v-icon style="font-size: 18px;" class>fas fa-cogs</v-icon> -->
                    </div>
                </router-link>
                <router-link to="/about" style="text-decoration: none;">
                    <div class="menu-item">
                        <span>Testimonials</span>
                        <!-- <v-icon style="font-size: 18px;" class>fas fa-cogs</v-icon> -->
                    </div>
                </router-link>
                <router-link to="/about" style="text-decoration: none;">
                    <div class="menu-item">
                        <span>Partners</span>
                        <!-- <v-icon style="font-size: 18px;" class>fas fa-cogs</v-icon> -->
                    </div>
                </router-link>
                <router-link to="/about" style="text-decoration: none;">
                    <div class="menu-item">
                        <span>Contact</span>
                        <!-- <v-icon style="font-size: 18px;" class>fas fa-cogs</v-icon> -->
                    </div>
                </router-link>
            </v-flex>

            <v-flex xs12 sm12 md3 lg3 xl3 class='menu-items'>
                <v-btn medium>Request a project</v-btn>
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
    
</style>