<template>
    <div>
        <div class="d-flex align-items-center" style="min-height: 80vh">

            <div class="container my-4">
                <b-row>
                    <b-col>

                        <b-row>
                            <b-col offset-md="3" md="6" offset-lg="4" lg="4" class="mb-4">
                                <h2 class="text-center">
                                    Cadastro
                                </h2>
                            </b-col>
                        </b-row>

                        <b-row>
                            <b-col offset-md="3" md="6" offset-lg="4" lg="4">
                                <label>Nome</label>
                                <b-form-input class="mb-4" v-model="user.name" :class="{success: user.name}"></b-form-input>

                                <label>Email</label>
                                <b-form-input class="mb-4" v-model="user.email" :class="{success: user.email}"></b-form-input>

                                <label>Senha</label>
                                <b-form-input class="mb-4" v-model="user.passwordRaw" :class="{success: user.passwordRaw.length > 10}"></b-form-input>

                                <label>Gênero</label>
                                <b-form-select class="mb-4" :options="genders" v-model="gender" :class="{success: user.gender}" text-field="label"></b-form-select>

                                <label>Curso</label>
                                <b-form-select class="mb-4" :options="majors" v-model="major" :class="{success: user.major}" text-field="label"></b-form-select>

                                <label>Campi principais</label><br>
                                <b-button :variant="hasCampus(campus) ? 'success' : 'dark'" v-for="campus in campi" :key="campus.value" @click="toggleCampus(campus)">{{campus.label}}</b-button>

                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
                <b-row>
                    <br>
                    <b-col offset-md="3" md="6" offset-lg="4" lg="4">
                        <b-btn to="/" variant="primary" block size="lg" class="mb-4">
                            Registrar!
                        </b-btn>
                    </b-col>
                </b-row>
            </div>

        </div>
    </div>
</template>

<script>
    import User from 'shared/entities/User';
    import Gender from '../../shared/enums/Gender';
    import Major from '../../shared/enums/Major';
    import Sorter from '../../shared/base/Sorter';
    import Campus from '../../shared/enums/Campus';
    import UserCampus from '../../shared/entities/UserCampus';

    const enumSorter = Sorter.fromAttribute({Get(x){ return x.label }}, 1);

    export default {
        layout: 'external',
        head: () => ({
            title: 'Home'
        }),
        data: () => ({
            user: new User(),

            genders: Gender.toList(),

            majors: Sorter.sort(Major.toList(), enumSorter),

            campi: Campus.toList(),

        }),
        computed: {
            gender: {
                get() { return this.user.gender ? this.user.gender.value : 0; },
                set(v) { this.user.gender = Gender.getByProperty('value', v); }
            },
            major: {
                get() { return this.user.major ? this.user.major.value : 0; },
                set(v) { this.user.major = Major.getByProperty('value', v); }
            }
        },
        components: {},
        mounted() {
        },
        methods: {
            toggleCampus(campus) {
                let current = this.hasCampus(campus);

                if (current) {
                    this.user.campi.remove(current);
                } else {
                    this.user.campi.push(new UserCampus({
                        campus: campus.value
                    }));
                }
            },
            hasCampus(campus) {
                return this.user.campi.find(x => x.campus === campus);
            }
        }
    }
</script>

<style lang="scss">
</style>
