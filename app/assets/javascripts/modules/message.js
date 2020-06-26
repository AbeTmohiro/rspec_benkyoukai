	
$(function(){
  function buildHTML(message){
      let Image = (message.image !== null) ? `<img class="Message__image" src="${message.image}"></img>` : ''
      let html = 
        `<div class="message" data-message-id=${message.id}>
          <div class="message__upper-info">
            <div class="message__upper-info__talker">
              ${message.user_name}
            </div>
            <div class="message__upper-info__date">
              ${message.created_at}
            </div>
          </div>
            <p class="message__text">
              ${message.content}
            </p>
            ${Image}
          
        </div>`
      return html;
  };
  
  $('.new-message').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){

      let html = buildHTML(data);
      $('.message-list').append(html);      
      $('form')[0].reset();
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    })
    .always(function(){
      $('.submit-btn').prop('disabled',false)
    });
  });
});