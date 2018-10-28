{
    let view={
        el:"body>main>section#siteSkills",
        template :`
        <h2>主要技能</h2>
        <div class="content">
            <div class='skillsDescription'>
                <h3>技能描述</h3>
                <ol>
                    <li>
                        <h4>HTML 5 & CSS 3 </h4>
                        <p>能独立制作精美网页，掌握 CSS 3 动画、过渡效果、响应式等常用技术。</p>
                    </li>
                    <li>
                        <h4> 移动端页面 </h4>
                        <p>会使用 REM、vw/vh 等技术制作适配手机设备的页面。</p>
                    </li>
                    <li>
                        <h4> 前端框架 </h4>
                        <p>理解 MVC、MVVM 等思想，可以熟练使用相关的库，如 Vue、React</p>
                    </li>
                    <li>
                        <h4> jQuery </h4>
                        <p> 熟悉 jQuery 的常用 API，能使用 jQuery 制作网站、轮播、Tab 组件等。</p>
                    </li>
                    <li></li>
                    <li></li>
                </ol>
            </div>
            <div class="echarts" style="width: 450px;height:400px;"></div>
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
