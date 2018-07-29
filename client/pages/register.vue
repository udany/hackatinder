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
                                <b-input class="mb-4" v-model="user.name" :class="{success: user.name}"></b-input>

                                <label>Gênero</label>
                                <b-select class="mb-4" :options="genders" text-field="label"></b-select>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </div>

        </div>
    </div>
</template>

<script>
    import User from 'shared/entities/User';
    import Gender from '../../shared/enums/Gender';

    export default {
        layout: 'external',
        head: () => ({
            title: 'Home'
        }),
        data: () => ({
            user: new User(),

            genders: Gender.toList()
        }),
        async asyncData({app}) {
        },
        components: {},
        created() {
        },
        mounted() {
        },
        methods: {}
    }
</script>

<style lang="scss">
</style>
