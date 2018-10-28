/*留言板模块 */
//1建立model与数据库绑定
//2初始化页面
//3更新数据
class EventHub {
    constructor() {
        this.events = {}
    }
    on(eventName, fn) {
        if (!this.events[eventName]) {
            this.events[eventName] = []
        }
        this.events[eventName].push(fn)
    }
    emit(eventName, params) {
        let fnList = this.events[eventName]
        fnList.map((fn) => {
            fn.apply(null, params)
        })
    }
}
class Model extends EventHub {
    constructor(options) {
        super()
        this.data = options.data
    }
    fetch() {
        let Message = AV.Object.extend('Message');
        let message = new Message();
        message.fetch().then((response) => {
            //console.log(response)
            this.data = response.attributes.results
            //console.log(this.data)
            this.emit('update')
        }, function (error) {
            console.error(error);
        })
    }
    save({ name, content }) {
        let Message = AV.Object.extend('Message');
        // 新建对象
        let message = new Message();
        //保存对象
        message.save({ 'name': name, 'content': content }).then((response) => {
            //console.log('保存成功')
            //console.log(response)//返回的是保存成功的那一条留言！！！
            this.fetch()
        }, function (error) {
            console.error(error);
        });
    }
}
let model = new Model({
    data: []

})

class View {
    constructor(options) {
        this.el = options.el
        this.template = options.template
        this.init()
    }
    init() {
        $(this.el).html(this.template)
    }
    render(data) {
        $(this.el).find('#messageList').empty()
        //console.log('data2')
        //console.log(data[data.length-1])
        // console.log(data[i])
        for (let i = data.length - 1; i > data.length - 6; i--) {
            if (data[i]) {
                let li = `
                <li>
                 <img src="./img/4.png">
                 <span class="name">
                     ${data[i].name}
                 </span>
                 <span class="time">
                     ${data[i].createdAt}
                 </span>
                 <p>
                     ${data[i].content}
                 </p>
                </li>`
                $(this.el).find('#messageList').append(li)
            }

        }
        // let html=this.template.replace('','')
        // $(this.el).html(html)
    }
}
let view = new View({
    el: '.messages .messageArea',
    template: `
    <div class="messagebar">
        <img src="./img/4.png" alt="头像">
        <form id="postMessageForm" class="messageForm">
            <label><input class="messageContent" type="text" name='content'></label>
            <input class="messageButton" type="submit" value="添加留言">
        </form>
    </div>
    <ol id="messageList"> 
    </ol>
    `,
})
let controller = {
    init({ view, model }) {
        this.view = view
        this.model = model
        this.fetchModel()
        this.bindEvents()

    },
    bindEvents() {
        $(this.view.el).find('.messagebar #postMessageForm')
            .on('submit', (e) => {
                e.preventDefault()
                //console.log(e)
                this.saveModel()
            })
        this.model.on('update', () => {
            this.view.render(this.model.data)
        })
    },
    fetchModel() {
        this.model.fetch()
    },
    saveModel() {
        let messageForm = $(this.view.el).find('.messagebar #postMessageForm input[name="content"]')[0]
        let content = messageForm.value
        if(!content){return}
        content=content.trim()
        content= content.replace(/[\-\_\,\!\|\~\`\(\)\#\$\%\^\&\*\{\}\:\;\"\L\<\>\?]/g, '')
        messageForm.value = ''
        //console.log(content)
        this.model.save({
            'name': '游客',
            'content': content
        })
    }
}
controller.init({ 'view': view, 'model': model })