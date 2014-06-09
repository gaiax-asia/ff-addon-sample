self.port.on('show', function() {
  $('#begin-count').click(function(){
    $('#result').html($('#words-to-count').countWordFrequency());
  });
});

self.port.on("hide", function(){
  $('#words-to-count').val("");
  $('#result').val("");
})

$.fn.countWordFrequency = function(){
  var $this = $(this);
  var output = {};
  var texts_list = $this.val().removeSpecialCharacters().removeExtraSpaces().trim().split(' ');
  var return_val = "";

  $.each(texts_list, function(index, word) {
    word = word.toLowerCase();
    output[word] = output[word] || 0;
    output[word] += 1
  })
  
  $.each(output, function(word,count){
    return_val += count + " " + word + "<br />";
  })

  return "<p>" + return_val + "</p>";
}

$.extend(String.prototype, {
  removeSpecialCharacters: function() {
    return this.replace(/[^a-zA-Z]/g, ' ');
  },
  removeExtraSpaces: function() {
    return this.replace(/\s+/g, ' ');
  }
})