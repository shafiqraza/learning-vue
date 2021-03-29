<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Built-in Directives</h1>
                <p v-text="'Some Text'"></p>
                <p v-html="'<strong>Some other text</strong>'"></p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <p v-highlight:border="'red'" >Color here</p>
                <p v-local-highlight:background.blink="{primaryColor: 'red', secondaryColor: 'blue', delay: 1000}" >Color here</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives:{
            'local-highlight':{
                bind(el, binding, vnode){
                    // el.style.color = binding.value
                    let startAfter = 0;
                    if(binding.modifiers['delayed']){
                        startAfter = 3000
                    }
                    if(binding.modifiers['blink']){
                        let primaryColor = binding.value.primaryColor;
                        let secondaryColor = binding.value.secondaryColor;
                        let currentColor = primaryColor;
                       setTimeout(() => {
                            setInterval(()=> { 
                                currentColor === primaryColor ? currentColor = secondaryColor : currentColor = primaryColor

                                if(binding.arg == 'background'){
                                // el.style.color = binding.value
                                    el.style.backgroundColor = currentColor
                                }
                            },binding.value.delay)
                        },startAfter)
                    }                  
                }
            }
        }
    }
</script>

<style>

</style>
