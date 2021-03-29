<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr />
                <select v-model="animationType" class="form-control">
                    <option value="slide">Slide</option>
                    <option value="fade">Fade</option>
                </select>
                <br>

                <button class="btn btn-primary" @click="show = !show">Show alert</button>
                <br><br>
                <!--  -->
                <!-- <transition :name="animationType" >
                    <div class="alert alert-info" v-if="show">Some info</div>
                </transition> -->

                <!-- <transition name="fade">
                    <div class="alert alert-info" v-if="show">Some info</div>
                </transition>-->
                
                <!-- <transition name="slide" appear>
                    <div class="alert alert-info" v-if="show">Some info</div>
                </transition>  -->
                <!-- <transition appear
                    enter-active-class="animate__animated animate__jackInTheBox"
                    leave-active-class="animate__animated animate__hinge"
                >
                    <div class="alert alert-info" v-if="show">Some info</div>
                </transition> -->

                <!-- animation between two elements -->
                <!-- <transition enter-active-class="animate__animated animate__jackInTheBox"
                    leave-active-class="animate__animated animate__hinge" mode="out-in">
                    <div class="alert alert-info" v-if="show" key="slide">This is some info</div>
                    <div class="alert alert-warning" v-if="!show" key="fade">This is some warning</div>
                </transition> -->

                <br>
                <button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
                <br><br>
                <transition 
                
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
                @enter-cencelled="enterCencelled"
                
                @before-leave="beforeLeave"
                @leave="leave"
                @after-leave="afterLeave"
                @leave-cencelled="leaveCencelled"
                :css="false">
                    <div style="width: 300px;height:100px;background-color:lightgreen;" v-if="load"></div>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="selectedComponent == 'SuccessAlert' ? selectedComponent = 'DangerAlert' : selectedComponent = 'SuccessAlert'">Toggle components</button>
                <br><br>
                <transition 
                    enter-active-class="animate__animated animate__jackInTheBox"
                    leave-active-class="animate__animated animate__hinge"
                    mode="out-in">
                    <component :is="selectedComponent"></component>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="addItem">Add number</button>
                <br><br>
                <ul class="list-group">
                    <transition-group name="slide">
                        <li 
                        class="list-group-item"
                        v-for="(number, index) in numbers"
                        style="cursor:pointer"
                        @click="removeItem(index)"
                        :key="index">
                            {{ number }}
                        </li>
                    </transition-group>
                    
                </ul>

                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
            </div>
        </div>
    </div>
</template>

<script>
import SuccessAlert from './SuccessAlert.vue';
import DangerAlert from './DangerAlert.vue';
    export default {
        components: {
            SuccessAlert,
            DangerAlert
        },
        data() {
            return {
                load: true,
                show: true,
                animationType: 'slide',
                elementWidth: 100,
                selectedComponent: 'SuccessAlert',
                numbers: [1,2,3,4,5]
            }
        },
        methods:{
            beforeEnter(el){
                console.log('beforeEnter');
                this.elementWidth = 100;
                el.style.width = this.elementWidth + 'px';
            },
            enter(el,done){
                let round = 1;
                const interval = setInterval(()=>{
                    el.style.width = this.elementWidth + 10 * round + 'px';
                    round ++; 
                    if(round > 20){
                        clearInterval(interval);
                        done();
                    }
                },20)
            },
            afterEnter(el){
                console.log('afterEnter');
            },
            enterCencelled(el){
                console.log('enterLeave');
            },

            beforeLeave(el){
                console.log('beforeLeave');
            },
            leave(el, done){
                let round = 1;
                const interval = setInterval(()=>{
                    el.style.width = this.elementWidth - 10 * round + 'px';
                    round ++; 
                    if(round > 20){
                        clearInterval(interval);
                        done();
                    }
                },20)
            },
            afterLeave(el){
                console.log('afterLeave')
            },
            leaveCencelled(el){
                console.log('leaveCencelled');
            },

            removeItem(index){
                this.numbers.splice(index,1)
            },
            addItem(){
                let len = this.numbers.length
                this.numbers.push(len+1);
            }
        }
    }
</script>

<style>
    .fade-enter{
        opacity: 0;
    }
    .fade-enter-active{
        transition: opacity .4s;
    }
    .fade-leave{
        /* opacity: 1; */
    }
    .fade-leave-active{
        opacity: 0;
        transition: opacity .4s;
    }

    .slide-enter{

    }
    .slide-enter-active{
        animation: slide-in 1s ease-out;
    }
    .slide-leave{

    }
    .slide-leave-active{
        animation: slide-out .4s ease-out backwards;
        transition: opacity .5s;
        opacity: 0;
    }

    @keyframes slide-in{
        from{
            transform: translateY(10px);
            opacity: 0;
        }
        to{
            transform: translateY(0);
            opacity: 1;
        }
    }
    @keyframes slide-out{
        from{
            transform: translateY(0);
            opacity: 1;
        }
        to{
            transform: translateY(10px);
            opacity: 0;
        }
    }
</style>
