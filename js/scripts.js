window.onload = function(){
  var info = document.querySelector('[data-piece]');
  var output = {
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
}
