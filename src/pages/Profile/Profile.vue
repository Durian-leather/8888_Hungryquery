<template>
  <div>
 <section class="profile">
        <header class="header">
          <a class="header_title">
            <span class="header_title_text">我的</span>
          </a>
        </header>
        <section class="profile-number">
          <router-link to="/login" class="profile-link">
          <div class="profile_image">
              <i class="iconfont icon-person"></i>
            </div>
            <div class="user-info">
              <p class="user-info-top">登录/注册</p>
              <p>
                <span class="user-icon">
                  <i class="iconfont icon-shouji icon-mobile"></i>
                </span>
                <span class="icon-mobile-number">暂无绑定手机号</span>
              </p>
            </div>
            <span class="arrow">
              <i class="iconfont icon-jiantou1"></i>
            </span>
          
          </router-link>
        </section>
        <section class="profile_info_data border-1px">
          <ul class="info_data_list">
            <a href="javascript:" class="info_data_link">
              <span class="info_data_top"><span>0.00</span>元</span>
              <span class="info_data_bottom">我的余额</span>
            </a>
            <a href="javascript:" class="info_data_link">
              <span class="info_data_top"><span>0</span>个</span>
              <span class="info_data_bottom">我的优惠</span>
            </a>
            <a href="javascript:" class="info_data_link">
              <span class="info_data_top"><span>0</span>分</span>
              <span class="info_data_bottom">我的积分</span>
            </a>
          </ul>
        </section>
        <section class="profile_my_order border-1px">
          <!-- 我的订单 -->
          <a href='javascript:' class="my_order">
            <span>
              <i class="iconfont icon-order-s"></i>
            </span>
            <div class="my_order_div">
              <span>我的订单</span>
              <span class="my_order_icon">
                <i class="iconfont icon-jiantou1"></i>
              </span>
            </div>
          </a>
          <!-- 积分商城 -->
          <a href='javascript:' class="my_order">
            <span>
              <i class="iconfont icon-jifen"></i>
            </span>
            <div class="my_order_div">
              <span>积分商城</span>
              <span class="my_order_icon">
                <i class="iconfont icon-jiantou1"></i>
              </span>
            </div>
          </a>
          <!-- 硅谷外卖会员卡 -->
          <a href="javascript:" class="my_order">
            <span>
              <i class="iconfont icon-vip"></i>
            </span>
            <div class="my_order_div">
              <span>硅谷外卖会员卡</span>
              <span class="my_order_icon">
                <i class="iconfont icon-jiantou1"></i>
              </span>
            </div>
          </a>
        </section>
        <section class="profile_my_order border-1px">
          <!-- 服务中心 -->
          <a href="javascript:" class="my_order">
            <span>
              <i class="iconfont icon-fuwu"></i>
            </span>
            <div class="my_order_div">
              <span>服务中心</span>
              <span class="my_order_icon">
                <i class="iconfont icon-jiantou1"></i>
              </span>
            </div>
          </a>
        </section>
      </section>
      
  </div>
</template>
<script>
export default{}
</script>
<style lang='stylus' rel='stylesheet/stylus'>@import '../../common/stylus/mixins.styl';

