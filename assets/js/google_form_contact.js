$(function() {
  $('#submit').on('click', function() {
    
    // name
    var name = $('#name').val() || 'none';

    // email
    var name = $('#email').val() || 'none';

    // message
    var msg = $('#message').val() || 'none';
    
  });
});

var data = {
  'entry.1624040037': name,
  'entry.1305084594': email,
  'entry.84404789': msg
};

$.ajax({
  type: 'POST',
  url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeW7q0xTD-LjFmpM8LZppQnsMGQn1l7OGyk4lcpp55TgXzIkQ/formResponse',
  data: data,
  contentType: 'application/json',
  dataType: 'jsonp',
  complete: function() {
    alert('Thank you!');
  }
});
