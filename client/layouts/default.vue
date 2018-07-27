<template>
    <div>
        <b-navbar toggleable="md" type="dark" id="main-nav">

            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-navbar-brand to="/">Sample</b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">
                <!-- Left Side -->
                <b-navbar-nav>

                    <b-nav-item to="/">Home</b-nav-item>

                </b-navbar-nav>
            </b-collapse>
        </b-navbar>

        <nuxt/>
    </div>
</template>

<script>
    export default {
        head: () => ({
            titleTemplate: "Sample - %s"
        }),
        data: () => ({
        })
    };
</script>

<style>
    #main-nav {
        z-index:100;
        background-color: #292f35;
    }
</style>
