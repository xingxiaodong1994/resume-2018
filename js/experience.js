{
    let view={
        el:"body>main>section#siteExperience",
        template :`
        <h2>个人经历</h2>
        <div class="timeline">
            <ol>
                <li>
                    <div class="content">
                        <div class="timePoint1"></div>
                        <div class="timePoint2"></div>
                        <div class="timePoint3"></div>
                        <div class="timePoint4">出生</div>
                        <div class="timePoint5">
                            1994.7
                        </div>
                        <div class="text">
                            出生在山西省晋城市
                        </div>
                    </div>
                </li>
                <li>
                    <div class="content">
                        <div class="timePoint1"></div>
                        <div class="timePoint2"></div>
                        <div class="timePoint3"></div>
                        <div class="timePoint4">学习</div>
                        <div class="timePoint5">
                            2012.9-2016.6
                        </div>
                        <div class="text">
                            本科就读于北京交通大学，
                            光信息科学与技术专业
                        </div>
                    </div>
                </li>
                <li>
                    <div class="content">
                        <div class="timePoint1"></div>
                        <div class="timePoint2"></div>
                        <div class="timePoint3"></div>
                        <div class="timePoint4">工作</div>
                        <div class="timePoint5">
                            2016.6-2018.6
                        </div>
                        <div class="text">
                            就职于北京首量科技有限公司，
                            做原料检验工作。
                        </div>
                    </div>
                </li>
                <li>
                    <div class="content">
                        <div class="timePoint1"></div>
                        <div class="timePoint2"></div>
                        <div class="timePoint3"></div>
                        <div class="timePoint4">转行</div>
                        <div class="timePoint5">
                            2018.4-至今
                        </div>
                        <div class="text">
                            学习前端知识半年，
                            打算找一份前端开发工作
                        </div>
                    </div>
                </li>
            </ol>
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