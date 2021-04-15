 var menuData = [{title:"item-1",id:1,pid:0,url:"#"},{title:"item-2",id:2,pid:0,url:"#"},{title:"item-3",id:3,pid:1,url:"#"},
		                {title:"item-4",id:4,pid:1,url:"#"},{title:"item-5",id:5,pid:2,url:"#"},{title:"item-6",id:6,pid:3,url:"#"}];
		function createMenu(pId){  		 
			 if(pId == null){
			    pId = 0;
			 }
			 if(event){
				 event.stopPropagation();
				 let targetElement =  event.currentTarget;
				 let childMenu = targetElement.getElementsByTagName("UL");
				 if(childMenu.length == 0 ){ 
					childMenu = document.createElement("UL");
					createMenuItem(pId,childMenu);
					targetElement.appendChild(childMenu);
				 }else{
					targetElement.removeChild(childMenu[0]);
				}
			}else{
			     let ul = document.getElementById("menu");
				 createMenuItem(pId,ul);		
			}
		}
		function createMenuItem(pId,pTag){
		     menuData.forEach(function(item){
					 if(item.pid==pId){
						let li = document.createElement("LI");
						li.addEventListener("click",function(){ createMenu(item.id)},false); 					
						let a = document.createElement("A");
						a.innerText = item.title;
						a.href= item.url;
						li.appendChild(a);
						pTag.appendChild(li);
					 }
			    });
		}
