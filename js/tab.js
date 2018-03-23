/*
var tabBox = document.getElementById('tabBox'),
    tabList = tabBox.getElementsByTagName('li'),
    conList = tabBox.getElementsByTagName('div');
var _previousIndex = 0;//记录上一次选中li的索引，初始选中第一个，所以默认值是0
for (var i = 0; i < tabList.length; i++) {
    var curTab = tabList[i];
    curTab.myIndex = i;
    curTab.onclick = function () {
        tabList[_previousIndex].className = null;
        conList[_previousIndex].className = 'con';
        this.className = 'select';
        conList[this.myIndex].className = 'con select';
        _previousIndex = this.myIndex;
    }
}*/
/*
var tabBox = document.getElementById('tabBox'),
    tab = utils.getElementsByClassName('tab',tabBox)[0],
    tabList = utils.children(tab,'li'),
    conList = utils.children(tabBox,'div'),
    _prevIndex = 0;
for (var i = 0; i < tabList.length; i++) {
    tabList[i].myIndex = i;
    tabList[i].onclick = function () {
        tabList[_prevIndex].className = null;
        conList[_prevIndex].className = 'con';
        this.className = 'select';
        conList[this.myIndex].className = 'con select';
        _prevIndex = this.myIndex;
    }
}*/

~function () {
    var tabBoxList = utils.getElementsByClassName('tabBox');
    for (var i = 0; i < tabBoxList.length; i++) {
        change(tabBoxList[i]);
    }

    function change(tabBox) {
        var tab = utils.getElementsByClassName('tab', tabBox)[0],
            tabList = utils.children(tab, 'li'),
            conList = utils.children(tabBox, 'div'),
            _prevIndex = 0;
        for (var i = 0; i < tabList.length; i++) {
            tabList[i].myIndex = i;
            tabList[i].onclick = function () {
                tabList[_prevIndex].className = null;
                conList[_prevIndex].className = 'con';
                this.className = 'select';
                conList[this.myIndex].className = 'con select';
                _prevIndex = this.myIndex;
            }
        }
    }
}();