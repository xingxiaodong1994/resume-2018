// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.querySelector('.skills .echarts'));

// 指定图表的配置项和数据
option = {
    title: {
        text: ''
    },
    tooltip: {},
    legend: {
        data: ['我的技能']
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        indicator: [
            { name: 'Html5 & Css3', max: 100 },
            { name: 'Javascript', max: 100 },
            { name: 'Vue', max: 100 },
            { name: 'React', max: 100 },
            { name: 'jQuery', max: 100 },
            { name: 'Http', max: 100 }
        ]
    },
    series: [{
        name: '技能掌握程度',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
            {
                value: [80, 90, 50, 60, 60, 70],
                name: '技能掌握程度'
            }
        ]
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);