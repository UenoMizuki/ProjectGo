console.log("hello");

let images = []
for(var i=0;i<images.length;i++){
    var img_element = document.createElement('img');
    console.log(images[i]);
    img_element.src = images[i]; // 画像パス
    img_element.alt = 'a'+i; // 代替テキスト
    img_element.height = 300 // 縦サイズ（px）
    img_element.width = 200; // 横サイズ（px）
    var content_area = document.getElementById("content_area");
    content_area.appendChild(img_element);
}