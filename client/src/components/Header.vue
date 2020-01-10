<template>
  <section class="blog-header">
    <div class="blog-avator">
      <img src="../assets/avator.png" alt="blog-avator">
    </div>
    <div class="blog-logo">
      <p>Xanas-Blog</p>
    </div>
    <nav class="blog-sort">
      <ul>
        <li><a href="/">博客</a></li>
        <li><a href="/">关于</a></li>
        <li><a href="/">留言</a></li>
      </ul>
    </nav>
  </section>
</template>

<script>  
export default {

};
</script>

<style lang="scss" scoped>
.blog-header{
  text-align: center;
  .blog-avator{
    img{
      margin-top: 50px;
      width: 120px;
      height: 120px;
    }
  }
  .blog-logo{
    position: relative;
    top: 30px;
    width: 180px;
    margin: 0 auto;
    // transform:rotate(-10deg);
    & p{
      font: bold;
      font-size: 24px;
      text-align: center;
      color: rgba(0, 0, 0, 0.877);
      padding: 10px;
    }
  }
  .blog-sort {
    margin-top: 50px;
    ul {
      list-style-type: none;
      padding: 10px;
      li {
        display: inline;
        font-size: 12px;
        font-weight: 800;
        margin: 20px;
        & a {
          padding: 5px;
          color: grey;
          border-radius: 5px;
          box-shadow: 1px 2px 3px 2px rgba(0, 0, 0, 0.555);
        }
        & a:hover{
          text-decoration:dotted;
        }
      }
    }
  }
}

</style>
