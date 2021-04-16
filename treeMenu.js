/*
   author:雋槑
   version：0.0.0.1
   descript: create a dynamic tree menu
   data struct:array of json object. pid(parent item id) 
   html emement container: <ul id="menu"></ul>
   */
var menuData = [{title:"item-1",id:1,pid:0,url:"#"},{title:"item-2",id:2,pid:0,url:"#"},{title:"item-3",id:3,pid:1,url:"#"},
		                {title:"item-4",id:4,pid:1,url:"#"},{title:"item-5",id:5,pid:2,url:"#"},{title:"item-6",id:6,pid:3,url:"#"}];
                /*
		    create menucontainer and call createMenuItem function. pid default is 0,create top level menu.
		*/
		function createMenu(pId){  		 
			 if(pId == null){
			    pId = 0;
			 }
			 if(event){  //处理单击事件(click). 
				 event.stopPropagation();  //停止事件继续传递
				 let targetElement =  event.currentTarget;  //得到当前被点击的元素
				 let childMenu = targetElement.getElementsByTagName("UL");  //判断事件元素子元素中是否包含'UL'
				 if(childMenu.length == 0 ){ //如果事件触发元素的子元素中不包含'UL'
					childMenu = document.createElement("UL");  //创建子元素
					createMenuItem(pId,childMenu);   //创建子菜单
					targetElement.appendChild(childMenu); //将子菜单添加到事件元素之下
				 }else{  //如果事件触发元素的子元素中包含'UL'则先删除'ul'(隐藏子菜单的效果)
					targetElement.removeChild(childMenu[0]);
				}
			}else{   //创建顶层菜单项
			     let ul = document.getElementById("menu"); 
			     createMenuItem(pId,ul);		
			}
		}
               /*
	            create menu item.
		    arguments：pId parent item id ;  pTag parent html element 
		 */
		function createMenuItem(pId,pTag){
		     menuData.forEach(function(item){  //遍历所有数据，找到所有子元素。
					 if(item.pid==pId){
						let li = document.createElement("LI");
						li.addEventListener("click",function(){ createMenu(item.id)},false); //菜单项单击事件触发createMenu函数，创建下级菜单或删除（即隐藏）下级菜单。					
						let a = document.createElement("A");
						a.innerText = item.title;
						a.href= item.url;
						li.appendChild(a);
						pTag.appendChild(li);
					 }
			    });
		}

 createMenu();
