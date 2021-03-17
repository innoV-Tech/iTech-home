<template>
  <div class="home-core" id='landing-id'>
    <div class='landing-core'>
      <div class='back-overlay'>

      </div>

      <div class='text-container'>
        <h1 class='goal'><span>Intelligent systems</span> <span class='for'>4</span> <span>intelligent results</span></h1>
        <p class='mt-5'>
          Software systems facilitate business processes and enable 
          enterprises to operate efficiently while managing growth 
          effectively. With smart organizational practices and rapid 
          improvement in technology, modern enterprises have been 
          relying more on customs software systems. 
        </p>
        <div class='contact-btns mt-5 hidden-sm-and-down'>
          <v-btn x-large rounded class='in-touch mr-3' color='#eca715' @click='scrollTo("#contact-id")'><span>Get in Touch</span></v-btn>
          <!-- <router-link to="/request_project" style="text-decoration: none;">
            <v-btn x-large rounded class='project-btn ml-3' outlined color='#eca715'><span>Request project</span></v-btn>
          </router-link> -->
        </div>
      </div>
    </div>

    <div class='services' id='services-id'>
      <h1 class='mb-3' style='font-weight:bold;'>Our Services</h1>
      <p class='services-text mb-5' data-aos='fade-up' data-aos-duration='500'>
        Since technology is rapidly evolving, businesses must keep pace in investing in newer
        applications, services, and enhancing/re-engineer legacy systems. Newer applications
        reduce downtime, trim costs, and augment user experience. ! TECH is introducing a
        better and more agile way of designing, building, and maintaining suitable software.
        With the introduction of newer technologies such as mobility, cloud, IoT, big data
        analytics, and AI, the potential for enterprise solutions to deliver value to clientele
        has increased exponentially.
      </p>
     <div class='services-container mt-5'>
       <div class='services-img hidden-sm-and-down'></div>
        <div class='services-items'>
          <h2 class='service-title ml-5 mb-5 font-weight-bold'>We develop <span style='color:#eca715'>intelligent</span> systems for <span style='color:#eca715'>intelligent</span> results</h2>
          <div class='services-flex-container'>
            <v-flex 
              xs4 sm4 md4 lg4 xl4 
              v-for='(service,i) in services' 
              :key="i" 
              class='services-flex ml-5 mr-5 mt-5 mb-5'
              data-aos="zoom-in"
              :data-aos-delay="i * 150"
              data-aos-duration="500"
            >
                <div class='icon' :style='{backgroundImage:`url(${service.icon})`}'></div>
                <p class='ml-3'>{{service.name}}</p>
            </v-flex>
          </div>
        </div>
     </div>
    </div>

    <div class='itechs-container'>
      <div 
        class='itechs' 
        v-for="(itech, i) in itechs" 
        :key="i"
      >
        <div 
          class='itechs-text'
          :data-aos="itech.animation"
          data-aos-duration="700"
         >
          <h3 class='mb-5' style=''><span>{{itech.title}}</span></h3>
          <p v-html='itech.content'></p>
        </div>
        <div 
          class='itechs-icon pa-5 hidden-sm-and-down'
          :style="{backgroundImage: `url(${itech.icon})`}"
          data-aos="zoom-in"
          data-aos-duration="700"
        ></div>
      </div>
    </div>
    <!-- contact -->
    <div class='contact' id='contact-id'>
      <div class='contct-info'>
        <h1 class='mb-4'>Get in Touch</h1>
        <div class='infos mb-4'>
          <p><v-icon color='white'>fas fa-envelope</v-icon> inno8tech@gmail.com</p>
          <p><v-icon color='white'>fas fa-phone-alt</v-icon> +31 6 18874427 & +237 681 33 52 61</p>
          <p><v-icon color='white'>fas fa-map-marker</v-icon> Jouvence Yaounde cameroon</p>
        </div>
        <div class='social-media'></div>
      </div>
      <!-- contct form -->
      <v-form 
        class='contact-form' 
        ref='contactForm'
        data-aos="fade-up"
        data-aos-delay="150"
        data-aos-duration="500"
      >
        <p class='form-err-msg'></p>
        <v-text-field
            v-model="name"
            :rules="[$store.state.rules.required]"
            label="Name*"
            required
            outlined
        ></v-text-field>
        <v-text-field
            v-model="email"
            label="Email"
            type='email'
            required
            outlined
        ></v-text-field>
         <v-text-field
            v-model="telNumber"
            label="Tel. Number"
            type='number'
            required
            outlined
        ></v-text-field>
        <v-textarea
          v-model="message"
          :rules="[$store.state.rules.required]"
          label="Message*"
          required
          outlined
        ></v-textarea>
        <div class='btn-container'>
          <v-btn large class='pa-3' color='#111111' @click='sendMail()'>Send Message</v-btn>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "@/components/HelloWorld.vue";
