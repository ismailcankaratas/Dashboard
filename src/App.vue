<template>

<div id="wrapper">
      <MasterNavbar />
    <div id="page-content">
      <MasterHeader />
      <router-view />
    </div><!-- page-content -->
</div><!-- wrapper -->

</template>

<script>
import MasterHeader from '@/components/Header'
import MasterNavbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {
    MasterHeader,
    MasterNavbar
  }
}
</script>
