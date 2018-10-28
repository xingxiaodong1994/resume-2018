let view={
    el:"body>header",
    template :`
    <nav>
        <div class="logo">
            <span>XXD</span>
            <span>1994</span>
        </div>
        <ul>
            <li><a href="#siteAbout">关于</a></li>
            <li><a href="#siteSkills">技能</a></li>
            <li><a href="#siteWorks">作品</a></li>
            <li><a href="#siteExperience">个人经历</a></li>
            <li><a href="#siteMessage">留言板</a></li>
        </ul>
    </nav>
    <div class="bgImg">
        <div class="mask"></div>
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