<template>
    <div class="container my-4">
        <b-row>
            <b-col>
                <h1 class="my-4">
                    Welcome to Sample App!!
                </h1>

                <h3>These are the registered users</h3>

                <ul>
                    <li :key="user.id" v-for="user in users">
                        {{user.name}}
                    </li>
                </ul>

                <div>
                    <b>CONFIG:</b> {{JSON.stringify(config)}}
                </div>
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