import * as easings from "vuetify/es5/services/goto/easing-patterns";
export default {
  name: "Home",

  components: {
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

  data(){
    return {
      services: [
        {name: 'Software Development', icon: require('../assets/home/software.svg')},
        {name: 'App Development', icon: require('../assets/home/app.svg')},
        {name: 'Online Marketing', icon: require('../assets/home/marketing.svg')},
        // {name: 'API Development', icon: ''},
      ],
      itechs: [
        {title: 'DIGITAL INNOVATION FOR BUSINESS GROWTH(DIBG)', 
          content: 'Digital innovation combined with sleek customer experience is the engine for growth in many businesses and industries.  This has revolutionized the way financial institutions, insurance and, many other businesses communicate with their customers and this has brought about the much-needed proximity to their customers. Digitization and innovation have brought forth many benefits to businesses. Some of such benefits are customer experience, business simplification, competitiveness, speed of operations, efficiency, and growth. However,  the effort can be daunting, especially if preparations are less than perfect. This is why it is important to partner with us.! Techers are known for their rapid ideation, design, prototyping, and deployment. We work on a project basis, and we can also provide your company with a dedicated team that will be with you throughout your digitization process.',
          icon: require('../assets/home/businessgrowth.jpg'), animation:'fade-right'},
        {title: 'DIGITAL INNOVATION FOR START-UPS(continuation for DIBG)', 
          content: 'We love startups because we are a startup too.!TECH Startup services aim at helping early-stage (other startups)companies accomplish their goals through product ideation, prototyping, software development, software testing, and maintenance.!TECH is happy to be associated with the growth story of some startups across industries such as shipping, inter-urban transportation, financial technology, and big data. With our expertise in agile development combined with the latest in data analysis and visualization,!TECH ensures that your brilliant idea is converted into a market redefining product with the potential of gaining market share over other average software solutions. ', 
          icon: require('../assets/home/startup.svg'), animation:'fade-left'},
        {title: 'DATA ANALYTICS and BUSINESS INTELLIGENCE', 
          content: 'Business intelligence (BI) leverages software and services to transform data into actionable insights. This process helps organizations to answer important questions regarding the business. A data-driven organization makes informed strategic and tactical business decisions that propel the organization for growth. To leverage intelligence from data, the organization needs to have or hire experts with sound business acumen, strong technology, and statistical knowledge to mine this data for patterns and insights. At !Tech, we have a strong and dedicated team of specialists with strong business acumen, superior delivery practices, and technical expertise that will build flexible, animated, and immersive visual analytics which allows organizational leaders to think creatively and make informed decisions thereby bringing returns on investment.', 
          icon: require('../assets/home/statistics.jpg'), animation:'fade-right'},
        {title: 'QUANTITATIVE MARKETING AND ANALYTICS', 
          content: "As margins shrinks, the market becomes harder and the way forward is going digital to expand the market. It is all about drawing consumers to your business and maintaining their loyalty. But how do you constantly understand customer preferences and changing behavior? Is your marketing team meeting up? Are they bringing a return on marketing investment?!Tech is occupying this space with experience in industries ranging from satellite telecom, mobile networks operators(MNO’s) media agencies, mobile banking, and finance, insurance, etc.! Tech is leveraging Artificial intelligence, Analytics, Big Data, in marketing to understand customer preferences to prevent customer churn. This knowledge helps you answer questions in marketing ranging from customer patterns, behaviors, and where the market is shifting too. With this knowledge, organizations can plan and execute intelligent marketing that delivers value to customers and bring returns to the company.", 
          icon: require('../assets/home/analytics.jpg'), animation:'fade-left'},
        {title: 'MARKETING AUTOMATION B2B', 
          content: `To attract, nurture and qualify leads, every organization needs a good marketing team with expert knowledge in marketing automation. It is said that the efficient use of marketing automation drives a 14.5% increase in sales productivity and a 12.2% reduction in marketing overhead. Is your marketing team seeing these results? !Tech has positioned itself in helping organizations to prepare their marketing automation process.!Tech also leverages its expert knowledge in 360° degree marketing in promoting the companies across all media. !Tech carefully tailored messaging which leads to customer satisfaction that brings about brand loyalty. We make use of data to help companies understand what their marketing messages need to be. We analyze social media conversations, web trends, inbound traffic, etc to uncover revenue opportunities. We answer questions such as ;What do people say about your brand? What other things are they interested in? What are they doing when they get to your site? <a style='text-decoration: None' href='#contact-id'>Contact Us</a>`, 
          icon: require('../assets/home/automation.jpg'), animation:'fade-right'},
        {title: 'DIGITAL MARKETING', 
          content: `Marketing as a field has undergone a revolution. With the advancement in technology, traditional marketing is transitioning to the online space. Marketing in the digital space needs specialized skills set. !TECH prides itself with the knowledge of digital marketing across search engines, emails, social media, text etc. If your marketing can not show a return on investment then get in touch with us today. <a style='text-decoration: None' href='#contact-id'>Contact Us</a>`, 
          icon: require('../assets/home/digitalmarketing.jpg'), animation:'fade-left'},
      ],
      neme: null,
      email: null,
      message: null,
      telNumber: null,
      // easings
      easing: "easeInOutCubic",
      easings: Object.keys(easings),
      duration: 400,
      offset: 25,
    }
  },

  created(){
    this.$store.state.navBarBackGroundColor = null
    let self = this
     window.addEventListener('scroll', function(){
       let scrollValue = document.documentElement.scrollTop;
       if(scrollValue > 700){
            self.$store.state.navBarBackGroundColor = '#2d2d41'
        }else {
            self.$store.state.navBarBackGroundColor = null
        }
     })
  },

  methods: {
    scrollTo(ancre) {
      let self = this;
      setTimeout(() => {
          this.$vuetify.goTo(ancre, self.options);
      }, 20);
    },

    sendMail(){
      let self = this;
      let formErrMsg = document.querySelector('.form-err-msg')
      let validationErrMsg = document.querySelector('.v-messages__message');

      if(!document.body.contains(validationErrMsg) && self.name != null && self.message != null){
        if(self.email != null || self.telNumber != null){
          this.$store.dispatch("publicPostReq", {
            url: "contact/send_message",
            params: {
                email: self.email,
                name: self.name,
                message: self.message,
                tel_number: self.telNumber
            },
            auth: null,
            csrftoken: null,
            callback: function(data) {
                console.log(data);
                if(data.sended){
                  formErrMsg.innerHTML = data.msg
                  setTimeout(() => {
                    formErrMsg.innerHTML = ''
                    document.querySelector('.contact-form').reset()
                  }, 2000)
                }else{
                  formErrMsg.innerHTML = data.msg
                }
            },
          });
        }else{
          formErrMsg.innerHTML = 'Full your Email or Tel. number'
        }
      }else{
        formErrMsg.innerHTML = 'Name and message should not be empty';
      }
    }
  },
};
</script>

<style scoped>
  .home-core{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: #2d2d41; */
    /* margin-top: 50px; */
  }
  .landing-core{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #2d2d41;
  }
  .back-overlay{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    background-image: url('../assets/home/landingback.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .text-container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
  }
  .text-container h1{
    text-align: center;
    font-weight: bold;
    /* color: #c10fa3; */
    color: #eca715;
    font-size: 70px;
    line-height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .text-container h1 .for{
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text-container p{
    font-size: 17px;
    text-align: center;
    color: #fff;
    width: 50%;
    height: auto;
  }
  .contact-btns{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .contact-btns .v-btn{
    padding: 50px;
    font-weight: bold;
    font-size: 17px;
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .in-touch{
  }
  .in-touch span{
    color: #fff;
    margin: auto;
  }
  .project-btn span{
    color: #eca715;
  }
  .services{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .services-text{
    width: 70%;
    text-align: center;
    font-size: 15px;
  }
  .services-container{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .services-img{
    width: 50%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('../assets/home/services.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .services-items{
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .services-flex-container{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .service-title{
    text-align: left;
    width: 70%;
    font-size: 40px;
  }
  .services .services-flex{
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    /* border-radius: 5px;
    background-color: #2e2e42; */
  }
  .services .services-flex .icon{
    width: 70px;
    height: 70px;
    /* border: 1px solid #eca715; */
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  .services .services-flex p{
    text-align: center;
    font-weight: bold;
    font-size: 17px;
    color: #2e2e42;
  }
  .itechs-container{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 50px;
    /* background-color: #f5f5f5; */
    /* background-color: #ebf0f7; */
  }
  .itechs{
    padding-top: 70px;
    padding-bottom: 70px;
  }
  .itechs:nth-child(odd){
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .itechs:nth-child(odd) p{
    text-align: left;
    font-size: 15px;
  }
  .itechs:nth-child(odd) h3{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .itechs:nth-child(even){
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
  }
  .itechs:nth-child(even) p{
    text-align: left;
    font-size: 15px;
  }
  .itechs:nth-child(even) h3{
    text-align: left;
  }
  .itechs-text{
    width: 38%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .itechs-icon{
    width: 400px;
    height: 400px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .itechs:nth-child(even) .itechs-icon{
    margin-right: 100px;
  }
  .itechs:nth-child(odd) .itechs-icon{
    margin-left: 100px;
  }
  .contact{
    background-color: #111111;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    padding-bottom: 50px;
    padding-top: 50px;
  }
  .contct-info{
    width: 40%;
    padding-left: 10%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .contct-info h1{
    text-align: left;
    color: white;
  }
  .infos{
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .infos p{
    text-align: left;
    color: white;
    width: 100%;
    height: auto;
    font-size: 15px;
  }
  .infos p .v-icon{
    margin-right: 15px;
    font-size: 15px;
  }
  .contact-form{
    height: auto;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .form-err-msg{
    text-align: center;
    font-size: 17px;
    color: #ce2b58;
  }
  .contact-form .v-text-field{
    width: 85%;
  }
  .btn-container{
    height: auto;
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
  }
  .btn-container .v-btn{
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    text-transform: capitalize;
  }
  @media only screen and (max-width: 500px){
    .home-core{
      overflow-x: hidden;
      margin-top: 50px;
    }
    .text-container h1{
      font-size: 35px;
      line-height: 40px;
    }
    .text-container p{
      width: 95%;
    }
    .services-text{
      width: 95%;
    }
    .services-items{
      width: 100%;
    }
    .service-title{
      font-size: 30px;
      text-align: center;
      width: 90%;
    }
    .services-flex-container{
      /* flex-wrap: nowrap; */
    }
    .services .services-flex{
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
    }
    .itechs:nth-child(odd), .itechs:nth-child(even){
      padding-top: 10px;
      flex-direction: column;
    }
    .itechs-text{
      width: 90%;
    }
    .contact{
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .contct-info{
      width: 100%;
      justify-content: center;
      align-items: center;
    }
    .contct-info h1{
      text-align: center;
    }
    .infos{
      height: auto;
      justify-content: flex-start;
    }
    .contact-form{
      width: 95%;
    }
    .form-err-msg{
      width: 90%;
    }
    .contact-form .v-text-field{
      width: 90%;
    }
    /* .itechs-icon{
      position: absolute;
    } */
  }
</style>
