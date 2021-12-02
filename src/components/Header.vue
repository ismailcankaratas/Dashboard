<template>
    <header>
        <div @click="Toggle()" :class="{toggle: isToggle}" class="menu">
            <IconHeaderToggle />
        </div>
        <div class="search">
            <input type="search" placeholder="Search">
        </div>
        <div class="notifications">
            <div class="bildirim">
                <IconHeaderBildirim />
            </div>
            <div class="dropdown dropdown-bildirim">
                <div class="dropdown-header">
                    <h3>Notifications</h3>
                    <div class="icon"> 
                     <IconHeaderAyar />
                    </div>
                </div>
                <ul>
                    <li>
                        <a href="">
                            <h5>Rishi Chopra</h5>
                            <p>Mauris blandit erat id nunc blandit, ac eleifend dolor pretium.</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <h5>Rishi Chopra</h5>
                            <p>Mauris blandit erat id nunc blandit, ac eleifend dolor pretium.</p>
                        </a>
                    </li>
                </ul>
            </div><!-- dropdown -->
        </div>

        <div class="profil avatar-indicators avatar-online">
            <img src="@/assets/images/avatar.jpeg" class="">
        </div>        

        <!-- Dropdown -->
    </header>
</template>

<script>
import IconHeaderToggle from '@/icons/HeaderToggle.svg'
import IconHeaderBildirim from '@/icons/HeaderBildirim.svg'
import IconHeaderAyar from '@/icons/HeaderAyar.svg'
    export default {
        name: 'MasterHeader',
        components: {
            IconHeaderToggle,
            IconHeaderBildirim,
            IconHeaderAyar
        },
        data() {
            return{
                isToggle: false
            } 
        },
        methods: {
            Toggle() {
                const navbar = document.getElementsByClassName("navbar")[0];
                this.isToggle = !this.isToggle;
                if (this.isToggle) {
                    navbar.style.marginLeft = "-16rem";
                }else {
                    navbar.style.marginLeft = "0";
                }
            }
        }
        
    }
</script>

<style lang="css" scoped>
</style>