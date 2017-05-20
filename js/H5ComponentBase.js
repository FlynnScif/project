/*基本图文组件对像*/

var H5ComponentBase = function (name,cfg) { //不懂为什么要删掉funcgionname
	var cfg = cfg || {}; //参数，如无则空集
	var id = ('h5_c_'+Math.random()).replace('.','_');
	//把当前的组建类型添加到样式中进行标记
	var cls = 'h5_component_'+cfg.type+'h5_component_name_'+name;
	var component =$('<div class="h5_component '+cls+'" id="'+id+'">') //要有输出一个元素

	cfg.text && component.text(cfg.text);//将cfg的text传进去
	cfg.width && component.width(cfg.width/2);
	cfg.height && component.width(cfg.height/2);


	//cfg.css && component.css(cfg.css)
	//cfg.bg && component.css('backgroundImage','url('+cfg.bg+')');


	return component;

}