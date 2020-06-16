<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}" />
        <title>Laravel</title>
 
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <!-- Styles -->
        <style>
            
            .full-height {
                height: 100vh;
            }
 
            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }
 
            .position-ref {
                position: relative;
            }
 
            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }
 
            .content {
                text-align: center;
            }
 
            .title {
                font-size: 84px;
            }
 
            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 12px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }
 
            .m-b-md {
                margin-bottom: 30px;
            }
             
            .alert {
                color: red;
                font-weight: bold;
                margin: 10px;
            }
            .success {
                color: blue;
                font-weight: bold;
                margin: 10px;
            }



            .pagination>li>a{
                padding: 4px 10px;
            }
        </style>
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            @if (Route::has('login'))
                <div class="top-right links">
                    @if (Auth::check())
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ url('/login') }}">Login</a>
                        <a href="{{ url('/register') }}">Register</a>
                    @endif
                </div>
            @endif
 
            <div class="content">
                <div class="m-b-md">
                    <h1 class="title">Demo Upload Form</h1>
                     
                    @if ($errors->any())
                        <div class="alert alert-danger">
                            <ul>
                                @foreach ($errors->all() as $error)
                                    <li>{{ $error }}</li>
                                @endforeach
                            </ul>
                        </div>
                    @endif
                     
                    @if (session('message'))
                        <div class="success">
                            {{ session('message') }}
                        </div>
                    @endif
                     
                    <form method="post" action="{{ url('/image/upload') }}" enctype="multipart/form-data">
                      <div>
                        <input type="file" name="demo_image" />
                      </div>
                      <br/>
                      <div>
                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                        <input type="submit" value="Upload Image"/>
                      </div>
                    </form>
                </div>
            </div>
        </div>


<div class="pagination">
</div>

<div id="jar" style="display:none">
    <div class="content">1) Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    <div class="content">2) Maecenas vitae elit arcu.</div>
    <div class="content">3) Pellentesque sagittis risus ac ante ultricies, ac convallis urna elementum.</div>
    <div class="content">4) Vivamus sodales aliquam massa quis lobortis. </div>
    <div class="content">5) Phasellus id sem sollicitudin lacus condimentum malesuada vel tincidunt neque.</div>
    <div class="content">6) Donec magna leo, rhoncus quis nunc eu, malesuada consectetur orci.</div>
    <div class="content">7) Praesent sollicitudin, quam a ullamcorper pharetra, urna lacus mollis sem, quis semper augue massa ac est.</div>
    <div class="content">8) Etiam leo magna, fermentum quis quam non, aliquam tincidunt erat.</div>
    <div class="content">9) Morbi pellentesque nibh nec nibh posuere, vel tempor magna dignissim.</div>
    <div class="content">10) In maximus fermentum elementum. Vestibulum ac lectus pretium, suscipit ante nec, bibendum erat.</div>
    <div class="content">11) Phasellus sit amet orci at lectus fermentum congue. Etiam faucibus scelerisque purus.</div>
    <div class="content">12) Pellentesque laoreet ipsum ac laoreet consectetur. </div>
    <div class="content">13) Integer aliquet odio magna, lobortis mattis tortor suscipit sed.</div>
    <div class="content">14) Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </div>
    <div class="content">15) Mauris a tellus luctus turpis elementum imperdiet vitae malesuada mauris. </div>
    <div class="content">16) Donec id libero sagittis, laoreet lorem vel, tempus nunc. </div>
    <div class="content">17) Donec vitae neque sed ex tristique hendrerit.</div>
    <div class="content">18) Aliquam sollicitudin gravida varius.</div>
    <div class="content">19) Donec auctor, augue sed finibus fermentum, neque erat interdum libero, eget porta metus lectus quis odio.</div>
    <div class="content">20) Nunc quis ante enim. Etiam nisl orci, hendrerit ut pretium nec, tempor in metus.</div>
    <div class="content">21) Donec et semper arcu.</div>
    <div class="content">22) Donec lobortis interdum purus, eu semper nisl pulvinar ac.</div>
    <div class="content">23) Cras laoreet eu elit vel porta.</div>
    <div class="content">24) Quisque pharetra arcu eget diam posuere commodo.</div>
    <div class="content">25) Nulla ornare eleifend neque, eget tincidunt nunc ullamcorper id. Nulla facilisi.</div>
</div>
    </body>
    <script type="text/javascript" src="{{url('/js/uploadfiles.js')}}"></script>
    <script type="text/javascript">
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
    pagination_show = function() {
        var totalPages = 12;
        var paginationSize = 6; 
        var currentPage;

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
                        'data-url': 'https://www.ndnapps.com/ndnapps/dev/productreviews/load-reviews?page='+item})
                         .toggleClass("active", item === currentPage).append(
                    $("<a>").addClass("page-link").attr({
                        href: "javascript:void(0)"}).text(item || "...")
                ).insertBefore("#next-page");
            });
            // Disable prev/next when at first/last page:
            $("#previous-page").toggleClass("disabled", currentPage === 1);
            $("#next-page").toggleClass("disabled", currentPage === totalPages);
            console.log(currentPage);
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
                    ndn_default();
                  }else{
                    $('#ajax_load_reviews').html(dataResult);
                      ndn_default();
                  }
                  $('.div-button-ajax').css('opacity','1');
                  edit_customer_event();
                  checked_rows();
                }
            });
            return true;
        }

        // Include the prev/next buttons:
        $(".pagination").append(
            $("<li>").addClass("page-item").attr({ id: "previous-page",'data-url': 'https://www.ndnapps.com/ndnapps/dev/productreviews/load-reviews?page=1' }).append(
                $("<a>").addClass("page-link").attr({
                    href: "javascript:void(0)"}).text("Prev")
            ),
            $("<li>").addClass("page-item").attr({ id: "next-page" }).append(
                $("<a>").addClass("page-link").attr({
                    href: "javascript:void(0)"}).text("Next")
            )
        );
        // Show the page links
        $("#jar").show();
        showPage(1);

        // Use event delegation, as these items are recreated later    
        $(document).on("click", ".pagination li.current-page:not(.active)", function () {
            return showPage(+$(this).text());
        });
        $("#next-page").on("click", function () {
            return showPage(currentPage+1);
        });

        $("#previous-page").on("click", function () {
            return showPage(currentPage-1);
        });
    };
    pagination_show();
    </script>
</html>