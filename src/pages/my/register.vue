<template>
	<section class="register">
        <header>
            <div class="return" @click="back">
                <i class="fa fa-angle-left"></i>
                <span>返回</span>
            </div>
            <div class="title">绑定手机号</div>
            <div class="right"></div>
        </header>
        <article>
            <div>
                <input type="tel" maxlength="11" v-model="phone" placeholder="请输入手机号">
                <button class="btn" @click="submit">绑定</button>
            </div>
        </article>
	</section>
</template>

<script>
export default {
	name: 'Register',
	data () {
		return {
            phone: ''
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
        },
        submit(){
            this.$util.get('mobile/bind', {
                phone: this.phone
            }).then(res=>{
                this.$vux.toast.text('绑定成功');
			    localStorage.setItem("newsIsBind",1);
                setTimeout(()=>{
			        this.$router.go(-1);//返回上一层
                },2000)
            })
        }
	}
}
</script>

<style scoped lang="less">
section.register{
    height: 100vh;
    background-color: #f1f1f1;
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
        padding: 0 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        div {
            width: 80%;
            margin-bottom: 30%;
            input{
                display: block;
                background-color: #ffffff;
                border: none;
                width: 100%;
                height: 40px;
                border-radius: 40px;
                outline: none;
                padding: 0 20px;
                box-sizing: border-box;
            }
            button{
                display: block;
                margin-top: 20px;
                background-color: #147edd;
                border: none;
                width: 100%;
                height: 40px;
                border-radius: 40px;
                color: #fff;
            }
        }
    }
}
</style>