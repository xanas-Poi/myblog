<template>
  <article class="blog-layout" id="blog-layout">
    <!-- header start  -->
    <header>
      <nav class="blog-nav">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li>about</li>
          <li><router-link to="/admin/login">管理</router-link></li>
        </ul>
      </nav>
      <section class="blog-name">
        <h2>眺望远方</h2>
      </section>
    </header>
    <!-- header end  -->

    <!-- container start -->
    <article class="blog" id="blog">
      <router-view></router-view>

      <aside class="blog-aside">
        <section class="blog-adver">
          <h2>博主档案</h2>
          <p>Ta是一条咸鱼。。。</p>
        </section>

        <section class="blog-adver">
          <h2>博主档案</h2>
          <p>Ta是一条咸鱼。。。</p>
        </section>

        <section class="blog-adver">
          <h2>博主档案</h2>
          <p>Ta是一条咸鱼。。。</p>
        </section>
      </aside>
    </article>

    <!-- container end -->

    <!-- footer start -->
    <!-- footer end -->
  </article>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.blog-layout {
  header {
    overflow: hidden;
    zoom: 1;
    .blog-nav {
      height: 3.5rem;
      background-color: #456;
      ul > li {
        display: inline;
        color: white;
        line-height: 3.5rem;
        margin-left: 3.5rem;
        font-size: 1.3rem;
        a,
        a:hover,
        a:visited {
          color: white;
        }
      }
    }
    & .blog-name {
      width: 100%;
      height: 12rem;
      background: while;
      & h2 {
        text-align: center;
        font-size: 5rem;
        color: #1f7a65;
        font-family: "STFangsong", "Songti TC", "simsun", "宋体", Arial, serif;
        line-height: 2.5em;
      }
    }
  }

  .blog {
    overflow: hidden;
    zoom: 1;
    background-color: rgb(229, 236, 236);

    .blog-aside {
      width: 320px;
      padding-left: 20px;
      margin: 1.4rem 0 0 0;
      overflow: hidden;
      // background-color: white;
      zoom: 1;
      .blog-adver {
        background-color: white;
        height: 20rem;
        // margin-right: 20px;
        h2 {
          text-align: center;
          color: #1f7a65;
          margin: 3% 0;
          font-size: 1.3rem;
        }
      }
    }
  }
}
@media screen and (max-width: 400px) {
  #blog-layout {
    .blog-nav {
      ul > li {
        color: white;
        line-height: 3.5rem;
        margin-left: 2.5rem;
        font-size: 1rem;
        a,
        a:hover,
        a:visited {
          color: white;
        }
      }
    }
    & .blog-name {
      & h2 {
        font-size: 3rem;
        line-height: 4em;
      }
    }
  }
}

@media screen and (max-width: 960px) {
  #blog-layout {
    .blog-aside {
      display: none;
    }
  }
}

@media screen and (min-width: 961px) and (max-width: 1150px) {
  #blog-layout {
    .blog-aside {
      padding-left: 5px;
      width: 320px;
      margin-right: 0px;
      position: absolute;
      margin-left: 63%;
    }
  }
}
</style>
