let vm = new Vue({
    el: '#el',
    data: {
        name: '',
        zaiyuanrenshutable: {
            elem: '#zaiyuanrenshu',
            height: 120,
            url: '',
            page: false,
            cols: [[
                {
                    field: 'consultatName',
                    title: '诊室名称',
                },
                {
                    field: 'doctorName',
                    title: '医生姓名',
                },
                {
                    field: 'timeArea',
                    title: '时段',
                },
                {
                    field: 'registNum',
                    title: '挂号人数',
                }
            ]],
            data:[
                {
                    "consultatName": "测试诊室",
                    "doctorName": "测试医生",
                    "timeArea": "8",
                    "registNum": "1"
                },
                {
                    "consultatName": "测试诊室",
                    "doctorName": "测试医生",
                    "timeArea": "9",
                    "registNum": "1"
                },
            ]
        },
        table: {},
        echartList: [],
        echartsData: [
            {
                el: '#yaozhnbiyucaizhanbi',
                option: {
                    legend: {},
                    tooltip: {
                        trigger: 'axis',
                        showContent: false
                    },
                    dataset: {
                        source: [
                            ['时间', '00', '01', '02', '03', '04', '05'],
                            ['药占比', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
                            ['材料占比', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1]
                        ]
                    },
                    xAxis: {type: 'category'},
                    yAxis: {gridIndex: 0},
                    grid: {top: '55%',bottom: '10%'},
                    series: [
                        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                        {
                            type: 'pie',
                            id: 'pie',
                            radius: '30%',
                            center: ['50%', '25%'],
                            label: {
                                formatter: '{b}: {@00} ({d}%)'
                            },
                            encode: {
                                itemName: '时间',
                                value: '00',
                                tooltip: '00'
                            }
                        }
                    ]
                }
            }
        ]
    },
    mounted(){
        layui.use(['table'],() => {
            this.table = layui.table

        })
        this.renderTable()
        this.echartsData.forEach(item => {
            this.renderEcharts(item)
        })
    },
    methods: {
        renderTable(){
            this.table.render(this.zaiyuanrenshutable)
        },
        renderEcharts(obj){
            let myCharts = echarts.init(document.querySelector(obj.el))
            this.echartList.push(myCharts)
            myCharts.setOption(obj.option)
        },
        // 数据请求

    }
})