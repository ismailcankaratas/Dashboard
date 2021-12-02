<template>
    <div class="navbar">
        <ul class="sidebar">
            <li class="sidebar-title">
                <router-link to="/">
                    <h1>Dashboard</h1>
                </router-link> 
            </li>
            <li class="sidebar-item">
                <router-link to="/">
                <IconNavbarHome />
                Dashboard
                </router-link>
            </li>
             <!-- sidebar-item -->
            <li class="sidebar-item">
                <div class="sidebar-heading">
                    LAYOUTS & PAGES
                </div>
             </li>
            <!-- sidebar-item -->
            <li class="sidebar-item">
                <router-link to="/">
                    <IconNavbarAuthentication />
                    Authentication
                </router-link>
            </li>
             <!-- sidebar-item -->
            <li class="sidebar-item">
                <router-link to="/">
                    <IconNavbarLayouts />
                    Layouts
                </router-link>
            </li>
             <!-- sidebar-item -->
            <li class="sidebar-item">
                <div class="sidebar-heading">
                    UI COMPONENTS
                </div>
            </li>
            <!-- sidebar-item -->
            <li class="sidebar-item">
                <router-link to="/">
                    <IconNavbarComponents />
                    Components
                </router-link>
            </li>
             <!-- sidebar-item -->
            <li class="sidebar-item">
                <router-link to="/">
                    <IconNavbarTable />
                    Tables
                </router-link>
            </li>
             <!-- sidebar-item -->
            <li class="sidebar-item">
                <router-link to="/">
                    <IconNavbarLevel />
                    Menu Level
                </router-link>
            </li>
             <!-- sidebar-item -->
        </ul>

    </div>
<!-- Navbar -->
</template>

<script>
import IconNavbarHome from '@/icons/NavbarHome.svg'
import IconNavbarAuthentication from '@/icons/NavbarAuthentication.svg'
import IconNavbarLayouts from '@/icons/NavbarLayouts.svg'
import IconNavbarTable from '@/icons/NavbarTable.svg'
import IconNavbarComponents from '@/icons/NavbarComponents.svg'
import IconNavbarLevel from '@/icons/NavbarLevel.svg'
    export default {
        name: 'MasterNavbar',
        components: {
            IconNavbarHome,
            IconNavbarAuthentication,
            IconNavbarLayouts,
            IconNavbarTable,
            IconNavbarComponents,
            IconNavbarLevel
        }
        
    }
</script>

<style lang="css" scoped>

</style>