{
    let view={
        el:"body>main>section#siteWorks",
        template :`
        <h2>作品集</h2>
            <div  class="worksList">
                <ul>
                    <li>
                        <figure>
                            <img src="./img/work1.jpg" alt="work1-picture">
                            <figcaption>
                                <h3>项目名称：项目xxx</h3>
                                <hr>
                                <div class="descript">
                                    描述：这是关于xxxxx的一个项目，使用了xxxx技术;取得了xxxxxx的效果。
                                    <br> 亮点：xxxx.
                                </div>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="./img/work1.jpg" alt="work1-picture">
                            <figcaption>
                                <h3>项目名称：项目xxx</h3>
                                <hr>
                                <div class="descript">
                                    描述：这是关于xxxxx的一个项目，使用了xxxx技术;取得了xxxxxx的效果。
                                    <br> 亮点：xxxx.
                                </div>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="./img/work1.jpg" alt="work1-picture">
                            <figcaption>
                                <h3>项目名称：项目xxx</h3>
                                <hr>
                                <div class="descript">
                                    描述：这是关于xxxxx的一个项目，使用了xxxx技术;取得了xxxxxx的效果。
                                    <br> 亮点：xxxx.
                                </div>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="./img/work1.jpg" alt="work1-picture">
                            <figcaption>
                                <h3>项目名称：项目xxx</h3>
                                <hr>
                                <div class="descript">
                                    描述：这是关于xxxxx的一个项目，使用了xxxx技术;取得了xxxxxx的效果。
                                    <br> 亮点：xxxx.
                                </div>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="./img/work1.jpg" alt="work1-picture">
                            <figcaption>
                                <h3>项目名称：项目xxx</h3>
                                <hr>
                                <div class="descript">
                                    描述：这是关于xxxxx的一个项目，使用了xxxx技术;取得了xxxxxx的效果。
                                    <br> 亮点：xxxx.
                                </div>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="./img/work1.jpg" alt="work1-picture">
                            <figcaption>
                                <h3>项目名称：项目xxx</h3>
                                <hr>
                                <div class="descript">
                                    描述：这是关于xxxxx的一个项目，使用了xxxx技术;取得了xxxxxx的效果。
                                    <br> 亮点：xxxx.
                                </div>
                            </figcaption>
                        </figure>
                    </li>
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