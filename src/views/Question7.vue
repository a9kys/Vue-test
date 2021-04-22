<template>
    <div>
        <h5>Question 7</h5>
        <div class="form-container">
            <!-- Render the form here -->
           <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <hr>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input
                                type="text"
                                id="name"
                                class="form-control"
                                v-model="user.name">
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input
                                type="text"
                                id="age"
                                class="form-control"
                                v-model="user.age">
                    </div>

                </div>
            </div>

            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="languages">Languages:</label>
                        <label for="Vue">
                            <input
                                    type="checkbox"
                                    id="Vue"
                                    value="Vue"
                                    v-model="user.languages">Vue
                        </label>
                        <label for="C#">
                            <input
                                    type="checkbox"
                                    id="C#"
                                    value="C#"
                                    v-model="user.languages">C#
                        </label>
                        <label for="Angular">
                            <input
                                    type="checkbox"
                                    id="Angular"
                                    value="Angular"
                                    v-model="user.languages">Angular
                        </label>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="gender">Gender:</label>
                    <label for="male">
                        <input
                                type="radio"
                                id="male"
                                value="Male"
                                v-model="user.gender"> Male
                    </label>
                    <label for="female">
                        <input
                                type="radio"
                                id="female"
                                value="Female"
                                v-model="user.gender"> Female
                    </label>
                </div>
            </div>
            <div class="row" v-if="addDropdown">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="experience">Experience</label>
                    <select
                            id="experience"
                            class="form-control"
                            v-model="user.selectedExperience">
                        <option
                                v-for="(exp,index) in user.experience" :key=index
                                >{{exp}}</option>
                    </select>
                </div>
            </div>


            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            class="btn btn-primary"
                            @click.prevent="submitted">Submit!
                    </button>
                </div>
            </div>
            <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Name: {{ user.name }} </p>
                        <p>Age: {{ user.age }}</p>

                        <ul>
                            <li v-for="(language,index) in user.languages" :key=index>Language:{{ language }}</li>
                        </ul>
                        <p v-if="addDropdown">Experience:{{user.selectedExperience}}</p>
                        <p>Gender:  {{ user.gender }}</p>
                    </div>
                </div>
            </div>
        </div>
        </form>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                user:{
                    name:'',
                    age: '',
                languages: [],
                gender: 'Male',
                experience: ['1', '2', '3','4','above'],
                selectedExperience:''
                },
                 isSubmitted: false
            }
        },
        computed:
        {
            addDropdown()
            {
                return (this.user.age>22 && this.user.languages.includes("Vue"));
            }
          
        },
        methods: {
          submitted() {
              this.isSubmitted = true;
              this.$router.push({
        name: "displayDetails",
        params: { name: this.user }
          });
        }
    }
    }
</script>
