{
    let view={
        el:"body>main>section#siteAbout>.content",
        template :`
        <img src="./img/3.jpg" alt="图片">
        <div class="text">
            <div class="hello">你好！我是一名前端工程师</div>
            <h1>邢晓栋</h1>
            <p>应聘岗位 ：前端开发工程师</p>
            <hr>
            <ul>
                <li>年龄</li>
                <li>24</li>
                <li>所在城市</li>
                <li>北京</li>
                <li>邮箱</li>
                <li>1204642219@qq.com</li>
                <li>手机</li>
                <li>18101356130</li>
            </ul>
        </div>
        ` ,
        render(){
            $(this.el).html(this.template)
        }
    }
    let model={
    
    }
    let controller={
        init(view,model){
            this.view=view
            this.model=model
            this.view.render()
        }
    }
    controller.init(view,model)
    }