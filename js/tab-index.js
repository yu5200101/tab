
~function () {
    function ChangeTab(tabBox,options) {
        //=>参数初始化
        var _default = {
            initIndex : 0,
            eventType : 'click'
        };
        for (var key in options) {
            if(options.hasOwnProperty(key)){
                _default[key] = options[key];
            }
        }
        this.initIndex = _default.initIndex;
        this.eventType = _default.eventType;
        //=>技巧：为了保证这些值都能在类的任何方法中都可以调用，我们一般都把信息值存放在当前实例上（this）：只要保证每个方法中的this都是当前类的实例，我们就可以获取这些值了
        this.tabBox = tabBox;
        //=>开始实现选项卡的功能
        /*ChangeTab.prototype.init.call(this);
        return this.init();*/
        this.init();
    }
    ChangeTab.prototype = {
        constructor:ChangeTab,
        change:function () {
            /*var tabBox = this.tabBox,
                tab = this.tab,
                tabList =this.tabList,
                conList = this.tabList,
                prevIndex = this.prevIndex,
                _this = this;
            for (var i = 0; i < tabList.length; i++) {
                tabList[i].myIndex = i;
                tabList[i].onclick = function () {
                    //=>this:当前点击的这个li，不是实例_this是实例
                    tabList[prevIndex].className = '';
                    conList[prevIndex].className = 'con';
                    this.className = 'select';
                    conList[this.myIndex] = 'con select';
                    _this.prevIndex = prevIndex = this.myIndex;
                }
            }*/
            var _this = this;
            for (var i = 0; i < _this.tabList.length; i++) {
                _this.tabList[i].myIndex = i;
                _this.tabList[i]['on' + _this.eventType] = function () {
                    //=>this:当前点击的这个li，不是实例_this是实例
                    _this.tabList[_this.prevIndex].className = '';
                    _this.conList[_this.prevIndex].className = 'con';
                    this.className = 'select';
                    _this.conList[this.myIndex].className = 'con select';
                    _this.prevIndex = this.myIndex;
                }
            }
        },
        clear:function () {
            //=>清空所有的样式类
            for (var i = 0; i < this.tabList.length; i++) {
                this.tabList[i].className = '';
                this.conList[i].className = 'con';
            }
            //=>初始化默认的选中页卡
            this.tabList[this.initIndex].className = 'select';
            this.conList[this.initIndex].className = 'con select';
        },
        init:function () {
            //=>获取当前页卡区域中的元素（li和div）
            this.tab = utils.children(this.tabBox,'ul')[0];
            this.tabList =utils.children(this.tab,'li');
            this.conList = utils.children(this.tabBox,'div');
            //=>实现页卡切换
            this.clear();
            this.prevIndex = this.initIndex;
            this.change();
        }
    };
    window.CT = ChangeTab;
}();

var tabBoxList = utils.getElementsByClassName('tabBox');
/*
for (var i = 0; i < tabBoxList.length; i++) {
    new CT(tabBoxList[i]);
}*/
new CT(tabBoxList[0]);
new CT(tabBoxList[1],{
    eventType : 'mouseover'
});
new CT(tabBoxList[2],{
    initIndex : 2,
    eventType : 'mouseover'
});
//=>插件 样式和JS写好了 以后直接用就行了 iscroll swiper
//=>组件：UI组件 bootstrap  样式和结构和JS写好了
//=>类库：Jquery 提供一些常用的方法 工具包 zepto
//=>框架 vue react 具有自己独有的设计程序思想