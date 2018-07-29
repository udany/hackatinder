<template>
    <div class="container my-4">
        <b-row>
            <b-col>

                <b-row>
                    <b-col offset-md="3" md="6" offset-lg="4" lg="4" class="mb-4">
                        <img src="../assets/logo.svg" alt="" style="width: 100%">

                        <h2 class="text-center">
                            Unindo <span class="rotating-text" :class="{preShow: preShowText, hide: hideText}">{{rotatingText[currentTextIndex]}}</span>
                        </h2>
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

    function sleep(t) {
        return new Promise(accept => setTimeout(accept, t));
    }


    export default {
        head: () => ({
            title: "Home"
        }),
        data: () => ({
            rotatingText: [
                "pessoas",
                "caminhos",
                "paixões",
                "destinos"
            ],
            currentTextIndex: 0,
            preShowText: false,
            hideText: false,

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
        },
        mounted() {
            setInterval(() => {
                this.changeText();
            }, 2000)
        },
        methods: {
            async changeText() {
                await sleep(1000);

                const nextIndex = this.currentTextIndex === this.rotatingText.length - 1 ? 0 : this.currentTextIndex + 1;
                this.hideText = true;

                await sleep(300);

                this.hideText = false;
                this.preShowText = true;
                this.currentTextIndex = nextIndex;

                await sleep(100);

                this.preShowText = false;
            }
        }
    }
</script>

<style lang="scss">
    .rotating-text {
        $translationDistance: 20px;

        display: inline-block;
        width: 140px;
        text-align: left;

        opacity: 1;
        transform: translateY(0);

        transition: opacity .3s, transform .3s;

        &.hide {
            opacity: 0;
            transform: translateY($translationDistance);
        }

        &.preShow {
            opacity: 0;
            transform: translateY(-$translationDistance);
        }
    }
</style>
