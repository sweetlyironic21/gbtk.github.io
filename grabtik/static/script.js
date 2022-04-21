      // localStorage.mode = localStorage.mode || 'white';
      // document.getElementById('mode').setAttribute('class', 'fas fa-'+(localStorage.mode === 'black'?'sun':'moon'));
      // function mode(m){
      //   const text = (m === 'dark'|| m === 'black')?'white':'black';
      //   const bgcolor =(m === 'dark'|| m === 'black')?'black':'white';
      //   document.getElementsByTagName('body')[0].style.backgroundColor = bgcolor;
      //   document.getElementsByTagName('input')[0].style.borderColor = bgcolor==='black'?'#0D6EFD':'';
      //   document.getElementsByTagName('input')[0].style.backgroundColor=bgcolor;
      //   document.getElementsByTagName('input')[0].style.color=text;
      //   document.getElementsByTagName('img')[0].style.filter = bgcolor === 'black'?'invert(90%)':'';
      //   if(document.getElementsByClassName('card').length){          
      //     document.getElementsByClassName('card')[0].style.backgroundColor = bgcolor;
      //     document.getElementsByClassName('card')[0].style.borderColor = bgcolor === 'black'?'#0D6EFD':'';
      //     document.getElementsByTagName('p')[0].style.color = text;
      //   }
      //   localStorage.mode = bgcolor;
      //   document.getElementById('mode').setAttribute('class', 'fas fa-'+(localStorage.mode === 'black'?'sun':'moon'));
      //   document.getElementById('mode').style.color=(localStorage.mode === 'white'?'black':'white');
      //   document.getElementsByClassName('modal')[0]
      // }
      // document.getElementById('wrapMode').onclick = () => {
      //   mode(localStorage.mode==='black'?'white':'dark');
      // }
      // mode(localStorage.mode)
      document.getElementById('submitter').onclick = function(){
        $('body').addClass("loading");
        fetch('info?'+(new URLSearchParams({url: document.getElementById('tiktokurl').value})), {
          method: 'GET'
        }).then(async function (response){
          const data = await response.json();
          data.msg && Swal.fire({ icon: 'error', title: 'Oops...', text: data.msg, showConfirmButton: false})
          $(".emptydiv").empty().append(`
              <div class="container text-center mt-5"></div>
              <section class="video-details mt-5" align="center">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-12 col-md-5 col-lg-4">
                      <div class="video-container">

                       <img src="${data.aweme_detail.video.origin_cover.url_list[0]}" class="figure-img img-fluid rounded" alt="${data.aweme_detail.desc}">
                      </div>
                    </div>
                  <br>
                  <div class="col-12 col-md-5 col-lg-4">
                  <div id="video-info">
                    <h3 align="left">Video by <a href="https://www.tiktok.com/@${data.aweme_detail.author.unique_id}" target="_blank">${data.aweme_detail.author.unique_id}</a></h3><br>
                    <p class="text-muted" align="left"><b>Description:</b> ${data.aweme_detail.desc}</p>
                    <div class="card my-2">
                      <div id="dl-group" class="form-inline m-2">
                        <div class="d flex justify-content-around">
                          <a href="${data.aweme_detail.video.play_addr.url_list[0]}" target="_blank" class="btn btn-primary text-light" align="center">No Watermark Video</a>                         
                          <a href="${data.aweme_detail.music.play_url.uri}" target="_blank" class="btn btn-primary text-light">Music</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
                </div>
            
              </section>    
          `)
          $("body").removeClass("loading");
        }).catch(function (err){
          $("body").removeClass("loading");
        })
      }