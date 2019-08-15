<template>
  <b-col cols="10" id="main">
    <b-table striped hover :items="notice" :fields="fields"></b-table>
    chupamain <br/><br/><br/><br/>
  </b-col>
  
</template>

<script>
export default {
  data() {
    return {
      fields: {},
      notice: []
    }
  },
  created: async function () {
    const a = await this.$axios.get('/rest/board/list/notice')
    this.notice = a.data.aaData
    this.fields = {
        'category' : {
          label : "분류"
        },
        'title' : {
           label : "제목"      
        },
        'time' : {
          label : "날짜"          
        },
        'views' : {
          label : "조회"          
        }
      }
    }
}
</script>

<style>
  #main {
    background-color:greenyellow
  }
</style>