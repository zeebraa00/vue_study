<template>
<div>
  <ChupaHeader/>
  <b-container>
    <b-row>
      <ChupaMenu/>
      <ChupaMain/>
    </b-row>
  </b-container>
  <ChupaFooter/>
</div>
</template>

<script>
import ChupaHeader from '../components/ChupaHeader'
import ChupaMenu from '../components/ChupaMenu'
import ChupaMain from '../components/ChupaMain'
import ChupaFooter from '../components/ChupaFooter'

export default {
  name: 'Home',
  components: {
    ChupaHeader,
    ChupaMenu,
    ChupaMain,
    ChupaFooter
  }
}
</script>

<style>
  .container{
    max-width:100%
  }
</style>
