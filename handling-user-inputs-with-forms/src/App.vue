<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-md-6">
                    <h1>File a Complaint</h1>
                    <hr>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-model="user.email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model.lazy="user.password">
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input
                                type="number"
                                id="age"
                                class="form-control"
                                v-model="user.age">
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label><br>
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <textarea
                            id="message"
                            rows="5"
                            class="form-control"
                            v-model="message"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="sendmail">
                            <input
                                    type="checkbox"
                                    id="sendmail"
                                    value="SendMail"
                                    v-model="sendMail"> Send Mail
                        </label>
                        <label for="sendInfomail">
                            <input
                                    type="checkbox"
                                    id="sendInfomail"
                                    value="SendInfoMail"
                                    v-model="sendMail"> Send Infomail
                        </label>
                    </div>
                    <div class="form-group">
                        <label for="male">
                        <input
                                type="radio"
                                id="male"
                                value="Male"
                                name="gender"
                                v-model="gender"> Male
                        </label>
                        <label for="female">
                            <input
                                    type="radio"
                                    id="female"
                                    value="Female"
                                    name="gender"
                                    v-model="gender"> Female
                        </label>
                    </div>
                    <div class="form-group">
                        <label for="priority">Priority</label>
                        <select
                                id="priority"
                                class="form-control"
                                v-model="selectedPriority">
                            <option v-for="priority in priorities"> {{ priority }} </option>
                        </select>
                    </div>
                    <div class="form-group">
                        <app-switch @input="dataSwitch = $event.target" :value="dataSwitch"></app-switch>
                    </div>
                    <div class="form-group">
                        <button
                            class="btn btn-primary">Submit!
                        </button>
                    </div>
                </div>

                <div class="col-md-6 details-col" >
                <div class="card panel-default">
                    <div class="card-header">
                        <h4>Your Data</h4>
                    </div>
                    <div class="card-body">
                        <p>Mail: {{ user.email }} </p>
                        <p>Password: {{ user.password }} </p>
                        <p>Age: {{ user.age }} </p>
                        <p style="white-space: pre">Message: {{ message }} </p>
                        <p><strong>Send Mail?</strong></p>
                        <ul>
                            <li v-for="item in sendMail">{{ item }}</li>
                        </ul>
                        <p>Gender: {{ gender }} </p>
                        <p>Priority: {{ selectedPriority }} </p>
                        <p>Switched: {{ dataSwitch }} </p>
                    </div>
                </div>
            </div>
            </div>
        </form>
        <hr>
        <div class="row">
            
        </div>
    </div>
</template>

<script>
    import Switch from './Switch.vue'
    export default {
        components: {
            AppSwitch: Switch,
        },
        data() {
            return {
                user:{
                    email: '',
                    password: '',
                    age: 21
                },
                message: 'A simple text.',
                sendMail: [],
                gender: '',
                priorities: ['High','Medium','Low'],
                selectedPriority: 'Medium',
                dataSwitch: true
            }
        },
    }
</script>

<style>
.details-col{
    margin-top: 50px;
    padding: 20px;
}
</style>
