{
let view={
    el:"body>main>section#siteAbout>.footer",
    template :`
    <a href="#">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-github"></use>
        </svg>
    </a>
    <a href="#">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-weibo"></use>
        </svg>
    </a>
    <a href="#">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-weixin-copy"></use>
        </svg>
    </a>
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