.header
          background-color #02a774
          position fixed
          z-index 100
          left 0
          top 0
          width 100%
          height 45px
          .header_search
            position absolute
            left 15px
            top 50%
            transform translateY(-60%)
            width 10%
            height 50%
            .icon-sousuo
              font-size 25px
              color #fff
          .header_title
            position absolute
            top 50%
            left 50%
            transform translate(-50%, -50%)
            width 50%
            color #fff
            text-align center
            .header_title_text
              font-size 20px
              color #fff
              display block
          .header_login
            font-size 14px
            color #fff
            position absolute
            right 15px
            top 50%
            transform translateY(-50%)
            .header_login_text
              color #fff
    &.profile 
    
        width 100%
          
        .profile-number
          margin-top 45.5px
          .profile-link
            clearFix()
            position relative
            display block
            background #02a774
            padding 20px 10px
            .profile_image
              float left
              width 60px
              height 60px
              border-radius 50%
              overflow hidden
              vertical-align top
              .icon-person
                background #e4e4e4
                font-size 62px
            .user-info
              float left
              margin-top 8px
              margin-left 15px
              p
                font-weight: 700
                font-size 18px
                color #fff
                &.user-info-top
                  padding-bottom 8px
                .user-icon
                  display inline-block
                  margin-left -15px
                  margin-right 5px
                  width 20px
                  height 20px
                  .icon-mobile
                    font-size 30px
                    vertical-align text-top
                .icon-mobile-number
                  font-size 14px
                  color #fff
            .arrow
              width 12px
              height 12px
              position absolute
              right 15px
              top 40%
              .icon-jiantou1
                color #fff
                font-size 5px
        .profile_info_data
          bottom-border-1px(#e4e4e4)
          width 100%
          background #fff
          overflow hidden
          .info_data_list
            clearFix()
            .info_data_link
              float left
              width 33%
              text-align center
              border-right 1px solid #f1f1f1
              .info_data_top
                display block
                width 100%
                font-size 14px
                color #333
                padding 15px 5px 10px
                span
                  display inline-block
                  font-size 30px
                  color #f90
                  font-weight 700
                  line-height 30px
              .info_data_bottom
                display inline-block
                font-size 14px
                color #666
                font-weight 400
                padding-bottom 10px
            .info_data_link:nth-of-type(2)
              .info_data_top
                span
                  color #ff5f3e
            .info_data_link:nth-of-type(3)
              border 0
              .info_data_top
                span
                  color #6ac20b
        .profile_my_order
          top-border-0.5px(#e4e4e4)
          margin-top 10px
          background #fff
          .my_order
            display flex
            align-items center
            padding-left 15px
            >span
              display flex
              align-items center
              width 20px
              height 20px
              >.iconfont
                margin-left -10px
                font-size 30px
              .icon-order-s
                color #02a774
              .icon-jifen
                color #ff5f3e
              .icon-vip
                color #f90
              .icon-fuwu
                color #02a774
            .my_order_div
              width 100%
              border-bottom 1px solid #f1f1f1
              padding 18px 10px 18px 0
              font-size 16px
              color #333
              display flex
              justify-content space-between
              span
                display block
              .my_order_icon
                width 10px
                height 10px
                .icon-jiantou1
                  color #bbb
                  font-size 10px
>.off
  display none
>.on
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  z-index 200
  .loginContainer
    width 100%
    height 100%
    background #fff
    .loginInner
      padding-top 60px
      width 80%
      margin 0 auto
      .login_header
        .login_logo
          font-size 40px
          font-weight bold
          color #02a774
          text-align center
        .login_header_title
          padding-top 40px
          text-align center
          >a
            color #333
            font-size 14px
            padding-bottom 4px
            &:first-child
              margin-right 40px
            &.on
              color #02a774
              font-weight 700
              border-bottom 2px solid #02a774
      .login_content
        >form
          >div
            display none
            &.on
              display block
            input
              width 100%
              height 100%
              padding-left 10px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid #02a774
            .login_message
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .get_verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 14px
                background transparent
            .login_verification
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .switch_button
                font-size 12px
                border 1px solid #ddd
                border-radius 8px
                transition background-color .3s,border-color .3s
                padding 0 6px
                width 30px
                height 16px
                line-height 16px
                color #fff
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                &.off
                  background #fff
                  .switch_text
                    float right
                    color #ddd
                &.on
                  background #02a774
                >.switch_circle
                  //transform translateX(27px)
                  position absolute
                  top -1px
                  left -1px
                  width 16px
                  height 16px
                  border 1px solid #ddd
                  border-radius 50%
                  background #fff
                  box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                  transition transform .3s
            .login_hint
              margin-top 12px
              color #999
              font-size 14px
              line-height 20px
              >a
                color #02a774
          .login_submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border-radius 4px
            background #4cd96f
            color #fff
            text-align center
            font-size 16px
            line-height 42px
            border 0
        .about_us
          display block
          font-size 12px
          margin-top 20px
          text-align center
          color #999
      .go_back
        position absolute
        top 5px
        left 5px
        width 30px
        height 30px
        >.iconfont
          font-size 20px
          color #999

</style>