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
        <section class="blogger-info">
          <p>博主档案</p>
          <table border="0">
            <tr>
              <td>
                <i class="iconfont icon-xanasshuiguopingguo" style="color:red">
                </i>
                昵称：
              </td>
              <td>Xanas</td>
            </tr>
            <tr>
              <td>
                <i class="iconfont icon-xanasshuiguo7" style="color:yellow" />
                博龄：
              </td>
              <td>zero</td>
            </tr>
            <tr>
              <td>
                <i class="iconfont icon-xanasshuiguo6" style="color:green"> </i>
                名言：
              </td>
              <td>(#`O′)、咸鱼能立着生活！</td>
            </tr>
          </table>
        </section>

        <section class="aside-image">
          <img
            src="../../assets/u=1892684072,931382797&fm=26&gp=0.jpg"
            alt="photo-2"
          />
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
        transition: color 0.8s ease-in 0.3s, color 0.6s ease-out 0.3s;
        -webkit-transition: color 0.8s ease-in 0.3s, color 0.6s ease-out 0.3s;
        text-align: center;
        font-size: 5rem;
        color: #1f7a65;
        font-family: "STFangsong", "Songti TC", "simsun", "宋体", Arial, serif;
        line-height: 2.5em;
      }
      & h2:hover {
        color: white;
        content: "我要消失喽";
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
      margin-top: 2em;
      overflow: hidden;
      zoom: 1;
      .blogger-info {
        background-color: rgb(255, 255, 255);
        height: 20rem;
        // margin-right: 20px;
        p {
          font-size: 1.6rem;
          text-align: center;
          line-height: 5rem;
          color: #1f7a65;
          position: relative;
        }
        table {
          margin: 2% 0 0 6%;
          tr {
            line-height: 2rem;
            font-size: 1.2rem;
          }
        }
      }
      .aside-image {
        margin: 2rem 0 0 0;
        height: 20rem;
        img {
          width: 320px;
          height: 22rem;
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
