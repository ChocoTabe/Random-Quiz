function loadScript() {
    $(function(){
    function Loading() {
      var maskHeight = $(document).height();
      var maskWidth  = window.document.body.clientWidth;
      var mask       = "<div id='mask' style='position:absolute; z-index:9000; background-color:#000000; display:none; left:0; top:0;'></div>";
      var loadingImg = '';
      loadingImg += "<div id='loadingImg'>";
      loadingImg += " <img src='로딩.gif' style='position: relative; display: block; margin: 0px auto;'/>";
      loadingImg += "</div>";
      $('body').append(mask).append(loadingImg)
      $('#mask').css({
              'width' : maskWidth
              ,'height': maskHeight
              ,'opacity' :'0.3'
      });
      $('#mask').show();
      $('#loadingImg').show();
    }
    function closeLoading() {
      $('#mask').remove();
      $('#loadingImg').remove();
    }
    $('#title, #subTitle').slideDown('fast');
    $('#quizStart, #instruction').slideDown('fast');
    $('#instruction').click(function(){$('#how').slideToggle('fast');});
    // function shuffle() {return Math.random() - Math.random();}
    const shuffle = () => Math.random() - Math.random();
    list.sort(shuffle);
    $('#quizStart').click(function(){
      $('#image').contextmenu(function(){
        return false;
      })
      $('#image').on('mousedown mousemove touchstart', function(event) {
         event.preventDefault();
      });
      function nextFunc() {
        Loading();
        setTimeout(closeLoading, 2000);
        $('#storage').text($('#objAnsList').text()).empty();
        $('#storage').text($('#objAnsList2').text()).empty();
        $('#storage').text($('#objAnsList3').text()).empty();
        $('#storage').text($('#objAnsList4').text()).empty();
        $('#storage').text($('#objAnsList5').text()).empty();
        $('#a, #b, #c').hide();
        $('#subjective').val("")
        document.getElementById('youtube').setAttribute('src', "");
        document.getElementById('secYoutube').setAttribute('src', "");
        document.getElementById('firstListen').setAttribute('src', "");
        document.getElementById('secondListen').setAttribute('src', "");
        document.getElementById('thirdListen').setAttribute('src', "");
        $('#answerChoice div, #subjective, #oxChoice div').slideDown();
        $('#firstListen, #secondListen, #thirdListen, #image').slideUp();
        $('#play2, #play3').hide();
        $('#play1').fadeIn();
        algorism();
      }
      Loading();
      setTimeout(closeLoading, 2000);
      $('#title, #subTitle, #quizStart, #instruction, #how, #firstChoice').remove();
      $('#fieldArea, #question, #exampleCell, #answerChoice, #grid div').show();
      $('#grid div').css('display', 'inline-block');
      $('#answerChoice div, #subjective, #oxChoice div').show();
      algorism();
      function algorism() {
        if(list == false) {
          $('#fieldArea, #field, #question, #exampleCell, #example, #youtube, #secYoutube, #storageFrame, #storage, #a, #b, #c, #wrong, #answerChoice div, #answerChoice div span, #subjective, #oxChoice, #oxChoice #o, #oxChoice #X, #correct, #answers, #answers div, #answers div span, #grid, #grid div, #message, #play1, #play2, #play3, #showImage, #image, #firstList, #secondList, #thirdList').hide().remove();
          $('#consequenceA div').slideDown(function(){
            $('#scoreA').text('당신이 맞춘 문제 : ' + correctThings.length);
            $('#scoreB').text('당신이 틀린 문제 : ' + wrongThings.length);
            $('#sum').text('지금까지 푼 문제 : ' + allThings.length);
            $('#complete').show();
          });
        } else {
          $('iframe').hide();
          $('#storageFrame').show();
          var firstList = list.shift();
          $('#answer').click(function(){
            if(firstList.objAnswer().text() != false && firstList.subjAnswer().text() == false && firstList.oxQAnswer().text() == false) {
              $('#a').show();
              $('#a').text("정답은 : " + firstList.objAnswer().text());
            } else if (firstList.objAnswer().text() == false && firstList.subjAnswer().text() != false && firstList.oxQAnswer().text() == false) {
              $('#b').show();
              $('#b').text("정답은 : " + firstList.subjAnswer().text());
            } else {
              $('#c').show();
              $('#c').text("정답은 : " + firstList.oxQAnswer().text());
            }
          });
          firstList.problem().text();
          firstList.question().text();
          firstList.example().text();
          firstList.objAnsList().text();
          firstList.objAnsList2().text();
          firstList.objAnsList3().text();
          firstList.objAnsList4().text();
          firstList.objAnsList5().text();
          firstList.oxQAnswer().text();
          firstList.subjAnswer().text();
          firstList.objAnswer().text();
          $('#answerList').click(function(){
            $('#storage').text($('#objAnsList').text());
            $('#subjective, #oxChoice div').slideUp();
          });
          $('#answerList2').click(function(){
            $('#storage').text($('#objAnsList2').text());
            $('#subjective, #oxChoice div').slideUp();
          });
          $('#answerList3').click(function(){
            $('#storage').text($('#objAnsList3').text());
            $('#subjective, #oxChoice div').slideUp();
          });
          $('#answerList4').click(function(){
            $('#storage').text($('#objAnsList4').text());
            $('#subjective, #oxChoice div').slideUp();
          });
          $('#answerList5').click(function(){
            $('#storage').text($('#objAnsList5').text());
            $('#subjective, #oxChoice div').slideUp();
          });
          $('#O').click(function(){
            $('#storage').text($('#O').text());
            $('#subjective, #answerChoice div').slideUp();
          });
          $('#X').click(function(){
            $('#storage').text($('#X').text());
            $('#subjective, #answerChoice div').slideUp();
          });
          $('#subjective').keydown(function(){
            $('#storage').text($("#subjective").val());
            $('#oxChoice div, #answerChoice div').slideUp();
          });
          $('#subjective').keyup(function(){
            $('#storage').text($("#subjective").val());
            $('#oxChoice div, #answerChoice div').slideUp();
          });
          firstList.music().text(function(){
            $('#play1').click(function(){
              var file = $('span.empty').text();
              file = file.substr(0, 17);
              document.getElementById('firstListen').setAttribute('src', file);
            });
          });
          firstList.music().text(function(){
            $('#play2').click(function(){
              var secFile = $('span.empty').text();
              secFile = secFile.substr(19, 17);
              document.getElementById('secondListen').setAttribute('src', secFile);
            });
          });
          firstList.music().text(function(){
            $('#play3').click(function(){
              var thirdFile = $('span.empty').text();
              thirdFile = thirdFile.substr(38, 52);
              document.getElementById('thirdListen').setAttribute('src', thirdFile);
            });
          });
          firstList.image().text(function(){
            $('#showImage').click(function(){
              var importImg = $('span.empty2').text();
              importImg = importImg.substr(0, 17);
              var altSet = $('span.empty2').text();
              altSet = altSet.substr(8, 9)
              document.getElementById('image').setAttribute('src', importImg);
              document.getElementById('image').setAttribute('alt', altSet);
            })
          })
          firstList.video().text(function(){
            $('#youtubeButt').on('click', function(){
              var link = $('div.empty').text();
              link = link.substr(0, 50);
              var secLink = $('div.empty').text();
              secLink = secLink.substr(52, 50);
              document.getElementById('youtube').setAttribute('src', link);
              document.getElementById('secYoutube').setAttribute('src', secLink);
              $('iframe').show();
            });
          });
        }
      }
      $('#playList div').css('display', 'inline-block');
      $('#play2, #play3').hide();
      $('#play1').click(function(){
        $('#firstListen').slideToggle();
        $('#play2').fadeIn();
      })
        $('#play2').click(function(){
          $('#secondListen').slideToggle();
          $('#play3').fadeIn();
        })
      $('#play3').click(function(){
        $('#thirdListen').slideToggle();
      })
      $('#showImage').click(function(){
        $('#image').slideToggle();
      })
      $('#showObj').click(function(){
        $('#answerChoice div').slideToggle();
      });
      $('#showSubj').click(function(){
        $('#subjective').slideToggle();
      });
      $('#showOx').click(function(){
        $('#oxChoice div').slideToggle();
      });
      var allThings = [];
      var correctThings = [];
      var wrongThings = [];
      $('#next').click(function(){
        if($('#storage').text() == false) {
          $('#message').slideDown().fadeOut();
        } else if($('#objAnswer').text() == $('#storage').text() || $('#subjAnswer').text() == $('#storage').text() || $('#oxQAnswer').text() == $('#storage').text()) {
          allThings.push($('#storage').text());
          correctThings.push($('#storage').text());
          alert($('#correct').text());
          nextFunc();
        } else {
          $('#wrong').slideDown().fadeOut(function(){
            allThings.push("WRONG");
            wrongThings.push("WRONG");
            nextFunc();
          });
        }
      });
      $('#consequence').click(function(){
        $('#fieldArea, #field, #question, #exampleCell, #example, #youtube, #secYoutube, #storageFrame, #storage, #a, #b, #c, #wrong, #answerChoice div, #answerChoice div span, #subjective, #oxChoice, #oxChoice #o, #oxChoice #X, #correct, #answers, #answers div, #answers div span, #grid, #grid div, #message, #play1, #play2, #play3, #showImage, #image, #audioGroup audio').hide().remove();
        $('#consequenceA div').slideDown(function(){
          $('#scoreA').text('당신이 맞춘 문제 : ' + correctThings.length);
          $('#scoreB').text('당신이 틀린 문제 : ' + wrongThings.length);
          $('#sum').text('지금까지 푼 문제 : ' + allThings.length);
          $('#complete').show();
        });
      });
    });
  });
}
