	function makePlaceMark(name, desc, link){
		  var placemark = new ymaps.Placemark([x,y], {
			balloonContentHeader: name,
			balloonContentBody: desc,
			balloonContentFooter : link,
		}, {
			iconLayout: 'default#image',
			iconImageHref: 'https://cdn-icons-png.flaticon.com/512/9805/9805283.png',
			iconImageSize: [100, 100],
			iconImageOffset: [-19, -44]
		});
		  map.geoObjects.add(placemark);
	  }
    function init(){
      let map = new ymaps.Map('map', {
        center: [56.838011, 60.597474],
        zoom: 13
      });

	  map.controls.remove('geolocationControl'); // удаляем геолокацию
	  map.controls.remove('searchControl'); // удаляем поиск
	  map.controls.remove('trafficControl'); // удаляем контроль трафика
	  map.controls.remove('typeSelector'); // удаляем тип
	  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
	  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
	  map.controls.remove('rulerControl'); // удаляем контрол правил


		var points = [{% for item in all  %}
				  "{{item.link}}+{{item.headline}}+{{item.description}}+{{item.xCoords}}+{{item.yCoords}}",
			  	{% endfor %}]
		points.forEach(item => {
			var divided = item.split('+')
				  var name = divided[1]
				  var description = divided[2]
				  var x = parseFloat(divided[3])
				  var y = parseFloat(divided[4])
				  var placemark = new ymaps.Placemark([x,y], {
					  balloonContentHeader: name,
					  balloonContentBody: description,
				  }, {
					  iconLayout: 'default#image',
					  iconImageHref: 'https://cdn-icons-png.flaticon.com/512/9805/9805283.png',
					  iconImageSize: [15, 15],
					  iconImageOffset: [-15,-40]
				  });
				  map.geoObjects.add(placemark);
				  placemark.events.add('click', (e) => {
					  var a = document.getElementById("button-build");
					  var sub = "amp;"
					  var link = divided[0].replaceAll(sub, "")
					  a.href = link
					  var route =  [
						{% for value in all  %}
						  "{{value.link}}+{{value.headline}}+{{value.description}}+{{value.xCoords}}+{{value.yCoords}}",
						{% endfor %}
				  	  ];

					  var geometry = []

					var properties = {
						hintContent: "Ломаная линия"
					}
					var options = {
						draggable: false,
						strokeColor: '#ff0000',
						strokeWidth: 1

					}
					for (var i = 0; i < points.length; i++){
						var point = points[i].split("+");
						var coords = [point[3], point[4]]
						console.log(coords)
						geometry.push(coords);
					}
					polyline = new ymaps.Polyline(geometry, properties, options);
					map.geoObjects.add(polyline);
					})
		})

      window.selectChanged = function(theSelect) {
		  	map.geoObjects.removeAll()
			var selectedValue = theSelect.options[theSelect.selectedIndex].value.split('+');
			var x = parseFloat(selectedValue[3]);
			var y = parseFloat(selectedValue[4]);

			map.setCenter([x,y]);
			//сюда любой html, css код сувать можно, работа фронта,
			var placemark = new ymaps.Placemark([x,y], {
				balloonContentHeader: selectedValue[2],
				balloonContentBody: selectedValue[1],
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'https://cdn-icons-png.flaticon.com/512/9805/9805283.png',
				iconImageSize: [15, 15],
				iconImageOffset: [-15,-40]
			});
			map.geoObjects.add(placemark);
			placemark.events.add('click', (e) => {
					  var a = document.getElementById("button-build");
					  var sub = "amp;"
					  var link = divided[0].replaceAll(sub, "")
					  a.href = link
					  var route =  [
						{% for value in all  %}
						  "{{value.link}}+{{value.headline}}+{{value.description}}+{{value.xCoords}}+{{value.yCoords}}",
						{% endfor %}
				  	  ];

					  var geometry = []

					var properties = {
						hintContent: "Ломаная линия"
					}
					var options = {
						draggable: false,
						strokeColor: '#ff0000',
						strokeWidth: 1

					}
					for (var i = 0; i < points.length; i++){
						var point = points[i].split("+");
						var coords = [point[3], point[4]]
						console.log(coords)
						geometry.push(coords);
					}
					polyline = new ymaps.Polyline(geometry, properties, options);
					map.geoObjects.add(polyline);
					})
      };

	  window.cityChanged = function (theSelect){
		  document.getElementById('button-build').setAttribute("href", "")
		  map.geoObjects.removeAll()
		  var selectedValue = theSelect.options[theSelect.selectedIndex].value;
		  if (selectedValue == '0')
		  {
			  var data = [
				{% for item in ekb  %}
				  "{{item.link}}+{{item.headline}}+{{item.description}}+{{item.xCoords}}+{{item.yCoords}}",
			  	{% endfor %}
			  ];
			  data.forEach(item => {
				  var divided = item.split('+')
				  var name = divided[1]
				  var description = divided[2]
				  var x = parseFloat(divided[3])
				  var y = parseFloat(divided[4])
				  var placemark = new ymaps.Placemark([x,y], {
					  balloonContentHeader: name,
					  balloonContentBody: description,
				  }, {
					  iconLayout: 'default#image',
					  iconImageHref: 'https://cdn-icons-png.flaticon.com/512/9805/9805283.png',
					  iconImageSize: [15, 15],
					  iconImageOffset: [-15,-40]
				  });
				  map.geoObjects.add(placemark);
				  placemark.events.add('click', (e) => {
					  var a = document.getElementById("button-build");
					  var sub = "amp;"
					  var link = divided[0].replaceAll(sub, "")
					  a.href = link
					  var route =  [
						{% for value in all  %}
						  "{{value.link}}+{{value.headline}}+{{value.description}}+{{value.xCoords}}+{{value.yCoords}}",
						{% endfor %}
				  	  ];

					  var geometry = []

					var properties = {
						hintContent: "Ломаная линия"
					}
					var options = {
						draggable: false,
						strokeColor: '#ff0000',
						strokeWidth: 1

					}
					for (var i = 0; i < points.length; i++){
						var point = points[i].split("+");
						var coords = [point[3], point[4]]
						console.log(coords)
						geometry.push(coords);
					}
					polyline = new ymaps.Polyline(geometry, properties, options);
					map.geoObjects.add(polyline);
					})
			  })

		  }
		  else{
			  map.geoObjects.removeAll()
			  data = [
				{% for item in district  %}
				  "{{item.link}}+{{item.headline}}+{{item.description}}+{{item.xCoords}}+{{item.yCoords}}",
			  	{% endfor %}
			  ];
			  data.forEach(item => {
				  var divided = item.split('+')
				  var name = divided[1]
				  var description = divided[2]
				  var x = parseFloat(divided[3])
				  var y = parseFloat(divided[4])
				  var placemark = new ymaps.Placemark([x,y], {
					  balloonContentHeader: name,
					  balloonContentBody: description,
				  }, {
					  iconLayout: 'default#image',
					  iconImageHref: 'https://cdn-icons-png.flaticon.com/512/9805/9805283.png',
					  iconImageSize: [15, 15],
					  iconImageOffset: [-15,-40]
				  });
				  map.geoObjects.add(placemark);

			  })
		  }
	  }
	  window.categoryChanged = function (theSelect){
			document.getElementById('button-build').setAttribute("href", "")
		  var selectedValue = theSelect.options[theSelect.selectedIndex].value;
		  if (selectedValue == '0') {
			  map.geoObjects.removeAll()
			  data = [
				{% for item in walk  %}
				  "{{item.link}}+{{item.headline}}+{{item.description}}+{{item.xCoords}}+{{item.yCoords}}",
			  	{% endfor %}
			  ];
			  data.forEach(item => {
				  var divided = item.split('+')
				  var name = divided[1]
				  var description = divided[2]
				  var x = parseFloat(divided[3])
				  var y = parseFloat(divided[4])
				  var placemark = new ymaps.Placemark([x,y], {
					  balloonContentHeader: name,
					  balloonContentBody: description,
				  }, {
					  iconLayout: 'default#image',
					  iconImageHref: 'https://cdn-icons-png.flaticon.com/512/9805/9805283.png',
					  iconImageSize: [15, 15],
					  iconImageOffset: [-15,-40]
				  });
				  map.geoObjects.add(placemark);
				  placemark.events.add('click', (e) => {
					  var a = document.getElementById("button-build");
					  var sub = "amp;"
					  var link = divided[0].replaceAll(sub, "")
					  a.href = link
					  var route =  [
						{% for value in all  %}
						  "{{value.link}}+{{value.headline}}+{{value.description}}+{{value.xCoords}}+{{value.yCoords}}",
						{% endfor %}
				  	  ];

					  var geometry = []

					var properties = {
						hintContent: "Ломаная линия"
					}
					var options = {
						draggable: false,
						strokeColor: '#ff0000',
						strokeWidth: 1

					}
					for (var i = 0; i < points.length; i++){
						var point = points[i].split("+");
						var coords = [point[3], point[4]]
						console.log(coords)
						geometry.push(coords);
					}
					polyline = new ymaps.Polyline(geometry, properties, options);
					map.geoObjects.add(polyline);
					})
			  })
		  }
		  else if (selectedValue == '1'){
				map.geoObjects.removeAll()
			  	data = [
					{% for item in car  %}
					  "{{item.link}}+{{item.headline}}+{{item.description}}+{{item.xCoords}}+{{item.yCoords}}",
					{% endfor %}
				  ];
				data.forEach(item => {
				  var divided = item.split('+')
				  var name = divided[1]
				  var description = divided[2]
				  var x = parseFloat(divided[3])
				  var y = parseFloat(divided[4])
				  var placemark = new ymaps.Placemark([x,y], {
					  balloonContentHeader: name,
					  balloonContentBody: description,
				  }, {
					  iconLayout: 'default#image',
					  iconImageHref: 'https://cdn-icons-png.flaticon.com/512/9805/9805283.png',
					  iconImageSize: [15, 15],
					  iconImageOffset: [-15,-40]
				  });
				  map.geoObjects.add(placemark);
				  placemark.events.add('click', (e) => {
					  var a = document.getElementById("button-build");
					  var sub = "amp;"
					  var link = divided[0].replaceAll(sub, "")
					  a.href = link
					  var route =  [
						{% for value in all  %}
						  "{{value.link}}+{{value.headline}}+{{value.description}}+{{value.xCoords}}+{{value.yCoords}}",
						{% endfor %}
				  	  ];

					  var geometry = []

					var properties = {
						hintContent: "Ломаная линия"
					}
					var options = {
						draggable: false,
						strokeColor: '#ff0000',
						strokeWidth: 1

					}
					for (var i = 0; i < points.length; i++){
						var point = points[i].split("+");
						var coords = [point[3], point[4]]
						console.log(coords)
						geometry.push(coords);
					}
					polyline = new ymaps.Polyline(geometry, properties, options);
					map.geoObjects.add(polyline);
					})
			  })
		  }
		  else{
				map.geoObjects.removeAll()
			  	data = [
					{% for item in publicT  %}
					  "{{item.link}}+{{item.headline}}+{{item.description}}+{{item.xCoords}}+{{item.yCoords}}",
					{% endfor %}
				  ];
				data.forEach(item => {
				  var divided = item.split('+')
				  var name = divided[1]
				  var description = divided[2]
				  var x = parseFloat(divided[3])
				  var y = parseFloat(divided[4])
				  var placemark = new ymaps.Placemark([x,y], {
					  balloonContentHeader: name,
					  balloonContentBody: description,
				  }, {
					  iconLayout: 'default#image',
					  iconImageHref: 'https://cdn-icons-png.flaticon.com/512/9805/9805283.png',
					  iconImageSize: [15, 15],
					  iconImageOffset: [-15,-40]
				  });
				  map.geoObjects.add(placemark);
				  placemark.events.add('click', (e) => {
					  var a = document.getElementById("button-build");
					  var sub = "amp;"
					  var link = divided[0].replaceAll(sub, "")
					  a.href = link
					  var route =  [
						{% for value in all  %}
						  "{{value.link}}+{{value.headline}}+{{value.description}}+{{value.xCoords}}+{{value.yCoords}}",
						{% endfor %}
				  	  ];

					  var geometry = []

					var properties = {
						hintContent: "Ломаная линия"
					}
					var options = {
						draggable: false,
						strokeColor: '#ff0000',
						strokeWidth: 1

					}
					for (var i = 0; i < points.length; i++){
						var point = points[i].split("+");
						var coords = [point[3], point[4]]
						console.log(coords)
						geometry.push(coords);
					}
					polyline = new ymaps.Polyline(geometry, properties, options);
					map.geoObjects.add(polyline);
					})
			  })
		  }
	  }

    }
    ymaps.ready(init);
