<template>
    <section class="projectid">
		<header>
			<div class="return" @click="back">
				<i class="fa fa-angle-left"></i>
				<span>返回</span>
			</div>
			<div class="title">相关服务商</div>
            <div class="right"></div>
		</header>
        <ul class="content">
            <li>
                <img src="http://wx.heyuo.com/file/static\2019-01-17\ed0e0a4e11bc4c89a02cbc3db1af43c4.jpg" alt="" class="server-logo">
                <div class="server-desc">
                    <div class="server-basic">
                        <div class="server-name">重庆光音企业管理有限公司</div>
                        <div class="server-dept">
                            <div class="server-tags">劳务派遣</div>
                            <div class="server-tags">用工风险</div>
                        </div>
                    </div>
                    <router-link class="server-other" to="/subsidy/serverd">
                        <div class="server-evaluate">
                            <div class="server-company">已为22家单位服务</div>
                            <div class="server-rating">服务评分96%</div>
                        </div>
				        <i class="fa fa-angle-right"></i>
                    </router-link>
                    <div class="server-btns">
                        <a href="tel:13368250142" class="server-consult">
                            <img src="@/assets/phone.png" class="icon">
                            <span data-v-08d4425e="">电话咨询</span>
                        </a>
                        <a href="https://webchat.7moor.com/wapchat.html?accessId=4d6d2090-1a3f-11e9-be2f-fdb1b1d4659b&amp;fromUrl=&amp;urlTitle=" class="server-consult">
                            <img src="@/assets/message.png" class="icon">
                            <span data-v-08d4425e="">线上咨询</span>
                        </a>
                    </div>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'ProjectId',
	data () {
        return {
        }
    },
    mounted () {

    },
    methods: {
		back(){
			this.$router.go(-1);//返回上一层
		}
    }
}
</script>

<style scoped lang="less">
.projectid{
    height: 100%;
    overflow: hidden;
    header{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        width: 100%;
        height: 46px;
        display: flex;
        box-pack: justify;
        justify-content: space-between;
        align-items: center;
        height: 46px;
        padding: 0 18px;
        border-bottom: 1px solid #c7c7c7;
        background-color: #ffffff;
        .return{
            float: left;
            width: 80px;
            display: flex;
            align-items: center;
            font-size: 14px;
            color: #000;
            &:active{
                color: #000;
            }
            span{
                display: block;
            }
            .fa-angle-left{
                display: block;
                font-size: 26px;
                margin-right: 6px;
            }
        }
        .title{
            width: 100%;
            line-height: 46px;
            text-align: center;
            left: 0;
            top: 0;
            font-size: 18px;
        }
        .right{
            float: right;
            text-align: right;
            width: 80px;
            font-size: 14px;
        }
    }
    ul.content{
        padding: 56px 15px 10px;
        overflow-y: scroll;
        height: 100%;
        box-sizing: border-box;
        li{
            display: flex;
            margin-top: 10px;
            padding-bottom: 14px;
            img.server-logo{
                min-width: 110px;
                min-height: 110px;
                width: 110px;
                height: 110px;
                max-width: 110px;
                max-height: 110px;
                border-radius: 5px;
                border: 1px solid #d9d9d9;
            }
            .server-desc{
                width: 100%;
                display: flex;
                margin-left: 9px;
                flex-direction: column;
                justify-content: space-between;
                .server-basic{
                    min-height: 60px;
                    margin-bottom: 10px;
                    .server-name{
                        font-size: 16px;
                    }
                    .server-dept{
                        display: flex;
                        flex-wrap: wrap;
                        .server-tags{
                            font-size: 10px;
                            color: #666;
                            line-height: 12px;
                            white-space: nowrap;
                            margin-right: 6px;
                            margin-top: 3px;
                            padding: 2px 4px 0;
                            border-radius: 12px;
                            border: 1px solid #666;
                            box-shadow: 0 0 black;
                        }
                    }
                }
                .server-other{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .server-evaluate{
                        font-size: 12px;
                        color: #666;
                    }
                    .fa{
                        font-size: 26px;
                        color: #c7c7c7;
                    }
                }
                .server-btns{
                    display: flex;
                    justify-content: space-between;
                    margin-top: 12px;
                    .server-consult{
                        font-size: 14px;
                        color: #fff;
                        padding: 6px 8px;
                        background-color: #108eeb;
                        border-radius: 5px;
                        border: 1px solid #108eeb;
                        display: -webkit-box;
                        display: -webkit-flex;
                        display: flex;
                        align-items: center;
                        img{
                            width: 18px;
                            height: 18px;
                            margin-right: 10px;
                        }
                    }
                }
            }
        }
    }
}
</style>