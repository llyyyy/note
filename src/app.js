<meta charset="utf-8">

function autoSave(event){
	//contents 내용 가져오기
	var value = $('#contents').val();
	window.localStorage.setItem('note_contents',value);
	// console.log(value);
}

function autoLoad(event){
	$('#contents').val(window.localStorage.getItem('note_contents'));
}


// function()으로 익명함수주는 것 보다 이게 낫다.
$('$contents').on('keyup',autoSave);

// 저장된 text 불러오기
$(window).on('load',autoLoad);