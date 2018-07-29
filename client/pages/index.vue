<template>
    <div class="container my-4">
        <b-row>
            <b-col>

                <b-row>
                    <b-col offset-md="3" md="6" offset-lg="4" lg="4">
                        <img src="../assets/logo.svg" alt="" style="width: 100%">
                    </b-col>
                </b-row>

                <b-row>
                    <b-col offset-md="3" md="6" offset-lg="4" lg="4">
                        <b-btn variant="love" block size="lg" class="mb-4">
                            Cadastre-se!
                        </b-btn>

                        <b-btn variant="primary" block size="lg">
                            Login
                        </b-btn>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import config from '../config';
    import User from 'shared/entities/User';

    export default {
        head: () => ({
            title: "Home"
        }),
        data: () => ({
            users: [],
            config
        }),
        async asyncData({app}) {
            let {data: users} = await app.$api.get(`/user/`);

            return {users};
        },
        components: {},
        created() {
            this.users = this.users.map(d => new User(d));
        }
    }
</script>

<style>
</style>
