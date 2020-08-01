<template>
    <section class="serverd">
        <header>
            <div class="fa fa-angle-left icon" @click="back"></div>
            <div class="background-logo">
                <img src="http://wx.heyuo.com/file/static\2019-01-17\ed0e0a4e11bc4c89a02cbc3db1af43c4.jpg" alt="">
            </div>
            <div class="background-mask"></div>
            <div class="decorate-bottom">
                <img src="http://wx.heyuo.com/file/static\2019-01-17\ed0e0a4e11bc4c89a02cbc3db1af43c4.jpg" class="logo" alt="">
            </div>
        </header>
        <div class="company-name">重庆光音企业管理有限公司</div>
        <div class="company-loc">
            <img src="@/assets/location-black.png">
            <div class="province">重庆市</div>
        </div>
        <div class="content">
            <div class="dept">
                <div class="server-tags">劳务派遣</div>
                <div class="server-tags">用工风险</div>
            </div>
            <div class="company-intr">
                <div class="company-desc">
                    <div class="title">公司简介</div>
                    <div class="desc">
                        <p>重庆光音企业管理有限公司成立于2011年，是一家全国性的经营劳务派遣公司，是首家专注于规避企业用工风险、降低企业用工成本的专业化公司，公司下辖全资分支公司十几家。</p>
                        <p>公司下设专家团队：专业化的销售团队380人、98%以上本科学历；西南政法大学专家教授；劳动法及相关领域法律法规风险实战解决专家；用工风险评估专家组；高级劳动关系协调师共同组成。致力于企业合法规避用工风险和降低用工成本及和谐劳资关系，为企业经营管理保驾护航。</p>
                        <p>&nbsp;&nbsp;&nbsp;公司为更好地服务企业，与重庆最优秀的钜沃律师事务所进行合作，专注于提供劳动用工法务系统管控，以新思路、新理念、新驱动构建和谐用工关系。公司秉承“永恒创新、永远诚信”的经营理念，为客户提供及时、专业和超越预期的服务，助力企业和谐健康发展。</p>
                    </div>
                </div>
                <div class="company-desc">
                    <div class="title">服务评分</div>
                    <div style="font-size: 14px; margin-top: 10px;">已为22家单位服务</div>
                    <div style="font-size: 14px;">服务评分96%</div>
                </div>
            </div>
        </div>
        <footer>
            <a href="tel:13368250142" class="server-consult" style="margin-left: 15px; margin-right: 15px;">
                <img src="@/assets/phone.png" class="icon">
                <span>电话咨询</span>
            </a>
            <a href="https://webchat.7moor.com/wapchat.html?accessId=4d6d2090-1a3f-11e9-be2f-fdb1b1d4659b&amp;fromUrl=&amp;urlTitle=" class="server-consult" style="margin-right: 15px;">
                <img src="@/assets/message.png" class="icon">
                <span>线上咨询</span>
            </a>
        </footer>
    </section>
</template>

<script>
export default {
    name: 'Serverd',
    mounted(){
    },
    methods:{
		back(){
			this.$router.go(-1);//返回上一层
		}
    }
}
</script>

<style scoped lang="less">
.serverd{
    height: 100%;
    overflow-y: scroll;
    header{
        position: relative;
        .icon{
            position: absolute;
            display: block;
            color: #d9d9d9;
            top: 15px;
            left: 15px;
            z-index: 999;
            font-size: 30px;
            text-align: center;
            width: 30px;
            line-height: 30px;
        }
        .background-logo{
            width: 100%;
            height: 150px;
            overflow: hidden;
            img{
                display: block;
                margin: 0 auto;
                width: 100%;
                filter: blur(4px);
            }
        }
        .background-mask{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 150px;
            background-color: rgba(0,0,0,.7);
        }
        .decorate-bottom{
            height: 40px;
            width: 100%;
            position: relative;
            img{
                position: absolute;
                width: 100px;
                top: 0;
                left: 0;
                bottom: 70px;
                right: 0;
                margin: auto;
                box-shadow: 0 1px 5px #dadada;
                border-radius: 5px;
            }
        }
    }
    .company-name{
        font-size: 18px;
        line-height: 18px;
        margin: 12px auto;
        max-width: 80%;
        text-align: center;
    }
    .company-loc{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 13px;
        img{
            display: block;
            width: 14px;
            height: 14px;
            margin-right: 4px;
        }
        .province{
            font-size: 13px;
        }
    }
    .content{
        margin: 26px 15px;
        .dept{
            display: flex;
            flex-wrap: wrap;
            .server-tags{
                font-size: 15px;
                line-height: 18px;
                padding: 2px 8px;
                border-radius: 10px;
                border: 1px solid #666;
                margin-right: 13px;
                margin-bottom: 8px;
            }
        }
        .company-intr{
            padding: 24px 0 40px;
            .company-desc{
                margin-bottom: 20px;
                .title{
                    font-size: 18px;
                    line-height: 15px;
                    padding-left: 2px;
                    border-left: 2px solid #108eeb;
                }
                .desc{
                    font-size: 16px;
                    margin-top: 10px;
                }
            }
        }
    }
    footer{
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 5px 0;
        background-color: #f1f1f1;
        position: fixed;
        width: 100%;
        height: 50px;
        bottom: 0;
        left: 0;
        box-shadow: 0 -1px 5px #dadada;
        .server-consult{
            font-size: 18px;
            color: #fff;
            flex-grow: 1;
            background-color: #108eeb;
            border-radius: 5px;
            display: -webkit-box;
            display: -webkit-flex;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                display: block;
                width: 20px;
                height: 20px;
                margin-right: 10px;
            }
        }
    }
}
</style>
