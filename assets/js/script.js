AOS.init()

lightbox.option({
	'alwaysShowNavOnTouchDevices': true,
	'wrapAround': true
})

var musik = ''
var audio = document.querySelector('.audio')
if (musik) 
{
	audio.src = musik
}

function mulai() 
{
	audio.play()
	window.scrollTo(0, 0)
	var mail_section = $('#mail-section')
	$('#mail').attr('src', 'assets/img/mail.gif')
	setTimeout(function() {
		mail_section.css('opacity', 0)
		$('body').removeClass('overflow-hidden')
	}, 2000)
	setTimeout(function() {
		mail_section.removeClass('d-flex')
		mail_section.addClass('d-none')
	}, 4000)
}

function wa(a) 
{
    window.open("madebytung.html?" + a);
}

async function makeawish() 
{
    var {
        value: kado
    } = await swal.fire({
        // imageUrl: 'assets/img/banh.gif',
        html: '<img src="assets/img/banh.gif" style="width: 100px; height: 100px;">' +
            '<h3>Viết 1 điều ước nha ❣️</h3>',
        imageWidth: 400,
        imageHeight: 400,
        confirmButtonColor: '#2fe965',
        confirmButtonText: 'Gửi 💌',
        input: 'text',
        showCancelButton: false
    });

    if (kado) {
        await swal.fire({
            // imageUrl: 'assets/img/icon_wa.png',
            html: '<img src="assets/img/icon_wa.png" style="width: 100px; height: 100px;">' +
            '<h2>Đó là điều ước mà chỉ mình bông bít thui, yên tâm nha 💝. Mong điều ước đoá của bông sớm thành hiện thực nè 😍</h2>',
            confirmButtonColor: '#2fe965',
            confirmButtonText: 'Típ theo cùng nghe 1 bản nhạc siu hay nha ❤'
        }).then(() => {
            wa(kado);
        });
    } else {
        await swal.fire({
            icon: '😘',
			html:
            '<h2>Đừng bỏ qua nha, viết 1 điều ước nèo, đây là điều ước đã được bảo mật oy nha, chỉ mình bông được bít thui 😘</h2>',
        });
        makeawish();
    }
}



