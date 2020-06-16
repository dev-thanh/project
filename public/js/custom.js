$.fn.plugin = function() {
  $('#stars li').on('mouseover', function(){
    var onStar = parseInt($(this).data('value'), 10);
    $(this).parent().children('li.star').each(function(e){
      if (e < onStar) {
        $(this).addClass('hover');
      }
      else {
        $(this).removeClass('hover');
      }
    });
    
  }).on('mouseout', function(){
    $(this).parent().children('li.star').each(function(e){
      $(this).removeClass('hover');
    });
  });
  
  
  /* 2. Action to perform on click */
  $('#stars li').on('click', function(){
    var onStar = parseInt($(this).data('value'), 10); // The star currently selected
    var stars = $(this).parent().children('li.star');
    
    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('selected');
    }
    
    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass('selected');
    }
    var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
    var msg = "";
    if (ratingValue > 1) {
        msg = "Thanks! You rated this " + ratingValue + " stars.";
    }
    else {
        msg = "We will improve ourselves. You rated this " + ratingValue + " stars.";
    }
  });


  var html_reply_shop,title,content,rate,name,nation,email,id,customer_id,title_product,handle,image,count_star_string,count_star_ob,count_replyj,url_image='';
  var delete_reply;
	var reply_review;
  var array_select_rows=[];
  var array_keyid_rows=[];
  var public_path = $('.ndn_url_path').val();
  var modal_load_icon = '<div style="width:100%,text-align:center;margin-bottom: 30px"><div class="loader-editphoto"></div></div>';
  delete_reply = function(id){
    $('#delete_reply_shop').on('click', function(event) {
      $('#modal_delete_reply').modal('show');
      $('#delete_reply_success').on('click', function(event) {
        $.ajax({
          url: './delete-reply/'+id,
          type: 'GET',
          processData: false,
          contentType: false,
          beforeSend: function() {
                          
          },
          success:function(res){
            if(res==1){
              $('#modal_delete_reply').modal('hide');
              $('.reply-review').html('<textarea name="text" id="exampleText" readonly class="form-control" placeholder="Add a reply..."></textarea>');
              $('#data-ajax_savereply_'+customer_id).val('[]');
              reply_review();
            }
          }
        });
      });
    })
  }
  get_count_star =function(id){
    $.ajax({
      type:'Get',
      url:'./count-star/'+id,
      processData: false,
      contentType: false,
      success:function(data){
        $('#array_value_star').val(data);
        var count_star_ndn = JSON.parse(data);
        $('.pull-1').html('('+count_star_ndn.star_1+')');
        $('.pull-2').html('('+count_star_ndn.star_2+')');
        $('.pull-3').html('('+count_star_ndn.star_3+')');
        $('.pull-4').html('('+count_star_ndn.star_4+')');
        $('.pull-5').html('('+count_star_ndn.star_5+')');

        $('.percent-1').css('width',(count_star_ndn.star_1/count_star_ndn.count_star*100)+'%');
        $('.percent-2').css('width',(count_star_ndn.star_2/count_star_ndn.count_star*100)+'%');
        $('.percent-3').css('width',(count_star_ndn.star_3/count_star_ndn.count_star*100)+'%');
        $('.percent-4').css('width',(count_star_ndn.star_4/count_star_ndn.count_star*100)+'%');
        $('.percent-5').css('width',(count_star_ndn.star_5/count_star_ndn.count_star*100)+'%');
      }
    });
  }
  edit_update_value=function(id,v1,v2,v3,v4,v5){
    $('#ndn_v1_'+id).html(v1);
    $('#ndn_v2_'+id).html(v2);
    $('.ndn-title-reply-header').html(v1);
    $('#set_value_title').html(v1);
    $('#set_value_content').html(v2);
    $('#set_nation_customer').html(v3);
    $('#set_email_customer').html(v4);
    $('#set_name_customer').html(v5);
  }
  /*   modal show image   */
    show_image_review = function(){
      var modal = document.getElementById("myModal_showImage");
      var img = document.getElementById("myImg");
      var modalImg = document.getElementById("image_show");
      // var captionText = document.getElementById("caption");
      // img.onclick = function(){
      //   modal.style.display = "block";
      //   modalImg.src = this.src;
       
      // }
      $('.ndn-photo-url img').on('click',function(event){
        var img = $(this).attr('src');
        modal.style.display = "block";
        modalImg.src = img;
      })
      var span = document.getElementById("close_image_review");
      span.onclick = function() { 
        modal.style.display = "none";
      }
    }
  ndn_default=function(){
    ndn_review_detail = function(obj){
      customer_id = $(obj).data('customer_id');
      var customer_array = $('#get_customer_detail_'+customer_id).val();
      if(typeof customer_array != 'undefined'){      
        var customer_parse = JSON.parse(customer_array);
        title = customer_parse.title;
    		shop = customer_parse.shop;
      	content = customer_parse.content;
      	rate = customer_parse.rate;
      	name = customer_parse.name;
      	nation = customer_parse.nation;
      	email = customer_parse.email;
        id = $(obj).data('id');
        // customer_id = $(obj).data('customer_id')
      	title_product = $(obj).data('title_product');
      	handle = $(obj).data('handle');
        image = $(obj).data('image');
        url_image = $(obj).data('url');
      	count_star_string = $('#array_value_star').val();
        $('.content-customer-detail').css('display','block');
        $('.customer-display').css('display','none');
        $('#set_value_title').html(title);
      	$('.ndn-title-reply-header').html(title);
      	$('#set_value_content').html(content);
      	$('#set_name_customer').html(name);
      	$('#set_nation_customer').html(nation);
      	$('#set_email_customer').html(email);
      	$('#title_product').html(title_product);
        $('#id_product').html('ID: '+id);
      	$('#customer_id').val(customer_id);
        $('#image_product').html('<a target="_blank" href="https://'+shop+'/products/'+handle+'"><img width="60px" src="'+image+'"/>');
        if(url_image !=''){
          var image_url ='';
          for (var i = 0; i < url_image.length; i++) {
            image_url+='<img src="./images/frontend/customer_images/'+customer_id+'_'+url_image[i]+'"/>';
          }          
          $('.ndn-photo-url').html(image_url);
        }else{
          $('.ndn-photo-url').html('<img width="90px" src="./images/backend/upload.png"/>');
        }
      	$('.star-right').each(function(index, obj){
      		if(index<rate){
      			$(this).addClass('selected');
      		}else{
    	    	$(this).removeClass('selected');
      		}
    	  });
        count_reply = $('#data-ajax_savereply_'+customer_id).val();
        var data_parse = JSON.parse(count_reply);
        var image = data_parse.filename != undefined ? '<img width="60px" src="./images/backend/reply_images/'+data_parse.shop+'/'+data_parse.filename+'" alt="">' : '';
        html_reply_shop = '<div class="reply-success"> <div class="ndn-rl-rv"> REPLY </div><div class="reply-success-shop"> <div class="img-shop"> <img src="http://www.placehold.it/80x80/EFEFEF/AAAAAA&text=." alt=""> </div><div> <div style="color: #000"> '+data_parse.shop+' </div><span> '+data_parse.time+' </span> </div><div class="button-delete-reply"> <button type="submit" id="delete_reply_shop" data-id="'+data_parse.id+'" class=""><i class="fas fa-trash-alt"></i></button> </div></div><div class="reply-image-shop"> '+image+' </div><div class="content-reply-shop"> '+data_parse.content+' </div></div>';
        if(data_parse.status==1){
          $('.reply-review').html(html_reply_shop);
        }else{
          $('.reply-review').html('<textarea name="text" id="exampleText" readonly class="form-control" placeholder="Add a reply..."></textarea>');
        }
        $('#delete_reply_success').attr('data-id',data_parse.id);
        get_count_star(id);
    	  delete_reply(data_parse.id);
        $('[data-toggle="tooltip"]').tooltip();
      }
      if(obj=='.widget-content-first'){
        $(obj).addClass('review-active');
      }else{
        $('.review-active').removeClass('review-active');
        $(obj).addClass('review-active');
      }
      show_image_review();
    }
  	ndn_review_detail('.widget-content-first');

/*  status review  */
    status_review = function(){
      $(".toggle-password").click(function() {
        $( "#ajax_load_reviews").css('pointer-events','none');
        $(this).toggleClass("fa-eye fa-eye-slash");        
        var id = $(this).data('id');
        var status='';
        var page='';
        var input = $(this).find('.status_value').val();
        if (input == '0') {
          status = 1;
          $(this).find('.status_value').val('1');
          if($('#active_reviews').is(':checked')){
            page = $(".pagination").find('.active').data('page');
            if(page==''){
              page=1;
            }
            var count = document.querySelectorAll('.widget-content').length;                    
             if(count<3){
              page -= 1;
             }
          }
        } else {
          status = 0;
          $(this).find('.status_value').val('0');         
          if($('#pending_reviews').is(':checked')){
            page = $(".pagination").find('.active').data('page');
            if(page==''){
              page=1;
            }
            var count = document.querySelectorAll('.widget-content').length;             
            if(count<3){
              page -= 1;
            }
          }
        }
        var loading = '<div class="ndn-status-photo" id="loading-status" style="position: absolute;top:50%;left: 50%;margin-top: -6px;width: 120px;height: 12px;text-align: center;margin-left: -48px;"><img style="width: 100%;height: 100%;" src="'+public_path+'/images/backend/status-photo.gif" alt=""></div>';
        var _this = $(this).parents('.widget-content-left');
        $.ajax({
          url: './status-review/'+id+'?page='+page,
          type: 'GET',
          data: $('#header-search').serialize() + "&status=" + status,
          processData: false,
          contentType: false,
          cache: false,
          beforeSend: function(){
            _this.append(loading);
          },
          success: function (data) {
            $('#loading-status').remove();
            $( "#ajax_load_reviews").css('pointer-events','');
            if($('#all_reviews').is(':checked')){
              return;
            }
            $('#ajax_load_reviews').html(data.response);
            pagination_show(data.total,page);
          }
        });
      });
    }

    edit_customer_event = function(){    
      $('.edit_reply_show').on('click',function(event){
        $('#modal_edit_reply').modal('show');
        var id_val = $(this).data('id');
        $.ajax({

             type:'GET',

             url:'./edit-reply/'+id_val,
             processData: false,
             contentType: false,
             beforeSend:function(){
                $('.modal-body-edit-reply').html(modal_load_icon);
             },
             success:function(data){
              $('.modal-body-edit-reply').html(data);
              $( "#postedit-reply" ).submit(function( event ) {
                event.preventDefault();
                var href=$("#postedit-reply").attr('action');
                var formData = new FormData($('form#postedit-reply')[0]);               
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });
                $.ajax({
                  type:'POST',
                  url:href,
                  data:formData,
                  processData: false,
                  contentType: false,
                  beforeSend:function(){
                    $(".ndn-loading").show();
                  },
                  success:function(data){
                    $(".ndn-loading").hide();
                    var data_parse = JSON.parse(data);
                    if(data_parse.status==1){
                      $('#modal_edit_reply').modal('hide');
                      $('#success_message').text('Edit successfully');
                      $('#success_message').fadeIn();
                      $('#success_message').delay(1200).fadeOut();
                      edit_update_value(data_parse.id,data_parse.title,data_parse.content,data_parse.nation,data_parse.email,data_parse.name);
                      $('#get_customer_detail_'+data_parse.id).val(data);
                      rate_selected(data_parse.rate,'stars-left-'+id_val);
                      rate_selected(data_parse.rate,'stars-right');
                      get_count_star(id);
                    }
                  }
                  });
                });
             }
        });
      });
    }
    edit_customer_event();
    
    click_function = function(){    
    	$('.widget-content-left').on('click',function(){
      	ndn_review_detail(this);
        $('.reply-customer').html('('+title+') '+email);
        reply_review();
         // edit_reply(customer_id);
    	})
    }
    click_function();
    status_review();
    /* Reply review */
    reply_review = function(){
      var html_reply = '<form method="POST" enctype="multipart/form-data" id="reply_review_url" action="./reply-review"><div><input type="hidden" name="customer_id" value="'+customer_id+'"><textarea name="content" id="exampleText" class="form-control" placeholder="Add a reply..."></textarea><div><label id="image_reply" class="imageinput imageinput-select btn btn-labeled btn-defaulf">Add image<input type="file" id="url-image-upload" name="reply-image" onchange="" multiple/> </label></div></div><div class="reply-review-footer"> <button class="button-send-reply" type="submit">Send</button> <button class="button-delete-reply" type="submit"><i class="fas fa-trash-alt"></i></button></div></div></form>';
      $('#exampleText').on('click', function(event) {
        event.preventDefault();
        $('.reply-review').html(html_reply);
        $('.button-delete-reply').on('click', function(event) {
          $('.reply-review').html('<textarea name="text" id="exampleText" readonly class="form-control" placeholder="Add a reply..."></textarea>');
          reply_review();
        });
        $('.button-send-reply').on('click',function(event){
          event.preventDefault();
          var parent = $(this).parent( ".reply-review" );
          var href=$("#reply_review_url").attr('action');
          var formData = new FormData($('form#reply_review_url')[0]);
          var html_success = 
          $.ajaxSetup({
              headers: {
                  'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
              }
          });
          $.ajax({

             type:'POST',

             url:href,

             data:formData,
             processData: false,
             contentType: false,

             success:function(data){
              $('#data-ajax_savereply_'+customer_id).val(data);
              var data_parse_data = JSON.parse(data);
              var image = data_parse_data.filename != undefined ? '<img width="60px" src="./images/backend/reply_images/'+data_parse_data.shop+'/'+data_parse_data.filename+'" alt="">' : '';
              var content_reply = data_parse_data.content != null ? data_parse_data.content : '';
              if(data_parse_data.status==1){
                html_reply_shop = '<div class="reply-success"> <div class="ndn-rl-rv"> REPLY </div><div class="reply-success-shop"> <div class="img-shop"> <img src="http://www.placehold.it/80x80/EFEFEF/AAAAAA&text=." alt=""> </div><div> <div style="color: #000"> '+data_parse_data.shop+' </div><span> '+data_parse_data.time+' </span> </div><div type="submit" data-id="'+data_parse_data.id+'" class="button-delete-reply"> <button id="delete_reply_shop" class=""><i class="fas fa-trash-alt"></i></button> </div></div><div class="reply-image-shop"> '+image+' </div><div class="content-reply-shop"> '+content_reply+' </div></div>';
                $('.reply-review').html(html_reply_shop);
              }
              $('#delete_reply_success').attr('data-id',data_parse_data.id);
              delete_reply(data_parse_data.id);
             }

          });
        })
      });
    }

    reply_review();

    rate_selected=function(rate,id){
      var list = document.getElementById(id);
      for (i = 0; i < rate; i++) {
        list.getElementsByTagName("LI")[i].classList.add("selected");
      }
      for (i = rate; i < 5; i++) {
        list.getElementsByTagName("LI")[i].classList.remove("selected");
      }
    }
  }
  ndn_default();
    // $('#publish_to_shop').on('click', function(event) {
    //   event.preventDefault();
    //   $.ajax({
    //           url: './publish-toshop',
    //           type: "GET",
    //           cache: false,
    //           beforeSend: function() {
    //             $(".ndn-loading").show();
    //           },
    //           success: function(dataResult){
    //               if(dataResult==1){
    //                 $(".ndn-loading").hide();
    //                 $('#success_message').text('Save successfully');
    //                 $('#success_message').fadeIn();
    //                 $('#success_message').delay(1200).fadeOut();
    //               }
    //           }
    //       });
    // });

    /*  click checkbox allreview,pendingreview  */
    

    /*  Ajax load reviews  */
    
    checked_rows = function(){
      for (var i = 0; i < array_select_rows.length; i++) {
        $(".select_rows[data-id="+array_select_rows[i]+"]").prop("checked",true);
        $(".select_rows[data-id="+array_select_rows[i]+"]").css('opacity','1');
      }
      if (document.querySelectorAll('.select_rows:not(:checked)').length) {
        $('#select_all').prop('checked',false);
      }else{
        $('#select_all').prop('checked',true);
      }
    }

    load_page_respon=function(currentPage){
      $('.pagination').css('opacity','0');
      var url = public_path+'/filter-ajax?page='+currentPage;
      var formData = $('#header-search').serialize();
      $.ajax({
            url: url,
            type: "GET",
            cache: false,
            data: formData,
            processData: false,
            contentType: false,
            beforeSend: function(){
              $('#ajax_load_reviews').html('<div class="ndn-status-photo" id="loading-status" style="position: absolute;left: 50%;top: 65%;margin-top: -12px;width: 24px;height: 24px;text-align: center;margin-left: -12px;"><img style="width: 100%;height: 100%;" src="https://d18iq1cg8kg4gf.cloudfront.net/images/icons/loader-white1.gif" alt=""></div>');
            },
            success: function(dataResult){
              if(dataResult.total){
                $('#ajax_load_reviews').html(dataResult.response);
              }else{
                $('#ajax_load_reviews').html(dataResult);
              }
              $('.pagination').css('opacity','1');
              ndn_default();
              edit_customer_event();
              checked_rows();
            }
        });
    }
    ajax_load_more=function(){     
      $( "body" ).on( "click", ".current-page:not('.active')", function() {
        $(this).find('a').addClass('active');
        var currentPage = $(this).data('page');
        load_page_respon(currentPage);
      });
    }
    ajax_load_more();
    var typingTimer;
    var doneTypingInterval = 800;

    function getPageList(totalPages, page, maxLength) {
        if (maxLength < 5) throw "maxLength must be at least 5";

        function range(start, end) {
            return Array.from(Array(end - start + 1), (_, i) => i + start); 
        }

        var sideWidth = maxLength < 9 ? 1 : 2;
        var leftWidth = (maxLength - sideWidth*2 - 3) >> 1;
        var rightWidth = (maxLength - sideWidth*2 - 2) >> 1;
        if (totalPages <= maxLength) {
            // no breaks in list
            return range(1, totalPages);
        }
        if (page <= maxLength - sideWidth - 1 - rightWidth) {
            // no break on left of page
            return range(1, maxLength - sideWidth - 1)
                .concat(0, range(totalPages - sideWidth + 1, totalPages));
        }
        if (page >= totalPages - sideWidth - 1 - rightWidth) {
            // no break on right of page
            return range(1, sideWidth)
                .concat(0, range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages));
        }
        // Breaks on both sides
        return range(1, sideWidth)
            .concat(0, range(page - leftWidth, page + rightWidth),
                    0, range(totalPages - sideWidth + 1, totalPages));
    }

    // Below is an example use of the above function.
    pagination_show = function(data,res) {
        var totalPages = data;
        var paginationSize = 6; 
        var currentPage;
        ndn_default();
        edit_customer_event();
        checked_rows();
        function showPage(whichPage) {
            if (whichPage < 1 || whichPage > totalPages) return false;
            currentPage = whichPage;
            // $("#jar .content").hide()
            //     .slice((currentPage-1) * limitPerPage, 
            //             currentPage * limitPerPage).show();
            // Replace the navigation items (not prev/next):            
            $(".pagination li").slice(1, -1).remove();
            getPageList(totalPages, currentPage, paginationSize).forEach( item => {
                $("<li>").addClass("page-item")
                         .addClass(item ? "current-page" : "disabled").attr({
                        'data-page': item})
                         .toggleClass("active", item === currentPage).append(
                    $("<a>").addClass("page-link").attr({
                        href: "javascript:void(0)"}).text(item || "...")
                ).insertBefore("#next-page");
            });
            // Disable prev/next when at first/last page:
            $("#previous-page").toggleClass("disabled", currentPage === 1);
            $("#next-page").toggleClass("disabled", currentPage === totalPages);
            return true;
        }

        // Include the prev/next buttons:
        $(".pagination").append(
            $("<li>").addClass("page-item").attr({ id: "previous-page"}).append(
                $("<a>").addClass("page-link").attr({
                    href: "javascript:void(0)"}).text("Prev")
            ),
            $("<li>").addClass("page-item").attr({ id: "next-page" }).append(
                $("<a>").addClass("page-link").attr({
                    href: "javascript:void(0)"}).text("Next")
            )
        );
        if(!res){          
          showPage(1);
        }else{
          showPage(res);
        }
        $('.pagination').css('opacity','1');
        // Use event delegation, as these items are recreated later    
        $(document).on("click", ".pagination li.current-page:not(.active)", function () {
            return showPage(+$(this).text());
        });

        $("body").on("click",'#previous-page:not(".disabled")', function () {
          load_page_respon(currentPage-1);
            return showPage(currentPage-1);
        });
        $("body").on("click",'#next-page:not(".disabled")', function () {
          load_page_respon(currentPage+1);
          return showPage(currentPage+1);
        });
        // ndn_default();
        // edit_customer_event();
        // checked_rows();
    };
    
    $('#ndn_filter_ajax').keyup(function(){
      clearTimeout(typingTimer);
      if ($('#ndn_filter_ajax').val) {
          typingTimer = setTimeout(function(){
          var search = $("#ndn_filter_ajax").val();
          $('.pagination').css('opacity','0');
          var formData = $('#header-search').serialize();
          $.ajax({
              type: 'GET',
              url: './filter-ajax',
              data: formData,
              processData: false,
              contentType: false,
              beforeSend: function(){
                $('#ajax_load_reviews').html('<div class="ndn-status-photo" id="loading-status" style="position: absolute;left: 50%;top: 50%;margin-top: -12px;width: 24px;height: 24px;text-align: center;margin-left: -12px;"><img style="width: 100%;height: 100%;" src="https://d18iq1cg8kg4gf.cloudfront.net/images/icons/loader-white1.gif" alt=""></div>');
              },
              success:function(data){
                $('#ajax_load_reviews').html(data.response);
                if(data.count_reviews=='0'){
                  $('.pagination-round').css('display','none');
                }else{
                  $('.pagination-round').css('display','block');
                }
                pagination_show(data.total);
              }
          });
        }, doneTypingInterval);
      }
  });

  $('body').on('click','.delete_customer_show',function(){
    event.preventDefault();
    var id = $(this).data('id');
    var title = $(this).data('title');
    $('#delete_customer_id').val(id);
    $('.modal-delete-customer-body').html('Do you want to delete the <strong>'+title+'</strong> review?');
    $('#modal_delete_customer').modal('show');
  });
  var page = '';
  $('#delete_customer_success').on('click',function(event){
    page = $(".pagination").find('.active').data('page');
    var id=$('#delete_customer_id').val();
    if(page==''){
      page=1;
    }
    var count = document.querySelectorAll('.widget-content').length;                    
    if(count<3){
      page -= 1;
    }
    $.ajax({
      type:'GET',
      url:'./delete-customer/'+id+'?page='+page,
      data: $('#header-search').serialize(),
      processData: false,
      contentType: false,
      beforeSend:function(){
        $('#modal_delete_customer').find('.btn-danger').append('<div id="loading-status" style="position: absolute;top: 50%;left: 50%;width: 14px;height:14px;margin-top: -9px;margin-left: -7px;"><img style="width: 100%;height: 100%" src="'+public_path+'/images/backend/status-loading.gif"></div');
        $('#modal_delete_customer').find('.btn-danger').css({'pointer-events':'none','opacity':'0.5'});
      },
      success:function(data){
        $('#modal_delete_customer').find('#loading-status').remove();
        $('#modal_delete_customer').find('.btn-danger').css({'pointer-events':'unset','opacity':'unset'});
        $( "#ajax_load_reviews").css('pointer-events','');
        if(page!=''){
          $('#ajax_load_reviews').html(data.response);
          if(data.count_reviews=='0'){
            $('.pagination-round').css('display','none');
          }else{
            $('.pagination-round').css('display','block');
          }            
          pagination_show(data.total,page);        
          $('#modal_delete_customer').modal('hide');
          $('#success_message').text('Delete successfully');
          $('#success_message').fadeIn();
          $('#success_message').delay(1200).fadeOut();
        }
      }
    });
  });

  $(document).on('click','.checkbox-1 input:not([checked])',function(event){
    $('.checkbox-1 input').removeAttr('checked');
    $(this).attr('checked','checked');
    $(this).prop( "checked", true );
    $('.pagination').css('opacity','0');
    var formData = $('#header-search').serialize();
    $.ajax({
      type: 'GET',
      url: './filter-ajax',
      data: formData,
      processData: false,
      contentType: false,
      beforeSend: function(){
        $('#ajax_load_reviews').html('<div class="ndn-status-photo" id="loading-status" style="position: absolute;left: 50%;top: 50%;margin-top: -12px;width: 24px;height: 24px;text-align: center;margin-left: -12px;"><img style="width: 100%;height: 100%;" src="https://d18iq1cg8kg4gf.cloudfront.net/images/icons/loader-white1.gif" alt=""></div>');
      },
      success:function(data){
        $('#ajax_load_reviews').html(data.response);
        if(data.count_reviews=='0'){
          $('.pagination-round').css('display','none');
        }else{
          $('.pagination-round').css('display','block');
        }
        pagination_show(data.total);
      }
    });
  });

  /*  setting reviews  */
  $(document).on('click','#save_setting',function(event){
    event.preventDefault();
    var url = $('#form-setting-reviews').attr('action');
    var formData = new FormData($('form#form-setting-reviews')[0]);
    $.ajax({
        url: url,
        type: "POST",
        data:formData,
        cache: false,
        processData: false,
        dataType: 'JSON',
        contentType: false,
        beforeSend: function() {
          $(".ndn-loading").show();
        },
        success: function(dataResult){
          $(".ndn-loading").hide();
          $('#success_message').text('Save successfully');
          $('#success_message').fadeIn();
          $('#success_message').delay(1200).fadeOut();
        }
    });
  });

  $('body').on('click','.select_rows',function(){
    var id = $(this).data('id');  
    var image = $(this).data('image');  
    if(this.checked) {
      $(this).css('opacity','1');
      array_select_rows.push(id);
      array_keyid_rows.push({id: id,  image: image});
    }else{
      $(this).css('opacity','');
      $('#select_all').prop('checked',false);
      const index = array_select_rows.indexOf(id);
      const index1 = array_keyid_rows.indexOf(array_keyid_rows.id);
      if (index > -1) {
        array_select_rows.splice(index, 1);
      }
      array_keyid_rows = array_keyid_rows.filter(function( obj ) {
          return obj.id !== id;
      });
    }
    if (array_select_rows.length != 0) {
      $('.delete-select-rows').css('opacity', '1');
      $('.review_count').html(array_select_rows.length);
    } else {
      $('.delete-select-rows').css('opacity', '0');
      $('.review_count').html('');
    }
    checked_rows();
  });

  $('body').on('click','.select_all',function(){
    if(this.checked) {
      $(".select_rows").prop("checked",$(this).prop("checked"));
      $('.select_rows').each(function(data) {
        var id = $(this).data('id');  
        var image = $(this).data('image');
        $(this).attr('checked','checked');
        $(this).css('opacity','1');
        if(array_select_rows.includes(id) != true){
          array_select_rows.push(id);
          array_keyid_rows.push({id: id,  image: image});
        }
      });
      $('.review_count').html(array_select_rows.length);
     }else{
      $('.select_rows').each(function(data) {
        var id = $(this).data('id');  
        var image = $(this).data('image');
        const index = array_select_rows.indexOf(id);
        const index1 = array_keyid_rows.indexOf(array_keyid_rows.id);
        if (index > -1) {
          array_select_rows.splice(index, 1);
        }
        array_keyid_rows = array_keyid_rows.filter(function( obj ) {
            return obj.id !== id;
        });
        $(this).removeAttr('checked');
        $(this).prop('checked',false);
        $(this).css('opacity','');
        $('.review_count').html(array_select_rows.length);
      });
     }
     if (array_select_rows.length != 0) {
        $('.delete-select-rows').css('opacity', '1');
        $('.review_count').html(array_select_rows.length);
      } else {
        $('.review_count').html('');
        $('.delete-select-rows').css('opacity', '0');
      }
     
  });
  $('body').on('click','.delete-select-rows',function(){
    $('.modal-delete-rows-body').html('Do you want to delete the reviews selected?');
    $('#modal_delete_rows').modal('show');
  });
  $('body').on('click','#delete_rows_success',function(){
    var formData = $('#header-search').serializeJSON();
    var data_form = [];
    $.ajax({
    url: public_path + '/delete-rows',
    type: 'GET',
    data: {
      array: array_select_rows,
      arr: array_keyid_rows,
      data: formData
    },
    beforeSend: function() {
      $('#modal_delete_rows').find('.btn-danger').append('<div id="loading-status" style="position: absolute;top: 50%;left: 50%;width: 14px;height:14px;margin-top: -9px;margin-left: -7px;"><img style="width: 100%;height: 100%" src="'+public_path+'/images/backend/status-loading.gif"></div');
      $('#modal_delete_rows').find('.btn-danger').css({'pointer-events':'none','opacity':'0.5'});
    },
    success: function(data) {
      $('#modal_delete_rows').modal('hide');
      $('#success_message').text('Delete successfully');
      $('#success_message').fadeIn();
      $('#success_message').delay(1200).fadeOut();
      $('#modal_delete_rows').find('#loading-status').remove();
      $('#modal_delete_rows').find('.btn-danger').css({'pointer-events':'unset','opacity':'unset'});
      $('#submit_delete_rows').css('opacity','0');
      $('#select_all').prop('checked',false);
      array_select_rows=[];
      array_keyid_rows=[];
      $('#ajax_load_reviews').html(data.response);
      if(data.count_reviews=='0'){
        $('.pagination-round').css('display','none');
      }else{
        $('.pagination-round').css('display','block');
      }
      pagination_show(data.total,1);
    }
    });
  });

  $('#ajax_product_show_modal').on('click',function(){
    $('#modal_products').modal('show');
    $.ajax({
      url: public_path + '/load-products',
      // dataType: 'jsonp',
      type: 'GET',
      beforeSend: function(){
        $('.modal-products-body').html('<div style="width:100%,text-align:center;margin-bottom: 20px"><div class="loader-editphoto"></div></div>');
      },
      success: function(data) {
        $('.modal-products-body').html(data);
      }
    });
  });
  $('body').on('click','#filter-product',function(){
    $('#modal_products').modal('hide');
    var id_product = $('#product_id_select').val();
    var title = $('#product_name_select').val();
    $('.product-select-name').css('opacity','1');
    $('.product-select-name').html(title+'<i class="fa fa-remove"></i><br>');
    $('.pagination').html('opacity','0');
    var formData = $('#header-search').serialize();
    $.ajax({
      type: 'GET',
      url: public_path+'/filter-product',
      data: formData,
      processData: false,
      contentType: false,
      beforeSend: function(){
        $('#ajax_load_reviews').html('<div class="ndn-status-photo" id="loading-status" style="position: absolute;left: 50%;top: 50%;margin-top: -12px;width: 24px;height: 24px;text-align: center;margin-left: -12px;"><img style="width: 100%;height: 100%;" src="https://d18iq1cg8kg4gf.cloudfront.net/images/icons/loader-white1.gif" alt=""></div>');
      },
      success:function(data){
        $('#ajax_load_reviews').html(data.response);
        if(data.count_reviews=='0'){
          $('.pagination-round').css('display','none');
        }else{
          $('.pagination-round').css('display','block');
        }
        pagination_show(data.total);
      }
    });
  });
  $('body').on('click','.product-select-name i',function(){
    $('.product-select-name').css('opacity','0');
    $('.product-select-name').html('');
    $('#product_id_select').val('');
    $('.pagination').css('opacity','0');
    $('[data-toggle="tooltip"]').tooltip("hide");
    var formData = $('#header-search').serialize();
    $.ajax({
      type: 'GET',
      url: public_path+'/filter-ajax',
      data: formData,
      processData: false,
      contentType: false,
      beforeSend: function(){
        $('#ajax_load_reviews').html('<div class="ndn-status-photo" id="loading-status" style="position: absolute;left: 50%;top: 50%;margin-top: -12px;width: 24px;height: 24px;text-align: center;margin-left: -12px;"><img style="width: 100%;height: 100%;" src="https://d18iq1cg8kg4gf.cloudfront.net/images/icons/loader-white1.gif" alt=""></div>');
      },
      success:function(data){
        $('#ajax_load_reviews').html(data.response);
        if(data.count_reviews=='0'){
          $('.pagination-round').css('display','none');
        }else{
          $('.pagination-round').css('display','block');
        }
        pagination_show(data.total);
      }
    });
  });
  $('.ndn-select-rating').on('change', function () {
    $('.pagination').css('opacity','0');
    // var selectVal = $(".ndn-select-rating option:selected").val();
    $('.div-button-ajax').html('');
    var formData = $('#header-search').serialize();
    $.ajax({
      type: 'GET',
      url: public_path+'/filter-ajax',
      data: formData,
      processData: false,
      contentType: false,
      beforeSend: function(){
        $('#ajax_load_reviews').html('<div class="ndn-status-photo" id="loading-status" style="position: absolute;left: 50%;top: 50%;margin-top: -12px;width: 24px;height: 24px;text-align: center;margin-left: -12px;"><img style="width: 100%;height: 100%;" src="https://d18iq1cg8kg4gf.cloudfront.net/images/icons/loader-white1.gif" alt=""></div>');
      },
      success:function(data){
        $('#ajax_load_reviews').html(data.response);
        if(data.count_reviews=='0'){
          $('.pagination-round').css('display','none');
        }else{
          $('.pagination-round').css('display','block');
        }
        pagination_show(data.total);
        $('.pagination').css('opacity','1');
      }
    });
  });
};
$('body').plugin();