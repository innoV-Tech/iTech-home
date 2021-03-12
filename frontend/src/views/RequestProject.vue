<template>
    <div class='rproject-core'>
        <v-layout class='rproject-layout'>
            <v-flex xs11 sm11 md8 lg8 xl8 class='rproject-content'>
                <v-form class='rproject-form' ref='rProjectForm'>
                    <div class='services'>
                        <v-radio-group v-model="serviceModel" class='service-radio' row>
                                <div class='service ml-3 mr-3' v-for='(service, i) in services' :key='i' :class='serviceModel'>
                                    <v-radio
                                        :value='service'
                                        color='#eca715'
                                        mandatory
                                    >
                                        <template v-slot:label>
                                            <span style='color: black;font-size: 17px;'>{{service}}</span>
                                        </template>
                                    </v-radio>
                                </div>
                        </v-radio-group>
                    </div>
                    <v-textarea
                        rows='10'
                        row-height="70"
                        outlined
                        v-model="projectDescription"
                        label="Project Description"
                        class='ml-5'
                    ></v-textarea>
                    <div class='btn-container ml-5'>
                        <p class='' @click='termsDialog=true'>Terms Agreements</p>
                        <v-checkbox
                            v-model="agreed"
                            label="I accept the terms in the License Agreement"
                            color="#eca715"
                        ></v-checkbox>
                        <v-btn x-large color='#eca715' class='mt-5'>
                            <span style='color:white;text-transform:capitalize;font-size:17px;font-weight:bold;'>Request</span>
                        </v-btn>
                    </div>
                </v-form>
            </v-flex>
        </v-layout>
        <!-- agreements terms -->
        <v-dialog
            v-model="termsDialog"
            scrollable
            max-width="1000px"
        >
            <div class='terms-container'>
                <p class='mb-2'>© TERMS AND CONDITIONS </p>
                <p class='mb-2'>
                    !TECH contractual agreement states the terms and conditions that govern the contractual 
                    agreement between [!TECH] having his principal place of business at [JOUVENCE CAMEROON], 
                    and [Client] having its principal place of business at [Client. Address]  who agrees to be bound by this Agreement.
                </p>
                <p class='mb-2'>
                    <strong>WHEREAS</strong>, the Client has conceptualized [QUICK DESCRIPTION OF THE WORK] which is described in further detail on Exhibit A, 
                    and!TECH is a contractor with whom the Client has agreed to perform these services.<br/><br>
                    <strong>NOW, THEREFORE</strong>, In consideration of the mutual covenants and promises made by the parties to this services agreement, !TECH and the [Client] agree as follows:
                </p>
            </div>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: '',

    data(){
        return{
            services: [
                'Software',
                'Mobile App'
            ],
            serviceModel: null,
            projectDescription: null,
            agreed: false,
            termsDialog: false,
        }
    },

    created(){
        setTimeout(() => {
            this.$store.state.navBarBackGroundColor = '#2d2d41' // menu bar background color
        }, 10)
    },

    methods: {

    }
}
</script>

<style scoped>
    .rproject-core{
        width: 100%;
        min-height: 90vh;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
    }
    .rproject-layout{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .rproject-form{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .services{
        width: 80%;
        height: auto;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .service-radio{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .service{
        width: auto;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding: 30px;
        border-radius: 5px;
        border: 1px solid #2d2d41;
    }
    .rproject-form .v-textarea{
        width: 80%
    }
    .btn-container{
        width: 80%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .btn-container p{
        padding: 0px;
        margin: 0px;
        color: #eca715;
        cursor: pointer;
    }
    .terms-container{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        background-color: white;
        padding: 50px;
    }
    .terms-container p{
        padding: 0px;
        margin: 0px;
        width: 90%;
        text-align: left;
    }
</style>