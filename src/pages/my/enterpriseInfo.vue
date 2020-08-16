<template>
	<section class="enterprise_info">
        <header>
            <div class="return" @click="back">
                <i class="fa fa-angle-left"></i>
                <span>返回</span>
            </div>
            <div class="title">企业详细资料</div>
            <div class="right"></div>
        </header>
        <article>
            <div class="input_item">
                <div class="input_box">
                    <label for="">公司名称：</label>
                    <input type="text" placeholder="请输入公司名称" v-model="form.enterprise_name">
                </div>
            </div>
            <div class="input_item">
                <div class="input_box">
                    <label for="">联系人：</label>
                    <input type="text" placeholder="请输入联系人" v-model="form.enterprise_contact_name">
                </div>
            </div>
            <div class="input_item">
                <div class="input_box">
                    <label for="">联系方式：</label>
                    <input id="" type="tel" placeholder="请输入联系方式" maxlength="11" v-model="form.enterprise_contact_phone">
                </div>
            </div>
            <div class="btn_box">
                <button class="btn" @click="submit">提交</button>
            </div>
        </article>
	</section>
</template>

<script>
export default {
	name: 'EnterpriseInfo',
	data () {
		return {
            form: {
                enterprise_contact_name: "",
                enterprise_contact_phone: "",
                enterprise_name: ""
            }
		}
	},
	mounted () {
		this.getData();
	},
	methods: {
		back(){
			this.$router.go(-1);//返回上一层
		},
		getData(){
            this.$util.get('mobile/enterprise-info').then(res=>{
                this.form = res.data;
            })
        },
        submit(){
            this.$util.get('mobile/save-enterprise', this.form).then(res=>{
                this.$vux.toast.text('提交成功');
                setTimeout(()=>{
			        this.$router.go(-1);//返回上一层
                },2000)
            })
        }
	}
}
</script>

<style scoped lang="less">
section.enterprise_info{
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
    article{
        padding: 46px 0;
        .input_item{
            padding: 18px 0 0 18px;
            background: #fff;
            .input_box{
                display: flex;
                align-items: center;
                padding: 0 0 18px 0;
                border-bottom: 1px solid #ddd;
                label{
                    display: block;
                    line-height: 26px;
                    width: 82px;
                    color: #999;
                    font-size: 15px;
                }
                input{
                    flex: 1;
                    display: block;
                    height: 26px;
                    border: none;
                    outline: none;
                    font-size: 16px;
                }
            }
            &:last-child .input_box{
                border-bottom: 0;
            }
        }
        .btn_box{
            padding: 20px;
            .btn{
                display: block;
                background-color: #38affd;
                height: 42px;
                width: 100%;
                border: none;
                color: #fff;
                border-radius: 5px;
                font-size: 18px;
            }
        }
    }
}
</style>