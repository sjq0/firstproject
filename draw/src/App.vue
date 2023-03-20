<template>
  <div>
    <Header></Header>
    <HeaderDown></HeaderDown>
    <router-view></router-view>
    <FooterTop></FooterTop>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import FooterTop from './components/FooterTop';
import HeaderDown from './components/HeaderDown'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    FooterTop,
    HeaderDown
  }
}
</script>

<style>

</style>
