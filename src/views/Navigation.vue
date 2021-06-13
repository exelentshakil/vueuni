<template>
    <div class="container">
        <div class="header">
        <div class="logo">
            <router-link to="/"><img src="../assets/images/logo.png" alt=""></router-link>
        </div>
        <div class="menu">
            <ul>
            <li><router-link to="/study">Study</router-link></li>
            <li><router-link to="/research">Research</router-link></li>
            <li><router-link to="/about-us">About Us</router-link></li>
            <li><router-link to="/virtual-campus">Virtual Campus</router-link></li>
            <li> <img src="../assets/images/search.png" alt=""> </li>
            </ul>
        </div>
        <div class="mobile-menu">
            <a href="#"><img src="../assets/images/hamburger.png" alt=""></a>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navigation'
}
</script>

<style>

</style>
