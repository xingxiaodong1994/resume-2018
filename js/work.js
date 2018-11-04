{
    let view={
        el:"body>main>section#siteWorks",
        template :`
        <h2>作品集</h2>
            <div  class="worksList">
                <ul>
                    <li>
                        
                        <figure>
                            <img src="./img/music-10-29.jpg" alt="work1-picture">
                            <figcaption>
                                <h3>项目1：网易云音乐手机端(MVC)</h3>
                                <hr>
                                <div class="descript"> 
                                描述：这是一个音乐播放器项目，前端使用jquery和MVC框架。
                                功能：在线听歌，管理员可以进入后台页面上传歌曲和歌单。
                                <hr>
                                 <a href="http://xingxiaodong.com/dist/"> 手机端页面(手机端)
                                  </a>
                                  <a href="http://xingxiaodong.com/dist/admin.html"> 管理员页面(电脑端)
                                  </a>                                                              
                                </div>
                            </figcaption>
                        </figure>
                       
                    </li>
                    <li>
                        <figure>
                        <img src="./img/weixin.png" alt="work2-picture">
                        <figcaption>
                            <h3>项目2：即时通讯(react框架)</h3>
                            <hr>
                            <div class="descript"> 
                            描述：这是一个即时聊天项目，使用React框架搭建。
                            功能：可以添加好友并进行聊天。
                            <hr>
                            <a href="#">预览链接(手机端)</a>                                                             
                            </div>
                        </figcaption>
                </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="./img/huaban.jpg" alt="work1-picture">
                            <figcaption>
                                <h3>项目3：个人画板(canvas标签)</h3>
                                <hr>
                                <div class="descript">
                                    描述：这是一个个人画板，使用原生html的canvas标签。
                                    功能：可以用鼠标画画，并下载图画到本地。
                                   
                                </div>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="./img/picachu.png" alt="work1-picture">
                            <figcaption>
                                <h3>项目4：皮卡丘</h3>
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