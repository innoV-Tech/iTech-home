<template>
  <div class="about-core animated fadeIn">
    <div class='about-top'>
      <div class='top-container'>
        <h1 class='mb-5 font-weight-bold animated fadeInUp'>About us</h1>
        <p class='animated fadeInUp'>
          !TECH is a team of highly talented creative professionals who understand
          the importance of high-quality work. With knowledge in cutting-edge 
          technology, the company takes pride in the business of digital 
          transformation. !TECH performs its magic through its portfolio of
          products and services. Using our expertise in these latest technologies,
          we enable enterprises, software companies, financial institutions, 
          and SME’S in their stalking for perfection and differentiation in the market. 
        </p>
      </div>

      <div class='about-img-container'>
        <div class='about-img mb-5 animated zoomIn'></div>
         <p class='animated fadeInUp'>
          Our services portfolio includes custom enterprise software Services,
          where our agile processes ensure strategic value, Data analysis, 
          and business intelligence which facilitate decision making for the 
          strategic team, resilient digital innovation for business growth, 
          Marketing automation for B2B services which boost conversion rate for 
          our clients, quantitative marketing and analytics for better brand 
          positioning and loyalty.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',

  data(){
    return{

    }
  },

  created(){
    setTimeout(() => {
      this.$store.state.navBarBackGroundColor = '#2d2d41' // menu bar background color
    }, 10)
  },

  methods: {},
}
</script>

<style scoped>
  .about-core{
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }
  .about-top{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .top-container{
    width: 40%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 10%;
  }
  .top-container h1{
    font-size: 50px;
  }
  .top-container p{
    text-align: left;
    font-size: 17px;
    width: 80%;
  }
  .about-img-container{
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .about-img{
    width: 500px;
    height: 500px;
    /* border: 1px solid #eca715; */
    background-image: url('../assets/home/aboutus.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .about-img-container p{
    text-align: left;
    font-size: 17px;
    width: 70%;
  }
  @media only screen and (max-width: 500px){
    .about-core{
      overflow-x: hidden;
       height: auto;
    }
    .about-top{
      flex-direction: column;
    }
    .top-container{
      width: 100%;
      justify-content: center;
      align-items: center;
      margin-left: 0px;
    }
    .top-container p, .about-img-container p{
      width: 90%;
    }
    .about-img-container{
      width: 100%;
      justify-content: center;
      align-items: center;
    }
  }
</style>
