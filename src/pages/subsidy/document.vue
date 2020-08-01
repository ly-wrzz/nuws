<template>
    <section class="document">
        <header>
            <div class="return" @click="back">
                <i class="fa fa-angle-left"></i>
                <span>返回</span>
            </div>
            <div class="title">项目列表</div>
            <div class="right"></div>
        </header>
        <div class="doc-container">
            <div class="doc-title">社会保险补贴</div>
            <div class="doc-base-info">
                <div>
                    <div>2018-09-02</div>
                    <div>来源：人社局</div>
                </div>
            </div>
            <div class="doc-digest">对五类人员进行社保补贴</div>
            <div class="doc-content">
                <p>
                    <strong style="background-color: rgb(20, 126, 221); color: rgb(255, 255, 255);">一、申报条件及要求</strong>
                </p>
                <p><br></p>
                <p>1、新招用男50周岁、女40周岁以上的城镇登记失业人员</p>
                <p>2、城市居民最低生活保障家庭</p>
                <p>3、城镇零就业家庭的登记失业人员</p>
                <p>4、登记失业的高校毕业生</p>
                <p>5、登记失业的化解过剩产能企业的困难职工并与其签订一年以上劳动合同的各类企业和提供公益性岗位的开发主体&nbsp;</p>
                <p><br></p>
                <p>
                    <strong style="color: rgb(255, 255, 255); background-color: rgb(20, 126, 221);">二、申报部门</strong>
                </p>
                <p><br></p>
                <p>向所在地就业和人才服务机构提出申请</p>
                <p><br></p>
                <p><span style="color: rgb(255, 255, 255); background-color: rgb(20, 126, 221);">三、补贴标准</span></p>
                <p><br></p>
                <p>按用人单位实际为招用人员缴纳的职工养老保险费、职工医疗保险（含大额医疗保险）及生育保险费、失业保险费和工伤保险费计算，个人应缴纳的社会保险费仍由本人负担。</p>
                <p><br></p>
                <p><strong style="color: rgb(255, 255, 255); background-color: rgb(20, 126, 221);">四、申报流程</strong></p>
                <p><br></p>
                <p>1.每年的3月1日—3月31日向区县创业就业和人才服务局申请上年度的用人单位社会保险补贴。（以各区县通知为准）；</p>
                <p><br></p>
                <p>2.区县就业服务管理机构审核，区县财政部门复核；</p>
                <p><br></p>
                <p>3.区县财政部门将社会保险补贴划入用人单位基本账户。</p>
            </div>
        </div>
        <footer>
            <router-link class="btn" to="/subsidy/projectId">立即办理</router-link>
        </footer>
    </section>
</template>

<script>
export default {
    name: 'Document',
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
.document{
    header{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        width: 100%;
        box-sizing: border-box;
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
    .doc-container{
        padding: 62PX 15px 70px;
        .doc-title{
            font-size: 25px;
            line-height: 30px;
            padding-bottom: 15px;
        }
        .doc-base-info{
            font-size: 14px;
            color: #999;
            display: flex;
            justify-content: space-between;
        }
        .doc-digest{
            font-size: 14px;
            color: #666;
            margin-top: 25px;
            margin-bottom: 40px;
            border-left: 4px solid #ccc;
            padding-left: 15px;
        }
    }
    footer{
        background-color: #f1f1f1;
        box-sizing: border-box;
        padding: 5px 10px;
        position: fixed;
        width: 100%;
        height: 50px;
        bottom: 0;
        left: 0;
        box-shadow: 0 -1px 5px #dadada;
        .btn{
            display: block;
            color: #fff;
            text-align: center;
            font-size: 18px;
            line-height: 40px;
            background-color: #108eeb;
            border-radius: 5px;
            width: 100%;
            border: none;
        }
    }
}
</style>