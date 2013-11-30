window.onload = function(){
  'use strict';
  var Audiofile = {
    parser : function(){
      var info = document.querySelector('[data-piece]');
      this.output = {
        author : info.dataset.author,
        key: info.dataset.key,
        beatType: info.dataset.beatType,
        beatLength: info.dataset.beatLength,
        bpm: info.dataset.bpm,
        title: info.dataset.piece,
      };
      [].forEach.call(
          document.querySelectorAll('[data-measure]'),
        function(el){
          //console.log(el);
        }
      );
    },
    canvas : function(){
      document.querySelector('#author span').innerHTML = this.output.author
      document.querySelector('#key span').innerHTML = this.output.key
      document.querySelector('#beatType span').innerHTML = this.output.beatType
      document.querySelector('#beatLength span').innerHTML = this.output.beatLength
      document.querySelector('#bpm span').innerHTML = this.output.bpm
      document.querySelector('#title span').innerHTML = this.output.title
    },
    speaker : function(){
      console.log('coming to you from the speaker!');
    }
  };

  Audiofile.parser();
  Audiofile.canvas();
  Audiofile.speaker();
}
