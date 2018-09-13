{
    let APP_ID = 'FxnVcQEIkSKp6ooFMTbSA62O-gzGzoHsz';
    let APP_KEY = 'TGEnODXJguPsOvqMq59SCHEf';
    AV.init({
        appId: APP_ID,
        appKey: APP_KEY
    });
    // // 声明类型
    // let Message = AV.Object.extend('Message');
    // // 新建对象
    // let message = new Message();
    // // 设置名称
    // message.set('name', 'name');
    // message.set('name', 'content');
    // // 设置优先级
    // //message.set('priority', 1);
    // //获取对象
    // message.fetch().then(function (messageData) {
    //     console.log('messageData');
    //     console.log(messageData.attributes);
    // }, function (error) {
    //     //console.error(error);
    // });
    //保存对象
    // message.save().then(function (messageData) {
    //     // console.log('messageData');
    //     // console.log(messageData);
    // }, function (error) {
    //     //console.error(error);
    // });
}

