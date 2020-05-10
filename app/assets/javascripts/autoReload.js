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

  let reloadMessages = function() {
    let last_message_id = $('.message:last').data("message-id");
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        let insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.messages').append(insertHTML);
        $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      }
      })
    .fail(function() {
      alert('error');
    });
  };
  setInterval(reloadMessages, 7000);
});